# Thrive Wellness Hub

# Thrive Pain & Wellness Clinic — Lovable Master Build Prompt

Paste everything below the line into Lovable as your first project prompt. Replace every `{{bracketed}}` value with real client-supplied content before or as you go — do not launch with placeholders in `{{ }}` still showing. See the companion Master Project Dossier for the full client asset checklist these values come from.

---

## Project brief

Build a premium, conversion-focused marketing website in React + Tailwind CSS for **Thrive Pain & Wellness Clinic**, Hyderabad's physician-led destination for interventional pain management and integrative wellness. Brand line: "Heal. Restore. Thrive." Tagline for the closing CTA section: "Your pain ends here. Your life begins."

**Positioning:** Thrive is the only Hyderabad clinic combining physician-led interventional pain care with an integrated in-house team — physiotherapy, clinical psychology, nutrition, and next-gen wellness therapies — across a 4,000 sq. ft. facility. The site must feel as trustworthy as a hospital and as calm as a wellness retreat — never sterile-clinical, never casual-spa. This is "medical luxury": clinical credibility + retreat-grade serenity, at the same time.

## Design system

- **Palette:** teal (`#2E6E6E` primary, `#1F4E4E` deep accent) and white, generous off-white/light-teal backgrounds (`#EAF2F1`), warm neutral grays for body text (`#262626` / `#595959`). No "medical blue," no stock stethoscope imagery.

- **Typography:** serif display font for headlines (Playfair Display or Cormorant, weight 600–700) paired with a clean sans-serif for body/UI (Inter or similar). Generous line-height and letter-spacing on headings.

- **Layout language:** large white space, big breathing room between sections, retreat-paced imagery (full-bleed photography blocks) on wellness-related sections; tighter, more clinical/structured layout (icon + short copy blocks, credential badges) on procedure/insurance sections.

- **Motion:** subtle, purposeful animation only — fade/slide-up on scroll for section reveals, smooth hover states on cards and buttons, a gentle parallax or crossfade in the hero. No gimmicky or distracting motion. Respect `prefers-reduced-motion`.

- **Responsiveness:** mobile-first. Assume most visitors are on a phone searching on the go — every CTA (Book, Call, WhatsApp) must be reachable with one thumb, no horizontal scrolling, tap targets ≥44px.

- **Trust signals:** physician credentials, accreditation badges, and named insurer logos must appear above the fold on relevant pages, not buried in the footer.

## Site structure (build all pages)

1. **Home** — hero with core positioning claim + primary "Book an Appointment" CTA + secondary WhatsApp/Call CTA; service overview grid (7 service lines below); physician trust bar; insurer logo strip; testimonials carousel; closing CTA section with the "Your pain ends here" line.

2. **About Us / Who We Are** — founding story, mission, facility description (4,000 sq ft, multidisciplinary team), team philosophy. Content: `{{about_us_copy}}`.

3. **Our Services** (hub page linking to 7 sub-pages, each independently addressable for SEO):

   - Interventional Procedures — neuromodulation, epiduroplasty, regenerative therapies, radiofrequency ablation (RFA), cryotherapy, ultrasound-guided injections. Structure each as diagnosis → procedure → recovery.

   - Diagnostics & Imaging — in-house lab, digital X-ray, ultrasound, fluoroscopy (C-arm).

   - Physiotherapy & Rehabilitation

   - Psychology & Mental Wellness

   - Nutrition

   - Wellness Therapies

   - In-House Pharmacy

   - Content for each: `{{service_line_copy}}`

4. **Our Doctors & Team** — card grid, one card per doctor: photo, name, qualifications, specialty, short bio. Content: `{{doctor_bios}}`.

5. **Gallery** — photo/video grid of the facility, OT setup, and equipment, retreat-paced (large images, minimal grid chrome). Assets: `{{gallery_media}}`.

6. **Insurance & Billing** — named list of empanelled insurers/TPAs (do not use vague "most insurers accepted" language), cashless process steps, FAQ accordion. Content: `{{insurer_list}}`, `{{cashless_process}}`, `{{insurance_faqs}}`.

7. **Book an Appointment** — short, thumb-friendly calendar-based booking form (name, phone, service, preferred date/time, notes). On submit: send an email notification to `{{booking_notification_email}}` and a WhatsApp Business message to `{{clinic_whatsapp_number}}`. Keep required fields to the minimum needed to act on the booking.

8. **Contact & Locate Us** — embedded Google Map at `{{clinic_google_maps_pin}}`, address, hours, click-to-WhatsApp button, click-to-call button, "Get Directions" deep link.

9. **Blog** — SEO-ready listing + article template, empty at launch, ready for content to be added post-launch.

## Global/cross-page requirements

- Persistent floating "Chat on WhatsApp" button on every page (`wa.me/{{clinic_whatsapp_number}}`), plus a visible phone number in the header.

- Every service page and the homepage should include a short, low-friction inquiry/lead form routed the same way as the booking form.

- Sticky or easily reachable header nav: Home, About, Services (dropdown to the 7 sub-pages), Doctors, Gallery, Insurance, Book Appointment, Contact, Blog.

- Footer: clinic name, address, hours, phone, WhatsApp, social links, quick links to all main pages, and accreditation/credential badges if supplied.

## Technical & SEO infrastructure (build this in, don't leave for later)

- Unique, descriptive `<title>` and meta description per page.

- Open Graph and Twitter Card tags per page using clinic photography.

- JSON-LD structured data: `MedicalClinic` schema on the homepage/contact page, `Physician` schema on each doctor's entry.

- Auto-generated XML sitemap and clean, human-readable URLs (e.g., `/services/interventional-procedures`, not query strings).

- Canonical tags on every page.

- Image optimization: responsive/WebP images, lazy-loading for anything below the fold. Target sub-2.5s LCP and no layout shift on load (avoid CLS from images/fonts loading late — reserve space for all media).

- Semantic HTML and accessible markup (proper heading hierarchy, alt text on all images, sufficient color contrast, visible focus states) — aim for WCAG 2.1 AA.

- Google Analytics 4 integration with event tracking on: booking form submit, inquiry form submit, WhatsApp click, phone click, "Get Directions" click.

- Forms and data: use Supabase (or Lovable's default backend) for storing form submissions, service content, doctor profiles, testimonials, and the insurer list as structured data — not hardcoded — so content can be updated without a redeploy.

## What NOT to do

- Do not use stock "sterile hospital" or generic stethoscope photography as final imagery — use `{{clinic_photography}}` once supplied; use tasteful, brand-toned placeholders only until then, clearly marked for swap-out.

- Do not bury insurance/pricing clarity or physician credentials below the fold.

- Do not ship a booking flow that only offers a phone number — the calendar form plus WhatsApp/email routing is the required minimum.

- Do not launch with any `{{bracketed}}` placeholder text still visible on the live site.

just understand the style and look an feel and replicate 80% fro viode and 20% from the image attahced and make entire responsie

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7e2a8a18-403d-4908-b8f6-d5791edf89b8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
