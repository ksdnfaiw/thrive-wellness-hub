import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-fb1XWfch.mjs";
import { S as whatsappLink, c as clinic, x as trackEvent } from "./router-DioQ2GDM.mjs";
import { t as LeadForm } from "./LeadForm-cOU31dYG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-5SJjd_kX.js
var import_jsx_runtime = require_jsx_runtime();
function Book() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/40",
		"data-tsd-source": "/src/routes/book.tsx:27:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-10 py-14 lg:grid-cols-[1fr_1.1fr] lg:py-20",
			"data-tsd-source": "/src/routes/book.tsx:28:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				"data-tsd-source": "/src/routes/book.tsx:29:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						"data-tsd-source": "/src/routes/book.tsx:30:11",
						children: "Book an appointment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-xl mt-6",
						"data-tsd-source": "/src/routes/book.tsx:31:11",
						children: ["Your first step towards ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-deep/60",
							"data-tsd-source": "/src/routes/book.tsx:32:37",
							children: "better days."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground",
						"data-tsd-source": "/src/routes/book.tsx:34:11",
						children: "Whether you are dealing with persistent pain, recovering from an injury or looking for a more complete approach to your wellbeing, our team is here to help you understand what comes next."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-4",
						"data-tsd-source": "/src/routes/book.tsx:39:11",
						children: clinic.hours.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-soft p-5",
							"data-tsd-source": "/src/routes/book.tsx:41:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-[0.16em] text-primary uppercase",
								"data-tsd-source": "/src/routes/book.tsx:42:17",
								children: entry.days
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								"data-tsd-source": "/src/routes/book.tsx:43:17",
								children: entry.time
							})]
						}, entry.days))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						"data-tsd-source": "/src/routes/book.tsx:48:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappLink("Hello Thrive, I'd like to book an appointment."),
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => trackEvent("whatsapp_click", { location: "book_page" }),
							className: "btn btn-primary",
							"data-tsd-source": "/src/routes/book.tsx:49:13",
							children: "Book on WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: clinic.phoneHref,
							onClick: () => trackEvent("phone_click", { location: "book_page" }),
							className: "btn btn-outline",
							"data-tsd-source": "/src/routes/book.tsx:58:13",
							children: ["Call ", clinic.phone]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				"data-tsd-source": "/src/routes/book.tsx:68:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
					mode: "booking",
					title: "Request an appointment",
					description: "Share a few details and our team will help you with the next step.",
					"data-tsd-source": "/src/routes/book.tsx:69:11"
				})
			})]
		})
	});
}
//#endregion
export { Book as component };
