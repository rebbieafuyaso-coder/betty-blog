import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { f as renderTemplate, o as renderComponent, p as maybeRenderHead } from "./server_DBrRtYag.mjs";
import { t as createComponent } from "./astro-component_CyrD4LV8.mjs";
import "./compiler_C_aJiEKN.mjs";
import { t as $$Layout } from "./Layout_DB7fCGQy.mjs";
// src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Page Not Found | BettyWakiaBlog",
		"description": "The page you are looking for could not be found.",
		"data-astro-cid-ibpinaeu": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="not-found gutter" data-astro-cid-ibpinaeu><div class="not-found-inner" data-astro-cid-ibpinaeu><h1 data-astro-cid-ibpinaeu>404</h1><h2 data-astro-cid-ibpinaeu>Page Not Found</h2><p data-astro-cid-ibpinaeu>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p><div class="actions" data-astro-cid-ibpinaeu><a href="/" class="btn btn-primary" data-astro-cid-ibpinaeu>Go Home</a><a href="/blog" class="btn btn-ghost" data-astro-cid-ibpinaeu>Read the Blog</a></div></div></section>` })}`;
}, "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/404.astro", void 0);
var $$file = "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/404.astro";
var $$url = "/404";
// \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
export { page };
