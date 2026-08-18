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
          "Request an appointment at Thrive Pain & Wellness Clinic, Hyderabad. Share your preferred date and time, or message us on WhatsApp.",
      },
      { property: "og:title", content: "Book an Appointment | Thrive Pain & Wellness Clinic" },
      { property: "og:description", content: "Your first step towards better days." },
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
            Your first step towards <span className="text-deep/60">better days.</span>
          </h1>
          <p className="mt-6 text-muted-foreground">
            Whether you are dealing with persistent pain, recovering from an injury or looking for a more complete approach to
            your wellbeing, our team is here to help you understand what comes next.
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
          <LeadForm mode="booking" title="Request an appointment" description="Share a few details and our team will help you with the next step." />
        </Reveal>
      </div>
    </section>
  );
}
