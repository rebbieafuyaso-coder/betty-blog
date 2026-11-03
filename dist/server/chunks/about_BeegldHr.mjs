import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { f as renderTemplate, o as renderComponent, p as maybeRenderHead } from "./server_DBrRtYag.mjs";
import { t as createComponent } from "./astro-component_CyrD4LV8.mjs";
import "./compiler_C_aJiEKN.mjs";
import { t as $$Layout } from "./Layout_DB7fCGQy.mjs";
// src/pages/about.astro
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => $$About,
	file: () => $$file,
	url: () => $$url
});
var $$About = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "About Betty Wakia | BettyWakiaBlog",
		"description": "Learn more about Betty Wakia, a researcher, writer, and author.",
		"activePage": "about",
		"data-astro-cid-ta2fbyqs": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="about-hero gutter" data-astro-cid-ta2fbyqs><div class="about-inner" data-astro-cid-ta2fbyqs><div class="about-media grad" data-astro-cid-ta2fbyqs></div><div class="about-text" data-astro-cid-ta2fbyqs><p class="kicker" data-astro-cid-ta2fbyqs>ABOUT THE AUTHOR</p><h1 data-astro-cid-ta2fbyqs>Betty Wakia</h1><p class="lead" data-astro-cid-ta2fbyqs>Researcher, writer, and author. BettyWakiaBlog is where her essays, research notes, and books come together — for readers who like their ideas considered and their writing unhurried.</p><p data-astro-cid-ta2fbyqs>Betty's work explores the intersections of culture, society, and human experience. Through her writing, she aims to make complex ideas accessible and to spark thoughtful conversations.</p><p data-astro-cid-ta2fbyqs>When she's not writing or conducting research, Betty can be found reading, exploring new places, or spending time with her community.</p><a href="/contact" class="btn btn-primary" data-astro-cid-ta2fbyqs>Get in Touch</a></div></div></section>` })}`;
}, "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/about.astro", void 0);
var $$file = "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/about.astro";
var $$url = "/about";
// \0virtual:astro:page:src/pages/about@_@astro
var page = () => about_exports;
export { page };
