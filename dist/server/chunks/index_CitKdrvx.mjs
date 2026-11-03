import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead } from "./server_DBrRtYag.mjs";
import { t as createComponent } from "./astro-component_CyrD4LV8.mjs";
import "./compiler_C_aJiEKN.mjs";
import { t as $$Layout } from "./Layout_DB7fCGQy.mjs";
import { t as getCollection } from "./_astro_content_Bmo_VmAN.mjs";
// src/pages/categories/index.astro
var categories_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const articles = await getCollection("articles");
	const research = await getCollection("research");
	const books = await getCollection("books");
	const sections = [
		{
			title: "Articles & Blogs",
			count: articles.length,
			href: "/blog",
			color: "g0"
		},
		{
			title: "Research Publications",
			count: research.length,
			href: "/research",
			color: "g1"
		},
		{
			title: "Books",
			count: books.length,
			href: "/books",
			color: "g2"
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Categories | BettyWakiaBlog",
		"description": "Browse all content by type.",
		"activePage": "categories",
		"data-astro-cid-4fv6cgsg": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="header gutter" data-astro-cid-4fv6cgsg><p class="kicker" data-astro-cid-4fv6cgsg>BROWSE</p><h1 data-astro-cid-4fv6cgsg>Explore</h1><p class="sub" data-astro-cid-4fv6cgsg>Pick a section to start reading.</p></section><section class="grid-section gutter" data-astro-cid-4fv6cgsg><div class="cat-grid" data-astro-cid-4fv6cgsg>${sections.map((s) => renderTemplate`<a${addAttribute(s.href, "href")}${addAttribute(`cat-card ${s.color}`, "class")} data-astro-cid-4fv6cgsg><span data-astro-cid-4fv6cgsg>${s.title}</span><small data-astro-cid-4fv6cgsg>${s.count} items</small></a>`)}</div></section>` })}`;
}, "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/categories/index.astro", void 0);
var $$file = "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/categories/index.astro";
var $$url = "/categories";
// \0virtual:astro:page:src/pages/categories/index@_@astro
var page = () => categories_exports;
export { page };
