# Portfolio v2

Personal developer portfolio for Dibbo Chakraborty. Next.js App Router, TypeScript strict, Tailwind CSS v4, Motion, Resend contact form, MDX case studies.

## Run locally

```bash
bun install
cp .env.example .env.local   # fill in Resend keys for the contact form
bun dev
```

Open http://localhost:3000.

## Updating the site

All personal content lives in `src/data/` (typed via `src/types/types.ts`). Components never hardcode it. Do not edit the types to add content; use what exists.

### Add a project

Edit `src/data/projects.ts` and append to the `projects` array:

```ts
{
  slug: "my-app",
  title: "My App",
  summary: "One-line summary.",
  highlights: ["Thing you built", "Another outcome"],
  stack: ["TypeScript", "Next.js"],
  links: { repository: "https://github.com/..." }, // + optional live, docs
  // optional: image, featured, caseStudy
}
```

- `featured: true` renders first as a large card; the rest render in array order in a 2-column grid.
- `image: { src: "/projects/my-app.png", alt: "..." }` — put the file in `public/projects/`. Missing images show a neutral placeholder.
- `links.live` / `links.docs` render only when present.

### Add a case study

1. Set `caseStudy: true` on the project in `src/data/projects.ts`.
2. Create `content/<slug>.mdx` (e.g. `content/my-app.mdx`) with your headings and real content.
3. The page appears at `/projects/<slug>`. Only slugs with `caseStudy: true` are pre-rendered (`dynamicParams = false`, others 404).

### Replace resume and photo

- Resume: add `public/resume.pdf` and point `resume` in `src/data/profile.ts` at `/resume.pdf`. (Currently it points at a Google Drive URL.)
- Photo: add `public/me.jpg`. The About section checks for it server-side with `fs.existsSync` and falls back to an initials avatar until it exists.

### Env vars

| Var | Used where | Required? |
| --- | --- | --- |
| `RESEND_API_KEY` | Contact server action (sends via Resend) | Only for sending mail; form returns a friendly error when missing |
| `CONTACT_FROM_EMAIL` | `from` address for contact emails (e.g. `contact@yourdomain.com`) | Same as above |

Both are server-only (never `NEXT_PUBLIC_*`). The contact form also has a honeypot (`website`) and an in-memory rate limit (3 per 10 min per IP) in `src/lib/rate-limit.ts`.

### Deploy on Vercel

1. Push to GitHub, import the repo in Vercel.
2. Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in Project Settings → Environment Variables.
3. Deploy. `sitemap.ts` / `robots.ts` / `opengraph-image.tsx` are automatic; Analytics is already wired in `src/app/layout.tsx`.

## Scripts

- `bun dev` — dev server (Turbopack)
- `bun run build` — production build
- `bunx tsc --noEmit` — typecheck
- `bunx biome check` — lint/format (`lint` script)
