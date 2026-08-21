import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as whatsappLink, _ as services, c as clinic, x as trackEvent } from "./router-CYUzs4y0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LeadForm-BADm0RLK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LeadForm({ mode = "inquiry", defaultService, title, description }) {
	const [done, setDone] = (0, import_react.useState)(false);
	const [sentTo, setSentTo] = (0, import_react.useState)(null);
	const onSubmit = (event) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const name = String(form.get("name") ?? "");
		const phone = String(form.get("phone") ?? "");
		const service = String(form.get("service") ?? "");
		const date = String(form.get("date") ?? "");
		const time = String(form.get("time") ?? "");
		const notes = String(form.get("notes") ?? "");
		const message = [
			mode === "booking" ? "New appointment request" : "New enquiry",
			`Name: ${name}`,
			`Phone: ${phone}`,
			service && `Service: ${service}`,
			date && `Preferred date: ${date}`,
			time && `Preferred time: ${time}`,
			notes && `Notes: ${notes}`
		].filter(Boolean).join("\n");
		trackEvent(mode === "booking" ? "booking_form_submit" : "inquiry_form_submit", { service });
		const link = whatsappLink(message);
		setSentTo(link);
		setDone(true);
		window.open(link, "_blank", "noopener,noreferrer");
	};
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-soft p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl",
				children: "Request received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: [
					"Your details have been opened in WhatsApp so they reach our care team on ",
					clinic.phone,
					". If the WhatsApp window did not open, use the button below. You can also write to ",
					clinic.email,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap gap-3",
				children: [sentTo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: sentTo,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => trackEvent("whatsapp_click", { location: "form_confirmation" }),
					className: "btn btn-primary",
					children: "Confirm on WhatsApp"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: clinic.phoneHref,
					onClick: () => trackEvent("phone_click", { location: "form_confirmation" }),
					className: "btn btn-outline",
					children: ["Call ", clinic.phone]
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "card-soft p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "display-lg text-2xl",
				children: title ?? (mode === "booking" ? "Book an appointment" : "Ask a question")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: description ?? "Share the essentials and our care team calls you back. No long forms, no queues."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block sm:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-wide text-foreground uppercase",
							children: "Full name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							name: "name",
							autoComplete: "name",
							maxLength: 80,
							className: "field mt-2",
							placeholder: "Your name"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block sm:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-wide text-foreground uppercase",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							name: "phone",
							type: "tel",
							inputMode: "tel",
							autoComplete: "tel",
							maxLength: 20,
							pattern: "[0-9+\\s-]{8,20}",
							className: "field mt-2",
							placeholder: "+91 …"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-wide text-foreground uppercase",
							children: "Service needed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "service",
							defaultValue: defaultService ?? "",
							className: "field mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Not sure yet, please advise"
							}), services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: service.title,
								children: service.title
							}, service.slug))]
						})]
					}),
					mode === "booking" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-wide text-foreground uppercase",
							children: "Preferred date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							name: "date",
							type: "date",
							className: "field mt-2"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-wide text-foreground uppercase",
							children: "Preferred time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							required: true,
							name: "time",
							defaultValue: "",
							className: "field mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select a slot"
							}), [
								"09:00 – 11:00",
								"11:00 – 13:00",
								"14:00 – 16:00",
								"16:00 – 18:00",
								"18:00 – 20:00"
							].map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: slot,
								children: slot
							}, slot))]
						})]
					})] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-wide text-foreground uppercase",
							children: "Notes (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "notes",
							rows: 3,
							maxLength: 600,
							className: "field mt-2",
							placeholder: "Where is the pain, and how long have you had it?"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "btn btn-primary mt-6 w-full sm:w-auto",
				children: mode === "booking" ? "Request my appointment" : "Send my enquiry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-muted-foreground",
				children: [
					"Your details are used only to contact you about your care at ",
					clinic.name,
					"."
				]
			})
		]
	});
}
//#endregion
export { LeadForm as t };
