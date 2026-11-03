import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead } from "./server_DBrRtYag.mjs";
import { t as createComponent } from "./astro-component_CyrD4LV8.mjs";
import "./compiler_C_aJiEKN.mjs";
import { t as $$Layout } from "./Layout_DB7fCGQy.mjs";
// src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	const CONTACT_EMAIL = "REPLACE-ME@example.com";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Contact | BettyWakiaBlog",
		"description": "Get in touch with Betty Wakia for inquiries, collaborations, or just to say hello.",
		"activePage": "contact",
		"data-astro-cid-6bfsojfh": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="contact-section gutter" data-astro-cid-6bfsojfh><div class="contact-inner" data-astro-cid-6bfsojfh><div class="contact-text" data-astro-cid-6bfsojfh><p class="kicker" data-astro-cid-6bfsojfh>CONTACT</p><h1 data-astro-cid-6bfsojfh>Let's Connect</h1><p class="lead" data-astro-cid-6bfsojfh>Have a question, a collaboration idea, or just want to say hello? Fill out the form and Betty will get back to you as soon as possible.</p><div class="contact-details" data-astro-cid-6bfsojfh><p data-astro-cid-6bfsojfh><strong data-astro-cid-6bfsojfh>Email:</strong> <a${addAttribute(`mailto:${CONTACT_EMAIL}`, "href")} data-astro-cid-6bfsojfh>${CONTACT_EMAIL}</a></p><p data-astro-cid-6bfsojfh><strong data-astro-cid-6bfsojfh>Location:</strong> Wuhan, China</p></div></div><div class="contact-form-wrapper" data-astro-cid-6bfsojfh><form class="contact-form"${addAttribute(`mailto:${CONTACT_EMAIL}`, "action")} method="POST" enctype="text/plain" data-astro-cid-6bfsojfh><div class="form-group" data-astro-cid-6bfsojfh><label for="name" data-astro-cid-6bfsojfh>Name</label><input type="text" id="name" name="name" required placeholder="Your name" data-astro-cid-6bfsojfh></div><div class="form-group" data-astro-cid-6bfsojfh><label for="email" data-astro-cid-6bfsojfh>Email</label><input type="email" id="email" name="email" required placeholder="you@example.com" data-astro-cid-6bfsojfh></div><div class="form-group" data-astro-cid-6bfsojfh><label for="message" data-astro-cid-6bfsojfh>Message</label><textarea id="message" name="message" rows="5" required placeholder="How can I help you?" data-astro-cid-6bfsojfh></textarea></div><button type="submit" class="btn btn-primary" data-astro-cid-6bfsojfh>Send Message</button></form></div></div></section>` })}`;
}, "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/contact.astro", void 0);
var $$file = "C:/projects/BettyWakiaBlog/bettywakiablog/src/pages/contact.astro";
var $$url = "/contact";
// \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
export { page };
