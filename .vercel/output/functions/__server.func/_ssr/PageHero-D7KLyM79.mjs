import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-fb1XWfch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-D7KLyM79.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, accent, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/60",
		"data-tsd-source": "/src/components/PageHero.tsx:18:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x py-16 sm:py-20 lg:py-24",
			"data-tsd-source": "/src/components/PageHero.tsx:19:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				variant: "stagger",
				"data-tsd-source": "/src/components/PageHero.tsx:20:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						"data-tsd-source": "/src/components/PageHero.tsx:21:11",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-xl mt-6 max-w-4xl",
						"data-tsd-source": "/src/components/PageHero.tsx:22:11",
						children: [title, accent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-deep/60",
							"data-tsd-source": "/src/components/PageHero.tsx:24:23",
							children: [" ", accent]
						}) : null]
					}),
					description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg",
						"data-tsd-source": "/src/components/PageHero.tsx:26:26",
						children: description
					}) : null,
					children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						"data-tsd-source": "/src/components/PageHero.tsx:27:23",
						children
					}) : null
				]
			})
		})
	});
}
//#endregion
export { PageHero as t };
