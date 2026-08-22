import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-jswzWroC.mjs";
import { t as PageHero } from "./PageHero-Bh_kqYOl.mjs";
import { S as whatsappLink, c as clinic, x as trackEvent } from "./router-Bt7Mn-BL.mjs";
import { t as LeadForm } from "./LeadForm-BADm0RLK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-UBMFOH0M.js
var import_jsx_runtime = require_jsx_runtime();
var directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.mapsQuery)}`;
var mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(clinic.mapsQuery)}&output=embed`;
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
		eyebrow: "Contact & locate us",
		title: "Come find your way",
		accent: "to Thrive.",
		description: "Have a question, need help choosing the right service or ready to book your appointment? Our team is here to help.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: clinic.phoneHref,
				onClick: () => trackEvent("phone_click", { location: "contact_hero" }),
				className: "btn btn-primary",
				children: ["Call ", clinic.phone]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: whatsappLink(),
				target: "_blank",
				rel: "noopener noreferrer",
				onClick: () => trackEvent("whatsapp_click", { location: "contact_hero" }),
				className: "btn btn-outline",
				children: "WhatsApp us"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: directionsUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				onClick: () => trackEvent("directions_click", { location: "contact_hero" }),
				className: "btn btn-outline",
				children: "Get directions"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x grid gap-10 py-16 lg:grid-cols-[1fr_1.1fr] sm:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-lg text-2xl",
				children: "Clinic details"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 space-y-5 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs font-semibold tracking-[0.16em] text-primary uppercase",
						children: "Address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2",
						children: clinic.address
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs font-semibold tracking-[0.16em] text-primary uppercase",
						children: "Hours"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2",
						children: clinic.hoursNote
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs font-semibold tracking-[0.16em] text-primary uppercase",
						children: "Phone & email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "mt-2 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: clinic.phoneHref,
							className: "underline",
							children: clinic.phone
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${clinic.email}`,
							className: "underline",
							children: clinic.email
						}) })]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 overflow-hidden rounded-3xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: `Map showing the location of ${clinic.name}`,
					src: mapEmbedUrl,
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade",
					className: "h-[320px] w-full border-0"
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 100,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
				mode: "inquiry",
				title: "Send us a message",
				description: "Our team replies during clinic hours. For quick questions, WhatsApp is fastest."
			})
		})]
	})] });
}
//#endregion
export { Contact as component };
