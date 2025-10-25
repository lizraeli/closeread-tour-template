# Closeread Tour Template

A [Closeread](https://github.com/qmd-lab/closeread) sample project for creating scrollytelling tours. The repo includes a very short Midtown Manhattan example with public‑domain images.

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
* `styles.css` — custom styles (colors, fonts, motion).
* `images/` - place your images here.
* `convert_images.ts`, `lazy_load_images.ts` — image optimization helpers (WebP conversion, lazy‑loading)

---

## Customize

1. Rename the tour: update the title/author/front‑matter at the top of `index.qmd`.
2. Add images in `images/` and update the paths in `index.qmd`. Add a brief source/rights note under each image.
3. Edit places section: change headings, captions, and text.
4. Style (optional): update `styles.css` for colors, fonts and motion.

---

## Image Sourcing (Public Domain Friendly)

For easy attribution and broad reuse, use public‑domain sources or Creative Commons 0 (CC0) licensed images. Here are some good places to start:

* Library of Congress
* NYPL Digital Collections (many items CC0/PD)
* Wikimedia Commons

Include a short caption with source + rights (e.g., “Library of Congress — Public Domain”). If you use Creative Commons images (e.g., CC‑BY), include the author and license link.

## License

Template code and docs: **MIT**.
Images: public domain.
