import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-fb1XWfch.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as whatsappLink, c as clinic, x as trackEvent } from "./router-DioQ2GDM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ClosingCta-D3am0iwM.js
var import_jsx_runtime = require_jsx_runtime();
function ClosingCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-deep text-deep-foreground",
		"data-tsd-source": "/src/components/ClosingCta.tsx:8:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-10 py-16 lg:grid-cols-[1.3fr_1fr] lg:items-end sm:py-20",
			"data-tsd-source": "/src/components/ClosingCta.tsx:9:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				"data-tsd-source": "/src/components/ClosingCta.tsx:10:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm opacity-70",
					"data-tsd-source": "/src/components/ClosingCta.tsx:11:11",
					children: "Take the first step"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-xl mt-5",
					"data-tsd-source": "/src/components/ClosingCta.tsx:12:11",
					children: [
						"Your pain ends here.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { "data-tsd-source": "/src/components/ClosingCta.tsx:14:13" }),
						"Your life begins."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				"data-tsd-source": "/src/components/ClosingCta.tsx:18:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed opacity-80",
						"data-tsd-source": "/src/components/ClosingCta.tsx:19:11",
						children: "You have more to life than managing pain. Take the first step towards better movement, greater comfort and a healthier tomorrow."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						"data-tsd-source": "/src/components/ClosingCta.tsx:23:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "btn btn-lime",
							"data-tsd-source": "/src/components/ClosingCta.tsx:24:13",
							children: "Book an appointment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappLink(),
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => trackEvent("whatsapp_click", { location: "closing_cta" }),
							className: "btn btn-ghost-light",
							"data-tsd-source": "/src/components/ClosingCta.tsx:27:13",
							children: "Talk to Thrive"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs opacity-70",
						"data-tsd-source": "/src/components/ClosingCta.tsx:37:11",
						children: [
							"Prefer to call?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: clinic.phoneHref,
								className: "underline",
								"data-tsd-source": "/src/components/ClosingCta.tsx:39:13",
								children: clinic.phone
							})
						]
					})
				]
			})]
		})
	});
}
//#endregion
export { ClosingCta as t };
