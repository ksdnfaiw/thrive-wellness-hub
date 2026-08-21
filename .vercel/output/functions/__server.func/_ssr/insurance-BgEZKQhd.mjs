import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-jswzWroC.mjs";
import { t as PageHero } from "./PageHero-Bh_kqYOl.mjs";
import { t as ClosingCta } from "./ClosingCta-CirgJkai.mjs";
import { S as whatsappLink, c as clinic, p as insuranceFaqs, s as cashlessSteps, x as trackEvent } from "./router-CYUzs4y0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insurance-BgEZKQhd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Insurance() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: "Insurance & billing",
			title: "Clearer care.",
			accent: "Fewer surprises.",
			description: "Understanding the financial side of treatment should not add another layer of stress. Thrive works with empanelled insurers and TPAs to help eligible patients access cashless treatment where applicable.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: whatsappLink("Hello Thrive, I would like to check my insurance eligibility."),
				target: "_blank",
				rel: "noopener noreferrer",
				onClick: () => trackEvent("whatsapp_click", { location: "insurance_hero" }),
				className: "btn btn-primary",
				children: "Check insurance eligibility"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: clinic.phoneHref,
				onClick: () => trackEvent("phone_click", { location: "insurance_hero" }),
				className: "btn btn-outline",
				children: ["Call ", clinic.phone]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg text-2xl",
					children: "Empanelled insurers & TPAs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Thrive accepts eligible coverage through its empanelled insurance and TPA partners. Verified insurer and TPA logos and names will be displayed here."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: Array.from({ length: 8 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 30,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "grid h-24 place-items-center rounded-2xl border border-dashed border-border bg-card text-xs tracking-[0.16em] text-muted-foreground uppercase",
						children: "Insurer logo"
					})
				}, index))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-16 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Cashless process"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-5 text-2xl",
							children: "Five steps, supported by our team"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: cashlessSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: index * 70,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "card-soft h-full p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-3xl font-bold text-primary/40",
										children: ["0", index + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-semibold",
										children: step.step
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: step.detail
									})
								]
							})
						}, step.step))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-3xl text-xs text-muted-foreground",
						children: "Important: insurance coverage, cashless eligibility and approval are subject to the terms of your individual policy and insurer or TPA authorisation."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-5 text-2xl",
					children: "Insurance questions, answered plainly"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 max-w-3xl divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card",
				children: insuranceFaqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(open === index ? null : index),
					"aria-expanded": open === index,
					className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold",
					children: [faq.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "text-primary",
						children: open === index ? "–" : "+"
					})]
				}) }), open === index ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-6 pb-5 text-sm text-muted-foreground",
					children: faq.a
				}) : null] }, faq.q))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {})
	] });
}
//#endregion
export { Insurance as component };
