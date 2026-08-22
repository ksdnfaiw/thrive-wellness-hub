import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-fb1XWfch.mjs";
import { t as PageHero } from "./PageHero-D7KLyM79.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ClosingCta } from "./ClosingCta-D3am0iwM.mjs";
import { d as galleryCategories, f as images } from "./router-DioQ2GDM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-Ds9C-Sid.js
var import_jsx_runtime = require_jsx_runtime();
var media = [
	{
		src: images.reception,
		alt: "Reception and waiting area",
		span: "lg:col-span-2",
		w: 1280,
		h: 853
	},
	{
		src: images.procedureSuite,
		alt: "Procedure space with C-arm imaging support",
		span: "",
		w: 1024,
		h: 768
	},
	{
		src: images.diagnostics,
		alt: "In-house diagnostics with digital X-ray and ultrasound",
		span: "",
		w: 1024,
		h: 768
	},
	{
		src: images.physio,
		alt: "Physiotherapy and rehabilitation area",
		span: "lg:col-span-2",
		w: 1024,
		h: 768
	},
	{
		src: images.wellness,
		alt: "Private wellness therapy room",
		span: "",
		w: 1024,
		h: 1280
	},
	{
		src: images.psychology,
		alt: "Consultation room for psychology and mental wellness",
		span: "",
		w: 1024,
		h: 768
	},
	{
		src: images.nutrition,
		alt: "Nutrition consultation space",
		span: "",
		w: 1024,
		h: 768
	}
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Gallery",
			title: "Welcome to",
			accent: "Thrive.",
			description: "A space designed to make healthcare feel different. From our clinical setup to our wellness spaces, every part of Thrive has been designed around comfort, confidence and care.",
			"data-tsd-source": "/src/routes/gallery.tsx:43:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/book",
				className: "btn btn-primary",
				"data-tsd-source": "/src/routes/gallery.tsx:49:9",
				children: "Book a visit"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 sm:py-20",
			"data-tsd-source": "/src/routes/gallery.tsx:54:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				"data-tsd-source": "/src/routes/gallery.tsx:55:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					"data-tsd-source": "/src/routes/gallery.tsx:56:11",
					children: "Gallery categories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-5 text-2xl",
					"data-tsd-source": "/src/routes/gallery.tsx:57:11",
					children: "Explore the facility"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				"data-tsd-source": "/src/routes/gallery.tsx:59:9",
				children: galleryCategories.map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 60,
					variant: "clip",
					"data-tsd-source": "/src/routes/gallery.tsx:61:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-soft h-full overflow-hidden",
						"data-tsd-source": "/src/routes/gallery.tsx:62:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: category.image,
							alt: category.title,
							loading: "lazy",
							decoding: "async",
							width: 1024,
							height: 768,
							className: "aspect-4/3 w-full object-cover",
							"data-tsd-source": "/src/routes/gallery.tsx:63:17"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							"data-tsd-source": "/src/routes/gallery.tsx:72:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display-md",
								"data-tsd-source": "/src/routes/gallery.tsx:73:19",
								children: category.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								"data-tsd-source": "/src/routes/gallery.tsx:74:19",
								children: category.detail
							})]
						})]
					})
				}, category.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x pb-16 sm:pb-20",
			"data-tsd-source": "/src/routes/gallery.tsx:82:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				"data-tsd-source": "/src/routes/gallery.tsx:83:9",
				children: media.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 50,
					className: item.span,
					"data-tsd-source": "/src/routes/gallery.tsx:85:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-3xl border border-border bg-card",
						"data-tsd-source": "/src/routes/gallery.tsx:86:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.src,
							alt: item.alt,
							loading: "lazy",
							decoding: "async",
							width: item.w,
							height: item.h,
							className: "aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-[1.03]",
							"data-tsd-source": "/src/routes/gallery.tsx:87:17"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "px-5 py-4 text-xs tracking-[0.14em] text-muted-foreground uppercase",
							"data-tsd-source": "/src/routes/gallery.tsx:96:17",
							children: item.alt
						})]
					})
				}, item.alt))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-xs text-muted-foreground",
				"data-tsd-source": "/src/routes/gallery.tsx:103:9",
				children: "Placeholder imagery. To be replaced with the clinic's own facility, procedure and equipment photography before launch."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, { "data-tsd-source": "/src/routes/gallery.tsx:109:7" })
	] });
}
//#endregion
export { Gallery as component };
