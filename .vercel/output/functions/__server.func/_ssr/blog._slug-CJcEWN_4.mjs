import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-fb1XWfch.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ClosingCta } from "./ClosingCta-D3am0iwM.mjs";
import { r as Route$2 } from "./router-DioQ2GDM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CJcEWN_4.js
var import_jsx_runtime = require_jsx_runtime();
function Article() {
	const { post } = Route$2.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "container-x py-12 sm:py-16",
		"data-tsd-source": "/src/routes/blog.$slug.tsx:59:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-3xl",
			"data-tsd-source": "/src/routes/blog.$slug.tsx:60:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/blog",
					className: "text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase",
					"data-tsd-source": "/src/routes/blog.$slug.tsx:61:11",
					children: "← Journal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-lg mt-6",
					"data-tsd-source": "/src/routes/blog.$slug.tsx:64:11",
					children: post.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					"data-tsd-source": "/src/routes/blog.$slug.tsx:65:11",
					children: [
						post.author,
						" · ",
						post.displayDate,
						" · ",
						post.readTime
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: post.image,
					alt: post.title,
					className: "mt-8 aspect-16/9 w-full rounded-2xl object-cover",
					width: 1280,
					height: 720,
					"data-tsd-source": "/src/routes/blog.$slug.tsx:68:11"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base",
					"data-tsd-source": "/src/routes/blog.$slug.tsx:75:11",
					children: post.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-tsd-source": "/src/routes/blog.$slug.tsx:77:15",
						children: paragraph
					}, paragraph.slice(0, 24)))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, { "data-tsd-source": "/src/routes/blog.$slug.tsx:83:7" })] });
}
//#endregion
export { Article as component };
