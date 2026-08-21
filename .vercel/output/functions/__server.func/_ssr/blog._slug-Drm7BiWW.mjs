import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-jswzWroC.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ClosingCta } from "./ClosingCta-CirgJkai.mjs";
import { r as Route$2 } from "./router-CYUzs4y0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-Drm7BiWW.js
var import_jsx_runtime = require_jsx_runtime();
function Article() {
	const { post } = Route$2.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "container-x py-12 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/blog",
					className: "text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase",
					children: "← Journal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-lg mt-6",
					children: post.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-xs text-muted-foreground",
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
					height: 720
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: post.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 24)))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {})] });
}
//#endregion
export { Article as component };
