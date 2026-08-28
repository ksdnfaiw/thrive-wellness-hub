import { useState } from "react";
import { Reveal } from "./Reveal";

const conditions = {
  head: ["Occipital neuralgia", "Cervicogenic headache", "Trigeminal neuralgia"],
  neck: ["Cervical facet joint pain", "Cervical spondylosis", "Neck pain"],
  shoulder: ["Rotator cuff tendinopathy", "SLAP lesion", "Shoulder joint pain"],
  elbow: ["Tennis elbow (Lateral epicondylitis)", "Golfer's elbow"],
  back: ["Lumbar facet joint arthritis", "Discogenic low back pain", "Sciatica", "Sacroiliac joint pain"],
  hip: ["Hip osteoarthritis", "Trochanteric bursitis", "Hip girdle muscle pain"],
  knee: ["Knee osteoarthritis", "Patellar tendinopathy", "Meniscus injuries"],
  foot: ["Chronic plantar fasciitis", "Achilles tendinopathy", "Ankle sprains"],
};

export function HumanoidMap() {
  const [activeZone, setActiveZone] = useState<keyof typeof conditions | null>(null);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <Reveal className="relative flex aspect-square items-center justify-center rounded-[2rem] bg-secondary/50 p-8 shadow-inner">
        {/* Simplified Humanoid SVG Map */}
        <div className="relative h-full w-full max-w-sm">
          <svg viewBox="0 0 200 400" className="h-full w-full drop-shadow-md">
            {/* Generic Body Outline */}
            <path
              d="M100 20 C 110 20 120 30 120 45 C 120 60 110 70 100 70 C 90 70 80 60 80 45 C 80 30 90 20 100 20 Z"
              fill="#e2e8f0"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            <path
              d="M100 70 C 130 75 140 90 140 120 L 140 200 L 115 200 L 115 380 C 115 390 105 390 105 380 L 105 230 L 95 230 L 95 380 C 95 390 85 390 85 380 L 85 200 L 60 200 L 60 120 C 60 90 70 75 100 70 Z"
              fill="#e2e8f0"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            {/* Arms */}
            <path d="M60 120 L 30 220 L 40 225 L 65 130 Z" fill="#e2e8f0" />
            <path d="M140 120 L 170 220 L 160 225 L 135 130 Z" fill="#e2e8f0" />

            {/* Clickable Hotspots */}
            <circle
              cx="100" cy="45" r="15"
              className="cursor-pointer fill-primary/30 stroke-primary transition-all hover:fill-primary/60"
              onClick={() => setActiveZone("head")}
            />
            <circle
              cx="100" cy="85" r="12"
              className="cursor-pointer fill-primary/30 stroke-primary transition-all hover:fill-primary/60"
              onClick={() => setActiveZone("neck")}
            />
            <circle
              cx="65" cy="115" r="12"
              className="cursor-pointer fill-primary/30 stroke-primary transition-all hover:fill-primary/60"
              onClick={() => setActiveZone("shoulder")}
            />
            <circle
              cx="45" cy="175" r="10"
              className="cursor-pointer fill-primary/30 stroke-primary transition-all hover:fill-primary/60"
              onClick={() => setActiveZone("elbow")}
            />
            <circle
              cx="100" cy="160" r="20"
              className="cursor-pointer fill-primary/30 stroke-primary transition-all hover:fill-primary/60"
              onClick={() => setActiveZone("back")}
            />
            <circle
              cx="75" cy="210" r="15"
              className="cursor-pointer fill-primary/30 stroke-primary transition-all hover:fill-primary/60"
              onClick={() => setActiveZone("hip")}
            />
            <circle
              cx="85" cy="300" r="12"
              className="cursor-pointer fill-primary/30 stroke-primary transition-all hover:fill-primary/60"
              onClick={() => setActiveZone("knee")}
            />
            <circle
              cx="85" cy="380" r="10"
              className="cursor-pointer fill-primary/30 stroke-primary transition-all hover:fill-primary/60"
              onClick={() => setActiveZone("foot")}
            />
          </svg>
        </div>
      </Reveal>

      <Reveal delay={100} className="card-soft p-8 sm:p-10">
        {activeZone ? (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h3 className="font-display text-2xl font-bold capitalize text-deep">
              {activeZone} Conditions
            </h3>
            <ul className="mt-6 space-y-3">
              {conditions[activeZone].map((condition) => (
                <li key={condition} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {condition}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setActiveZone(null)}
              className="mt-8 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Reset map
            </button>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4 M10 17l5-5-5-5 M13.8 12H3" />
              </svg>
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold">Interactive Body Map</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Select a highlighted area on the body map to explore the specific pain conditions and injuries we treat at Thrive.
            </p>
          </div>
        )}
      </Reveal>
    </div>
  );
}
