import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-fb1XWfch.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ClosingCta } from "./ClosingCta-D3am0iwM.mjs";
import { _ as services, n as Route } from "./router-DioQ2GDM.mjs";
import { t as LeadForm } from "./LeadForm-cOU31dYG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-RL0sL51o.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetail() {
	const { service } = Route.useLoaderData();
	const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/50",
			"data-tsd-source": "/src/routes/services.$slug.tsx:38:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20",
				"data-tsd-source": "/src/routes/services.$slug.tsx:39:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					"data-tsd-source": "/src/routes/services.$slug.tsx:40:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							"aria-label": "Breadcrumb",
							className: "text-xs tracking-[0.16em] text-muted-foreground uppercase",
							"data-tsd-source": "/src/routes/services.$slug.tsx:41:13",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									className: "hover:text-primary",
									"data-tsd-source": "/src/routes/services.$slug.tsx:42:15",
									children: "Services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/services.$slug.tsx:45:15",
									children: " / "
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									"data-tsd-source": "/src/routes/services.$slug.tsx:46:15",
									children: service.title
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-xl mt-5",
							"data-tsd-source": "/src/routes/services.$slug.tsx:48:13",
							children: service.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base text-muted-foreground sm:text-lg",
							"data-tsd-source": "/src/routes/services.$slug.tsx:49:13",
							children: service.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							"data-tsd-source": "/src/routes/services.$slug.tsx:50:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/book",
								className: "btn btn-primary",
								"data-tsd-source": "/src/routes/services.$slug.tsx:51:15",
								children: "Book a consultation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/insurance",
								className: "btn btn-outline",
								"data-tsd-source": "/src/routes/services.$slug.tsx:54:15",
								children: "Insurance & billing"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 110,
					"data-tsd-source": "/src/routes/services.$slug.tsx:59:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: service.image,
						alt: service.title,
						width: 1024,
						height: 768,
						className: "aspect-4/3 w-full rounded-[2rem] object-cover shadow-soft",
						"data-tsd-source": "/src/routes/services.$slug.tsx:60:13"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16 sm:py-20",
			"data-tsd-source": "/src/routes/services.$slug.tsx:71:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.05fr]",
				"data-tsd-source": "/src/routes/services.$slug.tsx:72:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					"data-tsd-source": "/src/routes/services.$slug.tsx:73:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							"data-tsd-source": "/src/routes/services.$slug.tsx:74:13",
							children: "What we treat with"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-5 text-2xl",
							"data-tsd-source": "/src/routes/services.$slug.tsx:75:13",
							children: "Inside this department"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 space-y-3",
							"data-tsd-source": "/src/routes/services.$slug.tsx:76:13",
							children: service.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 rounded-2xl border border-border bg-card p-4",
								"data-tsd-source": "/src/routes/services.$slug.tsx:78:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground",
									"data-tsd-source": "/src/routes/services.$slug.tsx:79:19",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										className: "h-3 w-3",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "3",
										"data-tsd-source": "/src/routes/services.$slug.tsx:80:21",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M5 13l4 4L19 7",
											"data-tsd-source": "/src/routes/services.$slug.tsx:81:23"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									"data-tsd-source": "/src/routes/services.$slug.tsx:84:19",
									children: item
								})]
							}, item))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 90,
					"data-tsd-source": "/src/routes/services.$slug.tsx:90:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							"data-tsd-source": "/src/routes/services.$slug.tsx:91:13",
							children: "Your pathway"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-5 text-2xl",
							"data-tsd-source": "/src/routes/services.$slug.tsx:92:13",
							children: "How the journey runs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-7 space-y-4",
							"data-tsd-source": "/src/routes/services.$slug.tsx:93:13",
							children: service.journey.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "card-soft p-6",
								"data-tsd-source": "/src/routes/services.$slug.tsx:95:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-semibold tracking-[0.18em] text-primary uppercase",
									"data-tsd-source": "/src/routes/services.$slug.tsx:96:19",
									children: [
										"Step ",
										index + 1,
										" · ",
										step.stage
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									"data-tsd-source": "/src/routes/services.$slug.tsx:99:19",
									children: step.detail
								})]
							}, step.stage))
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid gap-10 pb-20 lg:grid-cols-[1.05fr_1fr] lg:items-start",
			"data-tsd-source": "/src/routes/services.$slug.tsx:107:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				"data-tsd-source": "/src/routes/services.$slug.tsx:108:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						"data-tsd-source": "/src/routes/services.$slug.tsx:109:11",
						children: "Related departments"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-5 text-2xl",
						"data-tsd-source": "/src/routes/services.$slug.tsx:110:11",
						children: "Often paired with"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-3",
						"data-tsd-source": "/src/routes/services.$slug.tsx:111:11",
						children: others.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: item.slug },
							className: "card-soft p-5 text-sm font-semibold",
							"data-tsd-source": "/src/routes/services.$slug.tsx:113:15",
							children: item.title
						}, item.slug))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				"data-tsd-source": "/src/routes/services.$slug.tsx:124:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
					mode: "inquiry",
					defaultService: service.title,
					title: `Ask about ${service.title.toLowerCase()}`,
					description: "A clinician from this department reviews your enquiry and calls you back.",
					"data-tsd-source": "/src/routes/services.$slug.tsx:125:11"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, { "data-tsd-source": "/src/routes/services.$slug.tsx:134:7" })
	] });
}
//#endregion
export { ServiceDetail as component };
