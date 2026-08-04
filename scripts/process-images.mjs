import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const RAW_DIR = 'public/images/raw';
const OUT_DIR = 'public/images';

const IMAGES = [
  // Hero — 3 sizes
  { src: 'gbp-02.jpg', out: 'hero-roadside-snow', widths: [1920, 1280, 768] },
  // Service headers — 2 sizes
  { src: 'gbp-17.jpg', out: 'roadside-highway-winter', widths: [1280, 768] },
  { src: 'gbp-06.jpg', out: 'axle-brake-repair', widths: [1280, 768] },
  { src: 'gbp-03.jpg', out: 'engine-bay-diagnostics', widths: [1280, 768] },
  { src: 'gbp-13.jpg', out: 'fleet-yard-maintenance', widths: [1280, 768] },
  // About page
  { src: 'gbp-04.jpg', out: 'mechanic-grinding-repair', widths: [1280, 768] },
  // Homepage strip — 1 size
  { src: 'gbp-07.jpg', out: 'engine-detail-blue-hose', widths: [640] },
  { src: 'gbp-12.jpg', out: 'brake-rotor-hub', widths: [640] },
  { src: 'gbp-05.jpg', out: 'roadside-car-carrier', widths: [640] },
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

      await sharp(inputPath)
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
