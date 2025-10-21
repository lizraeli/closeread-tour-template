import {
  ImageMagick,
  IMagickImage,
  initialize,
  MagickFormat,
} from 'https://deno.land/x/imagemagick_deno@0.0.31/mod.ts';

await initialize(); // make sure to initialize first!

// convert_images.ts
const walkDir = async (dir: string): Promise<string[]> => {
  const files: string[] = [];
  for await (const entry of Deno.readDir(dir)) {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory) {
      files.push(...(await walkDir(path)));
    } else {
      files.push(path);
    }
  }
  return files;
};

const imageExtensions = ['.png', '.jpg', '.jpeg', '.tiff', '.bmp'];

const isImage = (filename: string): boolean => {
  return imageExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
};

const convertToWebP = async (inputPath: string) => {
  const outputPath = inputPath.replace(/\.[^.]+$/, '.webp');
  const outputData = await Deno.stat(outputPath).catch(() => null);

  if (outputData && outputData.isFile) {
    console.log(`Skipping ${inputPath}, already converted to WebP.`);
    return;
  }

  const data: Uint8Array = await Deno.readFile(inputPath);

  await ImageMagick.read(data, async (img: IMagickImage) => {
    await img.write(MagickFormat.WebP, (data: Uint8Array) =>
      Deno.writeFile(outputPath, data)
    );
    console.log(`Converted ${inputPath} -> ${outputPath}`);
  });
};


const files = await walkDir('./public/images');
for (const file of files) {
  if (isImage(file)) {
    await convertToWebP(file);
  }
}
