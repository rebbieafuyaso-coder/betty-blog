import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead } from "./server_DBrRtYag.mjs";
import { t as createComponent } from "./astro-component_CyrD4LV8.mjs";
import "./compiler_C_aJiEKN.mjs";
import { t as $$Layout } from "./Layout_DB7fCGQy.mjs";
import { t as getCollection } from "./_astro_content_Bmo_VmAN.mjs";
// src/pages/books/index.astro
var books_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const sorted = (await getCollection("books")).sort((a, b) => new Date(b.data.pubDate ?? 0).getTime() - new Date(a.data.pubDate ?? 0).getTime());
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Books | BettyWakiaBlog",
		"description": "Books by Betty Wakia.",
		"activePage": "categories",
		"data-astro-cid-4ojkswfr": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="header gutter" data-astro-cid-4ojkswfr><p class="kicker" data-astro-cid-4ojkswfr>LIBRARY</p><h1 data-astro-cid-4ojkswfr>Books</h1><p class="sub" data-astro-cid-4ojkswfr>Published works, with links to read or purchase.</p></section><section class="grid-section gutter" data-astro-cid-4ojkswfr><div class="book-grid" data-astro-cid-4ojkswfr>${sorted.map((book) => renderTemplate`<a${addAttribute(`/books/${book.id}`, "href")} class="book-card" data-astro-cid-4ojkswfr>${book.data.cover && renderTemplate`<div class="book-cover" data-astro-cid-4ojkswfr><img${addAttribute(book.data.cover, "src")}${addAttribute(book.data.title, "alt")} loading="lazy" data-astro-cid-4ojkswfr></div>`}<div class="book-info" data-astro-cid-4ojkswfr><h2 data-astro-cid-4ojkswfr>${book.data.title}</h2><p class="blurb" data-astro-cid-4ojkswfr>${book.data.blurb}</p><span class="read-more" data-astro-cid-4ojkswfr>View details →</span></div></a>`)}</div></section>` })}`;
}, "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/books/index.astro", void 0);
var $$file = "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/books/index.astro";
var $$url = "/books";
// \0virtual:astro:page:src/pages/books/index@_@astro
var page = () => books_exports;
export { page };
