import heroClinic from "../../public/images/clinic/page_3.jpg";
import procedureSuite from "../../public/images/clinic/page_8.jpg";
import physioImg from "../../public/images/clinic/page_15.jpg";
import psychologyImg from "../../public/images/clinic/page_7.jpg";
import wellnessImg from "../../public/images/clinic/page_17.jpg";
import receptionImg from "../../public/images/clinic/page_2.jpg";
import diagnosticsImg from "../../public/images/clinic/page_16.jpg";
import nutritionImg from "../../public/images/clinic/page_12.jpg";
import loungeAssetUrl from "../../public/images/clinic/page_11.jpg";
import corridorAssetUrl from "../../public/images/clinic/page_5.jpg";
import consultationAssetUrl from "../../public/images/clinic/page_6.jpg";
import recoveryTwoAssetUrl from "../../public/images/clinic/page_9.jpg";
import rehabAssetUrl from "../../public/images/clinic/page_14.jpg";
import massageAssetUrl from "../../public/images/clinic/page_18.jpg";
import therapyRoomAssetUrl from "../../public/images/clinic/page_16.jpg";
export const clinic = {
  name: "Thrive Pain Clinic, Wellness & More",
  shortName: "Thrive",
  brandLine: "Heal. Restore. Thrive.",
  tagline: "Your pain ends here. Your life begins.",
  phone: "+91 86395 09446",
  phoneHref: "tel:+918639509446",
  whatsapp: "918639509446",
  email: "adashealthcare@gmail.com",
  bookingEmail: "adashealthcare@gmail.com",
  address:
    "4th Floor, Bharathi Square, Plot No. 58, Sy No. 5/3, Nandi Hills, Raidurg, Cyberabad, Raidurgam, Shaikpet, Hyderabad, Telangana 500081",
  locality: "Raidurgam, Hyderabad",
  mapsQuery: "Bharathi Square, Nandi Hills, Raidurgam, Shaikpet, Hyderabad, Telangana 500081",
  hoursNote: "Monday to Saturday, 9:00 am to 6:00 pm. Sunday by appointment.",
  hours: [
    { days: "Monday to Saturday", time: "9:00 am to 6:00 pm" },
    { days: "Sunday", time: "By appointment" },
  ],
};


export const whatsappLink = (message = "Hello Thrive, I would like to book an appointment.") =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;

export const images = {
  hero: heroClinic,
  procedureSuite,
  physio: physioImg,
  psychology: psychologyImg,
  wellness: wellnessImg,
  reception: receptionImg,
  diagnostics: diagnosticsImg,
  nutrition: nutritionImg,
  lounge: loungeAssetUrl,
  corridor: corridorAssetUrl,
  consultation: consultationAssetUrl,
  recovery: recoveryTwoAssetUrl,
  rehab: rehabAssetUrl,
  massage: massageAssetUrl,
  therapyRoom: therapyRoomAssetUrl,
};


export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  image: string;
  highlights: string[];
  journey: { stage: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "interventional-procedures",
    title: "Interventional Pain Procedures",
    short: "Advanced, minimally invasive treatments that target specific sources of chronic pain with precision.",
    intro:
      "When pain continues despite conventional treatment, interventional pain management can offer targeted, minimally invasive options. Every procedure begins with appropriate assessment and diagnosis, followed by a treatment plan tailored to the individual.",
    image: procedureSuite,
    highlights: [
      "Neuromodulation: techniques that work on pain signalling pathways for selected chronic pain conditions",
      "Epiduroplasty: a minimally invasive option for selected spinal conditions",
      "Regenerative therapies: approaches that support the body's natural healing where clinically appropriate",
      "Radiofrequency Ablation (RFA): controlled radiofrequency energy to reduce pain signals from specific nerves",
      "Cryotherapy: controlled cold-based techniques for selected pain-management applications",
      "Ultrasound-guided injections: image guidance for precise delivery of treatment",
    ],
    journey: [
      {
        stage: "Diagnosis",
        detail:
          "We begin by understanding the condition, your history and how it affects daily life, then identify the most appropriate treatment approach.",
      },
      {
        stage: "Treatment",
        detail:
          "Where an intervention is recommended, the procedure is planned with precision and explained clearly before treatment.",
      },
      {
        stage: "Recovery",
        detail:
          "Recovery and rehabilitation are considered part of the wider care journey, with support from physiotherapy and our wider team.",
      },
    ],
  },
  {
    slug: "diagnostics-and-imaging",
    title: "Diagnostics & Imaging",
    short: "In-house diagnostic and imaging capabilities that support accurate assessment and treatment planning.",
    intro:
      "Accurate diagnosis is the foundation of effective pain management. Thrive provides in-house diagnostic and imaging support to help our clinical team assess conditions and plan appropriate treatment.",
    image: diagnosticsImg,
    highlights: [
      "In-house laboratory for convenient access to diagnostic services",
      "Digital X-ray for evaluating bones, joints and other relevant structures",
      "Ultrasound for real-time assessment and selected image-guided procedures",
      "Fluoroscopy and C-arm imaging support for precise interventional procedures",
    ],
    journey: [
      { stage: "Assessment", detail: "Your physician identifies which investigations are relevant to your condition." },
      { stage: "Imaging", detail: "Tests are carried out within the facility and reviewed with you." },
      { stage: "Decisions", detail: "Findings inform the treatment plan and stay on your record for follow-up." },
    ],
  },
  {
    slug: "physiotherapy-and-rehabilitation",
    title: "Physiotherapy & Rehabilitation",
    short: "Personalised programs designed to restore movement, strength, function and confidence.",
    intro:
      "Pain relief is only one part of recovery. Our personalised physiotherapy and rehabilitation programs help restore movement, improve strength, rebuild function and support your return to everyday activities. Your program is adapted to your condition, physical capacity and recovery goals.",
    image: physioImg,
    highlights: [
      "Restoring mobility",
      "Improving strength",
      "Building functional movement",
      "Supporting recovery after treatment",
      "Improving confidence in movement",
      "Reducing the impact of recurring pain",
    ],
    journey: [
      { stage: "Assessment", detail: "Movement and strength are assessed to establish your starting point." },
      { stage: "Program", detail: "Guided sessions with clear, progressive goals suited to your capacity." },
      { stage: "Maintenance", detail: "A home program and reviews help protect your progress over time." },
    ],
  },
  {
    slug: "psychology-and-mental-wellness",
    title: "Psychology & Mental Wellness",
    short: "Professional support recognising the connection between chronic pain, emotional wellbeing and quality of life.",
    intro:
      "Living with persistent pain can affect mood, sleep, confidence, relationships and everyday life. With professional support, patients can develop healthier ways to understand and manage the psychological impact of chronic pain while building greater confidence in their recovery journey.",
    image: psychologyImg,
    highlights: [
      "Support for the emotional impact of persistent pain",
      "Strategies for sleep, stress and low mood",
      "Confidence building through recovery",
      "Support for families and caregivers",
    ],
    journey: [
      { stage: "Consultation", detail: "A confidential first session to understand your history and goals." },
      { stage: "Support", detail: "Structured sessions delivered alongside your medical treatment." },
      { stage: "Review", detail: "Progress is reviewed as part of one coordinated care plan." },
    ],
  },
  {
    slug: "nutrition",
    title: "Nutrition",
    short: "Personalised nutritional guidance to support recovery, energy, metabolic health and overall wellbeing.",
    intro:
      "Nutrition plays an important role in overall health, energy, recovery and long-term wellbeing. Our nutrition support focuses on personalised guidance based on your individual needs rather than generic diet plans, making healthier choices practical and sustainable.",
    image: nutritionImg,
    highlights: [
      "Guidance built around your routine and preferences",
      "Support for recovery and energy levels",
      "Weight and metabolic health support",
      "Practical, sustainable everyday changes",
    ],
    journey: [
      { stage: "Assessment", detail: "A review of your health, routine and current eating patterns." },
      { stage: "Plan", detail: "A realistic plan that fits your household and lifestyle." },
      { stage: "Follow-up", detail: "Regular check-ins to adjust as your needs change." },
    ],
  },
  {
    slug: "wellness-therapies",
    title: "Wellness Therapies",
    short: "Evidence-informed therapies designed to complement clinical care and support recovery and wellbeing.",
    intro:
      "Our wellness therapies are designed to complement clinical care and support overall wellbeing. They are selected according to individual needs and are intended to complement, not replace, appropriate medical care.",
    image: wellnessImg,
    highlights: [
      "Infra red light therapy",
      "Hyperbaric oxygen (HBOT)",
      "Molecular hydrogen infusion",
      "Ozone therapy",
      "EBOO",
      "COLD PLUNGE",
      "IV DRIPS",
    ],
    journey: [
      { stage: "Consultation", detail: "We confirm which therapies are safe and suitable for your condition." },
      { stage: "Session", detail: "Therapies are delivered in a calm, private setting within the clinic." },
      { stage: "Rhythm", detail: "A recommended cadence that fits your stage of treatment." },
    ],
  },
  {
    slug: "in-house-pharmacy",
    title: "In-House Pharmacy",
    short: "Convenient access to prescribed medications and healthcare essentials as part of connected care.",
    intro:
      "Your treatment journey should be simple from consultation to recovery. Our in-house pharmacy provides convenient access to prescribed medications and healthcare essentials, helping keep important parts of your care connected under one roof.",
    image: receptionImg,
    highlights: [
      "Prescribed medication available on site",
      "Guidance on how and when to take your medication",
      "Support for ongoing and repeat prescriptions",
      "Healthcare essentials and supports",
    ],
    journey: [
      { stage: "Prescription", detail: "Your clinician's prescription is shared directly with our pharmacy." },
      { stage: "Dispensing", detail: "Medication is dispensed with clear instructions before you leave." },
      { stage: "Continuity", detail: "Ongoing prescriptions are supported as your plan progresses." },
    ],
  },
  {
    slug: "polyclinic",
    title: "Polyclinic",
    short: "Comprehensive multi-specialty care in one location.",
    intro:
      "Our polyclinic brings together various specialists to offer complete healthcare services, from routine checkups to complex diagnoses, all coordinated under one roof.",
    image: consultationAssetUrl,
    highlights: [
      "Multi-specialty consultations",
      "Comprehensive health checkups",
      "Integrated care approach",
      "Seamless referral between specialists",
    ],
    journey: [
      { stage: "Consultation", detail: "Initial assessment by a general physician or specialist." },
      { stage: "Diagnosis", detail: "Access to our in-house diagnostics for swift results." },
      { stage: "Treatment", detail: "Collaborative treatment plan designed by our multidisciplinary team." },
    ],
  },
];

export const approach = [
  {
    step: "01",
    title: "Understand",
    detail:
      "Every journey begins with understanding your pain, your medical history, your lifestyle and how your condition affects your everyday life.",
  },
  {
    step: "02",
    title: "Treat",
    detail:
      "When appropriate, advanced minimally invasive and image-guided interventions are used to target the source of pain with precision.",
  },
  {
    step: "03",
    title: "Restore",
    detail:
      "Pain relief is only part of the journey. Physiotherapy, rehabilitation, psychology and nutrition can help you regain movement, confidence and function.",
  },
  {
    step: "04",
    title: "Thrive",
    detail:
      "The goal is not simply to feel better today. It is to help you build a healthier, more active life beyond pain.",
  },
];

export const whyThrive = [
  {
    title: "Physician-Led",
    detail: "Your care is guided by medical expertise, clinical assessment and evidence-informed treatment decisions.",
  },
  {
    title: "Personalised",
    detail:
      "There is no one-size-fits-all approach to pain. Your treatment is shaped around your condition, history, needs and goals.",
  },
  {
    title: "Multidisciplinary",
    detail:
      "Our integrated approach brings together pain management, physiotherapy, psychology, nutrition and wellness.",
  },
  {
    title: "Advanced",
    detail:
      "We combine modern diagnostic capabilities with minimally invasive procedures and contemporary wellness therapies.",
  },
  {
    title: "One Roof",
    detail:
      "From diagnosis and treatment to rehabilitation and supportive care, multiple aspects of your healing journey can happen in one place.",
  },
  {
    title: "Designed Around You",
    detail: "Our goal is not just to reduce pain. It is to help you restore movement, confidence and quality of life.",
  },
];

export const philosophy = [
  {
    title: "Heal",
    detail: "Understand the source of your pain and address it with the right clinical approach.",
  },
  {
    title: "Restore",
    detail:
      "Rebuild movement, strength, confidence and everyday function through personalised rehabilitation and supportive care.",
  },
  {
    title: "Thrive",
    detail: "Move beyond simply managing symptoms and work towards a healthier, more active life.",
  },
];

export const careModel = [
  { title: "Pain Management", detail: "Advanced medical assessment and interventional treatments." },
  { title: "Physiotherapy & Rehabilitation", detail: "Support for movement, strength and recovery." },
  { title: "Psychology & Mental Wellness", detail: "Care for the emotional and psychological impact of pain." },
  { title: "Nutrition", detail: "Personalised guidance to support overall health and recovery." },
  { title: "Wellness Therapies", detail: "Complementary therapies designed to support wellbeing." },
];

export const doctors = [
  {
    name: "Dr. S Dheeraj Kumar",
    image: "https://res.cloudinary.com/dizaawlyl/image/upload/v1787908388/DSC03212_idwksm.jpg",
    qualifications: "MBBS, MD (Anaesthesia), FIAPM (Fellowship in Interventional Pain Management)",
    specialty: "Interventional Pain & Palliative Care Specialist",
    bio: "Dr. Dheeraj Kumar is an interventional pain and palliative care specialist with a strong foundation in anaesthesia and advanced non-surgical pain interventions. He manages chronic spine, joint, neuropathic and cancer-related pain using evidence-based interventional, molecular and regenerative therapies, with a focus on minimally invasive techniques that reduce surgical referrals and long-term opioid dependence. He is a consultant in pain and palliative care at Renova Hospitals, Hyderabad, and a visiting consultant across the Warangal, Bidar, Nirmal and Karimnagar districts.",
    experience:
      "Interventional pain management consultant since 2022, following senior residency in anaesthesia at ESI Medical College (2019 to 2022). MD Anaesthesia, Bangalore Medical College & Research Institute.",
    expertise: [
      "Chronic low back pain and sciatica",
      "Cervical and lumbar disc disorders",
      "Knee osteoarthritis and joint pain",
      "Neuropathic pain including trigeminal neuralgia, diabetic neuropathy and PHN",
      "Cancer pain and palliative care",
      "Non-surgical spine and joint interventions",
    ],
    recognition: [
      "Abdul Kalam Medical Excellence Award, 2024",
      "ISTA Heal Excellency Award in Pain Management, 2025",
      "Faculty, ISACON Karnataka 2024",
      "3 published papers and 4 posters",
    ],
  },
  {
    name: "Dr. Anahita Reddy",
    image: "https://res.cloudinary.com/dizaawlyl/image/upload/v1787908386/DSC03383_qfnqhd.jpg",
    qualifications: "MD (Anesthesiology), FIPM, FIRM",
    specialty: "Pain, Regenerative & Palliative Medicine Specialist",
    bio: "Dr. Anahita Reddy is an anaesthesiologist and pain physician with formal training in interventional pain, regenerative medicine and palliative medicine. She is skilled in ultrasound-guided procedures, selective nerve root blocks, sports injury interventions, headache management and symptom control in advanced illness. She consults in English, Telugu and Hindi.",
    experience:
      "Fellow in Interventional Pain & Regenerative Medicine at Synapse Pain & Spine Clinic, Chennai, performing ultrasound and fluoroscopy-guided spine and joint interventions. Previously anaesthesiologist at Sparsh Hospice, supporting comfort-focused palliative care. Currently completing a fellowship in palliative medicine.",
    expertise: [
      "Selective nerve root blocks, facet and SI joint injections",
      "Epidural, caudal and transforaminal injections",
      "PRP, prolotherapy and regenerative joint therapies",
      "Headache interventions including occipital and SPG blocks",
      "Regional and general anaesthesia, POCUS",
      "Symptom management in palliative care",
    ],
    recognition: [
      "ISACON Telangana 2023, poster presentation",
      "ISACON AP 2023, paper on TAP block study",
      "ECMO Excellence, 2023",
      "POCUS Workshop, 2022",
    ],
  },
  {
    name: "Dr. Spurthi Mallampati",
    image: "https://res.cloudinary.com/dizaawlyl/image/upload/v1787917970/WhatsApp_Image_2026-08-28_at_4.53.28_PM_uuxnt3.jpg",
    qualifications: "MBBS, MD (Anaesthesia), FIPM, FIRM",
    specialty: "Interventional Pain Physician",
    bio: "Dr. Spurthi Mallampati is a highly skilled Interventional Pain Physician with an extensive background in Anaesthesia. She brings dedicated expertise to the multidisciplinary team at Thrive, providing compassionate, minimally invasive care for patients suffering from chronic pain.",
    experience: "Extensive background in Anaesthesia and Interventional Pain Management.",
    expertise: ["Interventional pain management", "Chronic pain conditions"],
    recognition: [],
  },
  {
    name: "Dr Remalla Aparajitha",
    image: "https://res.cloudinary.com/dizaawlyl/image/upload/v1787908391/DSC03092_j0c8w3.jpg",
    qualifications: "MBBS, MD (Anaesthesia), FIPM",
    specialty: "Interventional Pain Physician",
    bio: "Dr Remalla Aparajitha is a highly skilled Interventional Pain Physician with an extensive background in Anaesthesia. She brings dedicated expertise to the multidisciplinary team at Thrive, focusing on advanced pain management solutions.",
    experience: "Extensive background in Anaesthesia and Interventional Pain Management.",
    expertise: ["Interventional pain management", "Chronic pain conditions"],
    recognition: [],
  },
];

export const teamDisciplines = [
  {
    title: "Physiotherapy & Rehabilitation",
    detail: "Professionals focused on restoring movement, strength and function after treatment.",
  },
  {
    title: "Psychology & Mental Wellness",
    detail: "Clinical support for the emotional and psychological dimensions of pain and recovery.",
  },
  {
    title: "Nutrition",
    detail: "Personalised nutritional guidance supporting recovery and long-term wellbeing.",
  },
  {
    title: "Wellness Team",
    detail: "Professionals delivering selected wellness therapies as part of an integrated care approach.",
  },
];

export const galleryCategories = [
  { title: "Reception & Pharmacy", detail: "Where every visit begins, with our in-house pharmacy on site.", image: heroClinic },
  {
    title: "Consultation Rooms",
    detail: "Private rooms for detailed clinical evaluation and treatment planning.",
    image: consultationAssetUrl,
  },
  {
    title: "Recovery Rooms",
    detail: "Dedicated monitoring and post-procedure care after interventional treatment.",
    image: procedureSuite,
  },
  {
    title: "Physiotherapy & Rehabilitation",
    detail: "A dedicated space for movement-based recovery and functional rehabilitation.",
    image: physioImg,
  },
  {
    title: "Wellness Rooms",
    detail: "Calm rooms for selected wellness therapies and IV-based treatments.",
    image: wellnessImg,
  },
  { title: "Patient Lounge", detail: "Comfortable, private spaces designed around the patient.", image: nutritionImg },
];

export const facilityHighlights = [
  {
    title: "Physiotherapy & rehabilitation space",
    detail: "Designed for movement-based recovery and functional rehabilitation.",
  },
  { title: "Well-equipped operating theatre", detail: "For minimally invasive and interventional pain procedures." },
  { title: "Dedicated recovery rooms", detail: "For patient monitoring and post-procedure care." },
  {
    title: "Wellness treatment rooms",
    detail: "A calm environment for selected wellness therapies and IV-based treatments.",
  },
  {
    title: "Advanced wellness facilities",
    detail: "Including Hyperbaric Oxygen Therapy (HBOT), infrared therapy and cryotherapy.",
  },
  { title: "In-house pharmacy", detail: "Prescriptions, supplements and wellness essentials in a single visit." },
];

export const missionVision = [
  {
    title: "Our Mission",
    detail:
      "To provide comprehensive, personalised and evidence-based care for people living with pain and movement-related conditions. We look beyond the symptom, understand the individual as a whole and bring together medical care, interventional pain management, physiotherapy, rehabilitation, nutrition, psychological support and wellness to create a more complete path to recovery.",
    quote: "To help people live with less pain, move with greater confidence and experience a better quality of life.",
  },
  {
    title: "Our Vision",
    detail:
      "To create a new standard in pain care, one where patients do not have to navigate multiple specialists and facilities to find the care they need. We envision Thrive as a centre where medicine, movement and wellness come together seamlessly, restoring function, improving well-being and supporting long-term health.",
    quote: "A world where pain does not define how you live your life.",
  },
];


export const insuranceTrustPoints = [
  "Empanelled insurers and TPAs",
  "Cashless support where eligible",
  "Pre-authorisation assistance",
  "Clear, upfront billing",
];

export const cashlessSteps = [
  {
    step: "Check your coverage",
    detail: "Share your insurance details with our team so eligibility can be checked.",
  },
  {
    step: "Submit required documents",
    detail: "Provide the documents required for pre-authorisation and processing.",
  },
  {
    step: "Pre-authorisation",
    detail: "Our team coordinates with the relevant insurer or TPA for approval where applicable.",
  },
  {
    step: "Treatment",
    detail: "Once the required approval is in place, your treatment can proceed according to the clinical plan.",
  },
  {
    step: "Billing & settlement",
    detail: "The insurer or TPA settles eligible covered expenses according to the terms of your policy.",
  },
];

export const insuranceFaqs = [
  {
    q: "Do you provide cashless treatment?",
    a: "Cashless treatment is available for eligible patients under empanelled insurers and TPAs, subject to policy terms and approval.",
  },
  {
    q: "Will my treatment be covered by insurance?",
    a: "Coverage depends on your individual policy, diagnosis, treatment and insurer or TPA approval.",
  },
  {
    q: "What documents should I bring?",
    a: "Please carry your insurance or TPA details and the identification and medical documents requested by the clinic.",
  },
  {
    q: "Can you check my insurance eligibility before my appointment?",
    a: "Our team can help you understand the verification and pre-authorisation process before treatment.",
  },
  {
    q: "Does insurance cover every pain-management procedure?",
    a: "Not necessarily. Coverage varies by policy and procedure. Please confirm with the clinic and your insurer or TPA before treatment.",
  },
];

export const stats = [
  { value: "4,000", label: "sq. ft. integrated care facility" },
  { value: "7", label: "areas of care under one roof" },
  { value: "1", label: "coordinated care team" },
  { value: "In-house", label: "diagnostics, pharmacy and therapy" },
];

export const pillars = [
  {
    title: "Physician-led",
    detail: "Care is guided by medical expertise, clinical assessment and evidence-informed decisions.",
  },
  {
    title: "Personalised",
    detail: "Your treatment is shaped around your condition, history, needs and goals.",
  },
  {
    title: "Multidisciplinary",
    detail: "Pain management, physiotherapy, psychology, nutrition and wellness working as one team.",
  },
];

export const socials = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export const blogTopics = [
  "Chronic pain",
  "Back and spine health",
  "Joint health",
  "Physiotherapy and rehabilitation",
  "Pain psychology",
  "Nutrition and recovery",
  "Wellness",
  "Preventive health",
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  displayDate: string;
  readTime: string;
  image: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-persistent-back-pain",
    title: "Understanding persistent back pain",
    excerpt:
      "Why some back pain settles on its own, and when a clinical assessment becomes the more useful next step.",
    author: "Thrive Clinical Team",
    date: "2026-05-18",
    displayDate: "18 May 2026",
    readTime: "5 min read",
    image: procedureSuite,
    body: [
      "Most episodes of back pain improve with movement, rest and time. Pain that persists for weeks, changes how you sleep, or limits everyday activity deserves a closer look rather than a stronger tablet.",
      "A clinical assessment considers your history, your movement and, where relevant, imaging. The purpose is to understand what is generating the pain so that treatment can be directed rather than general.",
      "Where an interventional option is appropriate, it is discussed and explained clearly. Where it is not, rehabilitation, movement and supportive care can often achieve more.",
      "This article is general information and is not a substitute for individual medical advice.",
    ],
  },
  {
    slug: "what-to-expect-from-an-image-guided-procedure",
    title: "What to expect from an image-guided procedure",
    excerpt: "A calm, step-by-step look at how a minimally invasive pain procedure is planned and carried out.",
    author: "Thrive Clinical Team",
    date: "2026-04-27",
    displayDate: "27 April 2026",
    readTime: "4 min read",
    image: diagnosticsImg,
    body: [
      "Image-guided procedures are planned around a clear diagnosis. Before anything is scheduled, the reason for the procedure, the expected benefit and the alternatives are explained to you.",
      "On the day, imaging is used so that treatment can be delivered precisely to the intended area. Most procedures are minimally invasive and carried out with local anaesthesia where clinically appropriate.",
      "Afterwards you receive clear aftercare guidance, and rehabilitation is considered part of the plan rather than an afterthought.",
      "Suitability for any procedure is decided case by case after clinical assessment.",
    ],
  },
  {
    slug: "sleep-mood-and-chronic-pain",
    title: "Sleep, mood and chronic pain",
    excerpt: "Persistent pain rarely stays physical. Here is why sleep and mood belong in a pain treatment plan.",
    author: "Thrive Clinical Team",
    date: "2026-03-30",
    displayDate: "30 March 2026",
    readTime: "4 min read",
    image: psychologyImg,
    body: [
      "Pain disturbs sleep, and poor sleep can make pain feel more intense the following day. Many people live inside that loop for a long time before anyone offers to address it.",
      "Support often starts with practical routines around sleep timing, activity and pacing, alongside psychological support for the worry and tension that persistent pain creates.",
      "Because psychology sits within the same team as pain management and physiotherapy at Thrive, this support forms part of one plan rather than a separate referral.",
      "If pain is affecting your mood or sleep, mention it at your consultation so it can be included in your care.",
    ],
  },
  {
    slug: "inflammation-and-adjuvant-therapies",
    title: "Inflammation and Pain: The Adjuvant Role of Cold Plunge, HBOT, Molecular Hydrogen, and Ozone Therapy",
    excerpt: "How emerging adjuvant therapies can help modulate chronic inflammation and support pain management.",
    author: "Thrive Clinical Team",
    date: "2026-08-25",
    displayDate: "25 August 2026",
    readTime: "6 min read",
    image: wellnessImg,
    body: [
      "Chronic inflammation is often at the core of persistent pain conditions. While conventional pain management focuses on diagnosing and treating the structural or neuropathic causes of pain, addressing systemic inflammation can play a crucial adjunctive role in a patient's overall recovery.",
      "At Thrive, we recognise that therapies designed to modulate inflammation, oxidative stress, and tissue oxygenation can be valuable tools when used alongside evidence-based pain interventions. These include Cold Water Immersion (Cold Plunge), Hyperbaric Oxygen Therapy (HBOT), Molecular Hydrogen, and advanced ozone therapies like MAHT and EBOO.",
      "**Cold Water Immersion (Cold Plunge)**: Exposure to cold temperatures can trigger a systemic anti-inflammatory response, constricting blood vessels to reduce acute swelling and subsequently promoting a rush of oxygen-rich blood to tissues as the body warms. It is increasingly recognised for its potential to support muscle recovery and reduce systemic inflammatory markers.",
      "**Hyperbaric Oxygen Therapy (HBOT)**: Delivering pure oxygen in a pressurised environment allows oxygen to dissolve directly into the blood plasma, reaching tissues with compromised circulation. This can help reduce swelling, promote the formation of new blood vessels, and support the body's natural healing processes in chronic pain conditions.",
      "**Molecular Hydrogen**: An emerging antioxidant therapy, molecular hydrogen is thought to selectively neutralise harmful free radicals without affecting essential reactive oxygen species. By modulating oxidative stress, it offers a novel approach to managing the inflammatory cascades associated with chronic pain.",
      "**Ozone Therapy (MAHT and EBOO)**: Major Autohemotherapy (MAHT) and Extracorporeal Blood Oxygenation and Ozonation (EBOO) are advanced blood-based therapies. By exposing a patient's blood to a precise medical ozone-oxygen mixture before returning it to the body, these therapies aim to improve microcirculation, stimulate antioxidant enzyme activity, and modulate inflammatory signalling.",
      "It is important to note that these modalities are **adjunctive**. They are not standalone cures for chronic pain, but rather supportive therapies that address the underlying biological environment. When combined with accurate diagnosis, interventional treatments, and proper rehabilitation, they can help patients build a healthier, more active life beyond pain."
    ],
  },
];
