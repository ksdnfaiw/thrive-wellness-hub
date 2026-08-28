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

        <div className="mt-10 grid gap-8">
          {doctors.map((doctor, i) => (
            <Reveal key={doctor.name} delay={i * 100}>
              <article className="card-soft group relative flex h-full flex-col overflow-hidden p-0 transition-all hover:shadow-xl sm:flex-row">
                <div className="relative h-72 sm:h-auto sm:w-2/5 shrink-0 overflow-hidden bg-secondary">
                  {doctor.image ? (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                      <div className="grid h-24 w-24 place-items-center rounded-full bg-secondary font-display text-3xl font-bold text-secondary-foreground shadow-sm">
                        {doctor.name.charAt(0)}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent sm:bg-gradient-to-r" />
                </div>
                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">{doctor.name}</h3>
                  <p className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
                    {doctor.specialty}
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{doctor.bio}</p>
                  
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <dt className="flex items-center gap-2 text-xs font-semibold tracking-widest text-deep uppercase">
                        <span className="h-px w-4 bg-primary/40"></span> Qualifications
                      </dt>
                      <dd className="mt-2 text-sm leading-snug text-muted-foreground">{doctor.qualifications}</dd>
                    </div>
                    <div>
                      <dt className="flex items-center gap-2 text-xs font-semibold tracking-widest text-deep uppercase">
                        <span className="h-px w-4 bg-primary/40"></span> Experience
                      </dt>
                      <dd className="mt-2 text-sm leading-snug text-muted-foreground">{doctor.experience}</dd>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <div className="card-soft mt-8 grid gap-8 overflow-hidden p-0 sm:grid-cols-[1fr_1.5fr]">
              <div className="bg-primary/5 p-8 sm:p-10">
                <h3 className="font-display text-2xl font-semibold tracking-tight">Our multidisciplinary team</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Different expertise, one shared goal: helping you heal, restore and thrive. We bring together professionals across pain management, rehabilitation, psychology, nutrition and wellness.
                </p>
              </div>
              <ul className="grid gap-6 p-8 sm:grid-cols-2 sm:p-10">
                {teamDisciplines.map((item) => (
                  <li key={item.title}>
                    <p className="text-sm font-semibold tracking-wide text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
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
