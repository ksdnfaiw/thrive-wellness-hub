import { createFileRoute } from "@tanstack/react-router";
import { doctors } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors & Team | Thrive Pain & Wellness Clinic" },
      {
        name: "description",
        content:
          "Meet the pain physicians, physiotherapists, clinical psychologist and nutritionist behind Thrive Pain & Wellness Clinic, Hyderabad.",
      },
      { property: "og:title", content: "Our Doctors & Team | Thrive Pain & Wellness Clinic" },
      { property: "og:description", content: "Fellowship-trained pain physicians and an integrated in-house care team." },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
    scripts: doctors.map((doctor) => ({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Physician",
        name: doctor.name,
        medicalSpecialty: doctor.specialty,
        description: doctor.bio,
        worksFor: { "@type": "MedicalClinic", name: "Thrive Pain & Wellness Clinic" },
      }),
    })),
  }),
  component: Doctors,
});

function Doctors() {
  return (
    <>
      <PageHero
        eyebrow="Doctors & team"
        title="The people who will"
        accent="actually treat you."
        description="Every plan at Thrive is written and signed by a physician, then delivered by the same in-house team you meet on day one."
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <Reveal key={doctor.name} delay={index * 60}>
              <article className="card-soft flex h-full flex-col p-6">
                <div
                  aria-hidden="true"
                  className="grid h-16 w-16 place-items-center rounded-full bg-secondary font-display text-xl font-bold text-secondary-foreground"
                >
                  {doctor.name
                    .replace(/^(Dr\.|Mr\.|Ms\.)\s*/, "")
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h2 className="mt-5 text-lg font-semibold">{doctor.name}</h2>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-primary uppercase">{doctor.specialty}</p>
                <p className="mt-3 text-sm text-muted-foreground">{doctor.qualifications}</p>
                <p className="mt-4 flex-1 text-sm">{doctor.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Team photographs are pending client photography and will replace the initial placeholders before launch.
        </p>
      </section>

      <ClosingCta />
    </>
  );
}
