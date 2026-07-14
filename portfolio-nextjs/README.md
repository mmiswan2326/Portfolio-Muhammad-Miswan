# Muhammad Miswan — Portfolio

A premium, dark-mode, Bento-grid portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. 3D-tilt hover effects, scroll-reveal animations, section-aware nav, project filtering, and a GitHub stats section — all wired to editable data files.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) 18.17+ installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it hot-reloads as you edit.

## 2. Edit your content

You almost never need to touch component code. Everything content-related lives in `/data`:

| File | What it controls |
|---|---|
| `data/site.ts` | Your name, roles, hero tagline, about bio, quick facts, resume link, GitHub username, nav links |
| `data/skills.ts` | Skill categories and the pills inside each |
| `data/projects.ts` | Every project card — name, description, tech, links, category (for filtering), featured/size |
| `data/experience.ts` | Work experience timeline |
| `data/education.ts` | Education timeline |
| `data/certifications.ts` | Certification cards |
| `data/hackathons.ts` | Hackathon cards |
| `data/social.ts` | Contact links (GitHub, LinkedIn, email, resume) |

Add a new project by adding an object to the array in `data/projects.ts` — it will automatically show up in the grid and respect the filter tabs based on its `categories`.

### Swap in your real photo

Drop an image into `/public` (e.g. `public/avatar.jpg`), then in
`components/sections/Hero.tsx` replace the `{site.avatarInitials}` block with
an `<Image src="/avatar.jpg" ... />` (using `next/image`, already a project dependency).

### Add your resume

Drop `resume.pdf` into `/public`, it's already linked from `data/site.ts` → `resumeUrl`.

### Wire up the contact form

The contact form is fully functional, backed by a Next.js API route (`app/api/contact/route.ts`) and [Resend](https://resend.com) for delivery.

1. Create a free account at resend.com and grab an API key.
2. Copy `.env.example` to `.env.local` and fill in:
   ```
   RESEND_API_KEY=re_your_key_here
   CONTACT_TO_EMAIL=you@example.com
   ```
3. Also update the displayed email address in `data/social.ts` (look for `REAL_EMAIL` near the top of the file) so the UI and the backend agree.
4. Restart `npm run dev`. Submissions now arrive in your inbox, with proper validation, a honeypot spam-trap, and basic per-IP rate limiting (see `lib/rateLimit.ts`).

Want a different email provider later (SendGrid, Postmark, SES)? Only `lib/email.ts` needs to change — the API route calls `sendContactEmail()` and doesn't know which provider is behind it.

## 3. Customize the design

- **Colors** — edit the palette in `tailwind.config.ts` (`indigo`, `violet`, `cyan`, `bg`, `card`, etc.)
- **Fonts** — set in `app/layout.tsx` via `next/font/google` (currently Inter + JetBrains Mono)
- **Section order** — reorder the components in `app/page.tsx`
- **Bento tile sizing** — pass `span={2}` in `data/skills.ts` / `data/projects.ts` per item to make it wider

## 4. Deploy

The fastest path is [Vercel](https://vercel.com) (made by the creators of Next.js, free for personal projects):

1. Push this project to a GitHub repository.
2. Go to vercel.com → **Add New Project** → import your repo.
3. Leave the default settings (Vercel auto-detects Next.js) → **Deploy**.
4. You'll get a live `yourproject.vercel.app` URL, with a custom domain option in project settings.

Alternatively, deploy via the CLI:

```bash
npm install -g vercel
vercel
```

Other hosts that work fine with Next.js: Netlify, Cloudflare Pages, or your own Node server (`npm run build && npm run start`).

## Project structure

```
app/                 → routes, layout, global styles
components/
  layout/            → navbar, footer, background, scroll progress, back-to-top
  sections/          → one file per page section (Hero, About, Skills, ...)
  ui/                → reusable primitives (Tile, Button, SectionHeading, Pill)
data/                → all editable content — start here
hooks/               → useTilt (3D hover), useActiveSection (nav highlighting)
lib/                 → cn() classname helper
types/                → shared TypeScript interfaces
public/              → static files (resume, images, favicon)
```

## Notes

- **shadcn/ui** wasn't pre-installed to keep this project runnable out of the box without its CLI step. If you want it: `npx shadcn@latest init`, then add components as needed (`npx shadcn@latest add button`) — the existing `Button` in `components/ui/Button.tsx` can be swapped out or kept alongside it.
- GitHub stats images (`components/sections/GithubStats.tsx`) pull from the public `github-readme-stats` and `github-readme-streak-stats` services using the username in `data/site.ts` — update `githubUsername` there.
- Reduced-motion is respected globally (see `app/globals.css`).
