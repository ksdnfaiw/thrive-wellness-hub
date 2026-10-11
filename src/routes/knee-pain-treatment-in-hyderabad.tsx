import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic, whatsappLink } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { AlertCircle, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const kneePainFaqs = [
  {
    question: "Can platelet-rich plasma (PRP) therapy help avoid knee replacement?",
    answer:
      "For patients with mild to moderate knee osteoarthritis (Grade I to III), clinical evidence shows autologous PRP injections can significantly reduce joint inflammation, relieve pain, and support mobility. While severe, end-stage osteoarthritis with bone-on-bone deformity may ultimately require joint replacement, PRP combined with kinetic physiotherapy often delays or avoids surgery in suitable candidates.",
  },
  {
    question: "What is Genicular Nerve Radiofrequency Ablation (VENOM™ RFA)?",
    answer:
      "Genicular RFA is a minimally invasive, day-care procedure that uses targeted thermal energy to deactivate the sensory nerves transmitting pain signals from the knee joint. It is performed under high-resolution fluoroscopic or ultrasound guidance, providing sustained relief for six to twelve months without affecting leg muscle strength.",
  },
  {
    question: "How soon after knee intervention can I resume walking and stairs?",
    answer:
      "Most patients walk out of our clinic the same day after a brief rest period. We typically advise 48 hours of light activity, followed by structured, progressive vastus medialis obliquus (VMO) strengthening and kinetic chain exercises supervised by our physiotherapy team.",
  },
  {
    question: "Do I need an MRI before visiting Thrive for knee pain?",
    answer:
      "Not necessarily. We conduct in-house digital X-rays and dynamic musculoskeletal ultrasound at our Raidurgam facility during your first appointment. If you already have existing MRI or X-ray scans, bring them along and our physicians will review them with you.",
  },
];

export const Route = createFileRoute("/knee-pain-treatment-in-hyderabad")({
  head: () => ({
    meta: [
      { title: "Knee Pain Treatment in Hyderabad | Thrive Pain Clinic" },
      {
        name: "description",
        content:
          "Suffering from knee pain or osteoarthritis? Thrive offers PRP therapy, RFA, and physiotherapy in Raidurgam, Hyderabad. Book your clinic consultation today.",
      },
      { property: "og:title", content: "Knee Pain Treatment in Hyderabad | Thrive Pain Clinic" },
      {
        property: "og:description",
        content:
          "Suffering from knee pain or osteoarthritis? Thrive offers PRP therapy, RFA, and physiotherapy in Raidurgam, Hyderabad. Book your clinic consultation today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://www.thrivepainandwellness.com/knee-pain-treatment-in-hyderabad" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.thrivepainandwellness.com/knee-pain-treatment-in-hyderabad",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Knee Pain Treatment",
          provider: {
            "@type": ["MedicalClinic", "LocalBusiness"],
            name: "Thrive Pain Clinic, Wellness & More",
            telephone: "+91 86395 09446",
            url: "https://www.thrivepainandwellness.com/",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "4th Floor, Bharathi Square, Plot No. 58, Sy No. 5/3, Nandi Hills, Raidurg, Cyberabad, Raidurgam, Shaikpet",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500081",
              addressCountry: "IN",
            },
          },
          areaServed: [
            "Hyderabad",
            "Raidurgam",
            "Raidurg",
            "Gachibowli",
            "Madhapur",
            "Kondapur",
            "Financial District",
          ],
          description:
            "Physician-led, non-surgical knee pain and osteoarthritis treatment in Raidurgam, Hyderabad. High-density PRP, Genicular RFA, ultrasound diagnostics, and physiotherapy.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: kneePainFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      },
    ],
  }),
  component: KneePainPillarPage,
});

function KneePainPillarPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialised joint care in Hyderabad"
        title="Knee pain treatment"
        accent="without rushed surgery."
        description="Whether you are navigating early joint stiffness, grinding during stair climbs, or chronic osteoarthritis, you do not have to accept pain as inevitable. At Thrive in Raidurgam, our physician team provides targeted regenerative therapies, precision nerve blocks, and active rehabilitation under one roof."
      >
        <Link
          to="/book"
          onClick={() => trackEvent("book_click", { location: "knee_pain_hero" })}
          className="btn btn-primary"
        >
          Schedule knee evaluation
        </Link>
        <a
          href={whatsappLink("Hello Thrive, I would like to consult a doctor regarding my knee pain.")}
          onClick={() => trackEvent("whatsapp_click", { location: "knee_pain_hero" })}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          WhatsApp our care team
        </a>
      </PageHero>

      {/* Main Content Article Body */}
      <article className="container-x py-16 sm:py-24 max-w-5xl">
        {/* Section 1: Introduction & Real Patient Questions */}
        <section className="space-y-6">
          <Reveal>
            <span className="eyebrow">Understanding your symptoms</span>
            <h2 className="display-lg mt-4 text-3xl sm:text-4xl">
              Why are your knees aching on stairs, and is surgery your only choice?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              For many adults across Hyderabad, knee pain begins gradually. Perhaps it is an uncomfortable stiffness when standing up from your office chair in Hitec City, a dull ache when navigating stairs at home, or swelling after an evening walk around Durgam Cheruvu. Over time, simple daily activities become hesitant calculations.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              When knee discomfort persists past several weeks, people often worry that their joint cartilage has worn away completely. In reality, the cartilage itself does not possess pain nerve endings. Much of the aching sensation comes from surrounding synovium inflammation, micro-strains on stabilizing ligaments, subchondral bone stress, and tight kinetic structures across your hips and calves.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Patients often visit us feeling caught between two extremes: temporary anti-inflammatory tablets that upset the stomach, or immediate recommendations for total knee replacement surgery. At Thrive Pain Clinic, Wellness & More in Raidurgam, we believe there is a substantial, evidence-informed middle ground. Our interventional pain physicians specialize in non-surgical joint preservation, targeted nerve treatments, and biomechanical rehabilitation.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Whether you are an active professional in the Financial District wanting to continue sports or an older adult seeking to walk comfortably with family, our goal is to identify your knee's exact pain generators and restore stable joint motion.
            </p>
          </Reveal>
        </section>

        {/* Section 2: Red Flag Symptoms */}
        <section className="my-12">
          <Reveal>
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Red flag knee symptoms requiring immediate medical evaluation [PHYSICIAN REVIEW]
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    While chronic degenerative knee discomfort can be managed systematically in clinic, acute joint compromise or infection requires urgent medical attention:
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground mt-3">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      Inability to bear any weight on the affected leg
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      A knee that locks rigidly and cannot be straightened
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      Rapid hot swelling accompanied by high fever or skin redness
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      Sudden knee joint collapse following acute trauma
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground pt-2">
                    If you experience severe swelling with fever or sudden inability to stand, seek urgent medical care at a hospital casualty department.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Section 3: Causes of Knee Pain */}
        <section className="space-y-8 my-16">
          <Reveal>
            <span className="eyebrow">Clinical causes</span>
            <h2 className="display-lg mt-4 text-2xl sm:text-3xl">
              Common knee pain conditions we diagnose and manage
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The knee is a high-load hinge joint subject to multi-directional forces. Pain can stem from articular cartilage wear, meniscal fraying, tendon strain, or chronic nerve sensitization [PHYSICIAN REVIEW]:
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal className="card-soft p-6">
              <h3 className="text-lg font-semibold text-foreground">1. Knee Osteoarthritis (Mild to Moderate)</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Gradual thinning of hyaline cartilage leads to reduced joint space, friction between articular surfaces, and subchondral bone remodeling. This results in morning stiffness, deep aching, and crepitus (grating sounds) during movement.
              </p>
            </Reveal>

            <Reveal className="card-soft p-6">
              <h3 className="text-lg font-semibold text-foreground">2. Meniscal Tears & Degeneration</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The fibrocartilaginous c-shaped menisci act as shock absorbers between the femur and tibia. Degenerative horizontal or radial tears cause localized joint line tenderness, catching sensations, and recurring joint effusions.
              </p>
            </Reveal>

            <Reveal className="card-soft p-6">
              <h3 className="text-lg font-semibold text-foreground">3. Patellar Tendinopathy (Jumper's Knee)</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Repetitive strain on the patellar tendon leads to collagen disorganization and localized pain at the lower pole of the kneecap. Common in both weekend recreational runners and individuals with sudden increases in stair climbing.
              </p>
            </Reveal>

            <Reveal className="card-soft p-6">
              <h3 className="text-lg font-semibold text-foreground">4. Pes Anserine Bursitis & Tendinitis</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Inflammation where three hamstring muscles insert into the inner shin bone just below the knee joint line. Often mistaken for inner joint arthritis, it responds remarkably well to targeted local therapy and biomechanical realignment.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Section 4: How We Diagnose Knee Pain */}
        <section className="space-y-6 my-16 bg-secondary/30 p-8 sm:p-12 rounded-3xl">
          <Reveal>
            <span className="eyebrow">Diagnostic clarity</span>
            <h2 className="display-lg mt-4 text-2xl sm:text-3xl">
              How we diagnose your knee condition at our Raidurgam clinic
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Accurate diagnosis protects you from undergoing unhelpful treatments. Our clinical evaluation combines structural imaging with dynamic functional assessments:
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="card-flat p-6 bg-card">
              <span className="font-display text-2xl font-bold text-primary">01</span>
              <h3 className="font-semibold text-foreground mt-2">Weight-Bearing Digital X-Rays</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We assess true functional joint space reduction, osteophyte formation, and patellofemoral tracking under natural standing load using in-house digital radiography.
              </p>
            </div>
            <div className="card-flat p-6 bg-card">
              <span className="font-display text-2xl font-bold text-primary">02</span>
              <h3 className="font-semibold text-foreground mt-2">Dynamic Ultrasound</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Unlike static MRI scans, our doctors perform real-time ultrasound to evaluate synovial fluid accumulation, tendon micro-tears, and meniscal extrusion while you bend your knee.
              </p>
            </div>
            <div className="card-flat p-6 bg-card">
              <span className="font-display text-2xl font-bold text-primary">03</span>
              <h3 className="font-semibold text-foreground mt-2">Kinetic Chain Examination</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Our physiotherapists evaluate your foot pronation, hip abductor strength (gluteus medius), and pelvis tilt to determine why excess load is falling onto the knee.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Treatment Pathways */}
        <section className="space-y-8 my-16">
          <Reveal>
            <span className="eyebrow">Treatment pathways</span>
            <h2 className="display-lg mt-4 text-2xl sm:text-3xl">
              Integrated knee care pathways: Interventions, biologics and rehabilitation
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We design our treatment plans around preserving your natural joint structure and restoring comfortable daily walking:
            </p>
          </Reveal>

          <div className="space-y-6">
            <Reveal className="border border-border rounded-2xl p-6 sm:p-8 bg-card">
              <h3 className="text-xl font-semibold text-foreground">
                Phase 1: Regenerative Biologics & Interventional Pain Relief
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                When knee pain is persistent and limits physical activity, minimally invasive image-guided interventions offer targeted relief without general anaesthesia [PHYSICIAN REVIEW]:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>High-Density Autologous PRP Therapy:</strong> We concentrate healing growth factors from your own blood and deliver them precisely into the intra-articular space or strained tendons under direct ultrasound visualization to reduce inflammation and support biological tissue response.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Genicular Nerve Radiofrequency Ablation (VENOM™ RFA):</strong> For persistent osteoarthritis pain in candidates seeking to avoid or delay surgery, cooled or thermal RFA interrupts sensory pain transmission from the joint capsule.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Ultrasound-Guided Bursa & Tendon Injections:</strong> Targeted delivery for pes anserine bursitis or iliotibial band friction to rapidly alleviate secondary joint soreness.</span>
                </li>
              </ul>
            </Reveal>

            <Reveal className="border border-border rounded-2xl p-6 sm:p-8 bg-card">
              <h3 className="text-xl font-semibold text-foreground">
                Phase 2: Targeted Kinetic Rehabilitation & Quadriceps Retraining
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                A knee joint cannot stabilize without muscular shock absorption. Our physiotherapy department builds progressive loading programs:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Closed-kinetic-chain Vastus Medialis Obliquus (VMO) strengthening to stabilize patellar tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Hip abductor and external rotator strengthening to prevent knee valgus collapse</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Gait re-education and practical stair-descent pacing</span>
                </li>
              </ul>
            </Reveal>

            <Reveal className="border border-border rounded-2xl p-6 sm:p-8 bg-card">
              <h3 className="text-xl font-semibold text-foreground">
                Phase 3: Metabolic, Nutritional & Restorative Support
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Joint wear is deeply linked to systemic inflammatory load. Our clinical nutritionists assist with anti-inflammatory meal planning and sustainable weight management to take mechanical stress off the knees. Restorative options like Mild HBOT and infrared light therapy can complement tissue recovery.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Section 6: What a First Visit Looks Like */}
        <section className="space-y-6 my-16 bg-sand/60 p-8 sm:p-12 rounded-3xl">
          <Reveal>
            <span className="eyebrow !bg-card">Your clinic experience</span>
            <h2 className="display-lg mt-4 text-2xl sm:text-3xl">
              What your first knee consultation looks like at Thrive
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We take the time to evaluate you thoroughly so you leave with clarity, not confusion:
            </p>
            <div className="mt-6 space-y-4">
              <div className="card-flat p-5 bg-card">
                <h3 className="font-semibold text-foreground">1. Arrival & Medical History</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our front-desk team welcomes you to Bharathi Square in Raidurgam. We collect your previous scans and take down your mobility history.
                </p>
              </div>
              <div className="card-flat p-5 bg-card">
                <h3 className="font-semibold text-foreground">2. Physician Knee Examination</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our pain physician palpates joint lines, tests ligament integrity, measures active flexion and extension, and discusses how pain affects your daily routine.
                </p>
              </div>
              <div className="card-flat p-5 bg-card">
                <h3 className="font-semibold text-foreground">3. Real-Time Ultrasound Assessment</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We scan the joint in the clinic room, showing you on screen whether fluid is present and assessing the quality of surrounding tendons.
                </p>
              </div>
              <div className="card-flat p-5 bg-card">
                <h3 className="font-semibold text-foreground">4. Clear, Transparent Care Plan</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We walk you through non-surgical choices, explain what PRP or RFA entails, outline expected timelines, and initiate your rehabilitation plan.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Section 7: FAQs */}
        <section className="space-y-8 my-16">
          <Reveal>
            <span className="eyebrow">Patient questions</span>
            <h2 className="display-lg mt-4 text-2xl sm:text-3xl">
              Frequently asked questions about knee pain care
            </h2>
          </Reveal>
          <div className="space-y-4">
            {kneePainFaqs.map((faq) => (
              <Reveal key={faq.question} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Section 8: Clear Booking CTA */}
        <section className="my-16 rounded-3xl bg-deep text-deep-foreground p-8 sm:p-12 text-center">
          <Reveal>
            <span className="eyebrow !bg-white/10 !text-sand">Take the next step</span>
            <h2 className="display-lg mt-4 text-3xl sm:text-4xl text-white">
              Restore your knee mobility and walk comfortably again
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed">
              Schedule a thorough clinical evaluation at Thrive in Raidurgam, Hyderabad. Our physician-led team is dedicated to preserving your natural knee joint.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/book"
                onClick={() => trackEvent("book_click", { location: "knee_pain_cta" })}
                className="btn btn-primary bg-sand text-deep hover:bg-sand/90"
              >
                Book evaluation now
              </Link>
              <a
                href={clinic.phoneHref}
                onClick={() => trackEvent("phone_click", { location: "knee_pain_cta" })}
                className="btn btn-outline border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call {clinic.phone}
              </a>
            </div>
            <p className="mt-4 text-xs text-white/60">
              Conveniently located in Raidurgam, serving Gachibowli, Madhapur, Kondapur, and the Financial District.
            </p>
          </Reveal>
        </section>
      </article>

      <ClosingCta />
    </>
  );
}
