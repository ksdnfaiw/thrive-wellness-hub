import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, j as notFound, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as __exportAll } from "./ssr.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-DoFcCHA9.js
var page_3_default = "/assets/page_3-DNPQWerZ.jpg";
var page_8_default = "/assets/page_8-BzYUhQqi.jpg";
var page_15_default = "/assets/page_15-BwhAGptD.jpg";
var page_7_default = "/assets/page_7-DKIOooKR.jpg";
var page_17_default = "/assets/page_17-CZYJZNxu.jpg";
var page_2_default = "/assets/page_2-DODLuntn.jpg";
var page_16_default = "/assets/page_16-DxeeJGcV.jpg";
var page_12_default = "/assets/page_12-C9OAHPmZ.jpg";
var page_11_default = "/assets/page_11-CyLo0JYQ.jpg";
var page_5_default = "/assets/page_5-D4O2-00f.jpg";
var page_6_default = "/assets/page_6-DRBIiB_J.jpg";
var page_9_default = "/assets/page_9-CHiXIi5U.jpg";
var page_14_default = "/assets/page_14-B7_bd-C1.jpg";
var page_18_default = "/assets/page_18-vSkGQlZu.jpg";
var clinic = {
	name: "Thrive Pain Clinic, Wellness & More",
	shortName: "Thrive",
	brandLine: "Heal. Restore. Thrive.",
	tagline: "Your pain ends here. Your life begins.",
	phone: "+91 86395 09446",
	phoneHref: "tel:+918639509446",
	whatsapp: "918639509446",
	email: "adashealthcare@gmail.com",
	bookingEmail: "adashealthcare@gmail.com",
	address: "4th Floor, Bharathi Square, Plot No. 58, Sy No. 5/3, Nandi Hills, Raidurg, Cyberabad, Raidurgam, Shaikpet, Hyderabad, Telangana 500081",
	locality: "Raidurgam, Hyderabad",
	mapsQuery: "Bharathi Square, Nandi Hills, Raidurgam, Shaikpet, Hyderabad, Telangana 500081",
	hoursNote: "Monday to Saturday, 9:00 am to 6:00 pm. Sunday by appointment.",
	hours: [{
		days: "Monday to Saturday",
		time: "9:00 am to 6:00 pm"
	}, {
		days: "Sunday",
		time: "By appointment"
	}]
};
var whatsappLink = (message = "Hello Thrive, I would like to book an appointment.") => `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
var images = {
	hero: page_3_default,
	procedureSuite: page_8_default,
	physio: page_15_default,
	psychology: page_7_default,
	wellness: page_17_default,
	reception: page_2_default,
	diagnostics: page_16_default,
	nutrition: page_12_default,
	lounge: page_11_default,
	corridor: page_5_default,
	consultation: page_6_default,
	recovery: page_9_default,
	rehab: page_14_default,
	massage: page_18_default,
	therapyRoom: page_16_default
};
var services = [
	{
		slug: "interventional-procedures",
		title: "Interventional Pain Procedures",
		short: "Advanced, minimally invasive treatments that target specific sources of chronic pain with precision.",
		intro: "When pain continues despite conventional treatment, interventional pain management can offer targeted, minimally invasive options. Every procedure begins with appropriate assessment and diagnosis, followed by a treatment plan tailored to the individual.",
		image: page_8_default,
		highlights: [
			"Neuromodulation: techniques that work on pain signalling pathways for selected chronic pain conditions",
			"Epiduroplasty: a minimally invasive option for selected spinal conditions",
			"Regenerative therapies: approaches that support the body's natural healing where clinically appropriate",
			"Radiofrequency Ablation (RFA): controlled radiofrequency energy to reduce pain signals from specific nerves",
			"Cryotherapy: controlled cold-based techniques for selected pain-management applications",
			"Ultrasound-guided injections: image guidance for precise delivery of treatment"
		],
		journey: [
			{
				stage: "Diagnosis",
				detail: "We begin by understanding the condition, your history and how it affects daily life, then identify the most appropriate treatment approach."
			},
			{
				stage: "Treatment",
				detail: "Where an intervention is recommended, the procedure is planned with precision and explained clearly before treatment."
			},
			{
				stage: "Recovery",
				detail: "Recovery and rehabilitation are considered part of the wider care journey, with support from physiotherapy and our wider team."
			}
		]
	},
	{
		slug: "diagnostics-and-imaging",
		title: "Diagnostics & Imaging",
		short: "In-house diagnostic and imaging capabilities that support accurate assessment and treatment planning.",
		intro: "Accurate diagnosis is the foundation of effective pain management. Thrive provides in-house diagnostic and imaging support to help our clinical team assess conditions and plan appropriate treatment.",
		image: page_16_default,
		highlights: [
			"In-house laboratory for convenient access to diagnostic services",
			"Digital X-ray for evaluating bones, joints and other relevant structures",
			"Ultrasound for real-time assessment and selected image-guided procedures",
			"Fluoroscopy and C-arm imaging support for precise interventional procedures"
		],
		journey: [
			{
				stage: "Assessment",
				detail: "Your physician identifies which investigations are relevant to your condition."
			},
			{
				stage: "Imaging",
				detail: "Tests are carried out within the facility and reviewed with you."
			},
			{
				stage: "Decisions",
				detail: "Findings inform the treatment plan and stay on your record for follow-up."
			}
		]
	},
	{
		slug: "physiotherapy-and-rehabilitation",
		title: "Physiotherapy & Rehabilitation",
		short: "Personalised programs designed to restore movement, strength, function and confidence.",
		intro: "Pain relief is only one part of recovery. Our personalised physiotherapy and rehabilitation programs help restore movement, improve strength, rebuild function and support your return to everyday activities. Your program is adapted to your condition, physical capacity and recovery goals.",
		image: page_15_default,
		highlights: [
			"Restoring mobility",
			"Improving strength",
			"Building functional movement",
			"Supporting recovery after treatment",
			"Improving confidence in movement",
			"Reducing the impact of recurring pain"
		],
		journey: [
			{
				stage: "Assessment",
				detail: "Movement and strength are assessed to establish your starting point."
			},
			{
				stage: "Program",
				detail: "Guided sessions with clear, progressive goals suited to your capacity."
			},
			{
				stage: "Maintenance",
				detail: "A home program and reviews help protect your progress over time."
			}
		]
	},
	{
		slug: "psychology-and-mental-wellness",
		title: "Psychology & Mental Wellness",
		short: "Professional support recognising the connection between chronic pain, emotional wellbeing and quality of life.",
		intro: "Living with persistent pain can affect mood, sleep, confidence, relationships and everyday life. With professional support, patients can develop healthier ways to understand and manage the psychological impact of chronic pain while building greater confidence in their recovery journey.",
		image: page_7_default,
		highlights: [
			"Support for the emotional impact of persistent pain",
			"Strategies for sleep, stress and low mood",
			"Confidence building through recovery",
			"Support for families and caregivers"
		],
		journey: [
			{
				stage: "Consultation",
				detail: "A confidential first session to understand your history and goals."
			},
			{
				stage: "Support",
				detail: "Structured sessions delivered alongside your medical treatment."
			},
			{
				stage: "Review",
				detail: "Progress is reviewed as part of one coordinated care plan."
			}
		]
	},
	{
		slug: "nutrition",
		title: "Nutrition",
		short: "Personalised nutritional guidance to support recovery, energy, metabolic health and overall wellbeing.",
		intro: "Nutrition plays an important role in overall health, energy, recovery and long-term wellbeing. Our nutrition support focuses on personalised guidance based on your individual needs rather than generic diet plans, making healthier choices practical and sustainable.",
		image: page_12_default,
		highlights: [
			"Guidance built around your routine and preferences",
			"Support for recovery and energy levels",
			"Weight and metabolic health support",
			"Practical, sustainable everyday changes"
		],
		journey: [
			{
				stage: "Assessment",
				detail: "A review of your health, routine and current eating patterns."
			},
			{
				stage: "Plan",
				detail: "A realistic plan that fits your household and lifestyle."
			},
			{
				stage: "Follow-up",
				detail: "Regular check-ins to adjust as your needs change."
			}
		]
	},
	{
		slug: "wellness-therapies",
		title: "Wellness Therapies",
		short: "Evidence-informed therapies designed to complement clinical care and support recovery and wellbeing.",
		intro: "Our wellness therapies are designed to complement clinical care and support overall wellbeing. They are selected according to individual needs and are intended to complement, not replace, appropriate medical care.",
		image: page_17_default,
		highlights: [
			"Ozonation: controlled, medically guided ozone-based approaches where appropriate",
			"Hydration: therapies that support the body's hydration and recovery needs",
			"Blood circulation: support for healthy circulation and overall physiological wellbeing"
		],
		journey: [
			{
				stage: "Consultation",
				detail: "We confirm which therapies are safe and suitable for your condition."
			},
			{
				stage: "Session",
				detail: "Therapies are delivered in a calm, private setting within the clinic."
			},
			{
				stage: "Rhythm",
				detail: "A recommended cadence that fits your stage of treatment."
			}
		]
	},
	{
		slug: "in-house-pharmacy",
		title: "In-House Pharmacy",
		short: "Convenient access to prescribed medications and healthcare essentials as part of connected care.",
		intro: "Your treatment journey should be simple from consultation to recovery. Our in-house pharmacy provides convenient access to prescribed medications and healthcare essentials, helping keep important parts of your care connected under one roof.",
		image: page_2_default,
		highlights: [
			"Prescribed medication available on site",
			"Guidance on how and when to take your medication",
			"Support for ongoing and repeat prescriptions",
			"Healthcare essentials and supports"
		],
		journey: [
			{
				stage: "Prescription",
				detail: "Your clinician's prescription is shared directly with our pharmacy."
			},
			{
				stage: "Dispensing",
				detail: "Medication is dispensed with clear instructions before you leave."
			},
			{
				stage: "Continuity",
				detail: "Ongoing prescriptions are supported as your plan progresses."
			}
		]
	}
];
var approach = [
	{
		step: "01",
		title: "Understand",
		detail: "Every journey begins with understanding your pain, your medical history, your lifestyle and how your condition affects your everyday life."
	},
	{
		step: "02",
		title: "Treat",
		detail: "When appropriate, advanced minimally invasive and image-guided interventions are used to target the source of pain with precision."
	},
	{
		step: "03",
		title: "Restore",
		detail: "Pain relief is only part of the journey. Physiotherapy, rehabilitation, psychology and nutrition can help you regain movement, confidence and function."
	},
	{
		step: "04",
		title: "Thrive",
		detail: "The goal is not simply to feel better today. It is to help you build a healthier, more active life beyond pain."
	}
];
var whyThrive = [
	{
		title: "Physician-Led",
		detail: "Your care is guided by medical expertise, clinical assessment and evidence-informed treatment decisions."
	},
	{
		title: "Personalised",
		detail: "There is no one-size-fits-all approach to pain. Your treatment is shaped around your condition, history, needs and goals."
	},
	{
		title: "Multidisciplinary",
		detail: "Our integrated approach brings together pain management, physiotherapy, psychology, nutrition and wellness."
	},
	{
		title: "Advanced",
		detail: "We combine modern diagnostic capabilities with minimally invasive procedures and contemporary wellness therapies."
	},
	{
		title: "One Roof",
		detail: "From diagnosis and treatment to rehabilitation and supportive care, multiple aspects of your healing journey can happen in one place."
	},
	{
		title: "Designed Around You",
		detail: "Our goal is not just to reduce pain. It is to help you restore movement, confidence and quality of life."
	}
];
var philosophy = [
	{
		title: "Heal",
		detail: "Understand the source of your pain and address it with the right clinical approach."
	},
	{
		title: "Restore",
		detail: "Rebuild movement, strength, confidence and everyday function through personalised rehabilitation and supportive care."
	},
	{
		title: "Thrive",
		detail: "Move beyond simply managing symptoms and work towards a healthier, more active life."
	}
];
var careModel = [
	{
		title: "Pain Management",
		detail: "Advanced medical assessment and interventional treatments."
	},
	{
		title: "Physiotherapy & Rehabilitation",
		detail: "Support for movement, strength and recovery."
	},
	{
		title: "Psychology & Mental Wellness",
		detail: "Care for the emotional and psychological impact of pain."
	},
	{
		title: "Nutrition",
		detail: "Personalised guidance to support overall health and recovery."
	},
	{
		title: "Wellness Therapies",
		detail: "Complementary therapies designed to support wellbeing."
	}
];
var doctors = [{
	name: "Dr. S Dheeraj Kumar",
	qualifications: "MBBS, MD (Anaesthesia), FIAPM (Fellowship in Interventional Pain Management)",
	specialty: "Interventional Pain & Palliative Care Specialist",
	bio: "Dr. Dheeraj Kumar is an interventional pain and palliative care specialist with a strong foundation in anaesthesia and advanced non-surgical pain interventions. He manages chronic spine, joint, neuropathic and cancer-related pain using evidence-based interventional, molecular and regenerative therapies, with a focus on minimally invasive techniques that reduce surgical referrals and long-term opioid dependence. He is a consultant in pain and palliative care at Renova Hospitals, Hyderabad, and a visiting consultant across the Warangal, Bidar, Nirmal and Karimnagar districts.",
	experience: "Interventional pain management consultant since 2022, following senior residency in anaesthesia at ESI Medical College (2019 to 2022). MD Anaesthesia, Bangalore Medical College & Research Institute.",
	expertise: [
		"Chronic low back pain and sciatica",
		"Cervical and lumbar disc disorders",
		"Knee osteoarthritis and joint pain",
		"Neuropathic pain including trigeminal neuralgia, diabetic neuropathy and PHN",
		"Cancer pain and palliative care",
		"Non-surgical spine and joint interventions"
	],
	recognition: [
		"Abdul Kalam Medical Excellence Award, 2024",
		"ISTA Heal Excellency Award in Pain Management, 2025",
		"Faculty, ISACON Karnataka 2024",
		"3 published papers and 4 posters"
	]
}, {
	name: "Dr. Anahita Reddy",
	qualifications: "MD (Anesthesiology), FIPM, FIRM",
	specialty: "Pain, Regenerative & Palliative Medicine Specialist",
	bio: "Dr. Anahita Reddy is an anaesthesiologist and pain physician with formal training in interventional pain, regenerative medicine and palliative medicine. She is skilled in ultrasound-guided procedures, selective nerve root blocks, sports injury interventions, headache management and symptom control in advanced illness. She consults in English, Telugu and Hindi.",
	experience: "Fellow in Interventional Pain & Regenerative Medicine at Synapse Pain & Spine Clinic, Chennai, performing ultrasound and fluoroscopy-guided spine and joint interventions. Previously anaesthesiologist at Sparsh Hospice, supporting comfort-focused palliative care. Currently completing a fellowship in palliative medicine.",
	expertise: [
		"Selective nerve root blocks, facet and SI joint injections",
		"Epidural, caudal and transforaminal injections",
		"PRP, prolotherapy and regenerative joint therapies",
		"Headache interventions including occipital and SPG blocks",
		"Regional and general anaesthesia, POCUS",
		"Symptom management in palliative care"
	],
	recognition: [
		"ISACON Telangana 2023, poster presentation",
		"ISACON AP 2023, paper on TAP block study",
		"ECMO Excellence, 2023",
		"POCUS Workshop, 2022"
	]
}];
var teamDisciplines = [
	{
		title: "Physiotherapy & Rehabilitation",
		detail: "Professionals focused on restoring movement, strength and function after treatment."
	},
	{
		title: "Psychology & Mental Wellness",
		detail: "Clinical support for the emotional and psychological dimensions of pain and recovery."
	},
	{
		title: "Nutrition",
		detail: "Personalised nutritional guidance supporting recovery and long-term wellbeing."
	},
	{
		title: "Wellness Team",
		detail: "Professionals delivering selected wellness therapies as part of an integrated care approach."
	}
];
var galleryCategories = [
	{
		title: "Reception & Pharmacy",
		detail: "Where every visit begins, with our in-house pharmacy on site.",
		image: page_3_default
	},
	{
		title: "Consultation Rooms",
		detail: "Private rooms for detailed clinical evaluation and treatment planning.",
		image: page_6_default
	},
	{
		title: "Recovery Rooms",
		detail: "Dedicated monitoring and post-procedure care after interventional treatment.",
		image: page_8_default
	},
	{
		title: "Physiotherapy & Rehabilitation",
		detail: "A dedicated space for movement-based recovery and functional rehabilitation.",
		image: page_15_default
	},
	{
		title: "Wellness Rooms",
		detail: "Calm rooms for selected wellness therapies and IV-based treatments.",
		image: page_17_default
	},
	{
		title: "Patient Lounge",
		detail: "Comfortable, private spaces designed around the patient.",
		image: page_12_default
	}
];
var facilityHighlights = [
	{
		title: "Physiotherapy & rehabilitation space",
		detail: "Designed for movement-based recovery and functional rehabilitation."
	},
	{
		title: "Well-equipped operating theatre",
		detail: "For minimally invasive and interventional pain procedures."
	},
	{
		title: "Dedicated recovery rooms",
		detail: "For patient monitoring and post-procedure care."
	},
	{
		title: "Wellness treatment rooms",
		detail: "A calm environment for selected wellness therapies and IV-based treatments."
	},
	{
		title: "Advanced wellness facilities",
		detail: "Including Hyperbaric Oxygen Therapy (HBOT), infrared therapy and cryotherapy."
	},
	{
		title: "In-house pharmacy",
		detail: "Prescriptions, supplements and wellness essentials in a single visit."
	}
];
var missionVision = [{
	title: "Our Mission",
	detail: "To provide comprehensive, personalised and evidence-based care for people living with pain and movement-related conditions. We look beyond the symptom, understand the individual as a whole and bring together medical care, interventional pain management, physiotherapy, rehabilitation, nutrition, psychological support and wellness to create a more complete path to recovery.",
	quote: "To help people live with less pain, move with greater confidence and experience a better quality of life."
}, {
	title: "Our Vision",
	detail: "To create a new standard in pain care, one where patients do not have to navigate multiple specialists and facilities to find the care they need. We envision Thrive as a centre where medicine, movement and wellness come together seamlessly, restoring function, improving well-being and supporting long-term health.",
	quote: "A world where pain does not define how you live your life."
}];
var insuranceTrustPoints = [
	"Empanelled insurers and TPAs",
	"Cashless support where eligible",
	"Pre-authorisation assistance",
	"Clear, upfront billing"
];
var cashlessSteps = [
	{
		step: "Check your coverage",
		detail: "Share your insurance details with our team so eligibility can be checked."
	},
	{
		step: "Submit required documents",
		detail: "Provide the documents required for pre-authorisation and processing."
	},
	{
		step: "Pre-authorisation",
		detail: "Our team coordinates with the relevant insurer or TPA for approval where applicable."
	},
	{
		step: "Treatment",
		detail: "Once the required approval is in place, your treatment can proceed according to the clinical plan."
	},
	{
		step: "Billing & settlement",
		detail: "The insurer or TPA settles eligible covered expenses according to the terms of your policy."
	}
];
var insuranceFaqs = [
	{
		q: "Do you provide cashless treatment?",
		a: "Cashless treatment is available for eligible patients under empanelled insurers and TPAs, subject to policy terms and approval."
	},
	{
		q: "Will my treatment be covered by insurance?",
		a: "Coverage depends on your individual policy, diagnosis, treatment and insurer or TPA approval."
	},
	{
		q: "What documents should I bring?",
		a: "Please carry your insurance or TPA details and the identification and medical documents requested by the clinic."
	},
	{
		q: "Can you check my insurance eligibility before my appointment?",
		a: "Our team can help you understand the verification and pre-authorisation process before treatment."
	},
	{
		q: "Does insurance cover every pain-management procedure?",
		a: "Not necessarily. Coverage varies by policy and procedure. Please confirm with the clinic and your insurer or TPA before treatment."
	}
];
var stats = [
	{
		value: "4,000",
		label: "sq. ft. integrated care facility"
	},
	{
		value: "7",
		label: "areas of care under one roof"
	},
	{
		value: "1",
		label: "coordinated care team"
	},
	{
		value: "In-house",
		label: "diagnostics, pharmacy and therapy"
	}
];
var socials = [
	{
		label: "Facebook",
		href: "https://facebook.com"
	},
	{
		label: "Instagram",
		href: "https://instagram.com"
	},
	{
		label: "YouTube",
		href: "https://youtube.com"
	}
];
var blogPosts = [
	{
		slug: "understanding-persistent-back-pain",
		title: "Understanding persistent back pain",
		excerpt: "Why some back pain settles on its own, and when a clinical assessment becomes the more useful next step.",
		author: "Thrive Clinical Team",
		date: "2026-05-18",
		displayDate: "18 May 2026",
		readTime: "5 min read",
		image: page_8_default,
		body: [
			"Most episodes of back pain improve with movement, rest and time. Pain that persists for weeks, changes how you sleep, or limits everyday activity deserves a closer look rather than a stronger tablet.",
			"A clinical assessment considers your history, your movement and, where relevant, imaging. The purpose is to understand what is generating the pain so that treatment can be directed rather than general.",
			"Where an interventional option is appropriate, it is discussed and explained clearly. Where it is not, rehabilitation, movement and supportive care can often achieve more.",
			"This article is general information and is not a substitute for individual medical advice."
		]
	},
	{
		slug: "what-to-expect-from-an-image-guided-procedure",
		title: "What to expect from an image-guided procedure",
		excerpt: "A calm, step-by-step look at how a minimally invasive pain procedure is planned and carried out.",
		author: "Thrive Clinical Team",
		date: "2026-04-27",
		displayDate: "27 April 2026",
		readTime: "4 min read",
		image: page_16_default,
		body: [
			"Image-guided procedures are planned around a clear diagnosis. Before anything is scheduled, the reason for the procedure, the expected benefit and the alternatives are explained to you.",
			"On the day, imaging is used so that treatment can be delivered precisely to the intended area. Most procedures are minimally invasive and carried out with local anaesthesia where clinically appropriate.",
			"Afterwards you receive clear aftercare guidance, and rehabilitation is considered part of the plan rather than an afterthought.",
			"Suitability for any procedure is decided case by case after clinical assessment."
		]
	},
	{
		slug: "sleep-mood-and-chronic-pain",
		title: "Sleep, mood and chronic pain",
		excerpt: "Persistent pain rarely stays physical. Here is why sleep and mood belong in a pain treatment plan.",
		author: "Thrive Clinical Team",
		date: "2026-03-30",
		displayDate: "30 March 2026",
		readTime: "4 min read",
		image: page_7_default,
		body: [
			"Pain disturbs sleep, and poor sleep can make pain feel more intense the following day. Many people live inside that loop for a long time before anyone offers to address it.",
			"Support often starts with practical routines around sleep timing, activity and pacing, alongside psychological support for the worry and tension that persistent pain creates.",
			"Because psychology sits within the same team as pain management and physiotherapy at Thrive, this support forms part of one plan rather than a separate referral.",
			"If pain is affecting your mood or sleep, mention it at your consultation so it can be included in your care."
		]
	}
];
function trackEvent(name, params = {}) {
	if (typeof window === "undefined") return;
	window.dataLayer = window.dataLayer ?? [];
	if (typeof window.gtag === "function") window.gtag("event", name, params);
	else window.dataLayer.push([
		"event",
		name,
		params
	]);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DioQ2GDM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DKsc_IWn.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
/**
* Brand mark placeholder.
* Swap the <svg> below for the clinic's real logo (SVG preferred, or an
* imported PNG/WebP from src/assets) — nothing else in the app needs editing.
*/
function Logo({ className = "h-12 w-auto", title = "Thrive Pain & Wellness Clinic" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/logo.png",
		alt: title,
		className: `object-contain ${className}`,
		"data-tsd-source": "/src/components/Logo.tsx:8:5"
	});
}
var primaryNav = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Blog",
		to: "/blog"
	}
];
var morePages = [
	{
		label: "Doctors & Team",
		to: "/doctors"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Insurance & Billing",
		to: "/insurance"
	},
	{
		label: "Book an Appointment",
		to: "/book"
	}
];
var linkClass = "rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-deep";
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [menu, setMenu] = (0, import_react.useState)(null);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 pt-3 sm:pt-5",
		"data-tsd-source": "/src/components/Header.tsx:45:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			"data-tsd-source": "/src/components/Header.tsx:46:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex min-h-[64px] items-center gap-4 rounded-2xl border border-border bg-card/95 px-4 backdrop-blur transition-shadow sm:px-6 ${scrolled ? "shadow-soft" : ""}`,
				"data-tsd-source": "/src/components/Header.tsx:47:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex min-w-0 items-center gap-2.5",
						onClick: () => setOpen(false),
						"data-tsd-source": "/src/components/Header.tsx:52:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							className: "h-14 sm:h-16 w-auto",
							"data-tsd-source": "/src/components/Header.tsx:53:13"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Primary",
						className: "mx-auto hidden items-center gap-1 lg:flex",
						"data-tsd-source": "/src/components/Header.tsx:56:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								activeOptions: { exact: true },
								activeProps: { className: "!text-deep" },
								className: linkClass,
								"data-tsd-source": "/src/components/Header.tsx:57:13",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								activeProps: { className: "!text-deep" },
								className: linkClass,
								"data-tsd-source": "/src/components/Header.tsx:60:13",
								children: "About"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								onMouseEnter: () => setMenu("services"),
								onMouseLeave: () => setMenu(null),
								"data-tsd-source": "/src/components/Header.tsx:64:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									activeProps: { className: "!text-deep" },
									className: linkClass,
									onFocus: () => setMenu("services"),
									"aria-expanded": menu === "services",
									"data-tsd-source": "/src/components/Header.tsx:65:15",
									children: "Services"
								}), menu === "services" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-full left-0 w-80 pt-3",
									"data-tsd-source": "/src/components/Header.tsx:75:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "card-flat p-2 shadow-soft",
										"data-tsd-source": "/src/components/Header.tsx:76:19",
										children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/services/$slug",
											params: { slug: service.slug },
											className: "block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-sand",
											"data-tsd-source": "/src/components/Header.tsx:78:23",
											children: service.title
										}, service.slug))
									})
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog",
								activeProps: { className: "!text-deep" },
								className: linkClass,
								"data-tsd-source": "/src/components/Header.tsx:92:13",
								children: "Blog"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								onMouseEnter: () => setMenu("pages"),
								onMouseLeave: () => setMenu(null),
								"data-tsd-source": "/src/components/Header.tsx:96:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: `${linkClass} inline-flex items-center gap-1`,
									onFocus: () => setMenu("pages"),
									"aria-expanded": menu === "pages",
									"data-tsd-source": "/src/components/Header.tsx:97:15",
									children: ["Pages", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										className: "h-3.5 w-3.5",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2.5",
										"data-tsd-source": "/src/components/Header.tsx:104:17",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "m6 9 6 6 6-6",
											"data-tsd-source": "/src/components/Header.tsx:105:19"
										})
									})]
								}), menu === "pages" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-full left-0 w-64 pt-3",
									"data-tsd-source": "/src/components/Header.tsx:109:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "card-flat p-2 shadow-soft",
										"data-tsd-source": "/src/components/Header.tsx:110:19",
										children: morePages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: item.to,
											className: "block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-sand",
											"data-tsd-source": "/src/components/Header.tsx:112:23",
											children: item.label
										}, item.to))
									})
								}) : null]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2 lg:ml-0",
						"data-tsd-source": "/src/components/Header.tsx:126:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: clinic.phoneHref,
								className: "hidden text-sm font-semibold text-deep xl:inline",
								"data-tsd-source": "/src/components/Header.tsx:127:13",
								children: clinic.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "btn btn-primary hidden sm:inline-flex",
								"data-tsd-source": "/src/components/Header.tsx:130:13",
								children: "Contact us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpen((value) => !value),
								"aria-expanded": open,
								"aria-label": open ? "Close menu" : "Open menu",
								className: "btn btn-outline h-11 w-11 shrink-0 !px-0 lg:hidden",
								"data-tsd-source": "/src/components/Header.tsx:133:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									className: "h-5 w-5",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									"data-tsd-source": "/src/components/Header.tsx:140:15",
									children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M6 6l12 12M18 6 6 18",
										"data-tsd-source": "/src/components/Header.tsx:141:25"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M4 7h16M4 12h16M4 17h16",
										"data-tsd-source": "/src/components/Header.tsx:141:61"
									})
								})
							})
						]
					})
				]
			}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Mobile",
				className: "card-flat mt-2 p-3 shadow-soft lg:hidden",
				"data-tsd-source": "/src/components/Header.tsx:148:11",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					"data-tsd-source": "/src/components/Header.tsx:149:13",
					children: [
						primaryNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: "rounded-lg px-2 py-3 text-sm font-medium",
							"data-tsd-source": "/src/components/Header.tsx:151:17",
							children: item.label
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							onClick: () => setOpen(false),
							className: "rounded-lg px-2 py-3 text-sm font-medium",
							"data-tsd-source": "/src/components/Header.tsx:160:15",
							children: "Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 ml-2 flex flex-col border-l border-border pl-3",
							"data-tsd-source": "/src/components/Header.tsx:163:15",
							children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/$slug",
								params: { slug: service.slug },
								onClick: () => setOpen(false),
								className: "py-2.5 text-sm text-muted-foreground",
								"data-tsd-source": "/src/components/Header.tsx:165:19",
								children: service.title
							}, service.slug))
						}),
						morePages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: "rounded-lg px-2 py-3 text-sm font-medium",
							"data-tsd-source": "/src/components/Header.tsx:177:17",
							children: item.label
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-2",
							"data-tsd-source": "/src/components/Header.tsx:186:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								onClick: () => setOpen(false),
								className: "btn btn-primary flex-1",
								"data-tsd-source": "/src/components/Header.tsx:187:17",
								children: "Contact us"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: clinic.phoneHref,
								className: "btn btn-outline flex-1",
								onClick: () => setOpen(false),
								"data-tsd-source": "/src/components/Header.tsx:190:17",
								children: "Call now"
							})]
						})
					]
				})
			}) : null]
		})
	});
}
var quickLinks = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About Us",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Doctors & Team",
		to: "/doctors"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Insurance & Billing",
		to: "/insurance"
	},
	{
		label: "Blog",
		to: "/blog"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-deep text-deep-foreground",
		"data-tsd-source": "/src/components/Footer.tsx:17:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x pt-16 pb-8",
			"data-tsd-source": "/src/components/Footer.tsx:18:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4",
					"data-tsd-source": "/src/components/Footer.tsx:19:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/components/Footer.tsx:20:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm font-bold tracking-[0.12em] uppercase",
									"data-tsd-source": "/src/components/Footer.tsx:21:13",
									children: "About us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-xs text-sm leading-relaxed opacity-75",
									"data-tsd-source": "/src/components/Footer.tsx:22:13",
									children: "At Thrive, we believe healing is more than recovery. It is restoring strength, confidence and independence through physician-led pain care."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: whatsappLink(),
									target: "_blank",
									rel: "noopener noreferrer",
									onClick: () => trackEvent("whatsapp_click", { location: "footer" }),
									className: "btn btn-ghost-light mt-6",
									"data-tsd-source": "/src/components/Footer.tsx:26:13",
									children: "Chat on WhatsApp"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/components/Footer.tsx:37:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-bold tracking-[0.12em] uppercase",
								"data-tsd-source": "/src/components/Footer.tsx:38:13",
								children: "Contact info"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-col gap-3 text-sm opacity-75",
								"data-tsd-source": "/src/components/Footer.tsx:39:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: clinic.phoneHref,
										onClick: () => trackEvent("phone_click", { location: "footer" }),
										"data-tsd-source": "/src/components/Footer.tsx:40:15",
										children: clinic.phone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${clinic.email}`,
										"data-tsd-source": "/src/components/Footer.tsx:43:15",
										children: clinic.email
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										"data-tsd-source": "/src/components/Footer.tsx:44:15",
										children: clinic.address
									}),
									clinic.hours.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										"data-tsd-source": "/src/components/Footer.tsx:46:17",
										children: [
											entry.days,
											": ",
											entry.time
										]
									}, entry.days))
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/components/Footer.tsx:53:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-bold tracking-[0.12em] uppercase",
								"data-tsd-source": "/src/components/Footer.tsx:54:13",
								children: "Quick links"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2.5 text-sm",
								"data-tsd-source": "/src/components/Footer.tsx:55:13",
								children: quickLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									"data-tsd-source": "/src/components/Footer.tsx:57:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: link.to,
										className: "opacity-75 transition-opacity hover:opacity-100",
										"data-tsd-source": "/src/components/Footer.tsx:58:19",
										children: link.label
									})
								}, link.to))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/components/Footer.tsx:66:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-bold tracking-[0.12em] uppercase",
								"data-tsd-source": "/src/components/Footer.tsx:67:13",
								children: "Our services"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2.5 text-sm",
								"data-tsd-source": "/src/components/Footer.tsx:68:13",
								children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									"data-tsd-source": "/src/components/Footer.tsx:70:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services/$slug",
										params: { slug: service.slug },
										className: "opacity-75 transition-opacity hover:opacity-100",
										"data-tsd-source": "/src/components/Footer.tsx:71:19",
										children: service.title
									})
								}, service.slug))
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"aria-hidden": "true",
					className: "wordmark-fade mt-14 w-full text-center text-[clamp(3.5rem,17vw,13rem)] select-none",
					"data-tsd-source": "/src/components/Footer.tsx:84:9",
					children: "Thrive"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between",
					"data-tsd-source": "/src/components/Footer.tsx:91:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						"data-tsd-source": "/src/components/Footer.tsx:92:11",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" ",
							clinic.name,
							". All rights reserved."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-4",
						"data-tsd-source": "/src/components/Footer.tsx:95:11",
						children: socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: social.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "transition-opacity hover:opacity-100",
							"data-tsd-source": "/src/components/Footer.tsx:97:15",
							children: social.label
						}, social.label))
					})]
				})
			]
		})
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: whatsappLink(),
		target: "_blank",
		rel: "noopener noreferrer",
		onClick: () => trackEvent("whatsapp_click", { location: "floating_button" }),
		"aria-label": `Chat with ${clinic.name} on WhatsApp`,
		className: "fixed right-4 bottom-4 z-50 shadow-soft sm:right-6 sm:bottom-6 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white hover:bg-[#20bd5a] transition-colors shadow-lg",
		"data-tsd-source": "/src/components/WhatsAppFloat.tsx:6:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				className: "h-5 w-5 shrink-0 fill-current",
				"data-tsd-source": "/src/components/WhatsAppFloat.tsx:14:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.56 3.75 1.53 5.28L2 22l4.99-1.7a9.82 9.82 0 0 0 5.05 1.39c5.44 0 9.84-4.4 9.84-9.85C21.88 6.4 17.48 2 12.04 2Zm5.72 13.9c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.03.24-3.5-.96-2.47-1.2-4.02-3.9-4.14-4.08-.12-.19-.98-1.4-.94-2.62.04-1.22.7-1.8.94-2.05.24-.24.52-.3.7-.3h.5c.16 0 .38-.06.58.45.2.5.7 1.74.76 1.87.06.12.1.27.01.44-.09.17-.17.28-.34.47-.17.19-.36.42-.19.72.17.3.75 1.25 1.62 2.02 1.11.99 2.04 1.3 2.34 1.45.3.15.47.12.65-.07.17-.2.72-.85.92-1.14.2-.3.4-.24.66-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.7-.17 1.38Z",
					"data-tsd-source": "/src/components/WhatsAppFloat.tsx:15:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline font-medium",
				"data-tsd-source": "/src/components/WhatsAppFloat.tsx:17:7",
				children: "Chat on WhatsApp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sm:hidden font-medium",
				"data-tsd-source": "/src/components/WhatsAppFloat.tsx:18:7",
				children: "WhatsApp"
			})
		]
	});
}
/**
* Inertia scrolling, matching the reference video's slow, weighted scroll feel.
* Loaded after hydration only, and skipped entirely for reduced-motion users.
*/
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let raf = 0;
		let instance = null;
		let cancelled = false;
		(async () => {
			const { default: Lenis } = await import("../_libs/lenis.mjs").then((n) => n.t);
			if (cancelled) return;
			instance = new Lenis({
				duration: 1.05,
				easing: (t) => 1 - Math.pow(1 - t, 3),
				smoothWheel: true,
				touchMultiplier: 1.6
			});
			const loop = (time) => {
				instance?.raf(time);
				raf = requestAnimationFrame(loop);
			};
			raf = requestAnimationFrame(loop);
		})();
		return () => {
			cancelled = true;
			cancelAnimationFrame(raf);
			instance?.destroy();
		};
	}, []);
	return null;
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center px-4",
		"data-tsd-source": "/src/routes/__root.tsx:23:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			"data-tsd-source": "/src/routes/__root.tsx:24:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-xl text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:25:9",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					"data-tsd-source": "/src/routes/__root.tsx:26:9",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:27:9",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					"data-tsd-source": "/src/routes/__root.tsx:30:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn btn-primary",
						"data-tsd-source": "/src/routes/__root.tsx:31:11",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center px-4",
		"data-tsd-source": "/src/routes/__root.tsx:48:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			"data-tsd-source": "/src/routes/__root.tsx:49:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight",
					"data-tsd-source": "/src/routes/__root.tsx:50:9",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:51:9",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					"data-tsd-source": "/src/routes/__root.tsx:54:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn btn-primary",
						"data-tsd-source": "/src/routes/__root.tsx:55:11",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn btn-outline",
						"data-tsd-source": "/src/routes/__root.tsx:64:11",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Thrive Pain Clinic, Wellness & More | Raidurgam, Hyderabad" },
			{
				name: "description",
				content: "Physician-led interventional pain management and integrative wellness at Raidurgam, Hyderabad. Heal. Restore. Thrive."
			},
			{
				property: "og:site_name",
				content: clinic.name
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#68674E"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large"
			},
			{
				name: "geo.region",
				content: "IN-TG"
			},
			{
				name: "geo.placename",
				content: "Raidurgam, Hyderabad"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Marcellus&family=Instrument+Sans:wght@400;500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "MedicalClinic",
				name: clinic.name,
				slogan: clinic.brandLine,
				telephone: clinic.phone,
				email: clinic.email,
				medicalSpecialty: "PainMedicine",
				url: "https://heal-restore-thrive.lovable.app",
				address: {
					"@type": "PostalAddress",
					streetAddress: "4th Floor, Bharathi Square, Plot No. 58, Sy No. 5/3, Nandi Hills, Raidurgam, Shaikpet",
					addressLocality: "Hyderabad",
					addressRegion: "Telangana",
					postalCode: "500081",
					addressCountry: "IN"
				},
				openingHoursSpecification: [{
					"@type": "OpeningHoursSpecification",
					dayOfWeek: [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday"
					],
					opens: "09:00",
					closes: "18:00"
				}]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		"data-tsd-source": "/src/routes/__root.tsx:144:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", {
			"data-tsd-source": "/src/routes/__root.tsx:145:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, { "data-tsd-source": "/src/routes/__root.tsx:146:9" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			"data-tsd-source": "/src/routes/__root.tsx:148:7",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, { "data-tsd-source": "/src/routes/__root.tsx:150:9" })]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => {
		const measurementId = {
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "development",
			"PROD": true,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/"
		}["VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY"];
		if (!measurementId || document.getElementById("ga4-script")) return;
		const script = document.createElement("script");
		script.id = "ga4-script";
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
		document.head.appendChild(script);
		window.dataLayer = window.dataLayer ?? [];
		window.gtag = function gtag(...args) {
			window.dataLayer.push(args);
		};
		window.gtag("js", /* @__PURE__ */ new Date());
		window.gtag("config", measurementId);
	}, []);
	(0, import_react.useEffect)(() => {
		window.gtag?.("event", "page_view", { page_path: pathname });
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		"data-tsd-source": "/src/routes/__root.tsx:181:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-deep focus:px-4 focus:py-2 focus:text-deep-foreground",
				"data-tsd-source": "/src/routes/__root.tsx:182:7",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, { "data-tsd-source": "/src/routes/__root.tsx:188:7" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-shell",
				"data-tsd-source": "/src/routes/__root.tsx:189:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { "data-tsd-source": "/src/routes/__root.tsx:190:9" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						id: "main",
						"data-tsd-source": "/src/routes/__root.tsx:191:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, { "data-tsd-source": "/src/routes/__root.tsx:193:11" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { "data-tsd-source": "/src/routes/__root.tsx:195:9" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, { "data-tsd-source": "/src/routes/__root.tsx:197:7" })
		]
	});
}
var $$splitComponentImporter$12 = () => import("./routes-Cy_dV0X5.mjs");
var Route$12 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Thrive Pain Clinic, Wellness & More | Raidurgam, Hyderabad" },
			{
				name: "description",
				content: "Physician-led interventional pain management with in-house diagnostics, physiotherapy, psychology, nutrition and wellness therapies at Raidurgam, Hyderabad."
			},
			{
				property: "og:title",
				content: "Thrive Pain Clinic, Wellness & More | Hyderabad"
			},
			{
				property: "og:description",
				content: "Advanced pain care and integrated wellness, brought together under one roof."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}, {
			rel: "preload",
			as: "image",
			href: images.hero,
			fetchPriority: "high"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./about-J8zmgaTD.mjs");
var Route$11 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Thrive Pain & Wellness Clinic | Who We Are" },
			{
				name: "description",
				content: "A different approach to pain and a more complete approach to wellness. Physician-led interventional pain care with physiotherapy, psychology, nutrition and wellness therapies in Hyderabad."
			},
			{
				property: "og:title",
				content: "About Thrive Pain & Wellness Clinic"
			},
			{
				property: "og:description",
				content: "Physician-led pain medicine and integrative wellness under one roof in Hyderabad."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./blog-BB8ueB9_.mjs");
var Route$10 = createFileRoute("/blog")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./book-5SJjd_kX.mjs");
var Route$9 = createFileRoute("/book")({
	head: () => ({
		meta: [
			{ title: "Book an Appointment | Thrive Pain & Wellness Clinic, Hyderabad" },
			{
				name: "description",
				content: "Request an appointment at Thrive Pain & Wellness Clinic, Hyderabad. Share your preferred date and time, or message us on WhatsApp."
			},
			{
				property: "og:title",
				content: "Book an Appointment | Thrive Pain & Wellness Clinic"
			},
			{
				property: "og:description",
				content: "Your first step towards better days."
			},
			{
				property: "og:url",
				content: "/book"
			}
		],
		links: [{
			rel: "canonical",
			href: "/book"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-Cdgmw0Jz.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact & Locate Us | Thrive Pain Clinic, Hyderabad" },
			{
				name: "description",
				content: "Contact Thrive Pain Clinic, Wellness & More at Raidurgam, Hyderabad. Phone, email, WhatsApp and driving directions."
			},
			{
				property: "og:title",
				content: "Contact & Locate Us | Thrive Pain & Wellness Clinic"
			},
			{
				property: "og:description",
				content: "Raidurgam, Hyderabad. Call, WhatsApp or get directions."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "MedicalClinic",
				name: clinic.name,
				telephone: clinic.phone,
				email: clinic.email,
				address: {
					"@type": "PostalAddress",
					streetAddress: "4th Floor, Bharathi Square, Plot No. 58, Nandi Hills, Raidurgam, Shaikpet",
					addressLocality: "Hyderabad",
					addressRegion: "Telangana",
					postalCode: "500081",
					addressCountry: "IN"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./doctors-DjaIy3vG.mjs");
var Route$7 = createFileRoute("/doctors")({
	head: () => ({
		meta: [
			{ title: "Our Doctors & Team | Thrive Pain & Wellness Clinic" },
			{
				name: "description",
				content: "Meet Dr. Dheeraj and the multidisciplinary team across pain management, physiotherapy, psychology, nutrition and wellness at Thrive Pain & Wellness Clinic, Hyderabad."
			},
			{
				property: "og:title",
				content: "Our Doctors & Team | Thrive Pain & Wellness Clinic"
			},
			{
				property: "og:description",
				content: "Physician-led pain management supported by an integrated in-house care team."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:url",
				content: "/doctors"
			}
		],
		links: [{
			rel: "canonical",
			href: "/doctors"
		}],
		scripts: doctors.map((doctor) => ({
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Physician",
				name: doctor.name,
				medicalSpecialty: doctor.specialty,
				description: doctor.bio,
				worksFor: {
					"@type": "MedicalClinic",
					name: "Thrive Pain & Wellness Clinic"
				}
			})
		}))
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./gallery-Ds9C-Sid.mjs");
var Route$6 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Gallery | Inside Thrive Pain & Wellness Clinic, Hyderabad" },
			{
				name: "description",
				content: "Explore the Thrive facility: clinical and procedure spaces, diagnostics and equipment, rehabilitation and wellness rooms across a 4,000 sq. ft. clinic."
			},
			{
				property: "og:title",
				content: "Gallery | Thrive Pain & Wellness Clinic"
			},
			{
				property: "og:description",
				content: "A space designed to make healthcare feel different."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:url",
				content: "/gallery"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./insurance-B0TEDUHB.mjs");
var Route$5 = createFileRoute("/insurance")({
	head: () => ({
		meta: [
			{ title: "Insurance & Billing | Cashless Process at Thrive, Hyderabad" },
			{
				name: "description",
				content: "How cashless treatment works at Thrive Pain & Wellness Clinic: eligibility checks, documents, pre-authorisation, treatment and settlement with empanelled insurers and TPAs."
			},
			{
				property: "og:title",
				content: "Insurance & Billing | Thrive Pain & Wellness Clinic"
			},
			{
				property: "og:description",
				content: "Cashless support where eligible, with clear guidance at every step."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:url",
				content: "/insurance"
			}
		],
		links: [{
			rel: "canonical",
			href: "/insurance"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./services-Cq8kRMTW.mjs");
var Route$4 = createFileRoute("/services")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./blog.index-C2QUqLbg.mjs");
var Route$3 = createFileRoute("/blog/")({
	head: () => ({
		meta: [
			{ title: "Blog | Pain, Recovery & Wellness Insight from Thrive" },
			{
				name: "description",
				content: "The Thrive Journal: practical insights on pain, recovery, movement, nutrition, mental wellness and living better."
			},
			{
				property: "og:title",
				content: "Blog | Thrive Pain & Wellness Clinic"
			},
			{
				property: "og:description",
				content: "Practical insights on pain, recovery and living better."
			},
			{
				property: "og:url",
				content: "/blog"
			}
		],
		links: [{
			rel: "canonical",
			href: "/blog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./blog._slug-CJcEWN_4.mjs");
var $$splitNotFoundComponentImporter = () => import("./blog._slug-TfwC_f3l.mjs");
var Route$2 = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = blogPosts.find((entry) => entry.slug === params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Article unavailable | Thrive" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { post } = loaderData;
		return {
			meta: [
				{ title: `${post.title} | Thrive Pain & Wellness Clinic` },
				{
					name: "description",
					content: post.excerpt
				},
				{
					property: "og:title",
					content: post.title
				},
				{
					property: "og:description",
					content: post.excerpt
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: `/blog/${post.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/blog/${post.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BlogPosting",
					headline: post.title,
					description: post.excerpt,
					datePublished: post.date,
					author: {
						"@type": "Person",
						name: post.author
					},
					publisher: {
						"@type": "Organization",
						name: "Thrive Pain & Wellness Clinic"
					}
				})
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services.index-BNGJqCBn.mjs");
var Route$1 = createFileRoute("/services/")({
	head: () => ({
		meta: [
			{ title: "Our Services | Pain Management & Wellness in Hyderabad" },
			{
				name: "description",
				content: "Interventional pain procedures, diagnostics and imaging, physiotherapy, psychology, nutrition, wellness therapies and an in-house pharmacy, all under one roof."
			},
			{
				property: "og:title",
				content: "Our Services | Thrive Pain & Wellness Clinic"
			},
			{
				property: "og:description",
				content: "Complete care for a better life, coordinated by one team."
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services._slug-RL0sL51o.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = services.find((item) => item.slug === params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Service not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { service } = loaderData;
		return {
			meta: [
				{ title: `${service.title} | Thrive Pain & Wellness Clinic, Hyderabad` },
				{
					name: "description",
					content: service.short
				},
				{
					property: "og:title",
					content: `${service.title} | Thrive Pain & Wellness Clinic`
				},
				{
					property: "og:description",
					content: service.short
				},
				{
					property: "og:url",
					content: `/services/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/services/${params.slug}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$11.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var BlogRoute = Route$10.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$13
});
var BookRoute = Route$9.update({
	id: "/book",
	path: "/book",
	getParentRoute: () => Route$13
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$13
});
var DoctorsRoute = Route$7.update({
	id: "/doctors",
	path: "/doctors",
	getParentRoute: () => Route$13
});
var GalleryRoute = Route$6.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$13
});
var InsuranceRoute = Route$5.update({
	id: "/insurance",
	path: "/insurance",
	getParentRoute: () => Route$13
});
var ServicesRoute = Route$4.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$13
});
var BlogIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogRoute
});
var BlogSlugRoute = Route$2.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
});
var ServicesIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => ServicesRoute
});
var ServicesSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ServicesRoute
});
var BlogRouteChildren = {
	BlogSlugRoute,
	BlogIndexRoute
};
var BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
var ServicesRouteChildren = {
	ServicesSlugRoute,
	ServicesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute: BlogRouteWithChildren,
	BookRoute,
	ContactRoute,
	DoctorsRoute,
	GalleryRoute,
	InsuranceRoute,
	ServicesRoute: ServicesRoute._addFileChildren(ServicesRouteChildren)
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { whyThrive as C, whatsappLink as S, services as _, blogPosts as a, teamDisciplines as b, clinic as c, galleryCategories as d, images as f, philosophy as g, missionVision as h, approach as i, doctors as l, insuranceTrustPoints as m, Route as n, careModel as o, insuranceFaqs as p, Route$2 as r, cashlessSteps as s, router_exports as t, facilityHighlights as u, socials as v, trackEvent as x, stats as y };
