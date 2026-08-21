import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-jswzWroC.mjs";
import { S as whatsappLink, c as clinic, x as trackEvent } from "./router-CYUzs4y0.mjs";
import { t as LeadForm } from "./LeadForm-BADm0RLK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-C9SCeXhc.js
var import_jsx_runtime = require_jsx_runtime();
function Book() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-10 py-14 lg:grid-cols-[1fr_1.1fr] lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Book an appointment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display-xl mt-6",
					children: ["Your first step towards ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-deep/60",
						children: "better days."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted-foreground",
					children: "Whether you are dealing with persistent pain, recovering from an injury or looking for a more complete approach to your wellbeing, our team is here to help you understand what comes next."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-4",
					children: clinic.hours.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-soft p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.16em] text-primary uppercase",
							children: entry.days
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: entry.time
						})]
					}, entry.days))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappLink("Hello Thrive, I'd like to book an appointment."),
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => trackEvent("whatsapp_click", { location: "book_page" }),
						className: "btn btn-primary",
						children: "Book on WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: clinic.phoneHref,
						onClick: () => trackEvent("phone_click", { location: "book_page" }),
						className: "btn btn-outline",
						children: ["Call ", clinic.phone]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
					mode: "booking",
					title: "Request an appointment",
					description: "Share a few details and our team will help you with the next step."
				})
			})]
		})
	});
}
//#endregion
export { Book as component };
