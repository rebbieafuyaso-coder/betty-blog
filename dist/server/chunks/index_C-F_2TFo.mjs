import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead } from "./server_DBrRtYag.mjs";
import { t as createComponent } from "./astro-component_CyrD4LV8.mjs";
import "./compiler_C_aJiEKN.mjs";
import { t as $$Layout } from "./Layout_DB7fCGQy.mjs";
import { t as getCollection } from "./_astro_content_Bmo_VmAN.mjs";
// src/pages/research/index.astro
var research_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const sorted = (await getCollection("research")).sort((a, b) => new Date(b.data.pubDate ?? 0).getTime() - new Date(a.data.pubDate ?? 0).getTime());
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Research | BettyWakiaBlog",
		"description": "Research publications by Betty Wakia.",
		"activePage": "categories",
		"data-astro-cid-4sbzrcyf": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="header gutter" data-astro-cid-4sbzrcyf><p class="kicker" data-astro-cid-4sbzrcyf>RESEARCH</p><h1 data-astro-cid-4sbzrcyf>Publications</h1><p class="sub" data-astro-cid-4sbzrcyf>Summaries and download links for published papers.</p></section><section class="list gutter" data-astro-cid-4sbzrcyf>${sorted.map((paper) => renderTemplate`<a${addAttribute(`/research/${paper.id}`, "href")} class="paper-card" data-astro-cid-4sbzrcyf>${paper.data.cover && renderTemplate`<div class="paper-thumb" data-astro-cid-4sbzrcyf><img${addAttribute(paper.data.cover, "src")}${addAttribute(paper.data.title, "alt")} loading="lazy" data-astro-cid-4sbzrcyf></div>`}<div class="paper-info" data-astro-cid-4sbzrcyf><h2 data-astro-cid-4sbzrcyf>${paper.data.title}</h2><p class="summary" data-astro-cid-4sbzrcyf>${paper.data.summary}</p><span class="read-more" data-astro-cid-4sbzrcyf>Read summary & download →</span></div></a>`)}</section>` })}`;
}, "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/research/index.astro", void 0);
var $$file = "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/research/index.astro";
var $$url = "/research";
// \0virtual:astro:page:src/pages/research/index@_@astro
var page = () => research_exports;
export { page };
