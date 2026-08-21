import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-jswzWroC.mjs";
import { t as PageHero } from "./PageHero-Bh_kqYOl.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ClosingCta } from "./ClosingCta-CirgJkai.mjs";
import { f as images, g as philosophy, h as missionVision, o as careModel, u as facilityHighlights, y as stats } from "./router-CYUzs4y0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CDGAnHEI.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: "Who we are",
			title: "A different approach to pain.",
			accent: "A more complete approach to wellness.",
			description: "Thrive Pain & Wellness Clinic was created with a simple belief: effective pain care should look beyond the pain itself.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/doctors",
				className: "btn btn-primary",
				children: "Meet our doctors"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/gallery",
				className: "btn btn-outline",
				children: "See the facility"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x grid gap-12 py-20 lg:grid-cols-2 lg:items-center sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-lg",
				children: "Care brought together, not scattered."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-5 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We bring physician-led interventional pain management together with physiotherapy, psychology, nutrition and advanced wellness therapies to create a more connected approach to healing." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Instead of treating each part of your wellbeing separately, Thrive brings different areas of care together under one roof, allowing your treatment journey to be more coordinated, personalised and focused on what matters most: your quality of life." })]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.wellness,
					alt: "A quiet wellness therapy room at Thrive",
					loading: "lazy",
					decoding: "async",
					width: 1024,
					height: 1280,
					className: "aspect-4/5 w-full rounded-[2rem] object-cover"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-20 sm:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Our philosophy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-6",
						children: "Heal. Restore. Thrive."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-8 md:grid-cols-3",
					children: philosophy.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: index * 80,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg leading-relaxed",
							children: item.detail
						})]
					}, item.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20 sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Mission & vision"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-6",
					children: "Why Thrive exists."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 lg:grid-cols-2",
				children: missionVision.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-soft h-full p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display-md",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground",
								children: item.detail
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 border-l-2 border-primary pl-4 text-base leading-relaxed text-deep",
								children: item.quote
							})
						]
					})
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20 sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "More than pain relief"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-6",
						children: "Because feeling better is only the beginning."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground",
						children: "Chronic pain can influence your physical health, emotional wellbeing, sleep, work and relationships. That is why our approach extends beyond procedures."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: careModel.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 70,
					variant: "up",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-soft h-full p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display-md",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: item.detail
						})]
					})
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-20 sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow !bg-card",
								children: "Our facility"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-lg mt-6",
								children: "4,000 sq. ft. of integrated care."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-muted-foreground",
								children: "Thrive is designed as a complete destination for pain management and wellness. The facility brings together consultation, diagnostics, procedures, rehabilitation and wellness services in a thoughtfully designed environment that balances clinical confidence with calm."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/gallery",
								className: "btn btn-primary mt-8",
								children: "Explore our gallery"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								src: images.recovery,
								alt: "Dedicated recovery room at Thrive"
							},
							{
								src: images.wellness,
								alt: "Wellness treatment room for IV-based therapies"
							},
							{
								src: images.physio,
								alt: "Physiotherapy and rehabilitation space"
							}
						].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: index * 70,
							variant: "clip",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.src,
								alt: item.alt,
								loading: "lazy",
								decoding: "async",
								width: 1024,
								height: 768,
								className: "aspect-4/3 w-full rounded-3xl object-cover"
							})
						}, item.alt))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: facilityHighlights.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: index * 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "card-flat h-full p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: item.detail
								})]
							})
						}, item.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4",
						children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-flat p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-2xl font-bold text-deep",
								children: stat.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-xs text-muted-foreground",
								children: stat.label
							})]
						}, stat.label))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {})
	] });
}
//#endregion
export { About as component };
