import { createFileRoute } from "@tanstack/react-router";
import { clinic, whatsappLink } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Thrive Pain & Wellness Clinic, Hyderabad" },
      {
        name: "description",
        content:
          "Request an appointment with a pain physician in Hyderabad. Pick a date and time slot, or confirm instantly on WhatsApp.",
      },
      { property: "og:title", content: "Book an Appointment | Thrive Pain & Wellness Clinic" },
      { property: "og:description", content: "Same-week appointments across all seven departments." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: Book,
});

function Book() {
  return (
    <section className="bg-secondary/40">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <Reveal>
          <span className="eyebrow">Book an appointment</span>
          <h1 className="display-xl mt-6">
            Four fields. <span className="text-deep/60">One call back.</span>
          </h1>
          <p className="mt-6 text-muted-foreground">
            Choose a date and a time window. Our care team confirms your slot by phone or WhatsApp, usually within one
            working hour, and tells you what to bring.
          </p>

          <div className="mt-8 space-y-4">
            {clinic.hours.map((entry) => (
              <div key={entry.days} className="card-soft p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">{entry.days}</p>
                <p className="mt-2 text-sm">{entry.time}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink("Hello Thrive, I'd like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "book_page" })}
              className="btn btn-primary"
            >
              Book on WhatsApp
            </a>
            <a
              href={clinic.phoneHref}
              onClick={() => trackEvent("phone_click", { location: "book_page" })}
              className="btn btn-outline"
            >
              Call {clinic.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <LeadForm mode="booking" title="Request your slot" description="Only the details we need to call you back." />
        </Reveal>
      </div>
    </section>
  );
}
