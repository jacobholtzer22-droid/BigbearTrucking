# Image Manifest

Last updated: 2026-08-04

## Status

`/public/images/raw/` exists but is empty. No images have been provided.

The old site at bigbeartruckrepair.com is live and has a logo (`Big-Bear-Truck-Repair-yellow-logo.png`, 948×792px per old site markup). The Wayback Machine would not serve the image file directly. The logo has not been obtained.

Yelp listing has 15 photos (reported by subagent: truck repair work, brake rotors, drive shaft, muffler, electrical, coolant leak, quarter fenders, power steering, trailer work). These have not been downloaded and are Yelp's property — not usable on the site.

## Fallback Design Direction (active)

Designing without photos. The site will use:

1. **Color and typography** as the primary visual language (no stock photos)
2. **Icon-based service cards** (lucide-react icons)
3. **Text-based wordmark** until the real logo is provided
4. **Solid color hero** with strong typography instead of a hero image
5. No placeholder boxes or "coming soon" sections — absent content simply does not render

When photos arrive, drop them into `/public/images/raw/` and update this manifest with per-image placement. Priority placements:

- Hero background: a dramatic shop-at-night or truck-being-repaired shot
- About section: Eduardo/team at work (only if owner confirms)
- Service pages: relevant action shots per service
- Contact page: shop exterior or branded truck (only if address is published)

## Logo Notes

The old site used a yellow/gold bear logo on a dark background. The dominant color (#F0B429 or similar amber/gold) informed the Safety Amber accent in the palette. A text wordmark using Barlow Condensed will serve until the real logo file arrives.
