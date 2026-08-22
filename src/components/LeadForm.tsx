import { useState } from "react";
import { clinic, services, whatsappLink } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

type Mode = "inquiry" | "booking";

export function LeadForm({
  mode = "inquiry",
  defaultService,
  title,
  description,
}: {
  mode?: Mode;
  defaultService?: string;
  title?: string;
  description?: string;
}) {
  const [done, setDone] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const service = String(form.get("service") ?? "");
    const date = String(form.get("date") ?? "");
    const time = String(form.get("time") ?? "");
    const notes = String(form.get("notes") ?? "");

    const message = [
      mode === "booking" ? "New appointment request" : "New enquiry",
      `Name: ${name}`,
      `Phone: ${phone}`,
      service && `Service: ${service}`,
      date && `Preferred date: ${date}`,
      time && `Preferred time: ${time}`,
      notes && `Notes: ${notes}`,
    ]
      .filter(Boolean)
      .join("\n");

    trackEvent(mode === "booking" ? "booking_form_submit" : "inquiry_form_submit", { service });
    const link = whatsappLink(message);
    setSentTo(link);
    setDone(true);
    // Hand the lead straight to the clinic WhatsApp number.
    window.open(link, "_blank", "noopener,noreferrer");
  };


  if (done) {
    return (
      <div className="card-soft p-6 sm:p-8">
        <h3 className="text-xl">Request received</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Your details have been opened in WhatsApp so they reach our care team on {clinic.phone}. If the WhatsApp window
          did not open, use the button below. You can also write to {clinic.email}.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {sentTo ? (
            <a
              href={sentTo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center justify-center gap-2"
              onClick={() => trackEvent("whatsapp_click", { location: "form_confirmation" })}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 fill-current">
                <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.56 3.75 1.53 5.28L2 22l4.99-1.7a9.82 9.82 0 0 0 5.05 1.39c5.44 0 9.84-4.4 9.84-9.85C21.88 6.4 17.48 2 12.04 2Zm5.72 13.9c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.03.24-3.5-.96-2.47-1.2-4.02-3.9-4.14-4.08-.12-.19-.98-1.4-.94-2.62.04-1.22.7-1.8.94-2.05.24-.24.52-.3.7-.3h.5c.16 0 .38-.06.58.45.2.5.7 1.74.76 1.87.06.12.1.27.01.44-.09.17-.17.28-.34.47-.17.19-.36.42-.19.72.17.3.75 1.25 1.62 2.02 1.11.99 2.04 1.3 2.34 1.45.3.15.47.12.65-.07.17-.2.72-.85.92-1.14.2-.3.4-.24.66-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.7-.17 1.38Z" />
              </svg>
              Confirm on WhatsApp
            </a>
          ) : null}
          <a
            href={clinic.phoneHref}
            onClick={() => trackEvent("phone_click", { location: "form_confirmation" })}
            className="btn btn-outline"
          >
            Call {clinic.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-soft p-6 sm:p-8">
      <h3 className="display-lg text-2xl">{title ?? (mode === "booking" ? "Book an appointment" : "Ask a question")}</h3>
      <p className="mt-3 text-sm text-muted-foreground">
        {description ??
          "Share the essentials and our care team calls you back. No long forms, no queues."}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="text-xs font-semibold tracking-wide text-foreground uppercase">Full name</span>
          <input required name="name" autoComplete="name" maxLength={80} className="field mt-2" placeholder="Your name" />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-xs font-semibold tracking-wide text-foreground uppercase">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={20}
            pattern="[0-9+\s-]{8,20}"
            className="field mt-2"
            placeholder="+91 …"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold tracking-wide text-foreground uppercase">Service needed</span>
          <select name="service" defaultValue={defaultService ?? ""} className="field mt-2">
            <option value="">Not sure yet, please advise</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        {mode === "booking" ? (
          <>
            <label className="block">
              <span className="text-xs font-semibold tracking-wide text-foreground uppercase">Preferred date</span>
              <input required name="date" type="date" className="field mt-2" />
            </label>
            <label className="block">
              <span className="text-xs font-semibold tracking-wide text-foreground uppercase">Preferred time</span>
              <select required name="time" defaultValue="" className="field mt-2">
                <option value="" disabled>
                  Select a slot
                </option>
                {["09:00 – 11:00", "11:00 – 13:00", "14:00 – 16:00", "16:00 – 18:00", "18:00 – 20:00"].map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>
          </>
        ) : null}
        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold tracking-wide text-foreground uppercase">Notes (optional)</span>
          <textarea
            name="notes"
            rows={3}
            maxLength={600}
            className="field mt-2"
            placeholder="Where is the pain, and how long have you had it?"
          />
        </label>
      </div>

      <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto">
        {mode === "booking" ? "Request my appointment" : "Send my enquiry"}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Your details are used only to contact you about your care at {clinic.name}.
      </p>
    </form>
  );
}
