import { DOMParser, Element } from 'jsr:@b-fuze/deno-dom';

if (!Deno.env.get('QUARTO_PROJECT_RENDER_ALL')) {
  Deno.exit();
}

const html = Deno.readTextFileSync('./public/index.html');
console.log('HTML file read successfully.');

const doc = new DOMParser().parseFromString(html, 'text/html');
console.log('HTML parsed successfully.');

doc.querySelectorAll('img').forEach((img: Element) => {
  console.log('Processing img element:', img.getAttribute('src'));
  // change the src attribute to use webp format
  const src = img.getAttribute('src');
  if (src) {
    const webpSrc = src.replace(/\.[^.]+$/, '.webp');
    img.setAttribute('src', webpSrc);
    console.log(`Updated src to: ${webpSrc}`);
  }
  
  img.setAttribute('loading', 'lazy');
});

console.log('Saving modified HTML...');
Deno.writeTextFileSync('./public/index.html', doc.documentElement!.outerHTML);
