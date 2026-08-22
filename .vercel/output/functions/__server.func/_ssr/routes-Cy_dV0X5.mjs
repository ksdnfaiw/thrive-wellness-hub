import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-fb1XWfch.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ClosingCta } from "./ClosingCta-D3am0iwM.mjs";
import { C as whyThrive, S as whatsappLink, _ as services, a as blogPosts, c as clinic, f as images, i as approach, m as insuranceTrustPoints, v as socials, x as trackEvent, y as stats } from "./router-DioQ2GDM.mjs";
import { a as Pill, c as Mail, d as CircleCheck, f as Brain, h as Activity, i as Scan, l as Droplets, m as Apple, n as Stethoscope, o as Phone, p as ArrowUpRight, r as ShieldCheck, s as MapPin, t as Syringe, u as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cy_dV0X5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var map = {
	"interventional-procedures": Syringe,
	"diagnostics-and-imaging": Scan,
	"physiotherapy-and-rehabilitation": Activity,
	"psychology-and-mental-wellness": Brain,
	nutrition: Apple,
	"wellness-therapies": Droplets,
	"in-house-pharmacy": Pill
};
function ServiceIcon({ slug, className = "h-5 w-5" }) {
	const Icon = map[slug] ?? Stethoscope;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className,
		strokeWidth: 1.6,
		"aria-hidden": "true",
		"data-tsd-source": "/src/components/ServiceIcon.tsx:25:10"
	});
}
function Marquee({ items, slow = false, className = "" }) {
	const loop = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `marquee overflow-hidden ${className}`,
		"aria-hidden": "true",
		"data-tsd-source": "/src/components/Marquee.tsx:13:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `marquee-track ${slow ? "marquee-slow" : ""}`,
			"data-tsd-source": "/src/components/Marquee.tsx:14:7",
			children: loop.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex shrink-0 items-center gap-6 pr-6",
				"data-tsd-source": "/src/components/Marquee.tsx:16:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"data-tsd-source": "/src/components/Marquee.tsx:17:13",
					children: item
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-1.5 w-1.5 rounded-full bg-lime",
					"data-tsd-source": "/src/components/Marquee.tsx:18:13"
				})]
			}, `${item}-${index}`))
		})
	});
}
var supportOptions = services.map((service) => service.title);
function ContactSection() {
	const [sent, setSent] = (0, import_react.useState)(null);
	const onSubmit = (event) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const support = form.getAll("support").map(String);
		const message = [
			"New enquiry from the website",
			`Name: ${form.get("firstName")} ${form.get("lastName")}`,
			`Email: ${form.get("email")}`,
			`Phone: ${form.get("phone")}`,
			`Location: ${form.get("location")}`,
			support.length ? `Support needed: ${support.join(", ")}` : "",
			form.get("message") ? `Message: ${form.get("message")}` : ""
		].filter(Boolean).join("\n");
		trackEvent("inquiry_form_submit", { location: "contact_section" });
		const link = whatsappLink(message);
		setSent(link);
		window.open(link, "_blank", "noopener,noreferrer");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t border-border bg-background",
		"data-tsd-source": "/src/components/ContactSection.tsx:37:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr] sm:py-24",
			"data-tsd-source": "/src/components/ContactSection.tsx:38:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				"data-tsd-source": "/src/components/ContactSection.tsx:39:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						"data-tsd-source": "/src/components/ContactSection.tsx:40:11",
						children: "Contact us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-lg mt-6",
						"data-tsd-source": "/src/components/ContactSection.tsx:41:11",
						children: [
							"Ready to take",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { "data-tsd-source": "/src/components/ContactSection.tsx:43:13" }),
							"the next step?"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
						"data-tsd-source": "/src/components/ContactSection.tsx:46:11",
						children: "Tell us a little about what you are experiencing. Our team will help you understand the next step."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-4 text-sm",
						"data-tsd-source": "/src/components/ContactSection.tsx:50:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								"data-tsd-source": "/src/components/ContactSection.tsx:51:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
									strokeWidth: 1.7,
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/ContactSection.tsx:52:15"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: clinic.phoneHref,
									className: "font-semibold text-deep",
									"data-tsd-source": "/src/components/ContactSection.tsx:53:15",
									children: clinic.phone
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								"data-tsd-source": "/src/components/ContactSection.tsx:57:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
									strokeWidth: 1.7,
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/ContactSection.tsx:58:15"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${clinic.email}`,
									className: "text-muted-foreground",
									"data-tsd-source": "/src/components/ContactSection.tsx:59:15",
									children: clinic.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								"data-tsd-source": "/src/components/ContactSection.tsx:63:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
									strokeWidth: 1.7,
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/ContactSection.tsx:64:15"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xs text-muted-foreground",
									"data-tsd-source": "/src/components/ContactSection.tsx:65:15",
									children: clinic.address
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								"data-tsd-source": "/src/components/ContactSection.tsx:67:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
									strokeWidth: 1.7,
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/ContactSection.tsx:68:15"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xs text-muted-foreground",
									"data-tsd-source": "/src/components/ContactSection.tsx:69:15",
									children: clinic.hoursNote
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						"data-tsd-source": "/src/components/ContactSection.tsx:73:11",
						children: socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: social.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-lg border border-border px-3 py-2 text-xs font-semibold tracking-wide text-deep uppercase transition-colors hover:bg-sand",
							"data-tsd-source": "/src/components/ContactSection.tsx:75:15",
							children: social.label
						}, social.label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				"data-tsd-source": "/src/components/ContactSection.tsx:88:9",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-flat p-6 sm:p-8",
					"data-tsd-source": "/src/components/ContactSection.tsx:90:13",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display-md",
							"data-tsd-source": "/src/components/ContactSection.tsx:91:15",
							children: "Request received"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							"data-tsd-source": "/src/components/ContactSection.tsx:92:15",
							children: [
								"Your enquiry has been opened in WhatsApp so it reaches our team on ",
								clinic.phone,
								". If the window did not open, use the button below."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							"data-tsd-source": "/src/components/ContactSection.tsx:97:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: sent,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn btn-primary",
								"data-tsd-source": "/src/components/ContactSection.tsx:98:17",
								children: "Confirm on WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSent(null),
								className: "btn btn-outline",
								"data-tsd-source": "/src/components/ContactSection.tsx:101:17",
								children: "Send another"
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "card-flat p-6 sm:p-8",
					"data-tsd-source": "/src/components/ContactSection.tsx:107:13",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							"data-tsd-source": "/src/components/ContactSection.tsx:108:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									"data-tsd-source": "/src/components/ContactSection.tsx:109:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold",
										"data-tsd-source": "/src/components/ContactSection.tsx:110:19",
										children: "First name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "firstName",
										autoComplete: "given-name",
										className: "field mt-2",
										placeholder: "Enter here",
										"data-tsd-source": "/src/components/ContactSection.tsx:111:19"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									"data-tsd-source": "/src/components/ContactSection.tsx:113:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold",
										"data-tsd-source": "/src/components/ContactSection.tsx:114:19",
										children: "Last name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "lastName",
										autoComplete: "family-name",
										className: "field mt-2",
										placeholder: "Enter here",
										"data-tsd-source": "/src/components/ContactSection.tsx:115:19"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									"data-tsd-source": "/src/components/ContactSection.tsx:117:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold",
										"data-tsd-source": "/src/components/ContactSection.tsx:118:19",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "email",
										name: "email",
										autoComplete: "email",
										className: "field mt-2",
										placeholder: "Enter here",
										"data-tsd-source": "/src/components/ContactSection.tsx:119:19"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									"data-tsd-source": "/src/components/ContactSection.tsx:121:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold",
										"data-tsd-source": "/src/components/ContactSection.tsx:122:19",
										children: "Phone number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "tel",
										name: "phone",
										autoComplete: "tel",
										pattern: "[0-9+\\s-]{8,20}",
										className: "field mt-2",
										placeholder: "Enter here",
										"data-tsd-source": "/src/components/ContactSection.tsx:123:19"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block sm:col-span-2",
									"data-tsd-source": "/src/components/ContactSection.tsx:133:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold",
										"data-tsd-source": "/src/components/ContactSection.tsx:134:19",
										children: "Location"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										name: "location",
										defaultValue: "Hyderabad",
										className: "field mt-2",
										"data-tsd-source": "/src/components/ContactSection.tsx:135:19",
										children: [
											"Hyderabad",
											"Secunderabad",
											"Telangana (outside Hyderabad)",
											"Andhra Pradesh",
											"Other city"
										].map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: city,
											"data-tsd-source": "/src/components/ContactSection.tsx:138:25",
											children: city
										}, city))
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "mt-7",
							"data-tsd-source": "/src/components/ContactSection.tsx:147:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "display-md",
								"data-tsd-source": "/src/components/ContactSection.tsx:148:17",
								children: "What kind of support are you looking for?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 space-y-3",
								"data-tsd-source": "/src/components/ContactSection.tsx:149:17",
								children: supportOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-3 text-sm",
									"data-tsd-source": "/src/components/ContactSection.tsx:151:21",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										name: "support",
										value: option,
										className: "h-4 w-4 accent-[var(--deep)]",
										"data-tsd-source": "/src/components/ContactSection.tsx:152:23"
									}), option]
								}, option))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-6 block",
							"data-tsd-source": "/src/components/ContactSection.tsx:159:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								"data-tsd-source": "/src/components/ContactSection.tsx:160:17",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								rows: 5,
								maxLength: 800,
								className: "field mt-2",
								placeholder: "Where is the pain, and how long have you had it?",
								"data-tsd-source": "/src/components/ContactSection.tsx:161:17"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn btn-primary mt-6 w-full sm:w-auto",
							"data-tsd-source": "/src/components/ContactSection.tsx:170:15",
							children: "Request an appointment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							"data-tsd-source": "/src/components/ContactSection.tsx:173:15",
							children: [
								"We use your details only to contact you about care at ",
								clinic.name,
								". ",
								services.length,
								" areas of care, one plan."
							]
						})
					]
				})
			})]
		})
	});
}
var interventionalProcedures = [
	"Neuromodulation",
	"Epiduroplasty",
	"Regenerative therapies",
	"Radiofrequency Ablation (RFA)",
	"Cryotherapy",
	"Ultrasound-guided injections"
];
var diagnosticCapabilities = [
	"In-house laboratory",
	"Digital X-ray",
	"Ultrasound",
	"Fluoroscopy / C-arm"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid items-center gap-10 py-10 lg:grid-cols-[1.02fr_1fr] lg:gap-14 lg:py-16",
			"data-tsd-source": "/src/routes/index.tsx:62:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				"data-tsd-source": "/src/routes/index.tsx:63:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						"data-tsd-source": "/src/routes/index.tsx:64:11",
						children: "Heal. Restore. Thrive."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-xl mt-6",
						"data-tsd-source": "/src/routes/index.tsx:65:11",
						children: "Advanced pain care. Integrated wellness. One place to heal."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base",
						"data-tsd-source": "/src/routes/index.tsx:66:11",
						children: "At Thrive, we bring physician-led interventional pain management and integrative wellness together under one roof. From diagnosis and minimally invasive procedures to physiotherapy, psychology, nutrition and advanced wellness therapies, every part of your care is designed around one goal: helping you move beyond pain and return to the life you want to live."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						"data-tsd-source": "/src/routes/index.tsx:72:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "btn btn-primary",
							"data-tsd-source": "/src/routes/index.tsx:73:13",
							children: "Book an appointment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappLink(),
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => trackEvent("whatsapp_click", { location: "hero" }),
							className: "btn btn-outline",
							"data-tsd-source": "/src/routes/index.tsx:76:13",
							children: "Talk to us on WhatsApp"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-xs tracking-[0.14em] text-muted-foreground uppercase",
						"data-tsd-source": "/src/routes/index.tsx:87:11",
						children: "Physician-led care · Personalised treatment · Multidisciplinary support"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				variant: "scale",
				"data-tsd-source": "/src/routes/index.tsx:92:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.hero,
					alt: "A pain physician assessing a patient in a calm, sunlit treatment room",
					fetchPriority: "high",
					decoding: "async",
					width: 1280,
					height: 1024,
					className: "aspect-4/3 w-full rounded-2xl object-cover",
					"data-tsd-source": "/src/routes/index.tsx:93:11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-[auto_1fr_auto]",
					"data-tsd-source": "/src/routes/index.tsx:102:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images.physio,
							alt: "Physiotherapist guiding a patient through a movement exercise",
							loading: "lazy",
							decoding: "async",
							className: "hidden h-24 w-24 rounded-xl object-cover sm:block",
							"data-tsd-source": "/src/routes/index.tsx:103:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-sand p-4",
							"data-tsd-source": "/src/routes/index.tsx:110:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xs font-bold tracking-[0.1em] uppercase",
								"data-tsd-source": "/src/routes/index.tsx:111:15",
								children: "One coordinated team"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								"data-tsd-source": "/src/routes/index.tsx:112:15",
								children: "Diagnosis, treatment, rehabilitation and wellness, planned together rather than separately."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images.procedureSuite,
							alt: "The image-guided procedure space at Thrive",
							loading: "lazy",
							decoding: "async",
							className: "hidden h-24 w-24 rounded-xl object-cover sm:block",
							"data-tsd-source": "/src/routes/index.tsx:116:13"
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 text-center sm:py-24",
			"data-tsd-source": "/src/routes/index.tsx:128:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				"data-tsd-source": "/src/routes/index.tsx:129:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						"data-tsd-source": "/src/routes/index.tsx:130:11",
						children: "A better way to manage pain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mx-auto mt-6 max-w-4xl",
						"data-tsd-source": "/src/routes/index.tsx:131:11",
						children: "Pain is personal. Your treatment should be too."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
						"data-tsd-source": "/src/routes/index.tsx:132:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-tsd-source": "/src/routes/index.tsx:133:13",
								children: "Persistent pain can affect far more than the body. It can change how you work, sleep, move, exercise and experience everyday life."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-tsd-source": "/src/routes/index.tsx:137:13",
								children: "At Thrive, we look beyond simply managing symptoms. We work to understand the underlying cause of your pain and create a personalised path towards relief, recovery and long-term wellbeing."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-tsd-source": "/src/routes/index.tsx:141:13",
								children: "Our approach combines advanced interventional pain care with rehabilitation, mental wellness, nutrition and supportive wellness therapies, creating a more complete experience of healing."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "btn btn-primary mt-8",
						"data-tsd-source": "/src/routes/index.tsx:146:11",
						children: "Explore our services"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				variant: "clip",
				className: "mt-12",
				"data-tsd-source": "/src/routes/index.tsx:151:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.procedureSuite,
					alt: "An image-guided procedure being performed at Thrive",
					loading: "lazy",
					decoding: "async",
					width: 1280,
					height: 720,
					className: "aspect-16/9 w-full rounded-2xl object-cover",
					"data-tsd-source": "/src/routes/index.tsx:152:11"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sand",
			"data-tsd-source": "/src/routes/index.tsx:165:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-16 sm:py-24",
				"data-tsd-source": "/src/routes/index.tsx:166:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-3xl",
					"data-tsd-source": "/src/routes/index.tsx:167:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow !bg-card",
						"data-tsd-source": "/src/routes/index.tsx:168:13",
						children: "Our approach"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-6",
						"data-tsd-source": "/src/routes/index.tsx:169:13",
						children: "Diagnose. Treat. Restore."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					"data-tsd-source": "/src/routes/index.tsx:171:11",
					children: approach.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 80,
						variant: "up",
						"data-tsd-source": "/src/routes/index.tsx:173:15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "card-flat h-full p-6",
							"data-tsd-source": "/src/routes/index.tsx:174:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-3xl font-bold text-deep/30",
									"data-tsd-source": "/src/routes/index.tsx:175:19",
									children: item.step
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display-md mt-3",
									"data-tsd-source": "/src/routes/index.tsx:176:19",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									"data-tsd-source": "/src/routes/index.tsx:177:19",
									children: item.detail
								})
							]
						})
					}, item.step))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 sm:py-24",
			"data-tsd-source": "/src/routes/index.tsx:186:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				"data-tsd-source": "/src/routes/index.tsx:187:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						"data-tsd-source": "/src/routes/index.tsx:188:11",
						children: "Our services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mx-auto mt-6 max-w-3xl",
						"data-tsd-source": "/src/routes/index.tsx:189:11",
						children: "Complete care. One coordinated team."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl text-sm text-muted-foreground",
						"data-tsd-source": "/src/routes/index.tsx:190:11",
						children: "Thrive brings multiple disciplines together so your care does not have to stop at pain relief."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				"data-tsd-source": "/src/routes/index.tsx:195:9",
				children: services.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 60,
					variant: "clip",
					"data-tsd-source": "/src/routes/index.tsx:197:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/$slug",
						params: { slug: service.slug },
						className: "group relative block h-full overflow-hidden rounded-2xl",
						"data-tsd-source": "/src/routes/index.tsx:198:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: service.image,
								alt: service.title,
								loading: "lazy",
								decoding: "async",
								width: 1024,
								height: 768,
								className: "aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105",
								"data-tsd-source": "/src/routes/index.tsx:203:17"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.03_158)] via-transparent to-transparent opacity-90",
								"data-tsd-source": "/src/routes/index.tsx:212:17"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-card/95 text-deep shadow-sm",
								"data-tsd-source": "/src/routes/index.tsx:213:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceIcon, {
									slug: service.slug,
									className: "h-5 w-5",
									"data-tsd-source": "/src/routes/index.tsx:214:19"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-lg bg-deep text-deep-foreground transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
								"data-tsd-source": "/src/routes/index.tsx:216:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "h-4 w-4",
									strokeWidth: 2,
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/index.tsx:217:19"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute inset-x-0 bottom-0 p-5 text-deep-foreground",
								"data-tsd-source": "/src/routes/index.tsx:219:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "display-md block",
									"data-tsd-source": "/src/routes/index.tsx:220:19",
									children: service.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-xs leading-relaxed opacity-85",
									"data-tsd-source": "/src/routes/index.tsx:221:19",
									children: service.short
								})]
							})
						]
					})
				}, service.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "overflow-hidden bg-deep py-6 text-deep-foreground",
			"data-tsd-source": "/src/routes/index.tsx:229:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
				items: services.map((service) => service.title),
				className: "font-display text-3xl font-bold uppercase sm:text-5xl",
				"data-tsd-source": "/src/routes/index.tsx:230:9"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid gap-10 py-16 lg:grid-cols-2 lg:items-center sm:py-24",
			"data-tsd-source": "/src/routes/index.tsx:237:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				"data-tsd-source": "/src/routes/index.tsx:238:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						"data-tsd-source": "/src/routes/index.tsx:239:11",
						children: "Interventional pain care"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-6",
						"data-tsd-source": "/src/routes/index.tsx:240:11",
						children: "Precision treatment. Minimal disruption."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base",
						"data-tsd-source": "/src/routes/index.tsx:241:11",
						children: "When conventional approaches are not enough, interventional pain management can provide a targeted path towards relief. Every procedure begins with appropriate assessment and diagnosis, followed by a treatment plan tailored to the individual."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-2 sm:grid-cols-2",
						"data-tsd-source": "/src/routes/index.tsx:246:11",
						children: interventionalProcedures.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-sm",
							"data-tsd-source": "/src/routes/index.tsx:248:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
								strokeWidth: 1.7,
								"aria-hidden": "true",
								"data-tsd-source": "/src/routes/index.tsx:249:17"
							}), item]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services/$slug",
						params: { slug: "interventional-procedures" },
						className: "btn btn-primary mt-8",
						"data-tsd-source": "/src/routes/index.tsx:254:11",
						children: "Explore pain procedures"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				variant: "clip",
				"data-tsd-source": "/src/routes/index.tsx:262:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.procedureSuite,
					alt: "Procedure suite equipped with C-arm fluoroscopy",
					loading: "lazy",
					decoding: "async",
					width: 1024,
					height: 768,
					className: "aspect-4/3 w-full rounded-2xl object-cover",
					"data-tsd-source": "/src/routes/index.tsx:263:11"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sand",
			"data-tsd-source": "/src/routes/index.tsx:276:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-10 py-16 lg:grid-cols-2 lg:items-center sm:py-24",
				"data-tsd-source": "/src/routes/index.tsx:277:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "clip",
					className: "order-2 lg:order-1",
					"data-tsd-source": "/src/routes/index.tsx:278:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.diagnostics,
						alt: "In-house diagnostics with digital X-ray and ultrasound",
						loading: "lazy",
						decoding: "async",
						width: 1024,
						height: 768,
						className: "aspect-4/3 w-full rounded-2xl object-cover",
						"data-tsd-source": "/src/routes/index.tsx:279:13"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					className: "order-1 lg:order-2",
					"data-tsd-source": "/src/routes/index.tsx:289:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow !bg-card",
							"data-tsd-source": "/src/routes/index.tsx:290:13",
							children: "Diagnosis & imaging"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-6",
							"data-tsd-source": "/src/routes/index.tsx:291:13",
							children: "Better diagnosis. Better decisions."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base",
							"data-tsd-source": "/src/routes/index.tsx:292:13",
							children: "Effective pain management starts with understanding what is causing the pain. Thrive provides access to diagnostic and imaging capabilities that support accurate assessment and help our medical team make informed treatment decisions."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-2 sm:grid-cols-2",
							"data-tsd-source": "/src/routes/index.tsx:297:13",
							children: diagnosticCapabilities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-sm",
								"data-tsd-source": "/src/routes/index.tsx:299:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
									strokeWidth: 1.7,
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/index.tsx:300:19"
								}), item]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: "diagnostics-and-imaging" },
							className: "btn btn-primary mt-8",
							"data-tsd-source": "/src/routes/index.tsx:305:13",
							children: "Explore diagnostics"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 sm:py-24",
			"data-tsd-source": "/src/routes/index.tsx:313:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				"data-tsd-source": "/src/routes/index.tsx:314:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					"data-tsd-source": "/src/routes/index.tsx:315:11",
					children: "Why Thrive"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mx-auto mt-6 max-w-3xl",
					"data-tsd-source": "/src/routes/index.tsx:316:11",
					children: "Medical expertise. Human care. A more complete approach."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				"data-tsd-source": "/src/routes/index.tsx:320:9",
				children: whyThrive.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 70,
					variant: "up",
					"data-tsd-source": "/src/routes/index.tsx:322:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-soft h-full p-6",
						"data-tsd-source": "/src/routes/index.tsx:323:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display-md",
							"data-tsd-source": "/src/routes/index.tsx:324:17",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							"data-tsd-source": "/src/routes/index.tsx:325:17",
							children: item.detail
						})]
					})
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-deep text-deep-foreground",
			"data-tsd-source": "/src/routes/index.tsx:333:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-10 py-16 lg:grid-cols-2 lg:items-center sm:py-24",
				"data-tsd-source": "/src/routes/index.tsx:334:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					"data-tsd-source": "/src/routes/index.tsx:335:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-[0.18em] uppercase opacity-70",
							"data-tsd-source": "/src/routes/index.tsx:336:13",
							children: "Physician-led"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-6",
							"data-tsd-source": "/src/routes/index.tsx:337:13",
							children: "Care led by medical expertise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed opacity-80 sm:text-base",
							"data-tsd-source": "/src/routes/index.tsx:338:13",
							children: "Thrive is built around physician-led pain management and regenerative care, supported by a multidisciplinary team working towards a shared goal: better outcomes and a better quality of life."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/doctors",
							className: "btn btn-lime mt-8",
							"data-tsd-source": "/src/routes/index.tsx:342:13",
							children: "Meet our doctors & team"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					variant: "clip",
					"data-tsd-source": "/src/routes/index.tsx:346:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.psychology,
						alt: "A consultation room at Thrive Pain and Wellness Clinic",
						loading: "lazy",
						decoding: "async",
						width: 1024,
						height: 768,
						className: "aspect-4/3 w-full rounded-2xl object-cover",
						"data-tsd-source": "/src/routes/index.tsx:347:13"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 sm:py-24",
			"data-tsd-source": "/src/routes/index.tsx:361:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-3xl",
					"data-tsd-source": "/src/routes/index.tsx:362:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							"data-tsd-source": "/src/routes/index.tsx:363:11",
							children: "The facility"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-6",
							"data-tsd-source": "/src/routes/index.tsx:364:11",
							children: "A space designed for healing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base",
							"data-tsd-source": "/src/routes/index.tsx:365:11",
							children: "Thrive brings clinical care and a calm, considered environment together across a 4,000 sq. ft. facility. Every element is designed to make the experience of seeking treatment feel more comfortable, focused and reassuring, from consultation and diagnostics to procedures, rehabilitation and wellness."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gallery",
							className: "btn btn-outline mt-8",
							"data-tsd-source": "/src/routes/index.tsx:370:11",
							children: "Explore our facility"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					"data-tsd-source": "/src/routes/index.tsx:374:9",
					children: [
						{
							src: images.reception,
							alt: "Reception and waiting area"
						},
						{
							src: images.physio,
							alt: "Physiotherapy and rehabilitation space"
						},
						{
							src: images.wellness,
							alt: "Wellness therapy room"
						}
					].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 70,
						variant: "clip",
						"data-tsd-source": "/src/routes/index.tsx:380:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.src,
							alt: item.alt,
							loading: "lazy",
							decoding: "async",
							width: 1024,
							height: 768,
							className: "aspect-4/3 w-full rounded-2xl object-cover",
							"data-tsd-source": "/src/routes/index.tsx:381:15"
						})
					}, item.alt))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4",
					"data-tsd-source": "/src/routes/index.tsx:393:9",
					children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-soft p-5",
						"data-tsd-source": "/src/routes/index.tsx:395:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display text-2xl font-bold text-deep",
							"data-tsd-source": "/src/routes/index.tsx:396:15",
							children: stat.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-xs text-muted-foreground",
							"data-tsd-source": "/src/routes/index.tsx:397:15",
							children: stat.label
						})]
					}, stat.label))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sand",
			"data-tsd-source": "/src/routes/index.tsx:404:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x py-16 text-center sm:py-24",
				"data-tsd-source": "/src/routes/index.tsx:405:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					"data-tsd-source": "/src/routes/index.tsx:406:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow !bg-card",
							"data-tsd-source": "/src/routes/index.tsx:407:13",
							children: "Testimonials"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mx-auto mt-6 max-w-3xl",
							"data-tsd-source": "/src/routes/index.tsx:408:13",
							children: "Hear from people who chose to Thrive"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground",
							"data-tsd-source": "/src/routes/index.tsx:409:13",
							children: "Real experiences from patients who have trusted Thrive with their journey towards better health and wellbeing."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gallery",
							className: "btn btn-primary mt-8",
							"data-tsd-source": "/src/routes/index.tsx:413:13",
							children: "Read patient stories"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-xl text-xs text-muted-foreground",
							"data-tsd-source": "/src/routes/index.tsx:416:13",
							children: "Patient stories are published only after receiving appropriate permission. Verified testimonials will appear here."
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16 sm:py-20",
			"data-tsd-source": "/src/routes/index.tsx:425:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "card-flat grid gap-8 p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center",
				"data-tsd-source": "/src/routes/index.tsx:426:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-tsd-source": "/src/routes/index.tsx:427:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							"data-tsd-source": "/src/routes/index.tsx:428:13",
							children: "Insurance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-5 text-2xl",
							"data-tsd-source": "/src/routes/index.tsx:429:13",
							children: "Care with greater clarity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							"data-tsd-source": "/src/routes/index.tsx:430:13",
							children: "We believe understanding the financial side of treatment should be as straightforward as understanding the treatment itself. Thrive works with empanelled insurers and TPAs to help eligible patients navigate the cashless process."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/insurance",
							className: "btn btn-primary mt-6",
							"data-tsd-source": "/src/routes/index.tsx:435:13",
							children: "View insurance & billing"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3 sm:grid-cols-2",
					"data-tsd-source": "/src/routes/index.tsx:439:11",
					children: insuranceTrustPoints.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold",
						"data-tsd-source": "/src/routes/index.tsx:441:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							className: "h-4 w-4 shrink-0 text-primary",
							strokeWidth: 1.7,
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/index.tsx:442:17"
						}), point]
					}, point))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, { "data-tsd-source": "/src/routes/index.tsx:450:7" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 sm:py-24",
			"data-tsd-source": "/src/routes/index.tsx:453:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "flex flex-wrap items-end justify-between gap-4",
				"data-tsd-source": "/src/routes/index.tsx:454:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-tsd-source": "/src/routes/index.tsx:455:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						"data-tsd-source": "/src/routes/index.tsx:456:13",
						children: "The Thrive Journal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-6 max-w-2xl",
						"data-tsd-source": "/src/routes/index.tsx:457:13",
						children: "Insight to help you understand your health."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/blog",
					className: "btn btn-outline",
					"data-tsd-source": "/src/routes/index.tsx:459:11",
					children: "Explore the journal"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				"data-tsd-source": "/src/routes/index.tsx:464:9",
				children: blogPosts.map((post, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 80,
					variant: "clip",
					"data-tsd-source": "/src/routes/index.tsx:466:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: post.slug },
						className: "card-soft flex h-full flex-col overflow-hidden",
						"data-tsd-source": "/src/routes/index.tsx:467:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: post.image,
							alt: post.title,
							loading: "lazy",
							decoding: "async",
							className: "aspect-16/10 w-full object-cover",
							"data-tsd-source": "/src/routes/index.tsx:472:17"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-5",
							"data-tsd-source": "/src/routes/index.tsx:479:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display-md",
									"data-tsd-source": "/src/routes/index.tsx:480:19",
									children: post.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm text-muted-foreground",
									"data-tsd-source": "/src/routes/index.tsx:481:19",
									children: post.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 border-t border-border pt-4 text-xs text-muted-foreground",
									"data-tsd-source": "/src/routes/index.tsx:482:19",
									children: [
										post.author,
										" · ",
										post.displayDate
									]
								})
							]
						})]
					})
				}, post.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, { "data-tsd-source": "/src/routes/index.tsx:492:7" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "sr-only",
			"data-tsd-source": "/src/routes/index.tsx:494:7",
			children: [
				clinic.name,
				", ",
				clinic.address,
				". ",
				clinic.brandLine
			]
		})
	] });
}
//#endregion
export { Home as component };
