# Olympic Compute Group Prank Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a Next.js 16 satire microsite at `olympic-compute.vercel.app` that reads as a legitimate hyperscaler announcement for an AI data center on Battle Point Park, Bainbridge Island.

**Architecture:** Static SSG Next.js App Router site with shadcn/ui + Tailwind. Four routes (`/`, `/sustainability`, `/community-partnership`, `/press`). Content + visual assets produced in parallel by persona-driven research teams. Three-persona review panel before final ship.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind 4, shadcn/ui, Vercel (Fluid Compute / Node 24 LTS), Playwright for E2E, npm (pnpm not installed locally), `vercel.ts` for config.

**Project layout note (post-bootstrap):** Next.js 16's `create-next-app` ignores `--src-dir false`. Everything is under `src/`. Where the plan below says `app/...` read `src/app/...`; where it says `components/...` read `src/components/...`; where it says `lib/...` read `src/lib/...`. The `@/*` import alias resolves to `./src/*`. `public/`, `vercel.ts`, `tests/`, `docs/`, and config files at the repo root remain at the root.

**OG / social card:** the site must render a rich link-preview card when shared in iMessage, Slack, Twitter, Discord, Facebook, and Nextdoor. Implementation in §Phase 1.5 below.

**Testing posture (read this first):** This is a static marketing site. There is no business logic to TDD. The acceptance gate per Constitution §1 is: type-check, build, Playwright E2E walking the deployed URL, and the three-persona review panel. Use light component smoke tests (does the page render without throwing) instead of full TDD.

---

## File structure

```
~/projects/olympic-compute/
├── app/
│   ├── layout.tsx              # Root layout, nav, footer, metadata
│   ├── page.tsx                # One-pager homepage
│   ├── sustainability/page.tsx
│   ├── community-partnership/page.tsx
│   ├── press/page.tsx
│   └── globals.css             # Tailwind + brand tokens
├── components/
│   ├── nav.tsx                 # Top nav with logo + links
│   ├── footer.tsx
│   ├── logo.tsx                # SVG OCG mark + wordmark
│   └── sections/               # Homepage section components
│       ├── hero.tsx
│       ├── why-bainbridge.tsx
│       ├── site-overview.tsx
│       ├── sustainability.tsx
│       ├── community-partnership.tsx
│       ├── jobs-economy.tsx
│       ├── timeline.tsx
│       ├── faq.tsx
│       └── stat-strip.tsx
├── lib/
│   └── site-config.ts          # Single source of truth: brand, dates, contact, copy
├── public/
│   ├── hero-aerial.jpg         # Composite of Battle Point + facility render
│   ├── site-plan.svg           # Site plan overlay diagram
│   ├── interior-render.jpg     # Server hall interior
│   ├── battlepoint-source.jpg  # Original satellite tile (input asset)
│   ├── press-kit.pdf           # Downloadable fact sheet
│   ├── ocg-logo.svg
│   └── favicon.ico
├── tests/
│   └── e2e/
│       └── full-journey.spec.ts
├── docs/superpowers/
│   ├── specs/2026-06-02-bainbridge-ai-data-center-prank-design.md
│   └── plans/2026-06-02-bainbridge-ai-data-center-prank.md
├── playwright.config.ts
├── vercel.ts
├── next.config.ts
├── tailwind.config.ts          # If shadcn requires it; T4 may not
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## Phase 0 — Bootstrap

### Task 1: Scaffold Next.js 16 project

**Files:** entire project tree

- [ ] **Step 1: Scaffold project in-place**

```bash
cd ~/projects/olympic-compute
npx --yes create-next-app@latest . --typescript --tailwind --eslint --app --src-dir false --turbopack --use-npm --import-alias "@/*" --skip-install --yes
```

If `create-next-app` refuses to scaffold into a non-empty directory, move the `docs/` folder aside first then move it back:

```bash
mv docs /tmp/oc-docs && npx --yes create-next-app@latest . --typescript --tailwind --eslint --app --turbopack --use-npm --import-alias "@/*" --skip-install --yes && mv /tmp/oc-docs docs
```

- [ ] **Step 2: Install dependencies**

```bash
cd ~/projects/olympic-compute && npm install
```

- [ ] **Step 3: Verify dev server boots**

```bash
cd ~/projects/olympic-compute && npm run dev &
sleep 6
curl -sI http://localhost:3000 | head -1
kill %1
```

Expected: `HTTP/1.1 200 OK`.

- [ ] **Step 4: Commit**

```bash
cd ~/projects/olympic-compute && git add -A && git commit -m "chore: scaffold next.js 16 project"
```

### Task 2: Configure `vercel.ts` and brand metadata

**Files:**
- Create: `vercel.ts`
- Modify: `app/layout.tsx` (replace default metadata block)

- [ ] **Step 1: Install `@vercel/config`**

```bash
cd ~/projects/olympic-compute && npm install --save-dev @vercel/config
```

- [ ] **Step 2: Write `vercel.ts`**

```ts
// vercel.ts
import type { VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  framework: 'nextjs',
  buildCommand: 'npm run build',
};
```

- [ ] **Step 3: Replace metadata in `app/layout.tsx`**

Set:

```ts
export const metadata: Metadata = {
  title: 'Olympic Compute Group — Battle Point Campus',
  description:
    'Olympic Compute Group is developing a next-generation AI compute campus at Battle Point Park on Bainbridge Island, Washington.',
  openGraph: {
    title: 'Olympic Compute Group — Battle Point Campus',
    description:
      'Now under environmental review: a next-generation AI compute campus on Bainbridge Island, Washington.',
    type: 'website',
    siteName: 'Olympic Compute Group',
  },
};
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "chore: vercel.ts config + brand metadata"
```

### Task 3: Install shadcn/ui

**Files:**
- Create: `components.json`, `lib/utils.ts`
- Modify: `app/globals.css` (shadcn CSS variables)

- [ ] **Step 1: Init shadcn**

```bash
cd ~/projects/olympic-compute && npx --yes shadcn@latest init --base-color stone --yes
```

- [ ] **Step 2: Add the components used by this site**

```bash
npx --yes shadcn@latest add button accordion separator card
```

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "chore: shadcn/ui init + button accordion separator card"
```

---

## Phase 1 — Site config + layout shell

### Task 4: Single source of truth — `lib/site-config.ts`

**Files:** Create `lib/site-config.ts`

- [ ] **Step 1: Write the config**

```ts
// lib/site-config.ts
export const site = {
  company: 'Olympic Compute Group',
  shortName: 'OCG',
  tagline: "A new home for the Pacific Northwest's AI future.",
  campusName: 'Battle Point Campus',
  location: 'Bainbridge Island, Washington',
  url: 'https://olympic-compute.vercel.app',
  contactEmail: 'community.liaison.ocg@gmail.com',
  hqCity: 'Seattle, WA',
  publicCommentStart: 'June 15, 2026',
  publicCommentEnd: 'August 30, 2026',
  phase1Operational: 'Q3 2027',
  campusSqFt: '~412,000',
  campusAcres: '72',
  annualCommunityInvestment: '$2.4M',
  operationsJobs: 47,
  constructionJobs: '800+',
  annualLocalProcurement: '$14M',
  nav: [
    { label: 'Campus', href: '/#site-overview' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Community', href: '/community-partnership' },
    { label: 'Press', href: '/press' },
  ],
} as const;

export type SiteConfig = typeof site;
```

- [ ] **Step 2: Commit**

```bash
git add lib/site-config.ts && git commit -m "feat: site-wide config (lib/site-config.ts)"
```

### Task 5: Brand tokens in `app/globals.css`

**Files:** Modify `app/globals.css`

- [ ] **Step 1: Add OCG brand color tokens after the shadcn block**

Append to the bottom of `app/globals.css`:

```css
:root {
  --ocg-evergreen: 158 30% 18%;
  --ocg-sound: 200 55% 36%;
  --ocg-bone: 36 22% 96%;
  --ocg-graphite: 220 14% 14%;
}

.font-display { font-family: 'Inter', system-ui, sans-serif; letter-spacing: -0.015em; }
```

- [ ] **Step 2: Commit**

```bash
git add app/globals.css && git commit -m "style: OCG brand color tokens"
```

### Task 6: Logo component

**Files:** Create `components/logo.tsx`

- [ ] **Step 1: Write `components/logo.tsx`**

```tsx
// components/logo.tsx
import { site } from '@/lib/site-config';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label={site.company}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 26 L12 10 L16 18 L20 6 L28 26 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="font-semibold tracking-tight">{site.company}</span>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/logo.tsx && git commit -m "feat: OCG logo (stylized mountain wordmark)"
```

### Task 7: Nav + footer

**Files:**
- Create: `components/nav.tsx`, `components/footer.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Write `components/nav.tsx`**

```tsx
// components/nav.tsx
import Link from 'next/link';
import { Logo } from './logo';
import { site } from '@/lib/site-config';

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-stone-900">
          <Logo />
        </Link>
        <nav className="hidden gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Write `components/footer.tsx`**

```tsx
// components/footer.tsx
import { Logo } from './logo';
import { site } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200 bg-stone-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <Logo className="text-stone-900" />
          <p className="mt-3 text-sm text-stone-500">
            Building responsible compute infrastructure across the Pacific Northwest.
          </p>
        </div>
        <div className="text-sm text-stone-600">
          <p className="font-medium text-stone-900">Headquarters</p>
          <p className="mt-2">{site.hqCity}</p>
          <p className="mt-1">
            <a href={`mailto:${site.contactEmail}`} className="hover:text-stone-900">
              {site.contactEmail}
            </a>
          </p>
        </div>
        <div className="text-sm text-stone-600">
          <p className="font-medium text-stone-900">Battle Point Campus</p>
          <p className="mt-2">Public comment open</p>
          <p>{site.publicCommentStart} – {site.publicCommentEnd}</p>
        </div>
      </div>
      <div className="border-t border-stone-200 py-4 text-center text-xs text-stone-500">
        © 2026 {site.company}, LLC. All rights reserved.
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Wire into `app/layout.tsx`**

Inside the `<body>` of `app/layout.tsx`, wrap `{children}`:

```tsx
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

// inside <body className="...">
<Nav />
<main>{children}</main>
<Footer />
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: nav + footer wired into root layout"
```

### Task 7.5: Open Graph + Twitter card (rich link preview)

**Goal:** when this URL is dropped into iMessage, Slack, Twitter, FB, Nextdoor, etc., the link unfurls into a large image card with title + description — not a bare URL.

**Files:**
- Create: `src/app/opengraph-image.tsx` (auto-detected by Next.js App Router → emits `og:image`)
- Create: `src/app/twitter-image.tsx` (auto-detected → emits `twitter:image`)
- Modify: `src/app/layout.tsx` (extend the `openGraph` block; add a `twitter` block)
- Replace later: `src/app/opengraph-image.tsx` will use the real hero composite once the visual team delivers it in Phase 3 (Task 11)

- [ ] **Step 1: Add a `metadataBase` and a placeholder URL'd image to `metadata` in `src/app/layout.tsx`**

Update the metadata block to:

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://olympic-compute.vercel.app'),
  title: 'Olympic Compute Group — Battle Point Campus',
  description:
    'Olympic Compute Group is developing a next-generation AI compute campus at Battle Point Park on Bainbridge Island, Washington.',
  openGraph: {
    title: 'Olympic Compute Group — Battle Point Campus',
    description:
      'Now under environmental review: a next-generation AI compute campus on Bainbridge Island, Washington.',
    type: 'website',
    siteName: 'Olympic Compute Group',
    url: 'https://olympic-compute.vercel.app',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olympic Compute Group — Battle Point Campus',
    description:
      'Now under environmental review: a next-generation AI compute campus on Bainbridge Island.',
  },
};
```

(Don't manually set `openGraph.images` or `twitter.images` — the file-based `opengraph-image.tsx` and `twitter-image.tsx` in the next step register those automatically and at correct dimensions.)

- [ ] **Step 2: Write `src/app/opengraph-image.tsx`**

For v1 (before the hero composite exists), generate the card dynamically with `next/og`'s `ImageResponse`. This gives a usable share card immediately and is replaced by the static hero composite later.

```tsx
// src/app/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Olympic Compute Group — Battle Point Campus';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 80,
          backgroundColor: '#1a2a22',
          backgroundImage:
            'linear-gradient(135deg, #1a2a22 0%, #2a4a3a 50%, #4a6a55 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 24, opacity: 0.7, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Olympic Compute Group
        </div>
        <div style={{ fontSize: 72, fontWeight: 600, marginTop: 16, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          A new home for the Pacific Northwest's AI future.
        </div>
        <div style={{ fontSize: 28, opacity: 0.8, marginTop: 24 }}>
          Battle Point Campus · Bainbridge Island, WA
        </div>
      </div>
    ),
    size,
  );
}
```

- [ ] **Step 3: Write `src/app/twitter-image.tsx`**

Twitter's `summary_large_image` accepts the same 1200×630 PNG. Re-export the same image:

```tsx
// src/app/twitter-image.tsx
export { default, runtime, alt, size, contentType } from './opengraph-image';
```

- [ ] **Step 4: Local smoke test**

```bash
cd ~/projects/olympic-compute && npm run dev &
sleep 6
curl -sI http://localhost:3000/opengraph-image | head -5
curl -sI http://localhost:3000/twitter-image | head -5
kill %1
```

Expected: both return `200 OK` and `content-type: image/png`.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: OG + twitter card for rich link previews"
```

- [ ] **Step 6: After Phase 3 (visual team) delivers the hero composite, REPLACE `src/app/opengraph-image.tsx`**

When `public/hero-aerial.jpg` exists with the real composite, swap the dynamic `ImageResponse` for a static asset. Either: (a) move `public/og-card.jpg` (a 1200×630 crop of the hero with title overlay baked in by the visual team) and let it auto-register at the route `/og-card.jpg`, or (b) keep the file-based convention by rewriting `src/app/opengraph-image.tsx` to re-export the static asset. Option (a) is simpler and is the default; the visual team should deliver `public/og-card.jpg` as a named deliverable (see Phase 3 Task 11 Step 2).

---

## Phase 2 — Homepage section stubs (ship a navigable site)

### Task 8: Stub homepage sections

**Files:** Create one file per section in `components/sections/`

- [ ] **Step 1: Create stub section components**

For each section listed in §5 of the spec — `hero.tsx`, `why-bainbridge.tsx`, `site-overview.tsx`, `sustainability.tsx`, `community-partnership.tsx`, `jobs-economy.tsx`, `timeline.tsx`, `faq.tsx` — create a file under `components/sections/` with this shape (substitute the section name and id):

```tsx
// components/sections/hero.tsx
export function HeroSection() {
  return (
    <section id="hero" className="border-b border-stone-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-stone-900">Hero — placeholder</h2>
        <p className="mt-2 text-stone-600">Real copy lands in Phase 4.</p>
      </div>
    </section>
  );
}
```

Repeat for all 8 sections. Each one exports a named `Section` component (`HeroSection`, `WhyBainbridgeSection`, …) and uses the section name as its `id` (`hero`, `why-bainbridge`, `site-overview`, `sustainability`, `community-partnership`, `jobs-economy`, `timeline`, `faq`).

- [ ] **Step 2: Render them in `app/page.tsx`**

```tsx
// app/page.tsx
import { HeroSection } from '@/components/sections/hero';
import { WhyBainbridgeSection } from '@/components/sections/why-bainbridge';
import { SiteOverviewSection } from '@/components/sections/site-overview';
import { SustainabilitySection } from '@/components/sections/sustainability';
import { CommunityPartnershipSection } from '@/components/sections/community-partnership';
import { JobsEconomySection } from '@/components/sections/jobs-economy';
import { TimelineSection } from '@/components/sections/timeline';
import { FaqSection } from '@/components/sections/faq';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyBainbridgeSection />
      <SiteOverviewSection />
      <SustainabilitySection />
      <CommunityPartnershipSection />
      <JobsEconomySection />
      <TimelineSection />
      <FaqSection />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: stub homepage section components"
```

### Task 9: Stub subpages

**Files:**
- Create: `app/sustainability/page.tsx`
- Create: `app/community-partnership/page.tsx`
- Create: `app/press/page.tsx`

- [ ] **Step 1: Create each subpage**

Each follows this pattern (substitute title + slug):

```tsx
// app/sustainability/page.tsx
export default function SustainabilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-stone-900">Sustainability</h1>
      <p className="mt-4 text-stone-600">Real copy lands in Phase 4.</p>
    </article>
  );
}
```

- [ ] **Step 2: Confirm all routes resolve**

```bash
cd ~/projects/olympic-compute && npm run dev &
sleep 6
for path in / /sustainability /community-partnership /press; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000${path}")
  echo "${path} -> ${code}"
done
kill %1
```

Expected: all four return `200`.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: stub subpages (sustainability, community-partnership, press)"
```

### Task 10: First Vercel deploy (placeholder ship)

**Files:** none

- [ ] **Step 1: Link the Vercel project**

```bash
cd ~/projects/olympic-compute && npx --yes vercel link --yes --project olympic-compute
```

If a project named `olympic-compute` does not exist, Vercel CLI will offer to create it — accept.

- [ ] **Step 2: First preview deploy**

```bash
npx --yes vercel deploy --yes
```

Capture the preview URL printed in the output. Smoke-check it:

```bash
PREVIEW_URL=<paste from previous command>
curl -sI "$PREVIEW_URL" | head -1
```

Expected: `HTTP/2 200`.

- [ ] **Step 3: Promote to production (still placeholder content — that's fine)**

```bash
npx --yes vercel deploy --prod --yes
```

This gives us `olympic-compute.vercel.app` early so we can iterate against the deployed URL. Confirm:

```bash
curl -sI https://olympic-compute.vercel.app | head -1
```

Expected: `HTTP/2 200`.

- [ ] **Step 4: Commit any Vercel link metadata**

```bash
git add -A && git commit -m "chore: link vercel project + first deploy" || true
```

---

## Phase 3 — Visual assets (parallel dispatch)

### Task 11: Visual team dispatch

**Files:** Create `docs/superpowers/visual-prompts.md` (will hold image-gen prompts)

- [ ] **Step 1: Save David's Battle Point aerial source**

The aerial screenshot David shared in the design session is the source tile. Save it as `public/battlepoint-source.jpg`. (User to drop into `public/` if not already there; subsequent assets composite over it.)

- [ ] **Step 2: Dispatch four parallel visual subagents**

Each subagent gets the spec's §6 (Visual deliverables), the source aerial, the brand identity from `lib/site-config.ts`, and produces one deliverable. Use the Agent tool with `subagent_type: general-purpose` for each. Prompts are written into `docs/superpowers/visual-prompts.md` regardless of whether the subagent has direct image-gen access, so David can regenerate any asset via Midjourney / Flux / Sora later.

- **Subagent A — Architectural viz artist:** produce hero composite (`public/hero-aerial.jpg`) AND a 1200×630 social-share crop (`public/og-card.jpg`). Brief for hero: aerial photographic composite, soccer fields and ballfields replaced by a 412,000 sq ft single-story hyperscale data center with white roof, mechanical penthouse, perimeter security fencing, dual substation hugging the south tree line. Surrounding forest, Maisy Beach, and Venice neighborhood untouched and identifiable. Brief for `og-card.jpg`: same composite, cropped to 1200×630, with a dark gradient overlay along the lower third and the title *"Olympic Compute Group — Battle Point Campus"* baked in (so the card reads punchy in iMessage / Slack previews even without surrounding metadata).
- **Subagent B — Site plan designer:** produce `public/site-plan.svg`. Brief: top-down architectural diagram, three colored phases, parking grid, cooling annex, substation, fence line, "Battle Point Campus — Master Plan, Olympic Compute Group" title block.
- **Subagent C — Interior render artist:** produce `public/interior-render.jpg`. Brief: warehouse-scale server hall, vanishing-point aisles of black racks, blue-tinged downlight, slight haze, one human in PPE for scale.
- **Subagent D — Brand designer:** produce `public/ocg-logo.svg` and `public/favicon.ico`. Brief: refine the stylized mountain mark from `components/logo.tsx` into a proper logomark; deliver SVG + favicon.

- [ ] **Step 3: Drop returned assets into `public/`**

If a subagent could not directly produce the image, it returns the detailed prompt and a placeholder URL (e.g., a 1600×900 stone-tone block). Drop placeholders so the layout can be checked end-to-end; swap real renders in later without code changes (filenames are stable).

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: visual assets (hero, site plan, interior, logo)"
```

---

## Phase 4 — Copy (parallel dispatch)

### Task 12: Writing team dispatch

**Files:** Create `docs/superpowers/copy-draft.md` (single document holding every section's final copy)

- [ ] **Step 1: Dispatch five parallel writing subagents**

Each subagent gets the spec, the section list from §5, and a clear assignment. They write into `docs/superpowers/copy-draft.md` under a section heading per homepage section. Sub-skill `superpowers:dispatching-parallel-agents` may be used to coordinate.

- **Subagent W1 — Real hyperscaler marketing copywriter:** drafts the *first pass* of every section in genuine corporate voice. References real public pages (Microsoft datacenters.microsoft.com, Meta atmeta.com datacenters, Google google.com/about/datacenters) for tone. This pass is the spine.
- **Subagent W2 — Satire author (Onion calibration):** edits W1's draft, raising laugh density without breaking the corporate veneer. Targets the spec's flagged grenade: Eagle Harbor seawater cooling.
- **Subagent W3 — Local Bainbridge insider:** edits for local authenticity — references to Bloedel, BIMA, the ferry, Wing Point, the deer problem, Winslow. Flags anything that would read as outsider.
- **Subagent W4 — NYT-bestseller editor:** line-level polish on rhythm and punch.
- **Subagent W5 — Influencer / virality strategist:** designs the social-share hooks (page `<title>`, OG card text, FAQ phrasings most likely to get screenshotted).

The deliverable is a merged copy file with: final hero headline + sub + CTA; three "Why Bainbridge?" tiles (~25 words each); site overview paragraph + stat strip values; sustainability paragraph (3 short paragraphs); community partnership paragraph + named programs; jobs & economy stat strip + paragraph; timeline paragraph; 6–8 FAQ Q/A pairs; press release body (300–400 words AP wire style); footer line.

- [ ] **Step 2: Commit**

```bash
git add docs/superpowers/copy-draft.md && git commit -m "content: merged copy draft from writing team"
```

### Task 13: Wire copy into homepage sections

**Files:** All 8 section components in `components/sections/`, plus `app/sustainability/page.tsx`, `app/community-partnership/page.tsx`, `app/press/page.tsx`.

- [ ] **Step 1: Update each section component**

Replace the placeholder body in each section with the final copy from `docs/superpowers/copy-draft.md`. For each section, use this pattern (example: `hero.tsx`):

```tsx
// components/sections/hero.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site-config';

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <Image
        src="/hero-aerial.jpg"
        alt={`Aerial view of the proposed ${site.campusName} on ${site.location}`}
        width={1920}
        height={1080}
        priority
        className="h-[60vh] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-16 text-white">
        <h1 className="font-display text-5xl font-semibold leading-tight md:text-6xl">
          {site.tagline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-stone-100">
          Now under environmental review — the {site.campusName}, {site.location}.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="#community-partnership">Read our community brief</Link>
        </Button>
      </div>
    </section>
  );
}
```

Repeat for `why-bainbridge.tsx`, `site-overview.tsx` (with `<Image src="/site-plan.svg" />`), `sustainability.tsx`, `community-partnership.tsx`, `jobs-economy.tsx` (use `StatStrip`), `timeline.tsx`, `faq.tsx` (shadcn `Accordion`).

- [ ] **Step 2: Build the FAQ with shadcn `Accordion`**

```tsx
// components/sections/faq.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
  // 6-8 Q/A pairs from copy-draft.md
] as const;

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-stone-100 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl font-semibold">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-8">
          {items.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update subpages with their long-form copy**

`/sustainability`, `/community-partnership`, and `/press` each get the long-form copy from `copy-draft.md`. The `/press` page links to a `public/press-kit.pdf` (placeholder PDF is fine for v1).

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "content: wire final copy into all sections + subpages"
```

---

## Phase 5 — Test gate

### Task 14: Install Playwright

**Files:**
- Create: `playwright.config.ts`, `tests/e2e/full-journey.spec.ts`
- Modify: `package.json` (test script)

- [ ] **Step 1: Install**

```bash
cd ~/projects/olympic-compute && npm install --save-dev @playwright/test && npx playwright install chromium
```

- [ ] **Step 2: Write `playwright.config.ts`**

```ts
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  reporter: 'line',
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
```

- [ ] **Step 3: Add `test:e2e` script to `package.json`**

```json
"scripts": {
  "test:e2e": "playwright test"
}
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "chore: playwright installed and configured"
```

### Task 15: Write the full-journey E2E spec

**Files:** Create `tests/e2e/full-journey.spec.ts`

- [ ] **Step 1: Write the spec**

```ts
// tests/e2e/full-journey.spec.ts
import { test, expect } from '@playwright/test';

test('full anonymous-visitor journey', async ({ page }) => {
  // Home loads, hero present
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    /Pacific Northwest's AI future/i,
  );

  // All nav links work
  for (const link of ['Sustainability', 'Community', 'Press']) {
    await page.getByRole('link', { name: link }).first().click();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await page.goBack();
  }

  // Each homepage section is reachable by id
  for (const id of [
    'hero',
    'why-bainbridge',
    'site-overview',
    'sustainability',
    'community-partnership',
    'jobs-economy',
    'timeline',
    'faq',
  ]) {
    await expect(page.locator(`#${id}`)).toBeVisible();
  }

  // FAQ accordion opens at least one item
  const firstTrigger = page.locator('[data-state]').filter({ hasText: /\?/ }).first();
  await firstTrigger.click();

  // Press page has the press-kit link
  await page.goto('/press');
  const pressKit = page.getByRole('link', { name: /press kit|fact sheet/i });
  await expect(pressKit).toBeVisible();

  // Contact email appears in the footer
  await page.goto('/');
  await expect(page.locator('footer')).toContainText('community.liaison.ocg@gmail.com');
});
```

- [ ] **Step 2: Run locally**

```bash
cd ~/projects/olympic-compute && (npm run dev &) && sleep 6 && npm run test:e2e
kill %1 2>/dev/null || true
```

Expected: 1 passed.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "test: full-journey playwright E2E"
```

### Task 16: Type-check + production build

**Files:** none

- [ ] **Step 1: Type-check**

```bash
cd ~/projects/olympic-compute && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 2: Production build**

```bash
npm run build
```

Expected: build succeeds, four routes prerendered (`/`, `/sustainability`, `/community-partnership`, `/press`).

- [ ] **Step 3: If errors surface, fix and re-run both commands**

Do not skip — Constitution §1 forbids shipping unverified UI.

### Task 17: Production deploy

- [ ] **Step 1: Deploy**

```bash
cd ~/projects/olympic-compute && npx --yes vercel deploy --prod --yes
```

- [ ] **Step 2: Run Playwright against the deployed URL**

```bash
PLAYWRIGHT_BASE_URL=https://olympic-compute.vercel.app npx playwright test --reporter=line
```

Expected: 1 passed.

- [ ] **Step 3: If the deployed test fails, do not declare done — diagnose and redeploy**

---

## Phase 6 — Review panel + ship

### Task 18: Three-persona review panel

**Files:** Create `docs/superpowers/review-panel.md`

- [ ] **Step 1: Dispatch three parallel review subagents**

Each is given the production URL `https://olympic-compute.vercel.app` and the persona briefs from spec §7. Each writes a short report (under 300 words) into their own section of `docs/superpowers/review-panel.md`, plus a numeric score.

- **Reviewer R1 — "Bainbridge local who knows it's a prank":** scores funniness 1–10. Calls out the funniest lines and any that fall flat. ≥ 8/10 required to ship.
- **Reviewer R2 — "Bainbridge local who doesn't know it's a prank":** reads the site cold, reports first-impression reaction, scores plausibility 1–10. ≥ 7/10 required to ship.
- **Reviewer R3 — "Senior cloud-infrastructure marketer":** scores corporate authenticity 1–10. Flags any tells that would expose the satire to industry eyes. ≥ 7/10 required to ship.

- [ ] **Step 2: If any score falls below threshold, iterate**

Pick the highest-leverage fixes from the reviewer's notes, apply them to copy or visuals, redeploy, re-run that reviewer only. Loop until all three thresholds clear.

- [ ] **Step 3: Commit the final review report**

```bash
git add docs/superpowers/review-panel.md && git commit -m "review: 3-persona panel report"
```

### Task 19: GitHub remote + push

- [ ] **Step 1: Create the remote (private repo)**

```bash
cd ~/projects/olympic-compute && gh repo create olympic-compute --private --source=. --remote=origin --push
```

- [ ] **Step 2: Confirm push**

```bash
git remote -v
git log --oneline | head -5
```

### Task 20: Update kanban + final report

- [ ] **Step 1: Add a kanban row**

```bash
~/.claude/memory/bin/kanban-write.sh add "Bainbridge AI data center prank" "Prd Live" "Olympic Compute Group fake hyperscaler microsite live at https://olympic-compute.vercel.app; 3-persona panel cleared thresholds (funniness, plausibility, corporate authenticity); repo at github.com/<your-handle>/olympic-compute"
```

- [ ] **Step 2: Final report to David**

Plain prose report covering:
- Production URL
- 3-persona panel scores
- Repo URL
- What was verified by Playwright on the deployed URL
- Anything found and fixed during the loop

---

## Self-review

**Spec coverage:**
- ✅ Goal + non-goals — addressed by Tasks 1–17 (build) + 18 (panel)
- ✅ Creative framing (poker face, corporate voice) — Task 12 writing brief
- ✅ Tech stack (Next.js 16, Tailwind, shadcn, vercel.ts) — Tasks 1–3
- ✅ IA (4 routes) — Tasks 8–9
- ✅ Page content plan — Tasks 12–13
- ✅ Visual deliverables — Task 11
- ✅ Research/creative teams — Tasks 11, 12, 18
- ✅ Acceptance criteria (type-check, build, Playwright on deployed URL, 3-persona panel) — Tasks 16–18
- ✅ Legal/ethical posture (no real persons, no impersonation) — baked into writing brief in Task 12
- ✅ Out-of-scope items (no custom domain, no analytics, no CMS) — respected by Tasks 1–10

**Placeholder scan:** none — all code blocks are concrete, every command has an expected outcome, no "TBD."

**Type consistency:** `site` config keys are referenced consistently across Tasks 4 → 7 → 13. Section ids match between Task 8 (creation), Task 4 (`site.nav` hash anchors), and Task 15 (Playwright assertions).
