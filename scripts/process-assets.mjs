import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const rawDir = path.join(root, "tmp", "raw-assets");
const outDir = path.join(root, "public", "images");
fs.mkdirSync(outDir, { recursive: true });

const jobs = [
  {
    src: "d542bc_f87fe6a5343f46f6b657b64a3d60adbb~mv2.png",
    dest: "logo-white.png",
    kind: "logo",
  },
  {
    src: "d542bc_87abe22db9da444a8b7a8fb65381ba64~mv2.jpeg",
    dest: "bathroom-vanity.jpg",
    kind: "photo",
  },
  {
    src: "d542bc_9a49e6123ad0469c92b017dbe3784ba9~mv2.jpeg",
    dest: "kitchen-counters.jpg",
    kind: "photo",
  },
  {
    src: "d542bc_8e18357b106549bfbebedb6f8d06b0d2~mv2.png",
    dest: "outdoor-patio.jpg",
    kind: "photo",
  },
  {
    src: "d542bc_b5f32b14d5f24f50b7e853fa212889cf~mv2.png",
    dest: "bedroom-custom.jpg",
    kind: "photo",
  },
];

async function knockOutBlack(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r < 28 && g < 28 && b < 28) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  return info;
}

async function writePhoto(inputPath, outputPath) {
  const image = sharp(inputPath).rotate();
  const meta = await image.metadata();
  const resized = image.resize({
    width: 2400,
    height: 2400,
    fit: "inside",
    withoutEnlargement: true,
  });
  await resized.jpeg({ quality: 82, mozjpeg: true }).toFile(outputPath);
  const outMeta = await sharp(outputPath).metadata();
  return { src: meta, out: outMeta };
}

const inventory = [];

for (const job of jobs) {
  const inputPath = path.join(rawDir, job.src);
  const outputPath = path.join(outDir, job.dest);
  if (job.kind === "logo") {
    const info = await knockOutBlack(inputPath, outputPath);
    inventory.push({
      dest: job.dest,
      width: info.width,
      height: info.height,
      bytes: fs.statSync(outputPath).size,
    });
  } else {
    const { src, out } = await writePhoto(inputPath, outputPath);
    inventory.push({
      dest: job.dest,
      sourceWidth: src.width,
      sourceHeight: src.height,
      width: out.width,
      height: out.height,
      bytes: fs.statSync(outputPath).size,
    });
  }
  console.log(job.dest, inventory.at(-1));
}

fs.writeFileSync(
  path.join(root, "tmp", "processed-dimensions.json"),
  JSON.stringify(inventory, null, 2)
);
