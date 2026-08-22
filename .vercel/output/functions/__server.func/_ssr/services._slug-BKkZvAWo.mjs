import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-jswzWroC.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ClosingCta } from "./ClosingCta-CirgJkai.mjs";
import { _ as services, n as Route } from "./router-Bt7Mn-BL.mjs";
import { t as LeadForm } from "./LeadForm-BADm0RLK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-BKkZvAWo.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetail() {
	const { service } = Route.useLoaderData();
	const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Breadcrumb",
						className: "text-xs tracking-[0.16em] text-muted-foreground uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								className: "hover:text-primary",
								children: "Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: " / "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: service.title
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-xl mt-5",
						children: service.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-base text-muted-foreground sm:text-lg",
						children: service.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "btn btn-primary",
							children: "Book a consultation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/insurance",
							className: "btn btn-outline",
							children: "Insurance & billing"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 110,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: service.image,
						alt: service.title,
						width: 1024,
						height: 768,
						className: "aspect-4/3 w-full rounded-[2rem] object-cover shadow-soft"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.05fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "What we treat with"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-5 text-2xl",
						children: "Inside this department"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-7 space-y-3",
						children: service.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 rounded-2xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									className: "h-3 w-3",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 13l4 4L19 7" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: item
							})]
						}, item))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 90,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Your pathway"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-5 text-2xl",
							children: "How the journey runs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-7 space-y-4",
							children: service.journey.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "card-soft p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-semibold tracking-[0.18em] text-primary uppercase",
									children: [
										"Step ",
										index + 1,
										" · ",
										step.stage
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
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
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Related departments"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-5 text-2xl",
					children: "Often paired with"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-3",
					children: others.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services/$slug",
						params: { slug: item.slug },
						className: "card-soft p-5 text-sm font-semibold",
						children: item.title
					}, item.slug))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
					mode: "inquiry",
					defaultService: service.title,
					title: `Ask about ${service.title.toLowerCase()}`,
					description: "A clinician from this department reviews your enquiry and calls you back."
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {})
	] });
}
//#endregion
export { ServiceDetail as component };
