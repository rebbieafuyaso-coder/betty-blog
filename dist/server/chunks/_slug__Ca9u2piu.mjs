import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead } from "./server_DBrRtYag.mjs";
import { t as createComponent } from "./astro-component_CyrD4LV8.mjs";
import { t as createAstro } from "./astro-global_DigXr-DJ.mjs";
import "./compiler_C_aJiEKN.mjs";
import { t as $$Layout } from "./Layout_DB7fCGQy.mjs";
import { n as getEntry, r as render, t as getCollection } from "./_astro_content_Bmo_VmAN.mjs";
// src/pages/books/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
async function getStaticPaths() {
	return (await getCollection("books")).map((book) => ({ params: { slug: book.id } }));
}
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	const book = await getEntry("books", slug);
	if (!book) throw new Error("Book not found");
	const { Content } = await render(book);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${book.data.title} | BettyWakiaBlog`,
		"description": book.data.blurb,
		"activePage": "categories",
		"data-astro-cid-htmgan3m": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="book-detail gutter" data-astro-cid-htmgan3m><div class="book-layout" data-astro-cid-htmgan3m>${book.data.cover && renderTemplate`<div class="cover-wrap" data-astro-cid-htmgan3m><img${addAttribute(book.data.cover, "src")}${addAttribute(book.data.title, "alt")} data-astro-cid-htmgan3m></div>`}<div class="info" data-astro-cid-htmgan3m><p class="kicker" data-astro-cid-htmgan3m>BOOK</p><h1 data-astro-cid-htmgan3m>${book.data.title}</h1><p class="blurb" data-astro-cid-htmgan3m>${book.data.blurb}</p>${book.data.purchaseUrl && renderTemplate`<a${addAttribute(book.data.purchaseUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn btn-primary" data-astro-cid-htmgan3m>Get the Book →</a>`}${book.body && renderTemplate`<div class="extra-content" data-astro-cid-htmgan3m>${renderComponent($$result, "Content", Content, { "data-astro-cid-htmgan3m": true })}</div>`}</div></div></article>` })}`;
}, "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/books/[slug].astro", void 0);
var $$file = "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/books/[slug].astro";
var $$url = "/books/[slug]";
// \0virtual:astro:page:src/pages/books/[slug]@_@astro
var page = () => _slug__exports;
export { page };
