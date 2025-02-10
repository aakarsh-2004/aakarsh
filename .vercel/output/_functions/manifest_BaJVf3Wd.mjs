import { d as decodeKey } from './chunks/astro/server_BjSn9fij.mjs';
import './chunks/astro-designed-error-pages_CTm9eF33.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => {
      return "/" + segment.map((part) => {
        if (part.spread) {
          return `${sanitizedParams[part.content.slice(3)] || ""}`;
        } else if (part.dynamic) {
          return `${sanitizedParams[part.content] || ""}`;
        } else {
          return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
        }
      }).join("");
    }).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/aakarsh/Portfolio/astro-zen/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.15.5_rollup@4.21.3_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const o=document.querySelector(\"#menu-button\"),i=document.querySelector(\"#main-menu\"),s=document.querySelectorAll(\"#main-menu > ul > li > a\"),r=()=>{i?.classList.toggle(\"hidden\");const e=i?.classList.contains(\"hidden\");o?.setAttribute(\"aria-expanded\",`${!e}`)};o?.addEventListener(\"click\",r);s.forEach(e=>{e?.addEventListener(\"click\",r)});const n=new IntersectionObserver(e=>{e.forEach(c=>{c.isIntersecting&&s.forEach(t=>{t.getAttribute(\"href\")===`#${c.target.id}`?t.classList.add(\"text-white\",\"md:after:opacity-100\"):t.classList.remove(\"text-white\",\"md:after:opacity-100\")})})},{threshold:.5});document.querySelectorAll(\"section\").forEach(e=>{n.observe(e)});document.onvisibilitychange=()=>{document.visibilityState===\"hidden\"?n.disconnect():document.querySelectorAll(\"section\").forEach(e=>{n.observe(e)})};\n"}],"styles":[{"type":"external","src":"/_astro/index.keqp0Ymq.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/aakarsh/Portfolio/astro-zen/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.15.5_rollup@4.21.3_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-manifest":"manifest_BaJVf3Wd.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BHULAeOy.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/be-vietnam-pro-vietnamese-400-normal.zlEY3-7j.woff2","/_astro/be-vietnam-pro-latin-ext-400-normal.0slToPcK.woff2","/_astro/be-vietnam-pro-latin-400-normal.b8ymZRaE.woff2","/_astro/gabarito-latin-ext-wght-normal.C3dQQfBQ.woff2","/_astro/gabarito-latin-wght-normal.DfmSH0O8.woff2","/_astro/be-vietnam-pro-latin-ext-400-normal.CAV9EJEJ.woff","/_astro/be-vietnam-pro-latin-400-normal.yim3LC58.woff","/_astro/be-vietnam-pro-vietnamese-400-normal.BdPyuduI.woff","/_astro/index.keqp0Ymq.css","/aakarsh-small.jpeg","/aakarsh-small.svg","/aakarsh.jpeg","/alejandro-big.jpg","/alejandro-small.jpg","/check.svg","/clone-ig.png","/external.svg","/favicon.svg","/menu.svg","/pay-me.png","/raja.png","/shopify-clon.png","/spotifu.png","/we-hangout.png","/we-hangout2.png","/zen-og.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"9+YzgRAXYsF9CToxF54nzQ8IZUlA6b5+zI7nQQR2tJs=","experimentalEnvGetSecretEnabled":false});

export { manifest };
