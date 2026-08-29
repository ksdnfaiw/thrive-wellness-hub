import { useState } from "react";
import { Reveal } from "./Reveal";
import { Activity, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

export type BodyZone = {
  id: string;
  name: string;
  badge: string;
  coordinates: { x: number; y: number }; // percentage coordinates on 3:4 image
  conditions: string[];
  recommendedTreatments: string[];
};

export const bodyZones: BodyZone[] = [
  {
    id: "head-neck",
    name: "Head & Neck",
    badge: "Level I - II Evidence",
    coordinates: { x: 58, y: 15 },
    conditions: [
      "Occipital neuralgia & cervicogenic headache",
      "Cervical facet joint arthritis & spondylosis",
      "Chronic neck stiffness and nerve impingement",
      "Trigeminal and peripheral cranial neuralgias",
    ],
    recommendedTreatments: ["VENOM Radiofrequency Ablation", "Ultrasound-Guided Nerve Blocks", "Regenerative PRP Injections"],
  },
  {
    id: "shoulder",
    name: "Shoulder Injuries",
    badge: "Level I - II Evidence",
    coordinates: { x: 48, y: 24 },
    conditions: [
      "Rotator cuff tendinitis, tendinosis & partial tears",
      "SLAP lesions & labral tears",
      "ACJ, SCJ and Coracoclavicular ligament strain",
      "Anterior & posterior band IGHL injuries",
      "Subacromial bursitis and impingement",
    ],
    recommendedTreatments: ["Platelet-Rich Plasma (PRP)", "Hydrodilatation", "Ultrasound-Guided Injections", "Targeted Physiotherapy"],
  },
  {
    id: "elbow",
    name: "Elbow Disorders",
    badge: "Level I Evidence",
    coordinates: { x: 34, y: 30 },
    conditions: [
      "Tennis elbow (Lateral epicondylitis) — Level I evidence",
      "Golfer's elbow (Medial epicondylitis)",
      "Distal biceps tendinopathy",
      "Chronic elbow ligament strains",
    ],
    recommendedTreatments: ["High-Density PRP Therapy", "Tenotomy", "Physiotherapy & Eccentric Rehab"],
  },
  {
    id: "wrist-hand",
    name: "Wrist & Hand",
    badge: "Level II - III Evidence",
    coordinates: { x: 67, y: 37 },
    conditions: [
      "Triangular Fibrocartilage Complex (TFCC) injuries",
      "Scapholunate & carpal ligament sprains",
      "Carpal tunnel syndrome",
      "De Quervain's tenosynovitis",
      "Thumb CMC basal joint arthritis",
    ],
    recommendedTreatments: ["PRP Prolotherapy", "Nerve Hydrodissection", "Splinting & Hand Rehab"],
  },
  {
    id: "spine-back",
    name: "Spine, Back & Sacroiliac",
    badge: "Level I - IV Evidence",
    coordinates: { x: 50, y: 36 },
    conditions: [
      "Lumbar facet joint pain & arthritis",
      "Discogenic low back pain",
      "Sacroiliac (SI) joint dysfunction & arthritis",
      "Sciatica & lumbar radiculopathy",
      "Thoracic and cervical spinal pain",
    ],
    recommendedTreatments: ["VENOM™ RFA Thermal Neurotomy", "Epiduroplasty", "Disc Biologics / PRP", "MAHT / EBOO Therapy"],
  },
  {
    id: "hip-pelvis",
    name: "Hip & Pelvis Injuries",
    badge: "Level II - III Evidence",
    coordinates: { x: 49, y: 50 },
    conditions: [
      "Knee & Hip osteoarthritis (mild to moderate)",
      "Hip girdle muscle strains & hamstring tendinitis",
      "Trochanteric bursitis & gluteal tendinopathy",
      "Labral tears & focal cartilage defects",
      "Piriformis syndrome",
    ],
    recommendedTreatments: ["Autologous PRP Injections", "Sensory Nerve RFA", "Physical Rehab & Core Stabilisation"],
  },
  {
    id: "knee",
    name: "Knee Joint & Ligaments",
    badge: "Level I Evidence",
    coordinates: { x: 68, y: 60 },
    conditions: [
      "Knee Osteoarthritis (Level I evidence for pain relief)",
      "Patellar tendinopathy & Jumper's knee",
      "Partial MCL / LCL ligament sprains (Grade I/II)",
      "Meniscus tears & focal cartilage defects",
      "Post-ACL reconstruction healing support",
    ],
    recommendedTreatments: ["High-Density PRP Therapy", "Genicular Nerve RFA (VENOM)", "EBOO / Ozone Adjunctive Therapy"],
  },
  {
    id: "ankle-foot",
    name: "Ankle & Foot Injuries",
    badge: "Level I Evidence",
    coordinates: { x: 55, y: 76 },
    conditions: [
      "Chronic Plantar Fasciitis (Level I strong evidence)",
      "Achilles tendinopathy & peritendinitis",
      "Chronic ankle ligament sprains (ATFL / CFL)",
      "Retrocalcaneal bursitis & heel pain",
    ],
    recommendedTreatments: ["PRP Injections", "Shockwave Therapy", "Custom Orthotics & Biomechanics Correction"],
  },
];

export function HumanoidMap() {
  const [activeId, setActiveId] = useState<string>("knee");
  const activeZone: BodyZone = bodyZones.find((z) => z.id === activeId) ?? bodyZones[0]!;

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
      {/* Visual Anatomy Runner Column */}
      <div className="lg:col-span-6 xl:col-span-5">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-b from-[#111827] via-[#0c121e] to-[#060b13] p-4 sm:p-5 shadow-2xl">
          <div className="flex items-center justify-between pb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-deep/90 px-3 py-1 text-[11px] font-bold tracking-wider text-lime-foreground backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              INTERACTIVE ANATOMICAL RUNNER
            </span>
            <span className="text-[11px] font-medium text-muted-foreground/80">Click joints to inspect</span>
          </div>

          <div className="relative aspect-[3/4] w-full select-none overflow-hidden rounded-xl bg-black/40">
            <img
              src="/images/humanoid-map.jpg"
              alt="Humanoid anatomy runner showing chronic pain treatment regions"
              className="h-full w-full object-cover object-center opacity-95 transition-all duration-700 hover:scale-105"
            />

            {/* Interactive Pins */}
            {bodyZones.map((zone) => {
              const isSelected = zone.id === activeId;
              return (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setActiveId(zone.id)}
                  style={{ top: `${zone.coordinates.y}%`, left: `${zone.coordinates.x}%` }}
                  aria-label={`Select ${zone.name}`}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 focus:outline-none z-20"
                >
                  <span className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <span
                      className={`absolute inline-flex h-9 w-9 sm:h-11 sm:w-11 rounded-full opacity-75 animate-ping transition-colors ${
                        isSelected ? "bg-red-500" : "bg-red-400/40 group-hover:bg-red-500/70"
                      }`}
                    />
                    {/* Solid hotspot button */}
                    <span
                      className={`relative flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 transition-all shadow-lg ${
                        isSelected
                          ? "border-white bg-red-600 scale-125 shadow-red-500/60 ring-4 ring-red-400/50"
                          : "border-red-400/80 bg-red-950/80 text-white group-hover:scale-115 group-hover:bg-red-600"
                      }`}
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-white" />
                    </span>
                  </span>
                  
                  {/* Tooltip text badge on hover / active */}
                  <span
                    className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[11px] font-bold tracking-wide transition-opacity shadow-md pointer-events-none ${
                      isSelected
                        ? "bg-white text-deep opacity-100 ring-2 ring-red-500"
                        : "bg-deep/90 text-white opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {zone.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick zone buttons */}
          <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
            {bodyZones.map((zone) => (
              <button
                key={zone.id}
                type="button"
                onClick={() => setActiveId(zone.id)}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                  activeId === zone.id
                    ? "bg-primary text-white shadow-sm ring-1 ring-white/20"
                    : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                }`}
              >
                {zone.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Conditions & Evidence Details Column */}
      <div className="lg:col-span-6 xl:col-span-7">
        <Reveal className="card-soft overflow-hidden p-6 sm:p-8 border-2 border-primary/20 bg-card">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
            <div>
              <span className="text-xs font-bold tracking-[0.16em] text-primary uppercase">
                TARGETED PAIN REGION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-deep mt-1">
                {activeZone.name}
              </h3>
            </div>
            <span className="rounded-full bg-sand px-3.5 py-1 text-xs font-bold text-deep">
              {activeZone.badge}
            </span>
          </div>

          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-xs font-bold tracking-wider text-muted-foreground uppercase">
              <Activity className="h-4 w-4 text-primary" />
              Conditions We Treat in this Area
            </h4>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {activeZone.conditions.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-border/80 bg-sand/30 p-3 text-sm text-foreground/90 transition-colors hover:bg-sand/60"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-secondary/50 p-4 sm:p-5">
            <h4 className="text-xs font-bold tracking-wider text-deep uppercase">
              Recommended Interventional Pathways:
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {activeZone.recommendedTreatments.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-card px-3 py-1.5 text-xs font-medium text-deep shadow-xs border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <Link
              to="/interventions"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-deep"
            >
              Explore PRP, RFA & Ozone Protocols
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/book" className="btn btn-primary text-xs px-5 py-2.5">
              Book Specialist Assessment
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
