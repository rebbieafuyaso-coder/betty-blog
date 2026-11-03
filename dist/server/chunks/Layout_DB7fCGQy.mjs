import { f as renderTemplate, h as addAttribute, l as renderSlot, m as renderHead } from "./server_DBrRtYag.mjs";
import { t as createComponent } from "./astro-component_CyrD4LV8.mjs";
import { t as createAstro } from "./astro-global_DigXr-DJ.mjs";
import "./compiler_C_aJiEKN.mjs";
// src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title, description = "BettyWakiaBlog — stories, ideas, and books.", activePage } = Astro.props;
	const nav = [
		{
			href: "/",
			label: "Home",
			id: "home"
		},
		{
			href: "/blog",
			label: "Blog",
			id: "blog"
		},
		{
			href: "/categories",
			label: "Categories",
			id: "categories"
		},
		{
			href: "/about",
			label: "About",
			id: "about"
		},
		{
			href: "/contact",
			label: "Contact",
			id: "contact"
		}
	];
	const LINKEDIN_URL = "https://www.linkedin.com/in/REPLACE-ME";
	const FACEBOOK_URL = "https://www.facebook.com/REPLACE-ME";
	const BRAND_NAME = "BettyWakiaBlog";
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Primary SEO --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(Astro.url, "href")}><meta name="generator"${addAttribute(Astro.generator, "content")}><!-- Open Graph (Facebook, LinkedIn, etc.) --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:site_name" content="BettyWakiaBlog"><!-- Replace with a default social sharing image --><meta property="og:image" content="https://yourdomain.com/og-image.jpg"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image" content="https://yourdomain.com/og-image.jpg"><!-- Favicon & Fonts --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Text:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Text:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet">${renderHead($$result)}</head><body><div class="banner">STORIES · IDEAS · BOOKS — BETTYWAKIABLOG</div><header class="site-header"><div class="header-inner"><a href="/" class="brand"><span class="brand-mark grad"></span>${BRAND_NAME}</a><input type="checkbox" id="nav-toggle" class="nav-toggle-input"><label for="nav-toggle" class="nav-toggle-label" aria-label="Toggle navigation"><span class="hamburger-icon"><span></span><span></span><span></span></span></label><nav class="site-nav">${nav.map(({ href, label, id }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute({ active: activePage === id }, "class:list")}>${label}</a>`)}</nav></div></header>${renderSlot($$result, $$slots["default"])}<footer class="gutter"><div class="footer-grid"><div><p class="footer-head">NAVIGATE</p>${nav.map(({ href, label }) => renderTemplate`<a${addAttribute(href, "href")}>${label}</a>`)}</div><div><p class="footer-head">LEGAL</p><p>Terms & Conditions</p><p>Privacy Policy</p><p>Accessibility Statement</p></div><div></div><div><p class="footer-head">FOLLOW</p><div class="socials"><a${addAttribute(LINKEDIN_URL, "href")} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a><a${addAttribute(FACEBOOK_URL, "href")} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div></div></div><div class="footer-bottom"><p class="footer-logo">BettyWakia.</p><p class="copyright">© ${(/* @__PURE__ */ new Date()).getFullYear()} ${BRAND_NAME}. Built by Rebbie Afuyaso.</p></div></footer></body><script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "BettyWakiaBlog",
      "url": "https://yourdomain.com"
    }
  <\/script></html>`;
}, "C:/projects/BettyWakiaBlog/bettywakiablog/src/layouts/Layout.astro", void 0);
export { $$Layout as t };
