# `/public` — Asset inventory

Status of every named asset referenced by the Olympic Compute Group satire microsite.
The visual brief, image-gen prompts, and persona rationales live in
[`docs/superpowers/visual-prompts.md`](../docs/superpowers/visual-prompts.md).

| File | Status | Source | Notes |
|---|---|---|---|
| `hero-aerial.jpg` (1920×1080) | **Awaiting human-generated replacement** | Persona A — Asset A1 prompt in `visual-prompts.md` | Lead hero image. Highest-leverage asset on the site. Generate with Midjourney v6/v7 or Flux 1.1 Pro. |
| `og-card.jpg` (1200×630) | **Awaiting human-generated replacement** | Persona A — Asset A2 prompt in `visual-prompts.md` | Social-share card. Crop of hero composite with title text baked in. Replaces the dynamic card from `src/app/opengraph-image.tsx` per plan Task 7.5 Step 6. |
| `og-card-fallback.svg` (1200×630) | **Placeholder shipped** (hand-authored) | Persona A — included in `visual-prompts.md` | Backup share card. The dynamic `src/app/opengraph-image.tsx` route is the primary; this SVG is a static safety net. |
| `site-plan.svg` | **Placeholder shipped** (hand-authored, production-quality) | Persona B — included in `visual-prompts.md` | Top-down master plan. Three phases, parking, substation, cooling annex, perimeter fence, title block. Already shippable — swap only if a human-rendered version is meaningfully better. |
| `interior-render.jpg` (1920×1080) | **Awaiting human-generated replacement** | Persona C — Asset C1 prompt in `visual-prompts.md` | Server hall interior. Lower-stakes than the hero — a clean stock data-center photo would also work. |
| `ocg-logo.svg` | **Final shipped** (hand-authored) | Persona D — included in `visual-prompts.md` | Refined logomark (4-peak Olympic mountain silhouette + embedded CPU-die motif + wordmark). Evergreen `#2a4a3a`. |
| `favicon.ico` | **Awaiting export** | Persona D — instructions in `visual-prompts.md` | Multi-size 32×32 + 16×16. Export the mark from `ocg-logo.svg` at 1024×1024 then run through `realfavicongenerator.net` or `npx png-to-ico`. |
| `battlepoint-source.jpg` | **Awaiting user drop-in** | David's Battle Point aerial screenshot from the design session | Input asset for the hero composite. |
| `press-kit.pdf` | **Awaiting Phase 4 (copy team)** | Plan Task 13 Step 3 | Downloadable fact sheet linked from `/press`. |
| `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` | Unused (scaffold leftovers) | `create-next-app` defaults | Safe to delete once a section explicitly does not import them. |

## How to replace a placeholder

1. Generate the image with the prompt from `docs/superpowers/visual-prompts.md` (each asset block lists primary + 2 alternates).
2. Save to the exact filename in this table.
3. No code changes needed — every component references these stable filenames.
4. Run `npm run build` to confirm `next/image` accepts the new asset.

## Hand-authored placeholders that are production-ready

- `site-plan.svg` — fully usable on first render. Only replace if a human-rendered master plan deck is strictly better.
- `ocg-logo.svg` — the final logomark. Treat as final unless brand direction changes.
- `og-card-fallback.svg` — backup behind the dynamic `opengraph-image.tsx` route.
