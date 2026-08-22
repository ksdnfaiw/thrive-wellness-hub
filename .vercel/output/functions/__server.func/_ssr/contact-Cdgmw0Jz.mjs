import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-fb1XWfch.mjs";
import { t as PageHero } from "./PageHero-D7KLyM79.mjs";
import { S as whatsappLink, c as clinic, x as trackEvent } from "./router-DioQ2GDM.mjs";
import { t as LeadForm } from "./LeadForm-cOU31dYG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Cdgmw0Jz.js
var import_jsx_runtime = require_jsx_runtime();
var directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.mapsQuery)}`;
var mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(clinic.mapsQuery)}&output=embed`;
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
		eyebrow: "Contact & locate us",
		title: "Come find your way",
		accent: "to Thrive.",
		description: "Have a question, need help choosing the right service or ready to book your appointment? Our team is here to help.",
		"data-tsd-source": "/src/routes/contact.tsx:52:7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: clinic.phoneHref,
				onClick: () => trackEvent("phone_click", { location: "contact_hero" }),
				className: "btn btn-primary",
				"data-tsd-source": "/src/routes/contact.tsx:58:9",
				children: ["Call ", clinic.phone]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: whatsappLink(),
				target: "_blank",
				rel: "noopener noreferrer",
				onClick: () => trackEvent("whatsapp_click", { location: "contact_hero" }),
				className: "btn btn-outline",
				"data-tsd-source": "/src/routes/contact.tsx:65:9",
				children: "WhatsApp us"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: directionsUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				onClick: () => trackEvent("directions_click", { location: "contact_hero" }),
				className: "btn btn-outline",
				"data-tsd-source": "/src/routes/contact.tsx:74:9",
				children: "Get directions"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x grid gap-10 py-16 lg:grid-cols-[1fr_1.1fr] sm:py-20",
		"data-tsd-source": "/src/routes/contact.tsx:85:7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			"data-tsd-source": "/src/routes/contact.tsx:86:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg text-2xl",
					"data-tsd-source": "/src/routes/contact.tsx:87:11",
					children: "Clinic details"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-6 space-y-5 text-sm",
					"data-tsd-source": "/src/routes/contact.tsx:88:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/routes/contact.tsx:89:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-semibold tracking-[0.16em] text-primary uppercase",
								"data-tsd-source": "/src/routes/contact.tsx:90:15",
								children: "Address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2",
								"data-tsd-source": "/src/routes/contact.tsx:91:15",
								children: clinic.address
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/routes/contact.tsx:93:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-semibold tracking-[0.16em] text-primary uppercase",
								"data-tsd-source": "/src/routes/contact.tsx:94:15",
								children: "Hours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2",
								"data-tsd-source": "/src/routes/contact.tsx:95:15",
								children: clinic.hoursNote
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/routes/contact.tsx:97:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-semibold tracking-[0.16em] text-primary uppercase",
								"data-tsd-source": "/src/routes/contact.tsx:98:15",
								children: "Phone & email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "mt-2 space-y-1",
								"data-tsd-source": "/src/routes/contact.tsx:99:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-tsd-source": "/src/routes/contact.tsx:100:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: clinic.phoneHref,
										className: "underline",
										"data-tsd-source": "/src/routes/contact.tsx:101:19",
										children: clinic.phone
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-tsd-source": "/src/routes/contact.tsx:105:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${clinic.email}`,
										className: "underline",
										"data-tsd-source": "/src/routes/contact.tsx:106:19",
										children: clinic.email
									})
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 overflow-hidden rounded-3xl border border-border",
					"data-tsd-source": "/src/routes/contact.tsx:114:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: `Map showing the location of ${clinic.name}`,
						src: mapEmbedUrl,
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						className: "h-[320px] w-full border-0",
						"data-tsd-source": "/src/routes/contact.tsx:115:13"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 100,
			"data-tsd-source": "/src/routes/contact.tsx:125:9",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
				mode: "inquiry",
				title: "Send us a message",
				description: "Our team replies during clinic hours. For quick questions, WhatsApp is fastest.",
				"data-tsd-source": "/src/routes/contact.tsx:126:11"
			})
		})]
	})] });
}
//#endregion
export { Contact as component };
