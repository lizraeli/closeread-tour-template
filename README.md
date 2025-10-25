# Closeread Tour Template

A [Closeread](https://github.com/qmd-lab/closeread) sample project for creating scrollytelling tours.

The repo includes a short Midtown Manhattan example with public‑domain images.

**[Link to Live Demo](https://closeread-tour-template.vercel.app/)**

## Prerequisites

Before getting started, you'll need:

* [Quarto](https://quarto.org/docs/get-started/) - The publishing system that powers the tour
* [Closeread extension](https://closeread.dev/) - The scrollytelling extension for Quarto
* A text editor (VS Code, RStudio, or similar)
* Basic familiarity with Markdown

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

## Deployment

After running `quarto render`, deploy the `public/` folder to your preferred hosting service:

## Project Structure

* `index.qmd` — main content (the sample tour). Replace text and image paths.
* `styles.css` — custom styles (colors, fonts, motion).
* `images/` — place your images here.
* `convert_images.ts` — automatically converts images to WebP format for smaller file size when loading.
* `lazy_load_images.ts` — adds lazy loading to images in the generated HTML for faster page load.

## Customize

1. Rename the tour: update the title/author/front‑matter at the top of `index.qmd`.
2. Add images in `images/` and update the paths in `index.qmd`. Add a brief source/rights note under each image.
3. Edit places section: change headings, captions, and text.
4. Style (optional): update `styles.css` for colors, fonts and motion.

## Mobile Image Classes

The template includes CSS classes that can be used to enhance the mobile experience:

### `.mobile-pan`

Adds smooth horizontal panning animation for wide images on mobile devices. When an image with this class becomes active (focused) during scrolling, it automatically pans from left to right over 20 seconds, helping viewers explore the full width of landscape photos.

**Usage:**

```markdown
:::{#cr-wide-street .mobile-pan}
![](images/wide_street_view.jpg)
:::
```

**Best for:** Wide landscape photos, panoramic views, street scenes, or any image where horizontal movement adds visual interest.

### `.mobile-scale-down`

Displays images at their natural aspect ratio without the default 2x scaling applied on mobile. This prevents cropping and is ideal for portrait-oriented photos or images that should be viewed in full.

**Usage:**

```markdown
:::{#cr-portrait-building .mobile-scale-down}
![](images/tall_building.jpg)
:::
```

**Best for:** Portrait-oriented photos, architectural details, phone photos, or any image where you want to show the complete composition without scaling.

### Desktop vs Mobile Behavior

* **Desktop:** Both classes have no effect; images display normally
* **Mobile:**
  * Default behavior scales images 2x and crops to 60dvh height
  * `.mobile-pan` adds panning animation to the scaled image
  * `.mobile-scale-down` overrides scaling to show full image

## Image Sourcing

For easy attribution and broad reuse, use public‑domain sources or Creative Commons 0 (CC0) licensed images. Here are some good places to start:

* Library of Congress
* NYPL Digital Collections (many items CC0/PD)
* Wikimedia Commons

Include a short caption with source + rights (e.g., “Library of Congress — Public Domain”). If you use Creative Commons images (e.g., CC‑BY), include the author and license link.

## License

Template code and docs: **MIT**.
Images: public domain.
