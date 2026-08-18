import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { cashlessSteps, clinic, insuranceFaqs, whatsappLink } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance & Billing | Cashless Process at Thrive, Hyderabad" },
      {
        name: "description",
        content:
          "How cashless treatment works at Thrive Pain & Wellness Clinic: eligibility checks, documents, pre-authorisation, treatment and settlement with empanelled insurers and TPAs.",
      },
      { property: "og:title", content: "Insurance & Billing | Thrive Pain & Wellness Clinic" },
      {
        property: "og:description",
        content: "Cashless support where eligible, with clear guidance at every step.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/insurance" },
    ],
    links: [{ rel: "canonical", href: "/insurance" }],
  }),
  component: Insurance,
});

function Insurance() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="Insurance & billing"
        title="Clearer care."
        accent="Fewer surprises."
        description="Understanding the financial side of treatment should not add another layer of stress. Thrive works with empanelled insurers and TPAs to help eligible patients access cashless treatment where applicable."
      >
        <a
          href={whatsappLink("Hello Thrive, I would like to check my insurance eligibility.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "insurance_hero" })}
          className="btn btn-primary"
        >
          Check insurance eligibility
        </a>
        <a
          href={clinic.phoneHref}
          onClick={() => trackEvent("phone_click", { location: "insurance_hero" })}
          className="btn btn-outline"
        >
          Call {clinic.phone}
        </a>
      </PageHero>

      <section className="container-x py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <h2 className="display-lg text-2xl">Empanelled insurers &amp; TPAs</h2>
          <p className="mt-4 text-muted-foreground">
            Thrive accepts eligible coverage through its empanelled insurance and TPA partners. Verified insurer and TPA
            logos and names will be displayed here.
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <Reveal key={index} delay={index * 30}>
              <li className="grid h-24 place-items-center rounded-2xl border border-dashed border-border bg-card text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Insurer logo
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/50">
        <div className="container-x py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Cashless process</span>
            <h2 className="display-lg mt-5 text-2xl">Five steps, supported by our team</h2>
          </Reveal>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cashlessSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 70}>
                <li className="card-soft h-full p-6">
                  <span className="font-display text-3xl font-bold text-primary/40">0{index + 1}</span>
                  <p className="mt-3 font-semibold">{step.step}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-xs text-muted-foreground">
            Important: insurance coverage, cashless eligibility and approval are subject to the terms of your individual
            policy and insurer or TPA authorisation.
          </p>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">FAQ</span>
          <h2 className="display-lg mt-5 text-2xl">Insurance questions, answered plainly</h2>
        </Reveal>
        <div className="mt-8 max-w-3xl divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
          {insuranceFaqs.map((faq, index) => (
            <div key={faq.q}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(open === index ? null : index)}
                  aria-expanded={open === index}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold"
                >
                  {faq.q}
                  <span aria-hidden="true" className="text-primary">
                    {open === index ? "–" : "+"}
                  </span>
                </button>
              </h3>
              {open === index ? <p className="px-6 pb-5 text-sm text-muted-foreground">{faq.a}</p> : null}
            </div>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
