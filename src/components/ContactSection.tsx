import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { clinic, services, socials, whatsappLink } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/Reveal";

const supportOptions = services.map((service) => service.title);

export function ContactSection() {
  const [sent, setSent] = useState<string | null>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const support = form.getAll("support").map(String);

    const message = [
      "New enquiry from the website",
      `Name: ${form.get("firstName")} ${form.get("lastName")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone")}`,
      `Location: ${form.get("location")}`,
      support.length ? `Support needed: ${support.join(", ")}` : "",
      form.get("message") ? `Message: ${form.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    trackEvent("inquiry_form_submit", { location: "contact_section" });
    const link = whatsappLink(message);
    setSent(link);
    window.open(link, "_blank", "noopener,noreferrer");
  };


  return (
    <section id="contact" className="border-t border-border bg-background">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr] sm:py-24">
        <Reveal>
          <span className="eyebrow">Contact us</span>
          <h2 className="display-lg mt-6">
            Ready to take
            <br />
            the next step?
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Tell us a little about what you are experiencing. Our team will help you understand the next step.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.7} aria-hidden="true" />
              <a href={clinic.phoneHref} className="font-semibold text-deep">
                {clinic.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.7} aria-hidden="true" />
              <a href={`mailto:${clinic.email}`} className="text-muted-foreground">
                {clinic.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.7} aria-hidden="true" />
              <p className="max-w-xs text-muted-foreground">{clinic.address}</p>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.7} aria-hidden="true" />
              <p className="max-w-xs text-muted-foreground">{clinic.hoursNote}</p>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-3 py-2 text-xs font-semibold tracking-wide text-deep uppercase transition-colors hover:bg-sand"
              >
                {social.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="card-flat p-6 sm:p-8">
              <h3 className="display-md">Request received</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Your enquiry has been opened in WhatsApp so it reaches our team on {clinic.phone}. If the window did not
                open, use the button below.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={sent} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 fill-current">
                    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.56 3.75 1.53 5.28L2 22l4.99-1.7a9.82 9.82 0 0 0 5.05 1.39c5.44 0 9.84-4.4 9.84-9.85C21.88 6.4 17.48 2 12.04 2Zm5.72 13.9c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.03.24-3.5-.96-2.47-1.2-4.02-3.9-4.14-4.08-.12-.19-.98-1.4-.94-2.62.04-1.22.7-1.8.94-2.05.24-.24.52-.3.7-.3h.5c.16 0 .38-.06.58.45.2.5.7 1.74.76 1.87.06.12.1.27.01.44-.09.17-.17.28-.34.47-.17.19-.36.42-.19.72.17.3.75 1.25 1.62 2.02 1.11.99 2.04 1.3 2.34 1.45.3.15.47.12.65-.07.17-.2.72-.85.92-1.14.2-.3.4-.24.66-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.7-.17 1.38Z" />
                  </svg>
                  Confirm on WhatsApp
                </a>
                <button type="button" onClick={() => setSent(null)} className="btn btn-outline">
                  Send another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="card-flat p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold">First name</span>
                  <input required name="firstName" autoComplete="given-name" className="field mt-2" placeholder="Enter here" />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold">Last name</span>
                  <input required name="lastName" autoComplete="family-name" className="field mt-2" placeholder="Enter here" />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold">Email</span>
                  <input required type="email" name="email" autoComplete="email" className="field mt-2" placeholder="Enter here" />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold">Phone number</span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    pattern="[0-9+\s-]{8,20}"
                    className="field mt-2"
                    placeholder="Enter here"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-semibold">Location</span>
                  <select name="location" defaultValue="Hyderabad" className="field mt-2">
                    {["Hyderabad", "Secunderabad", "Telangana (outside Hyderabad)", "Andhra Pradesh", "Other city"].map(
                      (city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ),
                    )}
                  </select>
                </label>
              </div>

              <fieldset className="mt-7">
                <legend className="display-md">What kind of support are you looking for?</legend>
                <div className="mt-4 space-y-3">
                  {supportOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3 text-sm">
                      <input type="checkbox" name="support" value={option} className="h-4 w-4 accent-[var(--deep)]" />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="mt-6 block">
                <span className="text-sm font-semibold">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={800}
                  className="field mt-2"
                  placeholder="Where is the pain, and how long have you had it?"
                />
              </label>

              <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto">
                Request an appointment
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                We use your details only to contact you about care at {clinic.name}. {services.length} areas of care, one plan.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
