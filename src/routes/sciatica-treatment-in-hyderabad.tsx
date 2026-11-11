import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic, whatsappLink } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { AlertCircle, CheckCircle2, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const sciaticaFaqs = [
  {
    question: "Can severe sciatica pain be treated without open spine surgery?",
    answer:
      "Yes. Over 90% of sciatica cases resolve without open spinal surgery. At Thrive Pain Clinic in Raidurgam, Hyderabad, our interventional pain physicians use targeted image-guided procedures—such as fluoroscopy-guided transforaminal epidural injections and pulsed radiofrequency neuromodulation—combined with specialized neural mobilization physiotherapy to relieve nerve root compression and promote natural disc reabsorption.",
  },
  {
    question: "How do I know if my leg pain is true sciatica or piriformis syndrome?",
    answer:
      "True sciatica originates in the lumbar spine (typically L4-L5 or L5-S1) from disc herniation or foraminal stenosis compressing the spinal nerve root. Piriformis syndrome occurs when the sciatic nerve is compressed further down by the piriformis muscle deep in the buttock. Our physicians distinguish between the two using high-resolution musculoskeletal ultrasound, neurological dermatomal mapping, and targeted diagnostic blocks.",
  },
  {
    question: "How quickly does an image-guided transforaminal injection provide relief?",
    answer:
      "Many patients experience noticeable reduction in radiating pain within 48 to 72 hours as concentrated anti-inflammatory medication settles around the irritated nerve root. This rapid pain reduction opens a critical therapeutic window, allowing patients to participate comfortably in active physiotherapy and core stabilization.",
  },
  {
    question: "Why does sitting in an office chair worsen sciatica pain?",
    answer:
      "Sitting significantly increases intradiscal pressure in the lumbar spine compared to standing or lying down. For professionals working long hours in Hyderabad's tech corridors (HITEC City, Gachibowli, Raidurgam), prolonged slouched sitting forces the lumbar disc backward against the sciatic nerve root. We provide specialized ergonomic adaptations and micro-movement routines to protect your spine at work.",
  },
];

export const Route = createFileRoute("/sciatica-treatment-in-hyderabad")({
  head: () => ({
    meta: [
      { title: "Sciatica Treatment in Hyderabad | Non-Surgical Relief | Thrive Clinic" },
      {
        name: "description",
        content:
          "Suffering from sharp shooting leg pain, numbness, or sciatica? Thrive offers image-guided nerve blocks and kinetic physiotherapy in Raidurgam, Hyderabad. Book today.",
      },
      { property: "og:title", content: "Sciatica Treatment in Hyderabad | Non-Surgical Relief | Thrive Clinic" },
      {
        property: "og:description",
        content:
          "Suffering from sharp shooting leg pain, numbness, or sciatica? Thrive offers image-guided nerve blocks and kinetic physiotherapy in Raidurgam, Hyderabad. Book today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://www.thrivepainandwellness.com/sciatica-treatment-in-hyderabad" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.thrivepainandwellness.com/sciatica-treatment-in-hyderabad",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Sciatica Treatment",
          provider: {
            "@type": ["MedicalClinic", "LocalBusiness"],
            name: "Thrive Pain Clinic, Wellness & More",
            telephone: "+91 9676 741 888",
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
            "HITEC City",
            "Financial District",
          ],
          description:
            "Expert, non-surgical sciatica and lumbar radiculopathy treatment in Raidurgam, Hyderabad. High-precision transforaminal epidural injections, nerve root blocks, dynamic ultrasound diagnostics, and kinetic physiotherapy.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: sciaticaFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.thrivepainandwellness.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Treatments",
              item: "https://www.thrivepainandwellness.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Sciatica Treatment in Hyderabad",
              item: "https://www.thrivepainandwellness.com/sciatica-treatment-in-hyderabad",
            },
          ],
        }),
      },
    ],
  }),
  component: SciaticaPage,
});

function SciaticaPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge="Specialized Spine & Nerve Care"
        title="Sciatica Treatment in Hyderabad: Non-Surgical Relief from Radiating Leg Pain"
        subtitle="Experience compassionate, physician-led care for pinched lumbar nerves, herniated discs, and piriformis syndrome. Image-guided interventions and progressive physiotherapy under one roof in Raidurgam."
      >
        <Link
          to="/book"
          onClick={() => trackEvent("book_click", { location: "sciatica_hero" })}
          className="btn btn-primary"
        >
          Schedule Sciatica Evaluation
        </Link>
        <a
          href={whatsappLink("Hello Thrive, I would like to consult a doctor regarding my sciatica and radiating leg pain.")}
          onClick={() => trackEvent("whatsapp_click", { location: "sciatica_hero" })}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          WhatsApp Our Care Team
        </a>
      </PageHero>

      {/* Main Content Body */}
      <article className="container-x py-16 sm:py-24 max-w-5xl">
        {/* Section 1: Introduction */}
        <section className="space-y-6">
          <Reveal>
            <span className="eyebrow">Understanding your symptoms</span>
            <h2 className="display-lg mt-4 text-3xl sm:text-4xl">
              Why does a pinched nerve in your lower back send electric shocks down your leg?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Sciatica is among the most debilitating forms of nerve pain. It often strikes without warning—a sharp, burning, or electric sensation that ignites in your lower back or buttock and travels relentlessly down the back of your thigh, through the calf, and into your toes. For many working in Hyderabad&apos;s corporate corridors or managing active households, sitting through a meeting, driving in city traffic, or simply getting out of bed becomes an agonizing challenge.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              In clinical terms, sciatica is not an independent condition; it is a symptom of <strong>lumbar radiculopathy</strong>. The sciatic nerve is the longest and thickest nerve in the human body, formed by nerve roots originating from the lower spine (L4, L5, S1, S2, and S3). When an inflamed lumbar disc bulges, a bone spur narrows the spinal canal, or a tight pelvic muscle compresses these nerve fibers, intense neurological discomfort radiates throughout the entire pathway.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              At <strong>Thrive Pain Clinic, Wellness &amp; More</strong> in Raidurgam, Hyderabad, we bridge the gap between temporary painkiller prescriptions and major spinal surgery. Our team of interventional pain physicians and specialized musculoskeletal physiotherapists provides a coordinated, evidence-based roadmap designed to decompress the nerve, extinguish chemical inflammation, and restore pain-free movement.
            </p>
          </Reveal>
        </section>

        {/* Section 2: Red Flag Warning */}
        <section className="my-12">
          <Reveal>
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Emergency Red Flag Symptoms: When Sciatica Requires Urgent Hospital Care [PHYSICIAN REVIEW]
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    While the vast majority of sciatica cases can be treated conservatively in our outpatient clinic, acute nerve compression causing **Cauda Equina Syndrome** requires immediate emergency surgical decompression:
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground mt-3">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      Loss of normal bowel or bladder control (incontinence or retention)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      Numbness in the &quot;saddle&quot; area (groin, buttocks, and inner thighs)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      Rapidly progressive weakness in both legs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                      Severe &quot;foot drop&quot; (inability to lift the front of your foot while walking)
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground pt-2">
                    If you experience any of these red flag signs, proceed immediately to the nearest tertiary emergency hospital. If your symptoms consist of steady radiating pain, tingling, or stiffness without bladder issues, outpatient specialist evaluation is the appropriate path.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Section 3: Anatomical Causes */}
        <section className="space-y-8 my-16">
          <Reveal>
            <span className="eyebrow">Clinical causes</span>
            <h2 className="display-lg mt-4 text-2xl sm:text-3xl">
              Common Causes of Sciatic Nerve Irritation We Diagnose and Treat
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Accurate treatment starts with identifying the exact anatomical level where the nerve is compromised. At our Raidurgam facility, we evaluate:
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal className="card-soft p-6">
              <h3 className="text-lg font-semibold text-foreground">1. Lumbar Disc Herniation (L4-L5 &amp; L5-S1)</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The soft internal nucleus of a spinal disc pushes through a tear in the outer annulus fibrosus. The extruded disc material physically touches the adjacent nerve root and releases potent inflammatory cytokines that chemically irritate the nerve fibers.
              </p>
              <div className="mt-4 text-xs font-medium text-primary">
                Related: Learn more about{" "}
                <Link to="/back-pain-treatment-in-hyderabad" className="underline hover:text-primary/80">
                  lower back pain treatment options
                </Link>
                .
              </div>
            </Reveal>

            <Reveal className="card-soft p-6">
              <h3 className="text-lg font-semibold text-foreground">2. Lumbar Spinal &amp; Foraminal Stenosis</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Age-related changes, thickened ligaments (ligamentum flavum), or facet joint bone spurs narrow the exit canals (neuroforamina) where nerve roots leave the spinal column. Pain typically worsens when standing or walking and eases when leaning forward.
              </p>
            </Reveal>

            <Reveal className="card-soft p-6">
              <h3 className="text-lg font-semibold text-foreground">3. Piriformis Syndrome (Deep Gluteal Syndrome)</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The sciatic nerve passes directly beneath—or occasionally through—the piriformis muscle in the buttock. Prolonged sitting, repetitive cycling, or gluteal micro-trauma can cause muscle spasms that pinch the sciatic nerve, mimicking a spinal herniation.
              </p>
            </Reveal>

            <Reveal className="card-soft p-6">
              <h3 className="text-lg font-semibold text-foreground">4. Lumbar Spondylolisthesis</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                When one vertebral body slips forward over the vertebra below it, the structural canal narrows, stretching and compressing the exiting nerve roots during spinal extension and twisting.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Section 4: Dual-Track Integrated Treatment Model */}
        <section className="space-y-8 my-16">
          <Reveal>
            <span className="eyebrow">The Thrive care pathway</span>
            <h2 className="display-lg mt-4 text-3xl sm:text-4xl">
              Our Dual-Track Treatment: Interventional Precision + Kinetic Rehabilitation
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Most clinics offer either standalone physiotherapy or surgical opinions. At Thrive, we recognize that when sciatic pain is severe (rated 7 to 10 on a visual analog scale), <em>a patient cannot tolerate physical therapy</em>. Attempting vigorous stretching on an acutely inflamed nerve root only exacerbates nerve edema.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              We employ a sequential, collaborative model: **Track A** calms the neural fire, and **Track B** rebuilds biomechanical resilience so pain never returns.
            </p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2 mt-8">
            {/* Track A: Interventional Procedures */}
            <Reveal className="card-soft p-8 border-t-4 border-t-primary">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Track A: Medical Interventions</span>
              <h3 className="text-2xl font-semibold mt-2 text-foreground">
                Targeted Image-Guided Nerve Procedures
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Performed by our senior interventional pain physicians in a sterile day-care procedure suite using live fluoroscopy (C-arm X-ray) and high-frequency ultrasound guidance:
              </p>
              <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Transforaminal Epidural Steroid Injections (TFESI):</strong> Precision delivery of concentrated anti-inflammatory medicine directly into the epidural space alongside the compressed nerve root, rapidly washing out inflammatory cytokines.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Selective Nerve Root Blocks (SNRB):</strong> Diagnostic and therapeutic local anesthetic placement to pinpoint the exact culprit vertebral level.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Pulsed Radiofrequency (PRF) Neuromodulation:</strong> Delivers controlled electrical pulses to the dorsal root ganglion to quiet hyperactive neuropathic firing without destroying nerve tissue.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Ultrasound-Guided Piriformis Injections:</strong> Pinpoint injection with local anesthetic or biological therapeutics to release refractory gluteal muscle constriction.
                  </div>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-border">
                <Link
                  to="/services/interventional-procedures"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  Explore our image-guided procedure suite <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </Reveal>

            {/* Track B: Kinetic Physiotherapy */}
            <Reveal className="card-soft p-8 border-t-4 border-t-accent">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Track B: Active Rehabilitation</span>
              <h3 className="text-2xl font-semibold mt-2 text-foreground">
                Kinetic Physiotherapy &amp; Nerve Decompression
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                As soon as acute inflammation subsides from Track A, our physical rehabilitation specialists initiate a progressive movement protocol:
              </p>
              <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Neural Mobilization &amp; Nerve Flossing:</strong> Gentle oscillatory movements designed to glide the sciatic nerve smoothly through its fascial tunnels, breaking adhesions and restoring blood supply.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">McKenzie Method (MDT):</strong> Identifying your spine&apos;s &quot;directional preference&quot; to centralize radiating symptoms back into the midline of your lower back.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Deep Core &amp; Lumbo-Pelvic Stabilization:</strong> Rebuilding transversus abdominis, multifidus, and gluteal muscle tone to act as a natural internal brace for your lower back.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Ergonomic Posture Engineering:</strong> Custom workstation setup guidance for tech workers in Cyberabad to eliminate sitting-induced intradiscal pressure spikes.
                  </div>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-border">
                <Link
                  to="/services/physiotherapy-and-rehabilitation"
                  className="inline-flex items-center text-sm font-semibold text-accent hover:underline"
                >
                  Learn about our physiotherapy department <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section 5: Why Hyderabad Patients Choose Thrive */}
        <section className="space-y-8 my-16 card-flat p-8 sm:p-12 bg-card border border-border rounded-3xl">
          <Reveal>
            <span className="eyebrow !bg-background">The Thrive Advantage</span>
            <h2 className="display-lg mt-4 text-2xl sm:text-3xl">
              Why Patients Across Hyderabad Trust Thrive for Sciatica Relief
            </h2>
            <div className="grid gap-6 sm:grid-cols-3 mt-8">
              <div className="space-y-2">
                <div className="text-primary font-bold text-xl">1. Under One Roof</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No bouncing between radiology centers, orthopedic surgeons, and remote physiotherapy clinics. Physicians, diagnostic ultrasound, procedure suites, and rehab are co-located in Bharathi Square, Raidurgam.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-bold text-xl">2. Day-Care Freedom</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All interventional procedures are performed as outpatient day-care sessions with local anesthesia. You return home to rest in your own bed the very same afternoon.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-bold text-xl">3. Clear, Unrushed Care</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We spend dedicated time reviewing your MRI images with you on high-definition displays, explaining your anatomy in clear English, Telugu, or Hindi without jargon.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Section 6: FAQs */}
        <section className="space-y-8 my-16">
          <Reveal>
            <span className="eyebrow">Got questions?</span>
            <h2 className="display-lg mt-4 text-2xl sm:text-3xl">
              Frequently Asked Questions About Sciatica Treatment in Hyderabad
            </h2>
          </Reveal>
          <div className="space-y-4">
            {sciaticaFaqs.map((faq) => (
              <Reveal key={faq.question} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Section 7: Booking CTA Banner */}
        <section className="my-16 rounded-3xl bg-deep text-deep-foreground p-8 sm:p-12 text-center">
          <Reveal>
            <span className="eyebrow !bg-white/10 !text-sand">Begin your recovery</span>
            <h2 className="display-lg mt-4 text-3xl sm:text-4xl text-white">
              Stop letting radiating nerve pain restrict your everyday life
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed">
              Consult our multidisciplinary spine and nerve specialists in Raidurgam today. We are ready to listen, diagnose precisely, and guide your journey to lasting comfort.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/book"
                onClick={() => trackEvent("book_click", { location: "sciatica_bottom_cta" })}
                className="btn btn-primary bg-sand text-deep hover:bg-sand/90"
              >
                Book In-Person Consultation
              </Link>
              <a
                href={clinic.phoneHref}
                onClick={() => trackEvent("phone_click", { location: "sciatica_bottom_cta" })}
                className="btn btn-outline border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call {clinic.phone}
              </a>
            </div>
            <p className="mt-4 text-xs text-white/60">
              4th Floor, Bharathi Square, Nandi Hills, Raidurgam, Cyberabad, Hyderabad.
            </p>
          </Reveal>
        </section>
      </article>

      <ClosingCta />
    </>
  );
}
