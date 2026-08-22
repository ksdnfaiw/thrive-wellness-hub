import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-fb1XWfch.mjs";
import { t as PageHero } from "./PageHero-D7KLyM79.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ClosingCta } from "./ClosingCta-D3am0iwM.mjs";
import { b as teamDisciplines, l as doctors } from "./router-DioQ2GDM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctors-DjaIy3vG.js
var import_jsx_runtime = require_jsx_runtime();
function Doctors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Doctors & team",
			title: "Expertise",
			accent: "that listens.",
			description: "At Thrive, medical expertise is combined with a multidisciplinary approach to care. Our team brings together professionals across pain management, rehabilitation, psychology, nutrition and wellness, working together to support the individual behind the condition.",
			"data-tsd-source": "/src/routes/doctors.tsx:44:7"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 sm:py-20",
			"data-tsd-source": "/src/routes/doctors.tsx:51:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					"data-tsd-source": "/src/routes/doctors.tsx:52:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						"data-tsd-source": "/src/routes/doctors.tsx:53:11",
						children: "Meet our team"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-5 text-2xl",
						"data-tsd-source": "/src/routes/doctors.tsx:54:11",
						children: "Physician-led pain and regenerative care"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-5 lg:grid-cols-[1.1fr_1fr]",
					"data-tsd-source": "/src/routes/doctors.tsx:57:9",
					children: [doctors.map((doctor) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						"data-tsd-source": "/src/routes/doctors.tsx:59:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-soft h-full p-7",
							"data-tsd-source": "/src/routes/doctors.tsx:60:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": "true",
									className: "grid h-16 w-16 place-items-center rounded-full bg-secondary font-display text-xl font-bold text-secondary-foreground",
									"data-tsd-source": "/src/routes/doctors.tsx:61:17",
									children: "D"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-xl font-semibold",
									"data-tsd-source": "/src/routes/doctors.tsx:67:17",
									children: doctor.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs font-semibold tracking-[0.14em] text-primary uppercase",
									"data-tsd-source": "/src/routes/doctors.tsx:68:17",
									children: doctor.specialty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed",
									"data-tsd-source": "/src/routes/doctors.tsx:71:17",
									children: doctor.bio
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-6 space-y-3 text-sm text-muted-foreground",
									"data-tsd-source": "/src/routes/doctors.tsx:72:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-tsd-source": "/src/routes/doctors.tsx:73:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-xs font-semibold tracking-[0.16em] text-deep uppercase",
											"data-tsd-source": "/src/routes/doctors.tsx:74:21",
											children: "Qualifications"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1",
											"data-tsd-source": "/src/routes/doctors.tsx:75:21",
											children: doctor.qualifications
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-tsd-source": "/src/routes/doctors.tsx:77:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-xs font-semibold tracking-[0.16em] text-deep uppercase",
											"data-tsd-source": "/src/routes/doctors.tsx:78:21",
											children: "Experience"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1",
											"data-tsd-source": "/src/routes/doctors.tsx:79:21",
											children: doctor.experience
										})]
									})]
								})
							]
						})
					}, doctor.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 90,
						"data-tsd-source": "/src/routes/doctors.tsx:86:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-flat h-full p-7",
							"data-tsd-source": "/src/routes/doctors.tsx:87:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display-md",
								"data-tsd-source": "/src/routes/doctors.tsx:88:15",
								children: "Our multidisciplinary team"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-5",
								"data-tsd-source": "/src/routes/doctors.tsx:89:15",
								children: teamDisciplines.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									"data-tsd-source": "/src/routes/doctors.tsx:91:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										"data-tsd-source": "/src/routes/doctors.tsx:92:21",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										"data-tsd-source": "/src/routes/doctors.tsx:93:21",
										children: item.detail
									})]
								}, item.title))
							})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					className: "mt-12 max-w-2xl",
					"data-tsd-source": "/src/routes/doctors.tsx:101:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg text-2xl",
							"data-tsd-source": "/src/routes/doctors.tsx:102:11",
							children: "One team. One care journey."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							"data-tsd-source": "/src/routes/doctors.tsx:103:11",
							children: "Different expertise, one shared goal: helping you heal, restore and thrive."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "btn btn-primary mt-6",
							"data-tsd-source": "/src/routes/doctors.tsx:106:11",
							children: "Book a consultation"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-xs text-muted-foreground",
					"data-tsd-source": "/src/routes/doctors.tsx:111:9",
					children: "Team photographs and verified credentials will be added as confirmed by the clinic."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, { "data-tsd-source": "/src/routes/doctors.tsx:116:7" })
	] });
}
//#endregion
export { Doctors as component };
