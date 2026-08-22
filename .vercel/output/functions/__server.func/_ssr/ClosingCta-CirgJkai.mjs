import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-jswzWroC.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as whatsappLink, c as clinic, x as trackEvent } from "./router-Bt7Mn-BL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ClosingCta-CirgJkai.js
var import_jsx_runtime = require_jsx_runtime();
function ClosingCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-deep text-deep-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-10 py-16 lg:grid-cols-[1.3fr_1fr] lg:items-end sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm opacity-70",
				children: "Take the first step"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "display-xl mt-5",
				children: [
					"Your pain ends here.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Your life begins."
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed opacity-80",
						children: "You have more to life than managing pain. Take the first step towards better movement, greater comfort and a healthier tomorrow."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "btn btn-lime",
							children: "Book an appointment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappLink(),
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => trackEvent("whatsapp_click", { location: "closing_cta" }),
							className: "btn btn-ghost-light",
							children: "Talk to Thrive"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs opacity-70",
						children: [
							"Prefer to call?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: clinic.phoneHref,
								className: "underline",
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
