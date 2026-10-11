import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic, whatsappLink } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { AlertCircle, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const backPainFaqs = [
  {
    question: "When should I consult a pain specialist for lower back pain?",
    answer:
      "You should consider a clinical evaluation if your back pain lasts more than two to three weeks, radiates into your buttocks or legs (sciatica), disrupts your sleep, or prevents you from working comfortably. Early medical diagnosis identifies the specific anatomical pain generator before pain becomes chronic.",
  },
  {
    question: "Can persistent back pain be treated without open spine surgery?",
    answer:
      "Yes. The vast majority of back pain cases do not require open spine surgery. At Thrive in Raidurgam, our physicians use precise image-guided interventions such as radiofrequency ablation, targeted epidural procedures, and platelet-rich plasma, paired with kinetic rehabilitation, to relieve pain and restore spinal function.",
  },
  {
    question: "What makes Thrive's approach to back pain care unique in Hyderabad?",
    answer:
      "Unlike centres that offer only physiotherapy or surgical opinions in isolation, Thrive brings interventional pain physicians, in-house digital X-ray and ultrasound diagnostics, physical rehabilitation, clinical nutrition, and psychology together under one roof in Raidurgam.",
  },
  {
    question: "How many treatment sessions or physiotherapy visits will I need?",
    answer:
      "Treatment is tailored to your condition. Following an interventional procedure, patients typically participate in three to six weeks of guided, progressive physiotherapy to rebuild deep core stability and kinetic chain movement patterns.",
  },
];

export const Route = createFileRoute("/back-pain-treatment-in-hyderabad")({
  head: () => ({
    meta: [
      { title: "Back Pain Treatment in Hyderabad | Thrive Pain Clinic" },
      {
        name: "description",
        content:
          "Struggling with persistent back pain? Our pain specialists in Raidurgam, Hyderabad provide image-guided relief and physiotherapy. Schedule an evaluation.",
      },
      { property: "og:title", content: "Back Pain Treatment in Hyderabad | Thrive Pain Clinic" },
      {
        property: "og:description",
        content:
          "Struggling with persistent back pain? Our pain specialists in Raidurgam, Hyderabad provide image-guided relief and physiotherapy. Schedule an evaluation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://www.thrivepainandwellness.com/back-pain-treatment-in-hyderabad" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.thrivepainandwellness.com/back-pain-treatment-in-hyderabad",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Back Pain Treatment",
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
            "Physician-led, multidisciplinary back pain care in Raidurgam, Hyderabad. Minimally invasive interventional procedures, in-house imaging, and rehabilitation.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: backPainFaqs.map((faq) => ({
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
  component: BackPainPillarPage,
});

function BackPainPillarPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialised spine care in Hyderabad"
        title="Back pain treatment"
        accent="built around answers."
        description="When lower back pain stops you from working, sleeping, or enjoying your routine, masking symptoms is not enough. At Thrive in Raidurgam, our physicians pinpoint the exact anatomical pain generator and build a clear, non-surgical path to lasting mobility."
      >
        <Link
          to="/book"
          onClick={() => trackEvent("book_click", { location: "back_pain_hero" })}
          className="btn btn-primary"
        >
          Book clinical evaluation
        </Link>
        <a
          href={whatsappLink("Hello Thrive, I would like to consult a doctor regarding my lower back pain.")}
          onClick={() => trackEvent("whatsapp_click", { location: "back_pain_hero" })}
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
              Why does your back still hurt, and why has it not settled on its own?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              If you live or work in Hyderabad, particularly around the IT and financial corridors of Raidurg, Hitec City, Gachibowli, or Madhapur, you are likely familiar with the strain of prolonged desk hours and long commutes. Many people experience an episode of acute back ache that clears up within a few days of rest. But what happens when the ache lingers for six weeks, twelve weeks, or even months?
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              You might find yourself wondering why painkillers only provide temporary ease, why scans seem confusing, or whether you are destined for spine surgery. At Thrive Pain Clinic, Wellness & More, we approach back pain from a physician-led, multidisciplinary perspective. We know that chronic lower back pain is rarely simple, but it is treatable when we take the time to identify the true tissue or nerve causing your discomfort.
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
                    Urgent symptoms requiring immediate medical care [PHYSICIAN REVIEW]
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    While most back pain is musculoskeletal or neuropathic in origin, certain clinical signs indicate pressure on spinal nerves or systemic infection that requires emergency hospital assessment:
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground mt-3">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      Loss of bladder or bowel control (cauda equina warning)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      Numbness in the groin, saddle area, or inner thighs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      Progressive weakness in the leg or sudden foot drop
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      High fever, chills, or unexplained weight loss with back pain
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground pt-2">
                    If you experience any of these red flags, proceed immediately to the nearest hospital emergency department.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Section 3: Causes of Chronic Lower Back Pain */}
        <section className="space-y-8 my-16">
          <Reveal>
            <span className="eyebrow">Clinical causes</span>
            <h2 className="display-lg mt-4 text-2xl sm:text-3xl">
              Common causes of lower back pain we diagnose and treat
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Your lumbar spine consists of vertebrae, intervertebral discs, facet joints, supportive ligaments, deep stabilizing muscles, and exiting nerve roots. Damage, irritation, or inflammation in any of these structures can generate pain [PHYSICIAN REVIEW]:
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal className="card-soft p-6">
              <h3 className="text-lg font-semibold text-foreground">1. Lumbar Disc Herniation & Sciatica</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                When an intervertebral disc bulges or herniates, it can compress or chemically inflame neighboring spinal nerve roots. This commonly produces sharp, burning, or tingling pain radiating down the buttock, thigh, calf, and foot (lumbar radiculopathy).
              </p>
            </Reveal>

            <Reveal className="card-soft p-6">
              <h3 className="text-lg font-semibold text-foreground">2. Lumbar Facet Joint Arthropathy</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The paired facet joints connect adjacent vertebrae. Degenerative wear or repetitive extension strain leads to facet joint arthritis. This pain is typically localized in the lower back, worsens with backward bending or standing, and feels stiff upon waking.
              </p>
            </Reveal>

            <Reveal className="card-soft p-6">
              <h3 className="text-lg font-semibold text-foreground">3. Sacroiliac (SI) Joint Dysfunction</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The SI joints connect the base of your spine to your pelvis. Ligamentous laxity, arthritis, or uneven gait can cause sharp pain in the lower back, buttocks, and groin, often aggravated by sitting on hard chairs or getting in and out of a car.
              </p>
            </Reveal>

            <Reveal className="card-soft p-6">
              <h3 className="text-lg font-semibold text-foreground">4. Postural & Myofascial Strain</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Ten to twelve hours of sitting daily at a workstation in Hyderabad deconditions deep core stabilizers (multifidus and transversus abdominis), shortening hip flexors and loading the lumbar spine unevenly.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Section 4: How We Diagnose Back Pain */}
        <section className="space-y-6 my-16 bg-secondary/30 p-8 sm:p-12 rounded-3xl">
          <Reveal>
            <span className="eyebrow">Precision diagnosis</span>
            <h2 className="display-lg mt-4 text-2xl sm:text-3xl">
              How we diagnose your back pain at our Raidurgam clinic
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              An MRI scan shows anatomical pictures, but it does not always tell us which structure is generating the pain. Many pain-free individuals have disc bulges on MRI, while someone with severe facet inflammation may show only mild wear. That is why our diagnostic workflow is clinical, meticulous, and hands-on:
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="card-flat p-6 bg-card">
              <span className="font-display text-2xl font-bold text-primary">01</span>
              <h3 className="font-semibold text-foreground mt-2">Thorough Evaluation</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Our pain physicians spend up to 45 minutes assessing your posture, spinal range of motion, motor reflexes, sensory dermatomes, and mechanical loading tolerance.
              </p>
            </div>
            <div className="card-flat p-6 bg-card">
              <span className="font-display text-2xl font-bold text-primary">02</span>
              <h3 className="font-semibold text-foreground mt-2">In-House Imaging</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We utilize digital X-rays and high-resolution ultrasound in-house to assess structural alignment, joint spaces, and soft tissue dynamics without delay.
              </p>
            </div>
            <div className="card-flat p-6 bg-card">
              <span className="font-display text-2xl font-bold text-primary">03</span>
              <h3 className="font-semibold text-foreground mt-2">Diagnostic Nerve Blocks</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                To confirm whether a facet joint or SI joint is the true culprit, we perform targeted, image-guided diagnostic local anaesthetic blocks [PHYSICIAN REVIEW].
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Treatment Pathways */}
        <section className="space-y-8 my-16">
          <Reveal>
            <span className="eyebrow">Integrated care pathway</span>
            <h2 className="display-lg mt-4 text-2xl sm:text-3xl">
              Treatment pathways: From targeted rehabilitation to interventional pain care
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At Thrive, treatment is not one-size-fits-all. We coordinate care along a stepped pathway, helping you move from pain relief into functional strength:
            </p>
          </Reveal>

          <div className="space-y-6">
            <Reveal className="border border-border rounded-2xl p-6 sm:p-8 bg-card">
              <h3 className="text-xl font-semibold text-foreground">
                Phase 1: Targeted Interventional Procedures (When Conservative Care Stalls)
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                When pain prevents you from exercising or sleeping, minimally invasive interventional procedures provide targeted relief to calm irritated nerves and inflamed joints [PHYSICIAN REVIEW]:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Radiofrequency Ablation (VENOM™ RFA):</strong> Uses controlled thermal energy to interrupt pain signals from sensory nerves supplying arthritic facet or SI joints, providing sustained relief for six to twelve months.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Transforaminal Epidural Injections:</strong> Delivers anti-inflammatory medication under fluoroscopic guidance directly to irritated nerve roots in sciatica.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Autologous PRP & Regenerative Injections:</strong> Platelet-rich plasma prepared from your own blood placed into strained ligaments to support tissue healing.</span>
                </li>
              </ul>
            </Reveal>

            <Reveal className="border border-border rounded-2xl p-6 sm:p-8 bg-card">
              <h3 className="text-xl font-semibold text-foreground">
                Phase 2: Kinetic Physiotherapy & Active Spinal Stabilization
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Pain relief creates the vital window for movement recovery. Our in-house physiotherapy team guides you through progressive exercises adapted to your physical capacity:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Deep segmental core activation (transversus abdominis and multifidus retraining)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Pelvic and hip kinetic chain balancing to offload the lumbar spine</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Ergonomic posture retraining suited to long working hours in Hyderabad offices</span>
                </li>
              </ul>
            </Reveal>

            <Reveal className="border border-border rounded-2xl p-6 sm:p-8 bg-card">
              <h3 className="text-xl font-semibold text-foreground">
                Phase 3: Restorative Therapies & Lifestyle Optimization
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                To support overall biological recovery, our team incorporates evidence-informed restorative modalities including Mild Hyperbaric Oxygen Therapy (HBOT), clinical nutrition to lower systemic inflammatory markers, and pain psychology to overcome fear-avoidance behaviours.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Section 6: What a First Visit Looks Like */}
        <section className="space-y-6 my-16 bg-sand/60 p-8 sm:p-12 rounded-3xl">
          <Reveal>
            <span className="eyebrow !bg-card">Your first consultation</span>
            <h2 className="display-lg mt-4 text-2xl sm:text-3xl">
              What your first visit looks like at Thrive in Raidurgam
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We know visiting a clinic when in pain can feel daunting. We have designed our process to be calm, thorough, and respectful of your time:
            </p>
            <div className="mt-6 space-y-4">
              <div className="card-flat p-5 bg-card">
                <h3 className="font-semibold text-foreground">1. Welcoming Arrival & History Intake</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our front-desk team welcomes you to our 4th-floor facility in Bharathi Square, Raidurgam. We collect your prior medical records and imaging scans.
                </p>
              </div>
              <div className="card-flat p-5 bg-card">
                <h3 className="font-semibold text-foreground">2. Detailed Physician Consultation</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  You spend unhurried time with Dr. Dheeraj Kumar or our pain physicians discussing your symptoms, pain timeline, daily routine, and recovery goals.
                </p>
              </div>
              <div className="card-flat p-5 bg-card">
                <h3 className="font-semibold text-foreground">3. Focused Physical Examination</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We check spinal reflexes, joint range of motion, muscle balance, and nerve irritability, cross-checking findings against your scans.
                </p>
              </div>
              <div className="card-flat p-5 bg-card">
                <h3 className="font-semibold text-foreground">4. Collaborative Roadmap</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Before you leave, our team outlines your diagnosis, answers all questions plainly, and coordinates next steps across imaging, therapy, or interventions.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Section 7: FAQs */}
        <section className="space-y-8 my-16">
          <Reveal>
            <span className="eyebrow">Got questions?</span>
            <h2 className="display-lg mt-4 text-2xl sm:text-3xl">
              Frequently asked questions about back pain care
            </h2>
          </Reveal>
          <div className="space-y-4">
            {backPainFaqs.map((faq) => (
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
              Do not let back pain dictate your life in Hyderabad
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed">
              Consult our multidisciplinary pain physicians in Raidurgam today. We are here to listen, diagnose accurately, and support your journey back to active health.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/book"
                onClick={() => trackEvent("book_click", { location: "back_pain_cta" })}
                className="btn btn-primary bg-sand text-deep hover:bg-sand/90"
              >
                Book consultation now
              </Link>
              <a
                href={clinic.phoneHref}
                onClick={() => trackEvent("phone_click", { location: "back_pain_cta" })}
                className="btn btn-outline border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call {clinic.phone}
              </a>
            </div>
            <p className="mt-4 text-xs text-white/60">
              Located at 4th Floor, Bharathi Square, Nandi Hills, Raidurgam, Hyderabad.
            </p>
          </Reveal>
        </section>
      </article>

      <ClosingCta />
    </>
  );
}
