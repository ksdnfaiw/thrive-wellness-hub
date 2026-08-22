import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-fb1XWfch.mjs";
import { t as PageHero } from "./PageHero-D7KLyM79.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ClosingCta } from "./ClosingCta-D3am0iwM.mjs";
import { _ as services } from "./router-DioQ2GDM.mjs";
import { t as LeadForm } from "./LeadForm-cOU31dYG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.index-BNGJqCBn.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesHub() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our services",
			title: "Complete care for",
			accent: "a better life.",
			description: "Pain rarely has a single dimension. Neither should your care. At Thrive, different areas of expertise come together to create a personalised treatment journey.",
			"data-tsd-source": "/src/routes/services.index.tsx:29:7"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16 sm:py-20",
			"data-tsd-source": "/src/routes/services.index.tsx:36:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				"data-tsd-source": "/src/routes/services.index.tsx:37:9",
				children: services.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 60,
					"data-tsd-source": "/src/routes/services.index.tsx:39:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/$slug",
						params: { slug: service.slug },
						className: "card-soft flex h-full flex-col overflow-hidden",
						"data-tsd-source": "/src/routes/services.index.tsx:40:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: service.image,
							alt: service.title,
							loading: "lazy",
							decoding: "async",
							width: 1024,
							height: 768,
							className: "aspect-16/10 w-full object-cover",
							"data-tsd-source": "/src/routes/services.index.tsx:45:17"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6",
							"data-tsd-source": "/src/routes/services.index.tsx:53:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold",
									"data-tsd-source": "/src/routes/services.index.tsx:54:19",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm text-muted-foreground",
									"data-tsd-source": "/src/routes/services.index.tsx:55:19",
									children: service.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-5 text-xs font-semibold tracking-[0.16em] text-primary uppercase",
									"data-tsd-source": "/src/routes/services.index.tsx:56:19",
									children: "Explore this service"
								})
							]
						})]
					})
				}, service.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-20",
			"data-tsd-source": "/src/routes/services.index.tsx:66:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mx-auto max-w-2xl",
				"data-tsd-source": "/src/routes/services.index.tsx:67:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
					mode: "inquiry",
					title: "Not sure where to start?",
					description: "Tell us what you are experiencing and our team will help you understand the next step.",
					"data-tsd-source": "/src/routes/services.index.tsx:68:11"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, { "data-tsd-source": "/src/routes/services.index.tsx:76:7" })
	] });
}
//#endregion
export { ServicesHub as component };
