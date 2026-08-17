# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Deployment

1. Copy env vars: `cp .env.example .env` and fill them in. On your host (Vercel, Netlify, Cloudflare Pages) add the same keys as build-time environment variables.
   - `VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY` — GA4 measurement ID (optional).
   - `VITE_SITE_URL` — public origin used for canonical URLs and og:url.
2. Build settings: install `bun install` (or `npm ci`), build `npm run build`, output `dist/`, Node 20+.
3. Push and deploy: `./scripts/deploy.sh "your commit message"` runs lint + production build, then commits and pushes the current branch.

### Launch checklist

- Replace the brand mark placeholder in `src/components/Logo.tsx` and `public/favicon.ico`.
- Replace the placeholder photography in `src/assets/` (keep the same filenames so imports stay valid).
- Update clinic phone, WhatsApp number, email and address in `src/lib/site-data.ts`.
- Set the live domain in `public/sitemap.xml` (prefix each `<loc>`) once the domain is live.
