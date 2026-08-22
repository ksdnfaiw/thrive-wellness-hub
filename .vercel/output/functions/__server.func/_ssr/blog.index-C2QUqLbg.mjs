import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-fb1XWfch.mjs";
import { t as PageHero } from "./PageHero-D7KLyM79.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ClosingCta } from "./ClosingCta-D3am0iwM.mjs";
import { a as blogPosts } from "./router-DioQ2GDM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-C2QUqLbg.js
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Journal",
			title: "The Thrive",
			accent: "Journal.",
			description: "Practical insights on pain, recovery, movement, nutrition, mental wellness and living better, designed to help you make more informed decisions about your wellbeing.",
			"data-tsd-source": "/src/routes/blog.index.tsx:28:7"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16 sm:py-20",
			"data-tsd-source": "/src/routes/blog.index.tsx:35:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				"data-tsd-source": "/src/routes/blog.index.tsx:36:9",
				children: blogPosts.map((post, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 80,
					"data-tsd-source": "/src/routes/blog.index.tsx:38:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: post.slug },
						className: "card-soft flex h-full flex-col overflow-hidden",
						"data-tsd-source": "/src/routes/blog.index.tsx:39:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: post.image,
							alt: post.title,
							loading: "lazy",
							decoding: "async",
							className: "aspect-16/10 w-full object-cover",
							"data-tsd-source": "/src/routes/blog.index.tsx:44:17"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-5",
							"data-tsd-source": "/src/routes/blog.index.tsx:45:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "display-md",
									"data-tsd-source": "/src/routes/blog.index.tsx:46:19",
									children: post.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm text-muted-foreground",
									"data-tsd-source": "/src/routes/blog.index.tsx:47:19",
									children: post.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 border-t border-border pt-4 text-xs text-muted-foreground",
									"data-tsd-source": "/src/routes/blog.index.tsx:48:19",
									children: [
										post.author,
										" · ",
										post.displayDate,
										" · ",
										post.readTime
									]
								})
							]
						})]
					})
				}, post.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, { "data-tsd-source": "/src/routes/blog.index.tsx:58:7" })
	] });
}
//#endregion
export { BlogIndex as component };
