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
                <a href={sent} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
