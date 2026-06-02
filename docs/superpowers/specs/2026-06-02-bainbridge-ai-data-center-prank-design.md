# Olympic Compute Group — Bainbridge AI Data Center Prank Site

**Status:** Approved 2026-06-02
**Owner:** David
**Brand:** Olympic Compute Group ("OCG")
**Production URL:** `https://olympic-compute.vercel.app`

## 1. Goal

Ship a single-day satire microsite that reads as a legitimate hyperscaler announcement for a fictional AI data center campus on Battle Point Park, Bainbridge Island, WA. Target audience: anal local Bainbridge residents who will react sincerely. The prank lands when locals forward the URL to City Hall in panic.

### Non-goals

- Not a clone of *The Bainbridge Review* — locals know its writers and would spot the impersonation. Hyperscaler microsites are unfamiliar territory, so the site hides in plain sight.
- Not impersonating the City of Bainbridge Island or any real elected official.
- Not naming any real person.
- Not a real news article. Voice is corporate marketing, not journalism.
- No financial transactions, no email collection beyond a forwarding-only "Community Liaison" inbox we own.

## 2. Creative framing

**Reference inspiration:** the 2022 *Bainbridge Review* article ["BI entry: From eyesore to eye-popping"](https://www.bainbridgereview.com/2022/10/25/bi-entry-from-eyesore-to-eye-popping/) for the breathless civic-boosterism tone. We invert it: this is the *company* talking, not the paper.

**Voice:** late-stage hyperscaler PR — calm, optimistic, packed with "community partnership," "thermal optimization," "Living Building Challenge–aligned." The satire is the gap between corporate placidity and the absurdity of paving Battle Point Park.

**Reveal posture:** pure poker face. No on-page disclaimer.

## 3. Tech stack

- **Framework:** Next.js 16 App Router
- **Styling:** Tailwind + shadcn/ui (drives the "we are a serious enterprise" aesthetic)
- **Runtime:** Vercel default (Fluid Compute, Node 24 LTS) — no functions needed since the site is static; SSG by default
- **Assets:** all renders + photos in `/public`. No CMS.
- **Domain:** `olympic-compute.vercel.app` (Vercel personal account, free). Custom domain not in scope — stays under the $15/yr ceiling unless David expands scope.
- **Config:** `vercel.ts` (current Vercel-recommended config)
- **Repo:** `~/projects/olympic-compute`

## 4. Information architecture

| Route | Purpose |
|---|---|
| `/` | One-pager: hero, why Bainbridge, site overview, sustainability, community partnership, jobs, FAQ, timeline, footer |
| `/sustainability` | Standalone page expanding the closed-loop Eagle Harbor seawater cooling story |
| `/community-partnership` | "Battle Point Forest Steward Endowment," soccer-field-replacement program, scholarship fund |
| `/press` | Fake AP-wire-style press release announcing the site selection; downloadable fact sheet PDF + logo |

The multi-route structure exists so the company feels structurally real — even visitors who never click past `/` register the breadcrumb of a fully-built corporate site.

## 5. Page content plan (`/`)

1. **Hero** — full-bleed aerial composite of Battle Point Park with the rendered facility planted across the soccer fields and ballfields. Headline: *"A new home for the Pacific Northwest's AI future."* Sub: *"Now under environmental review — the Battle Point Campus, Bainbridge Island, WA."* Primary CTA: *"Read our community brief"* → scrolls to the on-page **§ Community partnership** section (the standalone `/community-partnership` route is the longer expansion linked from the nav).
2. **Why Bainbridge?** — three-up: *Fiber-rich Puget Sound corridor*, *Abundant low-carbon hydropower from BPA*, *A community that values long-horizon thinking*.
3. **Site overview** — site plan overlay diagram (phase 1 / phase 2 / cooling annex / substation), stat strip: *"~412,000 sq ft on a 72-acre campus"*, *"Phase 1 operational Q3 2027"*.
4. **Sustainability** — *closed-loop seawater cooling drawn from Eagle Harbor*, *100% renewable from day one*, *"Living Building Challenge–aligned design"*. (The Eagle Harbor cooling line is the central satire grenade — locals know Eagle Harbor's Superfund history.)
5. **Community partnership** — *$2.4M annual community investment*, named programs: *Battle Point Forest Steward Endowment*, *Sound-to-Server STEM Scholarship*, *Replacement Soccer Field Program (location to be confirmed in partnership with Bainbridge Parks)*.
6. **Jobs & economy** — *47 family-wage operations roles*, *800+ construction jobs across Phases 1–2*, *estimated $14M annual local procurement*.
7. **Timeline & engagement** — *Public comment period: June 15 – August 30, 2026* (real-sounding dates). Fake-but-functional contact: a Gmail alias David owns, displayed as e.g. `community.liaison.ocg@gmail.com` (Vercel Email Routing is not available on `*.vercel.app` subdomains, so a custom-domain mailbox is out of scope per §3). Replies land in a mailbox David can monitor.
8. **FAQ** — pre-empts the obvious objections in soothing corporate prose: *Will the park be replaced? Yes — see Community Partnership. What about water use? See Sustainability. Will this increase ferry traffic? Net-neutral after Phase 1 shuttle program.*
9. **Footer** — OCG logo, fake HQ address (e.g. Seattle, WA), nav, "© 2026 Olympic Compute Group, LLC." No disclaimer.

## 6. Visual deliverables (generated by the visual team)

| Asset | Treatment |
|---|---|
| Hero aerial composite | David's Battle Point satellite tile + rendered hyperscale building footprint covering soccer fields and the baseball diamond, perimeter fencing, substation hugging tree line |
| Site plan overlay diagram | Top-down architectural diagram with phases color-coded, parking, cooling annex, fence line |
| Interior server hall render | Endless server aisles, optional "engineer with laptop" stock shot |
| Brand logo + favicon | "Olympic Compute Group" wordmark + abstract mark (suggested direction: stylized mountain-peak-as-CPU). Light + dark variants. |
| Optional: ribbon-cutting render | Hard-hatted execs at a podium in front of the campus rendering. Defer unless time permits. |

**Generation pipeline:** image-gen models (Flux, Nano Banana, or Midjourney via web) prompted by the visual team. Aerial compositing done in code where possible (CSS layering of rendered building over the satellite tile), or hand-composited and dropped in.

## 7. Research / creative teams (parallel agents)

### Writing teams
- **Satire authors persona** — Onion / Twain calibration; reviews drafts for laugh density
- **NYT-bestseller persona** — line-level polish, punchy sub-heads, rhythm
- **Local Bainbridge insider persona** — seeds real island references (Bloedel, BIMA, deer, ferry, Wing Point, Eagle Harbor Superfund history, Winslow) so it reads authentically local
- **Influencer persona** — designs shareability hooks for BI Moms FB group, Nextdoor, Insta forwards
- **Real hyperscaler marketing copywriter persona** — provides genuine corporate bullshit-bingo so the prose is indistinguishable from MSFT / Meta / Google data center pages

### Visual teams
- **Architectural visualization artist** — prompts image-gen models for hero composite and interior render
- **Aerial photo compositor** — overlays rendered facility onto David's Battle Point satellite tile so trees, shoreline, Maisy Beach all match
- **Brand / logo designer** — Olympic Compute Group wordmark + favicon

### Review panel (post-assembly QA)
- **"Local who knows it's a prank"** — judges whether dad-group-chat will laugh
- **"Local who doesn't know"** — reads it cold, reports whether they'd forward it to the city council in panic (success criterion)
- **"Real DC marketer"** — judges whether a senior cloud-infrastructure exec would buy the company as legit on a 10-second skim

## 8. Acceptance criteria (testing gate)

Per Constitution §1 — Code with UI:
- Type-check passes
- Tests pass (component-level smoke tests for each route)
- Playwright E2E walks the full user journey against the deployed Vercel URL: hero loads → scroll through sections → click each nav link → land on each subpage → press release downloads
- Three-persona review panel completes and scores:
  - "Doesn't know" persona must rate ≥ 7/10 on plausibility
  - "Real DC marketer" persona must rate ≥ 7/10 on corporate authenticity
  - "Knows it's a prank" persona must rate ≥ 8/10 on funniness
- Report: "tests passed, browser confirmed X, three personas scored Y/Z/W."

## 9. Legal & ethical posture

- No real persons named or quoted
- No real company logos used; comparisons (e.g. to Microsoft Quincy campus) are fair-use textual references only
- Faux contact email forwards to a David-owned mailbox so panicked replies are received, not lost
- If a takedown request arrives from any party, David decides whether to comply; the site is easily un-deployable from Vercel
- The site contains no malware, no email harvesting, no payment surface

## 10. Out of scope (YAGNI)

- Custom domain
- Analytics beyond Vercel default
- Newsletter signup
- Multi-language
- CMS / draft preview workflow
- Any backend logic — all static

## 11. Open questions

None at design approval. All gating decisions answered: location (Battle Point), framing (corporate microsite), brand name (Olympic Compute Group), domain (Vercel subdomain), legal posture (no disclaimer, no real-person impersonation).
