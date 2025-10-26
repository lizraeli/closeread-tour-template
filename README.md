# Closeread Tour Template

A [Closeread](https://github.com/qmd-lab/closeread) sample project for creating scrollytelling tours.

The repo includes a short Midtown Manhattan.

**[Link to Live Demo](https://closeread-tour-template.vercel.app/)**

## Prerequisites

* [Quarto](https://quarto.org/docs/get-started/) - The publishing system that powers the tour
* [Closeread extension](https://closeread.dev/) - The scrollytelling extension for Quarto

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

The built site will be in `public/`.

## Deployment

After running `quarto render`, deploy the `public/` folder to a static hosting service.

## Project Structure

* `index.qmd` — main content (the sample tour). Replace text and image paths.
* `styles.css` — custom styles (colors, fonts, motion).
* `images/` — place your images here.
* `convert_images.ts` — automatically converts images to WebP format for smaller file size when loading.
* `lazy_load_images.ts` — adds lazy loading to images in the generated HTML for faster page load.

### Desktop vs Mobile Behavior

* **Desktop:** Both classes have no effect; images display normally
* **Mobile:**
  * Default behavior scales images 2x and crops to 60dvh height
  * `.mobile-pan` adds panning animation to the scaled image
  * `.mobile-scale-down` overrides scaling to show full image

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

### `.mobile-scale-down`

Displays images at their natural aspect ratio without the default 2x scaling applied on mobile. This prevents cropping and is ideal for portrait-oriented photos or images that should be viewed in full.

**Usage:**

```markdown
:::{#cr-portrait-building .mobile-scale-down}
![](images/tall_building.jpg)
:::
```

## Images

Here are some good sources for public domain and Creative Commons images:

* Library of Congress
* NYPL Digital Collections (many items CC0/PD)
* Wikimedia Commons

Include a short caption with source and rights (e.g., “Library of Congress — Public Domain”). If using Creative Commons images, include the author and license link.

## License

Template code and docs: **MIT**.
Images: public domain.
