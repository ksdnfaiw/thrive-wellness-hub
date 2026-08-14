import { createFileRoute } from "@tanstack/react-router";
import { clinic, whatsappLink } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.mapsQuery)}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(clinic.mapsQuery)}&output=embed`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Locate Us | Thrive Pain & Wellness Clinic, Hyderabad" },
      {
        name: "description",
        content:
          "Find Thrive Pain & Wellness Clinic in Banjara Hills, Hyderabad. Address, opening hours, click-to-call, WhatsApp and driving directions.",
      },
      { property: "og:title", content: "Contact & Locate Us | Thrive Pain & Wellness Clinic" },
      { property: "og:description", content: "Banjara Hills, Hyderabad. Call, WhatsApp or get directions." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: clinic.name,
          telephone: clinic.phone,
          email: clinic.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Road No. 12, Banjara Hills",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500034",
            addressCountry: "IN",
          },
          openingHours: ["Mo-Sa 09:00-20:00", "Su 10:00-14:00"],
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact & locate us"
        title="Banjara Hills,"
        accent="Hyderabad."
        description="Free parking on site, step-free access, and a reception team that answers the phone."
      >
        <a
          href={clinic.phoneHref}
          onClick={() => trackEvent("phone_click", { location: "contact_hero" })}
          className="btn btn-primary"
        >
          Call {clinic.phone}
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "contact_hero" })}
          className="btn btn-outline"
        >
          WhatsApp us
        </a>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("directions_click", { location: "contact_hero" })}
          className="btn btn-outline"
        >
          Get directions
        </a>
      </PageHero>

      <section className="container-x grid gap-10 py-16 lg:grid-cols-[1fr_1.1fr] sm:py-20">
        <Reveal>
          <h2 className="display-lg text-2xl">Clinic details</h2>
          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Address</dt>
              <dd className="mt-2">{clinic.address}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Hours</dt>
              <dd className="mt-2 space-y-1">
                {clinic.hours.map((entry) => (
                  <p key={entry.days}>
                    <span className="font-semibold">{entry.days}:</span> {entry.time}
                  </p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Phone & email</dt>
              <dd className="mt-2 space-y-1">
                <p>
                  <a href={clinic.phoneHref} className="underline">
                    {clinic.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${clinic.email}`} className="underline">
                    {clinic.email}
                  </a>
                </p>
              </dd>
            </div>
          </dl>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border">
            <iframe
              title={`Map showing the location of ${clinic.name}`}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <LeadForm
            mode="inquiry"
            title="Send us a message"
            description="Reception replies during clinic hours; urgent queries are faster on WhatsApp."
          />
        </Reveal>
      </section>
    </>
  );
}
