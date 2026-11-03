import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { r as setOnSetGetEnv, t as getEnv$1 } from "./runtime_CbHAOOc6.mjs";
import { makeGenericAPIRouteHandler } from "@keystatic/core/api/generic";
import { collection, config, fields } from "@keystatic/core";
// \0astro:env/server
/** @returns {string} */
var getEnv = (key) => {
	return getEnv$1(key);
};
var getSecret = (key) => {
	return getEnv(key);
};
setOnSetGetEnv(() => {});
// node_modules/@keystatic/astro/dist/keystatic-astro-api.js
function makeHandler(_config) {
	return async function keystaticAPIRoute(context) {
		var _config$clientId, _config$clientSecret, _config$secret;
		const { body, headers, status } = await makeGenericAPIRouteHandler({
			..._config,
			clientId: (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : getSecret("KEYSTATIC_GITHUB_CLIENT_ID"),
			clientSecret: (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : getSecret("KEYSTATIC_GITHUB_CLIENT_SECRET"),
			secret: (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : getSecret("KEYSTATIC_SECRET")
		}, { slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG" })(context.request);
		return new Response(body, {
			status,
			headers
		});
	};
}
// keystatic.config.ts
var imageField = (label, dir) => fields.image({
	label,
	directory: `public/images/${dir}`,
	publicPath: `/images/${dir}/`
});
var keystatic_config_default = config({
	storage: { kind: "local" },
	collections: {
		articles: collection({
			label: "Articles & Blogs",
			slugField: "title",
			path: "src/content/articles/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				pubDate: fields.date({ label: "Publish Date" }),
				category: fields.select({
					label: "Type",
					options: [{
						label: "Article",
						value: "article"
					}, {
						label: "Blog",
						value: "blog"
					}],
					defaultValue: "blog"
				}),
				description: fields.text({
					label: "Short Description (for SEO & previews)",
					multiline: true
				}),
				cover: imageField("Cover Image", "articles"),
				content: fields.markdoc({
					label: "Content",
					options: { image: {
						directory: "src/assets/images/articles",
						publicPath: "../../assets/images/articles/"
					} }
				})
			}
		}),
		research: collection({
			label: "Research Publications",
			slugField: "title",
			path: "src/content/research/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				pubDate: fields.date({ label: "Publish Date" }),
				summary: fields.text({
					label: "Summary / Abstract",
					multiline: true
				}),
				downloadUrl: fields.url({ label: "Link to Download Paper (PDF, DOI, etc.)" }),
				cover: imageField("Cover / Thumbnail", "research"),
				content: fields.markdoc({ label: "Full Content (optional)" })
			}
		}),
		books: collection({
			label: "Books",
			slugField: "title",
			path: "src/content/books/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				pubDate: fields.date({ label: "Publication Date" }),
				blurb: fields.text({
					label: "Blurb / About the Book",
					multiline: true
				}),
				purchaseUrl: fields.url({ label: "Link to Buy / Read Book" }),
				cover: imageField("Book Cover", "books"),
				content: fields.markdoc({ label: "Additional Details (optional)" })
			}
		})
	}
});
// node_modules/@keystatic/astro/internal/keystatic-api.js
var keystatic_api_exports = /* @__PURE__ */ __exportAll({
	ALL: () => ALL,
	all: () => all,
	prerender: () => false
});
var all = makeHandler({ config: keystatic_config_default });
var ALL = all;
// \0virtual:astro:page:node_modules/@keystatic/astro/internal/keystatic-api@_@js
var page = () => keystatic_api_exports;
export { page };
