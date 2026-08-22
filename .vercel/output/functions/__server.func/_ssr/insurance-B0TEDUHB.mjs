import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-fb1XWfch.mjs";
import { t as PageHero } from "./PageHero-D7KLyM79.mjs";
import { t as ClosingCta } from "./ClosingCta-D3am0iwM.mjs";
import { S as whatsappLink, c as clinic, p as insuranceFaqs, s as cashlessSteps, x as trackEvent } from "./router-DioQ2GDM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insurance-B0TEDUHB.js
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
			"data-tsd-source": "/src/routes/insurance.tsx:37:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: whatsappLink("Hello Thrive, I would like to check my insurance eligibility."),
				target: "_blank",
				rel: "noopener noreferrer",
				onClick: () => trackEvent("whatsapp_click", { location: "insurance_hero" }),
				className: "btn btn-primary",
				"data-tsd-source": "/src/routes/insurance.tsx:43:9",
				children: "Check insurance eligibility"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: clinic.phoneHref,
				onClick: () => trackEvent("phone_click", { location: "insurance_hero" }),
				className: "btn btn-outline",
				"data-tsd-source": "/src/routes/insurance.tsx:52:9",
				children: ["Call ", clinic.phone]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 sm:py-20",
			"data-tsd-source": "/src/routes/insurance.tsx:61:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				"data-tsd-source": "/src/routes/insurance.tsx:62:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg text-2xl",
					"data-tsd-source": "/src/routes/insurance.tsx:63:11",
					children: "Empanelled insurers & TPAs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					"data-tsd-source": "/src/routes/insurance.tsx:64:11",
					children: "Thrive accepts eligible coverage through its empanelled insurance and TPA partners. Verified insurer and TPA logos and names will be displayed here."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				"data-tsd-source": "/src/routes/insurance.tsx:69:9",
				children: Array.from({ length: 8 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 30,
					"data-tsd-source": "/src/routes/insurance.tsx:71:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "grid h-24 place-items-center rounded-2xl border border-dashed border-border bg-card text-xs tracking-[0.16em] text-muted-foreground uppercase",
						"data-tsd-source": "/src/routes/insurance.tsx:72:15",
						children: "Insurer logo"
					})
				}, index))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/50",
			"data-tsd-source": "/src/routes/insurance.tsx:80:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-16 sm:py-20",
				"data-tsd-source": "/src/routes/insurance.tsx:81:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-2xl",
						"data-tsd-source": "/src/routes/insurance.tsx:82:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							"data-tsd-source": "/src/routes/insurance.tsx:83:13",
							children: "Cashless process"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-5 text-2xl",
							"data-tsd-source": "/src/routes/insurance.tsx:84:13",
							children: "Five steps, supported by our team"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						"data-tsd-source": "/src/routes/insurance.tsx:86:11",
						children: cashlessSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: index * 70,
							"data-tsd-source": "/src/routes/insurance.tsx:88:15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "card-soft h-full p-6",
								"data-tsd-source": "/src/routes/insurance.tsx:89:17",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-3xl font-bold text-primary/40",
										"data-tsd-source": "/src/routes/insurance.tsx:90:19",
										children: ["0", index + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-semibold",
										"data-tsd-source": "/src/routes/insurance.tsx:91:19",
										children: step.step
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										"data-tsd-source": "/src/routes/insurance.tsx:92:19",
										children: step.detail
									})
								]
							})
						}, step.step))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-3xl text-xs text-muted-foreground",
						"data-tsd-source": "/src/routes/insurance.tsx:97:11",
						children: "Important: insurance coverage, cashless eligibility and approval are subject to the terms of your individual policy and insurer or TPA authorisation."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 sm:py-20",
			"data-tsd-source": "/src/routes/insurance.tsx:104:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				"data-tsd-source": "/src/routes/insurance.tsx:105:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					"data-tsd-source": "/src/routes/insurance.tsx:106:11",
					children: "FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-5 text-2xl",
					"data-tsd-source": "/src/routes/insurance.tsx:107:11",
					children: "Insurance questions, answered plainly"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 max-w-3xl divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card",
				"data-tsd-source": "/src/routes/insurance.tsx:109:9",
				children: insuranceFaqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-tsd-source": "/src/routes/insurance.tsx:111:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						"data-tsd-source": "/src/routes/insurance.tsx:112:15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(open === index ? null : index),
							"aria-expanded": open === index,
							className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold",
							"data-tsd-source": "/src/routes/insurance.tsx:113:17",
							children: [faq.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "text-primary",
								"data-tsd-source": "/src/routes/insurance.tsx:120:19",
								children: open === index ? "–" : "+"
							})]
						})
					}), open === index ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-6 pb-5 text-sm text-muted-foreground",
						"data-tsd-source": "/src/routes/insurance.tsx:125:33",
						children: faq.a
					}) : null]
				}, faq.q))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, { "data-tsd-source": "/src/routes/insurance.tsx:131:7" })
	] });
}
//#endregion
export { Insurance as component };
