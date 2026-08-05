import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const RAW_DIR = 'public/images/raw';
const OUT_DIR = 'public/images';

const IMAGES = [
  // Hero — landscape crop from portrait gbp-15 (4284×5712 → extract 4284×2400 → resize)
  {
    src: 'gbp-15.jpg',
    out: 'hero-trucks-warehouse',
    widths: [1920, 1280, 768],
    crop: { left: 0, top: 600, width: 4284, height: 2400 },
  },
  // Old hero — keep 768w for roadside card use
  { src: 'gbp-02.jpg', out: 'hero-roadside-snow', widths: [768] },
  // Service headers — 2 sizes
  { src: 'gbp-17.jpg', out: 'roadside-highway-winter', widths: [1280, 768] },
  { src: 'gbp-06.jpg', out: 'axle-brake-repair', widths: [1280, 768] },
  { src: 'gbp-03.jpg', out: 'engine-bay-diagnostics', widths: [1280, 768] },
  { src: 'gbp-13.jpg', out: 'fleet-yard-maintenance', widths: [1280, 768] },
  // About page
  { src: 'gbp-04.jpg', out: 'mechanic-grinding-repair', widths: [1280, 768] },
  // Service card images — 768w
  { src: 'gbp-12.jpg', out: 'card-truck-repair', widths: [768] },
  { src: 'gbp-10.jpg', out: 'card-diagnostics', widths: [768] },
  { src: 'gbp-01.jpg', out: 'card-fleet', widths: [768] },
  // Homepage strip — 640w
  { src: 'gbp-07.jpg', out: 'engine-detail-blue-hose', widths: [640] },
  { src: 'gbp-16.jpg', out: 'red-kenworth-snow', widths: [640] },
  { src: 'gbp-05.jpg', out: 'roadside-car-carrier', widths: [640] },
  // Legacy strip image kept for backwards compat (brake-rotor-hub-640w still referenced)
  { src: 'gbp-12.jpg', out: 'brake-rotor-hub', widths: [640] },
];

async function process() {
  for (const img of IMAGES) {
    const inputPath = join(RAW_DIR, img.src);
    if (!existsSync(inputPath)) {
      console.error(`MISSING: ${inputPath}`);
      continue;
    }

    for (const w of img.widths) {
      const outName = `${img.out}-${w}w.webp`;
      const outPath = join(OUT_DIR, outName);

      let pipeline = sharp(inputPath);

      if (img.crop) {
        pipeline = pipeline.extract(img.crop);
      }

      await pipeline
        .resize(w, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outPath);

      const meta = await sharp(outPath).metadata();
      console.log(`  ${outName}: ${meta.width}x${meta.height} (${Math.round(meta.size / 1024)}KB)`);
    }
  }
  console.log('\nDone.');
}

process().catch(console.error);
