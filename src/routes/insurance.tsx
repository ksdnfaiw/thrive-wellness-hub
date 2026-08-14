import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { cashlessSteps, clinic, insuranceFaqs, insurers, whatsappLink } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance & Billing | Empanelled Insurers & Cashless Process" },
      {
        name: "description",
        content:
          "Named empanelled insurers and TPAs, our four-step cashless pre-authorisation process, and clear answers on what pain procedures are covered.",
      },
      { property: "og:title", content: "Insurance & Billing | Thrive Pain & Wellness Clinic" },
      { property: "og:description", content: "12+ named empanelled insurers and TPAs, with written estimates before treatment." },
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
        title="Named insurers. Written estimates."
        accent="no surprises."
        description="We publish exactly who we are empanelled with and what the cashless process involves, because “most insurers accepted” tells you nothing."
      >
        <a
          href={whatsappLink("Hello Thrive, I'd like to check my insurance coverage.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "insurance_hero" })}
          className="btn btn-primary"
        >
          Check my coverage
        </a>
        <a
          href={clinic.phoneHref}
          onClick={() => trackEvent("phone_click", { location: "insurance_hero" })}
          className="btn btn-outline"
        >
          Call the insurance desk
        </a>
      </PageHero>

      <section className="container-x py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <h2 className="display-lg text-2xl">Empanelled insurers & TPAs</h2>
          <p className="mt-4 text-muted-foreground">
            Cashless treatment is available with the following insurers and third-party administrators, subject to your
            policy terms and pre-authorisation approval.
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {insurers.map((insurer, index) => (
            <Reveal key={insurer} delay={index * 30}>
              <li className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold text-deep">
                {insurer}
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/50">
        <div className="container-x py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Cashless process</span>
            <h2 className="display-lg mt-5 text-2xl">Four steps, handled by our desk</h2>
          </Reveal>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
