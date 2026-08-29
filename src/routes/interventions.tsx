import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { HumanoidMap } from "@/components/HumanoidMap";
import { CheckCircle2, ShieldCheck, Sparkles, Activity, AlertCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/interventions")({
  head: () => ({
    meta: [
      { title: "Advanced Pain Interventions & Regenerative Therapies | Thrive Clinic Hyderabad" },
      {
        name: "description",
        content:
          "Targeted interventional pain procedures including PRP regenerative therapies, MAHT & EBOO blood ozone therapy, and VENOM™ Radiofrequency Ablation (RFA).",
      },
      { property: "og:title", content: "Advanced Pain Interventions | Thrive Pain Clinic" },
      {
        property: "og:description",
        content: "Physician-led PRP, EBOO ozone therapies, and precision radiofrequency ablation under one roof.",
      },
      { property: "og:url", content: "/interventions" },
    ],
  }),
  component: InterventionsPage,
});

export function InterventionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Evidence-Based Interventional Pain Medicine"
        title="Targeted Pain Interventions."
        accent="Regenerative & Precision Care."
        description="When conservative measures are not enough, our physician-led clinic offers state-of-the-art biological therapies, precision nerve ablation, and advanced systemic therapies designed to restore function and treat root causes."
      >
        <Link to="/book" className="btn btn-primary">
          Schedule Evaluation
        </Link>
        <a href="#interactive-map" className="btn btn-outline">
          Explore Pain Regions
        </a>
      </PageHero>

      {/* Interactive Anatomy Section */}
      <section id="interactive-map" className="container-x py-16 sm:py-24">
        <Reveal className="mb-12 text-center">
          <span className="eyebrow">Interactive Clinical Map</span>
          <h2 className="display-lg mx-auto mt-5 max-w-3xl">Pain Conditions We Treat</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Click on any joint or anatomical hotspot on our runner below to inspect the specific conditions, injuries, and evidence-backed therapies we provide.
          </p>
        </Reveal>
        <HumanoidMap />
      </section>

      {/* ─── SECTION 1: PRP & REGENERATIVE MEDICINE ─── */}
      <section className="bg-sand/40 border-y border-border py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="eyebrow">Biological Repair & Healing</span>
                <h2 className="display-lg mt-4 max-w-3xl">PRP & Regenerative Therapies for Chronic Pain</h2>
              </div>
              <span className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold tracking-wider text-primary uppercase">
                Level I - III Clinical Evidence
              </span>
            </div>
            <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Chronic pain can often result from tissue degeneration, persistent inflammation, tendon or ligament injury, joint disease, and nerve-related conditions. Platelet-Rich Plasma (PRP) and regenerative therapies aim to support the body’s natural healing processes and may help reduce pain, improve function, and promote tissue repair in appropriately selected patients.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6 overflow-hidden rounded-3xl border border-border shadow-soft">
              <img
                src="/images/prp-therapy.jpg"
                alt="Physician administering ultrasound-guided PRP injection into knee joint"
                className="aspect-16/10 w-full object-cover"
              />
              <div className="bg-card p-6 border-t border-border">
                <p className="font-display text-sm font-bold tracking-wider uppercase text-deep">
                  Precision Ultrasound Guidance
                </p>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Every regenerative injection at Thrive is performed under high-resolution ultrasound guidance to guarantee direct placement into target tendons, ligaments, and articular cartilage.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-6 space-y-6">
              <div className="card-flat p-6 sm:p-7 border border-border">
                <h3 className="font-display text-xl font-bold text-deep flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  How Does PRP Work?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  PRP is prepared from a small sample of the patient’s own blood and contains a concentrated level of platelets and bioactive growth factors. After injection into the targeted area, PRP may:
                </p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 text-xs sm:text-sm text-foreground/90">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Modulate inflammation and pain signalling</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Release growth factors for tissue repair</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Stimulate collagen & tenocyte activity</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Support healing of tendons & ligaments</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Promote cartilage & soft-tissue repair</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Improve joint function and reduce pain</li>
                </ul>
              </div>

              <div className="card-soft p-6 border border-border bg-card">
                <h3 className="font-display text-lg font-bold text-deep">Role in Chronic Pain Conditions</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Regenerative therapies are commonly considered for chronic musculoskeletal pain that has not adequately responded to medications, physiotherapy, or other conservative treatments.
                </p>
              </div>
            </Reveal>
          </div>

          {/* PRP Indications Grid by Evidence */}
          <div className="mt-14">
            <h3 className="font-display text-2xl font-bold text-deep">Indications & Clinical Evidence for PRP Therapy</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="card-flat p-6 border border-border">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h4 className="font-display text-base font-bold text-deep">1. Tendinopathies</h4>
                  <span className="text-[11px] font-bold text-primary bg-sand px-2 py-0.5 rounded">Level I - III</span>
                </div>
                <ul className="mt-4 space-y-2 text-xs leading-relaxed text-muted-foreground">
                  <li><strong>Tennis Elbow (Lateral Epicondylitis):</strong> Level I evidence; strong long-term evidence for pain relief and functional improvement.</li>
                  <li><strong>Patellar Tendinopathy:</strong> Level II–III; beneficial in selected chronic cases.</li>
                  <li><strong>Achilles Tendinopathy:</strong> Level II–III; may help chronic, treatment-resistant cases.</li>
                  <li><strong>Rotator Cuff Tendinosis / Partial Tears:</strong> Level II; improves pain and function.</li>
                </ul>
              </div>

              <div className="card-flat p-6 border border-border">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h4 className="font-display text-base font-bold text-deep">2. Joint Disorders</h4>
                  <span className="text-[11px] font-bold text-primary bg-sand px-2 py-0.5 rounded">Level I - III</span>
                </div>
                <ul className="mt-4 space-y-2 text-xs leading-relaxed text-muted-foreground">
                  <li><strong>Knee Osteoarthritis:</strong> Level I; strong evidence for pain relief and functional improvement.</li>
                  <li><strong>Hip Osteoarthritis:</strong> Level II–III; promising outcomes in mild-moderate wear.</li>
                  <li><strong>Focal Cartilage Lesions:</strong> Level III; effective adjunct in cartilage restoration.</li>
                </ul>
              </div>

              <div className="card-flat p-6 border border-border">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h4 className="font-display text-base font-bold text-deep">3. Ligament & Soft Tissue</h4>
                  <span className="text-[11px] font-bold text-primary bg-sand px-2 py-0.5 rounded">Level I - IV</span>
                </div>
                <ul className="mt-4 space-y-2 text-xs leading-relaxed text-muted-foreground">
                  <li><strong>Chronic Plantar Fasciitis:</strong> Level I; effective for durable relief and return to activity.</li>
                  <li><strong>Partial MCL Sprains:</strong> Level III–IV; supports faster ligament recovery.</li>
                  <li><strong>Grade II Muscle Tears:</strong> Level III; potential for faster return to activity.</li>
                  <li><strong>Post-Surgical Healing:</strong> Rotator Cuff Repair, ACL & Meniscus repair adjunct.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Eligibility & Contraindications */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="card-soft p-6 sm:p-7 border border-border bg-card">
              <h4 className="flex items-center gap-2 font-display text-lg font-bold text-deep">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Who Is Eligible for PRP?
              </h4>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <li>• Chronic pain caused by a diagnosed musculoskeletal condition</li>
                <li>• Persistent symptoms despite conservative physiotherapy or medication</li>
                <li>• Mild to moderate degenerative joint changes (K-L Grade I-III)</li>
                <li>• Chronic tendon, ligament, or soft-tissue injury</li>
                <li>• Adequate blood parameters and platelet count with realistic recovery expectations</li>
              </ul>
            </div>

            <div className="card-soft p-6 sm:p-7 border border-border bg-card">
              <h4 className="flex items-center gap-2 font-display text-lg font-bold text-deep">
                <AlertCircle className="h-5 w-5 text-lime" />
                Contraindications & Precautions
              </h4>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <li>• Active local or systemic infection</li>
                <li>• Severe platelet disorders, thrombocytopenia, or active hematologic malignancy</li>
                <li>• Significant uncontrolled bleeding disorders or acute instability</li>
                <li>• Ongoing anticoagulant therapy (individual medical decision required)</li>
                <li>• Severe end-stage (Grade IV) joint bone-on-bone degeneration where surgery is indicated</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ─── SECTION 2: MAHT & EBOO BLOOD OZONE THERAPY ─── */}
      <section className="container-x py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="eyebrow">Systemic Recovery & Oxidative Modulation</span>
              <h2 className="display-lg mt-4 max-w-3xl">MAHT and EBOO Therapy</h2>
            </div>
            <span className="rounded-xl border border-primary/30 bg-sand px-4 py-2 text-xs font-bold tracking-wider text-deep uppercase">
              Advanced Blood Oxygenation & Ozonation
            </span>
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            MAHT (Major Autohemotherapy) and EBOO (Extracorporeal Blood Oxygenation and Ozonation) are advanced blood-based ozone therapies used as adjunctive treatments to support systemic wellness, oxidative balance, inflammation modulation and recovery.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal delay={100} className="lg:col-span-6 space-y-6">
            <div className="card-flat p-6 sm:p-7 border border-border">
              <h3 className="font-display text-xl font-bold text-deep">How Do MAHT and EBOO Work?</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                These therapies involve processing a patient’s blood in a controlled extracorporeal closed-loop system, where blood is exposed to a precise medical ozone–oxygen mixture before being returned safely to the body.
              </p>
              <h4 className="mt-5 text-xs font-bold tracking-wider text-deep uppercase">Proposed Biological Pathways:</h4>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-foreground/90">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Oxidative stress and antioxidant enzyme defence (SOD, Catalase)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Inflammatory signalling and cytokine modulation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Microcirculation and cellular tissue oxygen utilisation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Immune and metabolic regulation</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-sand/60 p-5 border border-border">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <strong>Clinical Principle:</strong> The therapeutic goal of medical ozone is controlled biological modulation through hormetic signaling, not simply increasing dissolved oxygen levels.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 overflow-hidden rounded-3xl border border-border shadow-soft">
            <img
              src="/images/eboo-therapy.jpg"
              alt="Medical EBOO Extracorporeal Blood Oxygenation suite at Thrive"
              className="aspect-16/10 w-full object-cover"
            />
            <div className="bg-card p-6 border-t border-border">
              <p className="font-display text-sm font-bold tracking-wider uppercase text-deep">
                Clinical Extracorporeal Ozone Delivery
              </p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Delivered in private, serene wellness suites under direct medical supervision and vital sign monitoring.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="card-soft p-6 sm:p-7 border border-border bg-card">
            <h4 className="font-display text-lg font-bold text-deep">Role in Chronic Inflammation</h4>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <li>• Reduction of systemic oxidative stress</li>
              <li>• Modulation of inflammatory cytokines</li>
              <li>• Improved antioxidant enzyme activity</li>
              <li>• Enhanced microvascular perfusion</li>
              <li>• Support for metabolic & immune homeostasis</li>
            </ul>
          </div>

          <div className="card-soft p-6 sm:p-7 border border-border bg-card">
            <h4 className="font-display text-lg font-bold text-deep">Role in Pain Management</h4>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <li>• Chronic musculoskeletal & myofascial pain</li>
              <li>• Osteoarthritis & degenerative joints</li>
              <li>• Chronic spinal neck & back pain</li>
              <li>• Fibromyalgia & central sensitization</li>
              <li>• Post-viral fatigue and neuropathic syndromes</li>
            </ul>
          </div>

          <div className="card-soft p-6 sm:p-7 border border-border bg-card">
            <h4 className="font-display text-lg font-bold text-deep">Recovery & Wellness Support</h4>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <li>• Reduced athletic fatigue & faster recovery</li>
              <li>• Cellular ATP & tissue oxygen uptake</li>
              <li>• Microvascular endothelial support</li>
              <li>• Management of long-term cellular exhaustion</li>
              <li>• General vitality and metabolic optimization</li>
            </ul>
          </div>
        </div>
      </section>


      {/* ─── SECTION 3: VENOM RFA RADIOFREQUENCY ABLATION ─── */}
      <section className="bg-sand/40 border-y border-border py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="eyebrow">Interventional Thermal Neurotomy</span>
                <h2 className="display-lg mt-4 max-w-3xl">VENOM™ RFA for Chronic Pain</h2>
              </div>
              <span className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold tracking-wider text-primary uppercase">
                Precision Nerve Targeting
              </span>
            </div>
            <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              VENOM™ Radiofrequency Ablation (RFA) is an advanced conventional thermal radiofrequency system designed for precise treatment of selected chronic pain conditions. It uses specialised RF cannulae and electrodes to create targeted thermal lesions near pain-carrying nerves.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6 overflow-hidden rounded-3xl border border-border shadow-soft">
              <img
                src="/images/venom-rfa.jpg"
                alt="Precision VENOM Radiofrequency Ablation RFA procedure in C-arm suite"
                className="aspect-16/10 w-full object-cover"
              />
              <div className="bg-card p-6 border-t border-border">
                <p className="font-display text-sm font-bold tracking-wider uppercase text-deep">
                  Fluoroscopic & Stimulation Confirmation
                </p>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Real-time fluoroscopy and electrical sensory/motor stimulation ensure the exact sensory nerve is captured while safely protecting all motor nerves.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-6 space-y-6">
              <div className="card-flat p-6 sm:p-7 border border-border">
                <h3 className="font-display text-xl font-bold text-deep">Mechanism of Action</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  VENOM RFA uses high-frequency alternating current to generate controlled heat around the active electrode. This produces thermal neurotomy of selected sensory nerves, interrupting transmission of pain signals while preserving surrounding motor function through careful needle placement and sensory/motor stimulation testing.
                </p>

                <h4 className="mt-5 text-xs font-bold tracking-wider text-deep uppercase">Procedural Advantages of VENOM™:</h4>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-foreground/90">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Specialised active-tip design to help optimise lesion geometry</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Potential for larger directional lesions along the course of the nerve</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Precise stimulation-guided targeting before lesioning</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> Efficient coverage of selected nerves with fewer needle repositionings</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="card-soft p-6 sm:p-7 border border-border bg-card">
              <h4 className="font-display text-lg font-bold text-deep">Common Uses & Clinical Indications</h4>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <li>• <strong>Chronic Facet Joint Pain:</strong> Cervical, thoracic and lumbar spine (Moderate to strong evidence)</li>
                <li>• <strong>Sacroiliac Joint Pain:</strong> Lateral branch thermal neurotomy</li>
                <li>• <strong>Chronic Knee Osteoarthritis:</strong> Genicular nerve ablation for non-surgical joint pain</li>
                <li>• <strong>Hip & Shoulder Joint Pain:</strong> Articular branch sensory nerve neurotomy</li>
                <li>• <strong>Occipital Neuralgia & Headaches:</strong> Cervicogenic headache relief</li>
                <li>• <strong>Peripheral Neuralgias:</strong> Targeted sensory nerve pain</li>
              </ul>
            </div>

            <div className="card-soft p-6 sm:p-7 border border-border bg-card">
              <h4 className="font-display text-lg font-bold text-deep">Clinical Evidence & The Bottom Line</h4>
              <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Successful patient selection usually involves clinical evaluation and, for many conditions, a positive diagnostic nerve block. RFA is most effective when the pain generator and target nerve are precisely identified.
              </p>
              <div className="mt-4 rounded-xl bg-sand/50 p-4 border border-border/80">
                <p className="text-xs text-deep/90 leading-relaxed italic">
                  "VENOM RFA is a precision-based, minimally invasive treatment option. The technology should be chosen based on the clinical indication—not simply because one machine is newer or more advanced."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

