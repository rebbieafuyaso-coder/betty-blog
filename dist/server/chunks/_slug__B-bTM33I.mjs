import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead } from "./server_DBrRtYag.mjs";
import { t as createComponent } from "./astro-component_CyrD4LV8.mjs";
import { t as createAstro } from "./astro-global_DigXr-DJ.mjs";
import "./compiler_C_aJiEKN.mjs";
import { t as $$Layout } from "./Layout_DB7fCGQy.mjs";
import { n as getEntry, r as render, t as getCollection } from "./_astro_content_Bmo_VmAN.mjs";
// src/pages/research/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
async function getStaticPaths() {
	return (await getCollection("research")).map((paper) => ({ params: { slug: paper.id } }));
}
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	const paper = await getEntry("research", slug);
	if (!paper) throw new Error("Paper not found");
	const { Content } = await render(paper);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${paper.data.title} | Research`,
		"description": paper.data.summary,
		"activePage": "categories",
		"data-astro-cid-c5f4emaj": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="detail gutter" data-astro-cid-c5f4emaj><p class="kicker" data-astro-cid-c5f4emaj>RESEARCH PUBLICATION</p><h1 data-astro-cid-c5f4emaj>${paper.data.title}</h1><div class="summary-box" data-astro-cid-c5f4emaj><h2 data-astro-cid-c5f4emaj>Summary</h2><p data-astro-cid-c5f4emaj>${paper.data.summary}</p>${paper.data.downloadUrl && renderTemplate`<a${addAttribute(paper.data.downloadUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn btn-primary" data-astro-cid-c5f4emaj>Download Paper →</a>`}</div>${paper.body && renderTemplate`<div class="extra-content" data-astro-cid-c5f4emaj>${renderComponent($$result, "Content", Content, { "data-astro-cid-c5f4emaj": true })}</div>`}</article>` })}`;
}, "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/research/[slug].astro", void 0);
var $$file = "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/research/[slug].astro";
var $$url = "/research/[slug]";
// \0virtual:astro:page:src/pages/research/[slug]@_@astro
var page = () => _slug__exports;
export { page };
