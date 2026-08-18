import { createFileRoute, Link } from "@tanstack/react-router";
import { doctors, teamDisciplines } from "@/lib/site-data";
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
          "Meet Dr. Dheeraj and the multidisciplinary team across pain management, physiotherapy, psychology, nutrition and wellness at Thrive Pain & Wellness Clinic, Hyderabad.",
      },
      { property: "og:title", content: "Our Doctors & Team | Thrive Pain & Wellness Clinic" },
      {
        property: "og:description",
        content: "Physician-led pain management supported by an integrated in-house care team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        title="Expertise"
        accent="that listens."
        description="At Thrive, medical expertise is combined with a multidisciplinary approach to care. Our team brings together professionals across pain management, rehabilitation, psychology, nutrition and wellness, working together to support the individual behind the condition."
      />

      <section className="container-x py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Meet our team</span>
          <h2 className="display-lg mt-5 text-2xl">Physician-led pain and regenerative care</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          {doctors.map((doctor) => (
            <Reveal key={doctor.name}>
              <article className="card-soft h-full p-7">
                <div
                  aria-hidden="true"
                  className="grid h-16 w-16 place-items-center rounded-full bg-secondary font-display text-xl font-bold text-secondary-foreground"
                >
                  D
                </div>
                <h3 className="mt-5 text-xl font-semibold">{doctor.name}</h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                  {doctor.specialty}
                </p>
                <p className="mt-4 text-sm leading-relaxed">{doctor.bio}</p>
                <dl className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <div>
                    <dt className="text-xs font-semibold tracking-[0.16em] text-deep uppercase">Qualifications</dt>
                    <dd className="mt-1">{doctor.qualifications}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-[0.16em] text-deep uppercase">Experience</dt>
                    <dd className="mt-1">{doctor.experience}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}

          <Reveal delay={90}>
            <div className="card-flat h-full p-7">
              <h3 className="display-md">Our multidisciplinary team</h3>
              <ul className="mt-6 space-y-5">
                {teamDisciplines.map((item) => (
                  <li key={item.title}>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12 max-w-2xl">
          <h2 className="display-lg text-2xl">One team. One care journey.</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Different expertise, one shared goal: helping you heal, restore and thrive.
          </p>
          <Link to="/book" className="btn btn-primary mt-6">
            Book a consultation
          </Link>
        </Reveal>

        <p className="mt-10 text-xs text-muted-foreground">
          Team photographs and verified credentials will be added as confirmed by the clinic.
        </p>
      </section>

      <ClosingCta />
    </>
  );
}
