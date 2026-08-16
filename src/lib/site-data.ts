import heroClinic from "@/assets/hero-clinic.jpg";
import procedureSuite from "@/assets/procedure-suite.jpg";
import physioImg from "@/assets/physio.jpg";
import psychologyImg from "@/assets/psychology.jpg";
import wellnessImg from "@/assets/wellness.jpg";
import receptionImg from "@/assets/reception.jpg";
import diagnosticsImg from "@/assets/diagnostics.jpg";
import nutritionImg from "@/assets/nutrition.jpg";

export const clinic = {
  name: "Thrive Pain & Wellness Clinic",
  brandLine: "Heal. Restore. Thrive.",
  tagline: "Your pain ends here. Your life begins.",
  phone: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  whatsapp: "919000000000",
  email: "care@thrivepainwellness.in",
  address: "Road No. 12, Banjara Hills, Hyderabad, Telangana 500034",
  mapsQuery: "Banjara Hills, Hyderabad, Telangana 500034",
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { days: "Sunday", time: "10:00 AM – 2:00 PM (by appointment)" },
  ],
};

export const whatsappLink = (message = "Hello Thrive, I'd like to book an appointment.") =>
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
    title: "Interventional Procedures",
    short: "Physician-led, image-guided procedures that target pain at its source.",
    intro:
      "Our interventional suite covers neuromodulation, epiduroplasty, regenerative therapies, radiofrequency ablation (RFA), cryotherapy and ultrasound-guided injections — all performed by pain physicians under image guidance in a dedicated procedure room.",
    image: procedureSuite,
    highlights: [
      "Neuromodulation & spinal cord stimulation",
      "Epiduroplasty for spinal adhesions",
      "Regenerative therapies (PRP, prolotherapy)",
      "Radiofrequency ablation (RFA)",
      "Cryotherapy for nerve pain",
      "Ultrasound-guided injections",
    ],
    journey: [
      {
        stage: "Diagnosis",
        detail:
          "A detailed pain history, clinical examination and in-house imaging pinpoint the exact pain generator before anything is planned.",
      },
      {
        stage: "Procedure",
        detail:
          "The targeted intervention is performed under fluoroscopy or ultrasound guidance — most are day-care, needing only local anaesthesia.",
      },
      {
        stage: "Recovery",
        detail:
          "You go home the same day with a written recovery plan, physiotherapy handover and scheduled review calls from our care team.",
      },
    ],
  },
  {
    slug: "diagnostics-and-imaging",
    title: "Diagnostics & Imaging",
    short: "In-house lab, digital X-ray, ultrasound and fluoroscopy — answers the same day.",
    intro:
      "Diagnosis should not mean three visits to three centres. Our in-house lab, digital X-ray, ultrasound and C-arm fluoroscopy let your physician confirm the source of pain during the same visit.",
    image: diagnosticsImg,
    highlights: [
      "In-house pathology lab",
      "Digital X-ray (low dose)",
      "Diagnostic & interventional ultrasound",
      "Fluoroscopy (C-arm) guided assessment",
    ],
    journey: [
      { stage: "Diagnosis", detail: "Tests are ordered and run within the facility, usually within the hour." },
      { stage: "Procedure", detail: "Imaging is reviewed with you on screen so you understand what is causing the pain." },
      { stage: "Recovery", detail: "Reports stay on your file and guide every follow-up across our departments." },
    ],
  },
  {
    slug: "physiotherapy-and-rehabilitation",
    title: "Physiotherapy & Rehabilitation",
    short: "One-to-one rehab that protects the result of your procedure.",
    intro:
      "Interventional relief lasts when movement is rebuilt. Our physiotherapists work in the same building as your pain physician, so your rehab plan is written around your procedure — not guessed at.",
    image: physioImg,
    highlights: [
      "Post-procedure rehabilitation",
      "Manual therapy & dry needling",
      "Posture and gait correction",
      "Sports and workplace injury recovery",
      "Home programme with progress reviews",
    ],
    journey: [
      { stage: "Assessment", detail: "Movement screening and strength testing establish your baseline." },
      { stage: "Programme", detail: "Supervised one-to-one sessions with measurable weekly goals." },
      { stage: "Maintenance", detail: "A home programme and periodic reviews keep gains long-term." },
    ],
  },
  {
    slug: "psychology-and-mental-wellness",
    title: "Psychology & Mental Wellness",
    short: "Clinical psychology support for the emotional weight of chronic pain.",
    intro:
      "Chronic pain changes sleep, mood and confidence. Our clinical psychologists offer structured, evidence-based support alongside your medical treatment — quietly, and without judgement.",
    image: psychologyImg,
    highlights: [
      "Pain-focused CBT",
      "Sleep and anxiety management",
      "Stress and burnout counselling",
      "Family and caregiver sessions",
    ],
    journey: [
      { stage: "Consultation", detail: "A confidential first session to understand your history and goals." },
      { stage: "Therapy", detail: "A defined number of structured sessions, in person or online." },
      { stage: "Review", detail: "Progress is reviewed with your pain physician as part of one plan." },
    ],
  },
  {
    slug: "nutrition",
    title: "Nutrition",
    short: "Anti-inflammatory nutrition plans built for Indian kitchens.",
    intro:
      "Weight, inflammation and metabolic health all influence pain. Our clinical nutritionists build practical plans around what you actually eat at home.",
    image: nutritionImg,
    highlights: [
      "Anti-inflammatory meal planning",
      "Weight management for joint load",
      "Diabetes and metabolic support",
      "Pre- and post-procedure nutrition",
    ],
    journey: [
      { stage: "Assessment", detail: "Body composition, labs and a full dietary recall." },
      { stage: "Plan", detail: "A realistic weekly plan with substitutions for your household." },
      { stage: "Follow-up", detail: "Fortnightly check-ins to adjust as your body responds." },
    ],
  },
  {
    slug: "wellness-therapies",
    title: "Wellness Therapies",
    short: "Next-generation recovery therapies in a retreat-calm setting.",
    intro:
      "Recovery therapies that complement medical care — delivered in quiet, private therapy rooms designed to feel nothing like a hospital.",
    image: wellnessImg,
    highlights: [
      "Therapeutic massage & myofascial release",
      "Recovery and circulation therapies",
      "Guided breathwork and relaxation",
      "Wellness memberships for long-term care",
    ],
    journey: [
      { stage: "Consultation", detail: "We confirm which therapies are safe and useful for your condition." },
      { stage: "Session", detail: "45–60 minute sessions in a private, calm therapy suite." },
      { stage: "Rhythm", detail: "A recommended cadence that fits your treatment stage." },
    ],
  },
  {
    slug: "in-house-pharmacy",
    title: "In-House Pharmacy",
    short: "Prescriptions dispensed before you leave the building.",
    intro:
      "Our pharmacy stocks the pain, rehabilitation and wellness medication our clinicians prescribe — so treatment starts the day it is advised.",
    image: receptionImg,
    highlights: [
      "Prescription dispensing on site",
      "Pharmacist counselling on dosage",
      "Refill reminders for long-term plans",
      "Medical supplies and support braces",
    ],
    journey: [
      { stage: "Prescription", detail: "Your physician sends the prescription directly to our counter." },
      { stage: "Dispensing", detail: "A pharmacist explains dosage, timing and interactions." },
      { stage: "Refills", detail: "Reminders and stock checks for ongoing medication." },
    ],
  },
];

export const doctors = [
  {
    name: "Dr. A. Ramesh Kumar",
    qualifications: "MBBS, MD (Anaesthesiology), Fellowship in Interventional Pain Practice (FIPP)",
    specialty: "Interventional Pain Physician & Founder",
    bio: "Fifteen years of image-guided spine and joint intervention, with a focus on neuromodulation and complex failed-back pain.",
  },
  {
    name: "Dr. Sneha Reddy",
    qualifications: "MBBS, MD (Physical Medicine & Rehabilitation)",
    specialty: "Rehabilitation Medicine",
    bio: "Leads post-procedure rehabilitation pathways and functional recovery planning for spine and joint patients.",
  },
  {
    name: "Dr. Faisal Ahmed",
    qualifications: "MBBS, DA, Fellowship in Regional Anaesthesia & Pain",
    specialty: "Regenerative & Ultrasound-Guided Therapies",
    bio: "Focuses on PRP, prolotherapy and ultrasound-guided peripheral nerve interventions.",
  },
  {
    name: "Ms. Anjali Menon",
    qualifications: "M.Phil (Clinical Psychology), RCI Registered",
    specialty: "Clinical Psychologist",
    bio: "Delivers pain-focused CBT, sleep restoration and caregiver counselling for chronic pain families.",
  },
  {
    name: "Mr. Karthik Rao",
    qualifications: "MPT (Musculoskeletal), Certified Dry Needling Practitioner",
    specialty: "Senior Physiotherapist",
    bio: "Ten years in musculoskeletal and sports rehabilitation, with a manual-therapy-first approach.",
  },
  {
    name: "Ms. Divya Shankar",
    qualifications: "M.Sc (Clinical Nutrition & Dietetics), RD",
    specialty: "Clinical Nutritionist",
    bio: "Builds anti-inflammatory and metabolic nutrition plans grounded in regional Indian diets.",
  },
];

export const insurers = [
  "Star Health & Allied Insurance",
  "HDFC ERGO General Insurance",
  "ICICI Lombard",
  "Niva Bupa Health Insurance",
  "Care Health Insurance",
  "Aditya Birla Health Insurance",
  "TATA AIG General Insurance",
  "Bajaj Allianz General Insurance",
  "New India Assurance",
  "MediAssist TPA",
  "Paramount Health Services TPA",
  "Vidal Health TPA",
];

export const cashlessSteps = [
  {
    step: "Share your policy",
    detail: "Send your health card and ID to our insurance desk on WhatsApp or bring them to reception.",
  },
  {
    step: "We raise pre-authorisation",
    detail: "Our desk files the pre-authorisation request with your insurer or TPA, usually the same working day.",
  },
  {
    step: "Approval confirmed",
    detail: "We share the approved amount, any co-pay, and exactly what you will need to pay before your procedure.",
  },
  {
    step: "Treatment, then settlement",
    detail: "You are treated cashless where approved; we handle the final bill submission and follow-up with the insurer.",
  },
];

export const insuranceFaqs = [
  {
    q: "Are day-care pain procedures covered by insurance?",
    a: "Most interventional pain procedures are day-care procedures and are covered by many policies. Coverage depends on your policy wording, waiting periods and the specific procedure — our desk confirms this in writing before you proceed.",
  },
  {
    q: "How long does cashless pre-authorisation take?",
    a: "Planned procedures are usually pre-authorised within 24–48 working hours of receiving complete documents.",
  },
  {
    q: "What if my insurer is not on your empanelled list?",
    a: "You can be treated on a reimbursement basis. We provide the full documentation set — discharge summary, itemised bill, reports and prescriptions — so your claim is not delayed.",
  },
  {
    q: "Are consultations, physiotherapy and nutrition covered?",
    a: "Outpatient consultations and therapy sessions are typically covered only under OPD add-on policies. We tell you upfront what is payable so there are no surprises.",
  },
  {
    q: "Will you tell me the cost before treatment?",
    a: "Yes. You receive a written estimate covering procedure, consumables, diagnostics and expected co-pay before you consent to any procedure.",
  },
];

export const testimonials = [
  {
    quote:
      "Eleven years of lower back pain and three opinions later, Thrive was the first place that showed me the scan and explained exactly which nerve was involved. Six weeks after the RFA I walked my daughter down the aisle.",
    name: "Srinivas R.",
    detail: "RFA for lumbar facet pain",
  },
  {
    quote:
      "What surprised me was the follow-through — the physiotherapist already knew what my doctor had done, and the psychologist helped me sleep again. It felt like one team, not four departments.",
    name: "Ayesha K.",
    detail: "Post-procedure rehabilitation",
  },
  {
    quote:
      "The insurance desk handled my pre-authorisation entirely. I knew my exact co-pay before I signed anything, which after my previous hospital experience meant everything.",
    name: "Mahesh G.",
    detail: "Cashless day-care procedure",
  },
];

export const stats = [
  { value: "4,000", label: "sq. ft. multidisciplinary facility" },
  { value: "7", label: "in-house care departments" },
  { value: "12+", label: "empanelled insurers & TPAs" },
  { value: "4.9", label: "average patient rating" },
];

export const ratings = [
  { score: "4.9", source: "Google reviews", count: "310+ patients" },
  { score: "4.8", source: "Practo profile", count: "180+ patients" },
];

export const pillars = [
  {
    title: "Our mission",
    detail: "Treat the source of pain, not just the symptom, with imaging-led diagnosis and honest advice.",
  },
  {
    title: "Our vision",
    detail: "A Hyderabad where chronic pain is managed by one team, in one place, without endless referrals.",
  },
  {
    title: "Story & goals",
    detail: "Founded by pain physicians who were tired of watching patients bounce between departments.",
  },
];

export const recoveryBars = [
  { label: "Back pain relief", value: 92 },
  { label: "Knee mobility", value: 88 },
  { label: "Post-op recovery", value: 95 },
  { label: "Sleep quality", value: 84 },
  { label: "Return to work", value: 90 },
];

export const funFacts = [
  { value: "4,000", label: "sq. ft. of clinical and recovery space" },
  { value: "7", label: "departments under one roof" },
  { value: "9,500+", label: "procedures and therapy sessions delivered" },
  { value: "48 hrs", label: "average cashless approval turnaround" },
];

export const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
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
    slug: "when-back-pain-needs-a-pain-physician",
    title: "When back pain needs a pain physician, not another painkiller",
    excerpt: "Six signs your lower back pain has moved past rest and tablets, and what an imaging-led review changes.",
    author: "Dr. A. Ramesh Kumar",
    date: "2026-05-18",
    displayDate: "18 May 2026",
    readTime: "6 min read",
    image: procedureSuite,
    body: [
      "Most lower back pain settles within six weeks with movement, sleep and simple analgesia. The problem is the pain that does not settle, because the longer it runs, the more the nervous system learns it.",
      "If your pain wakes you at night, travels below the knee, worsens on standing rather than bending, or has already outlasted two courses of medication, the useful next step is not a stronger tablet. It is finding the exact structure generating the signal.",
      "That is what an interventional review does. A diagnostic block or an image-guided assessment tells us whether the facet joint, the disc or the nerve root is responsible, and the treatment plan follows from the answer rather than from guesswork.",
    ],
  },
  {
    slug: "what-happens-in-a-radiofrequency-ablation",
    title: "What actually happens during a radiofrequency ablation",
    excerpt: "A step-by-step account of a day-care RFA procedure, from consent to walking out of the building.",
    author: "Dr. Faisal Ahmed",
    date: "2026-04-27",
    displayDate: "27 April 2026",
    readTime: "5 min read",
    image: diagnosticsImg,
    body: [
      "Radiofrequency ablation sounds far more dramatic than it is. You arrive, change, and lie face down on a fluoroscopy table. The skin is numbed with local anaesthetic before anything else happens.",
      "Under live imaging, a fine needle is guided to the medial branch nerve carrying the pain signal. We test the position with a small current so we can confirm we are on the right nerve and nowhere near a motor nerve.",
      "The lesion itself takes about 90 seconds per level. Most patients are up within the hour, home the same day, and back to desk work in two to three days with a written physiotherapy handover.",
    ],
  },
  {
    slug: "sleep-and-chronic-pain",
    title: "Why fixing your sleep changes your pain score",
    excerpt: "Chronic pain and broken sleep feed each other. Here is the order our team tackles them in.",
    author: "Ms. Anjali Menon",
    date: "2026-03-30",
    displayDate: "30 March 2026",
    readTime: "4 min read",
    image: psychologyImg,
    body: [
      "Pain fragments sleep, and fragmented sleep lowers your pain threshold the next day. Patients often describe this loop long before anyone offers to treat it.",
      "We start with sleep timing and light exposure rather than sedatives, because a stable rhythm does more for pain sensitivity than an extra hour of drugged sleep.",
      "Alongside that, pain-focused cognitive behavioural therapy reduces the anticipatory tension that keeps muscles guarded overnight. Most patients report a measurable drop in morning stiffness within four weeks.",
    ],
  },
];
