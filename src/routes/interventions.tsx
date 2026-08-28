import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";

export const Route = createFileRoute("/interventions")({
  component: InterventionsPage,
});

function InterventionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Advanced Treatments"
        title="Interventional"
        accent="Pain Care"
        description="Discover our state-of-the-art regenerative therapies, precision radiofrequency ablation, and advanced blood-based ozone therapies."
      />

      {/* PRP Section */}
      <section className="container-x py-16 sm:py-24">
        <Reveal>
          <span className="eyebrow">Regenerative Medicine</span>
          <h2 className="display-lg mt-4 max-w-3xl">PRP and Regenerative Therapies for Chronic Pain</h2>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Chronic pain can often result from tissue degeneration, persistent inflammation, tendon or ligament injury, joint disease, and nerve-related conditions. Platelet-Rich Plasma (PRP) and regenerative therapies aim to support the body's natural healing processes and may help reduce pain, improve function, and promote tissue repair in appropriately selected patients.
          </p>
        </Reveal>
        
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal delay={100} className="card-soft p-8">
            <h3 className="font-display text-xl font-bold">How Does PRP Work?</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              PRP is prepared from a small sample of the patient's own blood and contains a concentrated level of platelets and bioactive growth factors. After injection into the targeted area, PRP may:
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>• Modulate inflammation and pain signalling</li>
              <li>• Release growth factors that support tissue repair</li>
              <li>• Stimulate collagen synthesis and tenocyte activity</li>
              <li>• Support healing of tendons and ligaments</li>
              <li>• Promote cartilage and soft-tissue repair processes</li>
              <li>• Improve joint function and reduce pain</li>
            </ul>
          </Reveal>
          
          <Reveal delay={150} className="card-soft p-8">
            <h3 className="font-display text-xl font-bold">Indications for PRP Therapy</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li><strong>1. Tendinopathies:</strong> Tennis Elbow, Patellar Tendinopathy, Achilles Tendinopathy, Rotator Cuff Tendinosis.</li>
              <li><strong>2. Ligament & Muscle Injuries:</strong> Partial MCL Sprains, Grade II Muscle Tears.</li>
              <li><strong>3. Joint Disorders:</strong> Knee & Hip Osteoarthritis, Focal Cartilage Lesions.</li>
              <li><strong>4. Foot & Ankle:</strong> Chronic Plantar Fasciitis.</li>
              <li><strong>5. Spinal Pain:</strong> Discogenic Low Back Pain, Facet/Sacroiliac Joint Pain.</li>
              <li><strong>6. Post-Surgical Healing:</strong> Rotator Cuff Repair, ACL Reconstruction.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* MAHT / EBOO Section */}
      <section className="bg-secondary/30 py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Advanced Ozone Therapy</span>
            <h2 className="display-lg mt-4 max-w-3xl">MAHT and EBOO Therapy</h2>
            <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              MAHT (Major Autohemotherapy) and EBOO (Extracorporeal Blood Oxygenation and Ozonation) are advanced blood-based ozone therapies used as adjunctive treatments to support systemic wellness, oxidative balance, inflammation modulation and recovery.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <Reveal delay={100} className="card-flat p-8">
              <h3 className="font-display text-xl font-bold">Role in Chronic Inflammation</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Reduction of oxidative stress</li>
                <li>• Modulation of inflammatory mediators</li>
                <li>• Improved antioxidant enzyme activity</li>
                <li>• Better microcirculation</li>
                <li>• Support for metabolic and immune balance</li>
              </ul>
            </Reveal>

            <Reveal delay={150} className="card-flat p-8">
              <h3 className="font-display text-xl font-bold">Role in Pain Management</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Chronic musculoskeletal pain</li>
                <li>• Osteoarthritis and degenerative joint conditions</li>
                <li>• Chronic back and neck pain</li>
                <li>• Neuropathic & Post-viral fatigue pain</li>
                <li>• Fibromyalgia and chronic widespread pain</li>
              </ul>
            </Reveal>

            <Reveal delay={200} className="card-flat p-8">
              <h3 className="font-display text-xl font-bold">Recovery and Wellness</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Reduced fatigue and improved recovery</li>
                <li>• Tissue oxygen utilisation</li>
                <li>• Circulation and microvascular function</li>
                <li>• Management of oxidative stress</li>
                <li>• General wellness and metabolic health</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VENOM RFA Section */}
      <section className="container-x py-16 sm:py-24">
        <Reveal>
          <span className="eyebrow">Precision Thermal Technology</span>
          <h2 className="display-lg mt-4 max-w-3xl">VENOM RFA for Chronic Pain</h2>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            VENOM™ Radiofrequency Ablation (RFA) is an advanced conventional thermal radiofrequency system designed for precise treatment of selected chronic pain conditions. It uses specialised RF cannulae and electrodes to create targeted thermal lesions near pain-carrying nerves.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal delay={100} className="card-soft p-8">
            <h3 className="font-display text-xl font-bold">Mechanism & Advantages</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              VENOM RFA uses high-frequency alternating current to generate controlled heat around the active electrode. This produces thermal neurotomy of selected sensory nerves, interrupting transmission of pain signals.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>• Specialised active-tip design to help optimise lesion geometry</li>
              <li>• Precise stimulation-guided targeting before lesioning</li>
              <li>• Ability to treat anatomically challenging pain targets</li>
              <li>• May allow efficient coverage of selected nerves with fewer needle adjustments</li>
            </ul>
          </Reveal>

          <Reveal delay={150} className="card-soft p-8">
            <h3 className="font-display text-xl font-bold">Common Uses and Indications</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Chronic facet joint pain — cervical, thoracic and lumbar</li>
              <li>• Sacroiliac joint pain</li>
              <li>• Chronic knee pain due to osteoarthritis</li>
              <li>• Hip joint pain & Shoulder pain</li>
              <li>• Occipital neuralgia and cervicogenic headache</li>
              <li>• Cancer-related pain and selected visceral pain syndromes</li>
            </ul>
            <p className="mt-5 text-xs text-muted-foreground italic">
              *The technology should be chosen based on the clinical indication—not simply because one machine is newer or more advanced.
            </p>
          </Reveal>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
