/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import {
  StaleWhileRevalidate,
  CacheFirst,
  NetworkFirst,
  Strategy,
  StrategyHandler,
} from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { fetchEtaObj } from "hk-bus-eta";
import { getTileListURL } from "./utils";
declare var self: ServiceWorkerGlobalScope & typeof globalThis;
clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== "navigate") {
      return false;
    } // If this is a URL that starts with /_, skip.

    if (url.pathname.startsWith("/_")) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html")
);

class CacheFirstCORS extends Strategy {
  async _handle(request: Request, handler: StrategyHandler) {
    const match = await handler.cacheMatch(request);
    if (match !== undefined) {
      return match;
    }
    let r = request;
    if (r.mode !== "cors") {
      r = new Request(r.url, {
        mode: "cors",
        credentials: "omit",
        method: r.method,
      });
    }
    return handler.fetchAndCachePut(r);
  }
}

registerRoute(
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.startsWith("/static"),
  new CacheFirst({
    cacheName: "app-runtime",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  })
);

registerRoute(
  ({ url }) =>
    url.origin === self.location.origin &&
    (url.pathname.startsWith("/zh/route/") ||
      url.pathname.startsWith("/en/route/")),
  new StaleWhileRevalidate({
    cacheName: "app-runtime-public",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 60 * 24 * 30 }),
    ],
  })
);

const maphost = process.env.REACT_APP_OSM_PROVIDER_HOST || "";
const mapCacheStrategy = new CacheFirstCORS({
  cacheName: "map",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 60 * 24 * 30,
      purgeOnQuotaError: true,
    }),
  ],
});
registerRoute(({ url }) => url.origin.includes(maphost), mapCacheStrategy);

registerRoute(
  ({ url }) =>
    url.origin.includes("fonts.gstatic.com") ||
    url.origin.includes("unpkg.com") ||
    url.origin.includes("fonts.googleapis.com"),
  new CacheFirst({
    cacheName: "fonts-and-asset",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({ maxAgeSeconds: 60 * 24 * 365 }),
    ],
  })
);

registerRoute(
  ({ url }) =>
    url.origin.includes("rt.data.gov.hk") ||
    url.origin.includes("data.etabus.gov.hk"),
  new NetworkFirst({
    cacheName: "bus-route-and-eta",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({ maxAgeSeconds: 60 * 24 * 30 }),
    ],
  })
);

const warnUpCache = async (
  zoomLevels: Array<number>,
  event: ExtendableEvent
) => {
  try {
    const eta = await fetchEtaObj();
    const stopList = Object.values(eta.stopList);
    await Promise.all(
      zoomLevels.map(async (i) => {
        const generate = function* () {
          const list = getTileListURL(i, stopList);
          for (let k = 0; k < list.length; k = k + 1) {
            yield mapCacheStrategy.handleAll({
              event,
              request: new Request(list[k], {}),
            })[1];
          }
        };
        const a = generate();
        let result = a.next();
        console.log(result);
        const pendingPromise: Set<Promise<void>> = new Set();
        while (result.done !== true) {
          console.log(result);
          const value = result.value;
          pendingPromise.add(value);
          value.then(() => pendingPromise.delete(value));
          if (pendingPromise.size >= 10) {
            await Promise.any(pendingPromise);
          }
          result = a.next();
        }
        return;
      })
    );
  } catch (e) {
    console.error("error on warn cache", e);
  }
};
// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
  if (event.data && event.data.type === "CHECK_VERSION") {
    const CIJobID =
      process.env.REACT_APP_CI_JOB_ID !== undefined
        ? process.env.REACT_APP_CI_JOB_ID
        : "1";
    self.clients
      .matchAll({ includeUncontrolled: true, type: "window" })
      .then((all) =>
        all.map((client) =>
          client.postMessage({
            type: "CURRENT_VERSION",
            payload: `build ${CIJobID}`,
          })
        )
      );
  }
  if (event.data && event.data.type === "WARN_UP_MAP_CACHE") {
    const warnCache = fetchEtaObj().then(async (o) => {
      try {
        await await warnUpCache([16, 17, 18], event);
      } catch (e) {
        console.error("error on warn cache", e);
      }
    });
    event.waitUntil(warnCache);
  }
});

// Warn up map cache
self.addEventListener("install", (event) => {
  const warnCache = fetchEtaObj().then(async (o) => {
    try {
      const timeout = new Promise((resolve, _) =>
        setTimeout(() => resolve, 20000)
      );
      await Promise.race([warnUpCache([14, 15], event), timeout]);
    } catch (e) {
      console.error("error on warn cache", e);
    }
  });
  event.waitUntil(warnCache);
});
