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
      { title: "Contact & Locate Us | Thrive Pain Clinic, Hyderabad" },
      {
        name: "description",
        content:
          "Contact Thrive Pain Clinic, Wellness & More at Raidurgam, Hyderabad. Phone, email, WhatsApp and driving directions.",
      },
      { property: "og:title", content: "Contact & Locate Us | Thrive Pain & Wellness Clinic" },
      { property: "og:description", content: "Raidurgam, Hyderabad. Call, WhatsApp or get directions." },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.thrivepainandwellness.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Thrive Pain Clinic, Wellness & More",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4th Floor, Bharathi Square, Plot No. 58, Sy No. 5/3, Nandi Hills, Raidurg, Cyberabad, Raidurgam",
            "addressLocality": "Shaikpet, Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500081",
            "addressCountry": "IN"
          },
          "telephone": "+91 86395 09446",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "description": "By appointment"
            }
          ],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "17.420000",
            "longitude": "78.380000"
          },
          "medicalSpecialty": "Pain Management",
          "url": "https://www.thrivepainandwellness.com/contact"
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
        title="Come find your way"
        accent="to Thrive."
        description="Have a question, need help choosing the right service or ready to book your appointment? Our team is here to help."
      >
        <a
          href={clinic.phoneHref}
          onClick={() => trackEvent("phone_click", { location: "contact_hero" })}
          className="btn btn-primary"
        >
          Call {clinic.phone}
        </a>
        <a
          href={clinic.phone2Href}
          onClick={() => trackEvent("phone_click", { location: "contact_hero" })}
          className="btn btn-primary"
        >
          Call {clinic.phone2}
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
              <dd className="mt-2">{clinic.hoursNote}</dd>
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
                  <a href={clinic.phone2Href} className="underline">
                    {clinic.phone2}
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
            description="Our team replies during clinic hours. For quick questions, WhatsApp is fastest."
          />
        </Reveal>
      </section>
    </>
  );
}
