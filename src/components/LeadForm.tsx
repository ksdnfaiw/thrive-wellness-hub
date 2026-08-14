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
    setSentTo(whatsappLink(message));
    setDone(true);
  };

  if (done) {
    return (
      <div className="card-soft p-6 sm:p-8">
        <h3 className="text-xl">Request received</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Our care team will call you on the number you shared, usually within one working hour. To confirm faster, send
          the same details straight to our WhatsApp desk.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {sentTo ? (
            <a
              href={sentTo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "form_confirmation" })}
              className="btn btn-primary"
            >
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
            <option value="">Not sure yet — advise me</option>
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
