# Closeread Tour Template

A Quarto Closeread sample project for creating interactive tours of neighborhoods, landmarks, campuses, or any place/theme. The repo include with a very short Midtown Manhattan sample and public‑domain image placeholders so you can swap in your own content fast.

## Quick Start

```bash
# 1) Clone
git clone git@github.com:lizraeli/closeread-tour-template.git
cd closeread-tour-template

# 2) Install Quarto and Closeread if not already available
# See: https://quarto.org/docs/get-started/
# See: https://closeread.dev/

# 3) Preview locally
quarto preview
# or render a static site
quarto render
```

The built site will be in `public/`. Deploy this folder to any static host (e.g., GitHub Pages, Netlify, Vercel).

---

## Project Structure

* `index.qmd` — main content (the sample tour). Replace text and image paths.
* `styles.css` — optional custom styles (animations, typography, etc.).
* `images/` — image assets; this template uses PD placeholders.
* `convert_images.ts`, `lazy_load_images.ts` — image optimization helpers (WebP conversion, lazy‑loading tweaks)

> Tip: If you keep optimization scripts, document how to run them (e.g., with **Deno** + **ImageMagick**). They’re not required for Closeread itself.

---

## Customize

1. Rename the tour: update the title/author/front‑matter at the top of `index.qmd`.
2. Swap images: add your files in `images/` and update the paths in `index.qmd`.
3. Edit places section: change headings, captions, and text.
4. Credits: keep a brief source/rights note under each image.
5. Style (optional): update `styles.css` for colors, fonts and motion.

---

## Image Sourcing (Public Domain Friendly)

For easy attribution and broad reuse, prefer public‑domain sources or Creative Commons 0 (CC0) licensed images. Here are some good places to start:

* Library of Congress
* NYPL Digital Collections (many items CC0/PD)
* Wikimedia Commons

Include a short caption with source + rights (e.g., “Library of Congress — Public Domain”). If you use Creative Commons images (e.g., CC‑BY), include the author and license link.

> The included Midtown sample lists PD candidates as placeholders — replace with your own selections.

## License

Template code and docs: **MIT** (feel free to adapt).
Images: public domain.
