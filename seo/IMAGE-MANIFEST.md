# Image Manifest

All images from GBP, verified 2026-08-04. Placement decisions updated 2026-08-04 (photo-polish branch).

## Photo Assessment

| # | Source | Orientation | Pixel Dims | Content Summary | Placement |
|---|---|---|---|---|---|
| 01 | gbp-01.jpg | Portrait | 4284×5712 | White Ford F-650 box truck, striped lot, sunny | Fleet maintenance card |
| 02 | gbp-02.jpg | Portrait | 1645×2193 | Red semi cab on snowy highway shoulder | Roadside assistance card |
| 03 | gbp-03.jpg | Portrait | 4284×5712 | Semi with cab tilted showing engine bay, snow | Diagnostics page header |
| 04 | gbp-04.jpg | Landscape | 4032×3024 | Hand with power tool on engine component | About page work shot |
| 05 | gbp-05.jpg | Portrait | 4284×5712 | Car-carrier trailer, snowy highway shoulder | Homepage strip 3 |
| 06 | gbp-06.jpg | Portrait | 3024×4032 | Axle work, air bag suspension, tools laid out | Truck repair page header |
| 07 | gbp-07.jpg | Portrait | 4284×5712 | Engine bay: power steering, blue hose, DD13 | Homepage strip 1 |
| 08 | gbp-08.jpg | Landscape | 4032×3024 | Underside driveshaft/U-joint, air bags, gravel | Unused |
| 09 | gbp-09.jpg | Landscape | 2193×1645 | Rusty liftgate on box truck rear | Unused |
| 10 | gbp-10.jpg | Portrait | 4284×5712 | Red semi engine, PACCAR, coolant, alternator | Diagnostics card |
| 11 | gbp-11.jpg | Portrait | 3024×4032 | Mud flap bracket on snowy ground, rear wheel | Unused |
| 12 | gbp-12.jpg | Portrait | 4284×5712 | Brake rotor and hub close-up, wheel removed | Truck repair card |
| 13 | gbp-13.jpg | Portrait | 3024×4032 | White truck #75 in yard, creeper, drain pan | Fleet maintenance page header |
| 14 | gbp-14.jpg | Landscape | 5712×4284 | Teal cab, battery box, fuel tank, reefer trailer | Unused |
| 15 | gbp-15.jpg | Portrait | 4284×5712 | Red semi + white box truck near warehouse | Homepage hero (landscape crop) |
| 16 | gbp-16.jpg | Portrait | 1645×2193 | Red Kenworth T880 cab tilted, Cummins X15, snow | Homepage strip 2 |
| 17 | gbp-17.jpg | Portrait | 1645×2193 | Blue Peterbilt on highway shoulder, winter | Roadside page header |

## Selected Placements

| Placement | Source | Output Filename | Sizes (WebP) | Alt Text |
|---|---|---|---|---|
| **Homepage hero** | gbp-15.jpg | hero-trucks-warehouse | 1920w, 1280w, 768w | Red semi cab and white box truck parked at a warehouse with roll-up doors |
| **Homepage card: Truck Repair** | gbp-12.jpg | card-truck-repair | 768w | Brake rotor and hub with wheel removed for truck brake repair |
| **Homepage card: Diagnostics** | gbp-10.jpg | card-diagnostics | 768w | PACCAR engine compartment with coolant reservoir and alternator during diagnostics |
| **Homepage card: Fleet** | gbp-01.jpg | card-fleet | 768w | White Ford F-650 box truck in a commercial parking lot |
| **Homepage card: Roadside** | gbp-02.jpg | hero-roadside-snow | 768w | Red semi cab on a snowy highway shoulder waiting for roadside repair |
| **Homepage strip 1** | gbp-07.jpg | engine-detail-blue-hose | 640w | Close-up of a truck engine bay showing power steering reservoir and fuel filter |
| **Homepage strip 2** | gbp-16.jpg | red-kenworth-snow | 640w | Red Kenworth T880 with cab tilted forward exposing the Cummins engine in snow |
| **Homepage strip 3** | gbp-05.jpg | roadside-car-carrier | 640w | Car-carrier trailer on a snowy highway shoulder during a roadside assistance call |
| **Roadside page header** | gbp-17.jpg | roadside-highway-winter | 1280w, 768w | Blue semi truck stopped on a highway shoulder in winter waiting for roadside assistance |
| **Truck repair page header** | gbp-06.jpg | axle-brake-repair | 1280w, 768w | Axle and air bag suspension repair with brake shoes removed and tools laid out |
| **Diagnostics page header** | gbp-03.jpg | engine-bay-diagnostics | 1280w, 768w | Semi truck with cab tilted forward exposing the engine bay for diagnostics |
| **Fleet maintenance page header** | gbp-13.jpg | fleet-yard-maintenance | 1280w, 768w | Commercial trucks lined up in a maintenance yard with a mechanic's creeper and tools |
| **About page work shot** | gbp-04.jpg | mechanic-grinding-repair | 1280w, 768w | Mechanic using a power tool on an engine exhaust component during a truck repair |
| **/services card: Truck Repair** | gbp-12.jpg | card-truck-repair | 768w | Brake rotor and hub with wheel removed for truck brake repair |
| **/services card: Diagnostics** | gbp-10.jpg | card-diagnostics | 768w | PACCAR engine compartment with coolant reservoir and alternator during diagnostics |
| **/services card: Fleet** | gbp-01.jpg | card-fleet | 768w | White Ford F-650 box truck in a commercial parking lot |
| **/services card: Roadside** | gbp-02.jpg | hero-roadside-snow | 768w | Red semi cab on a snowy highway shoulder waiting for roadside repair |

### No-Repeat Verification

**Homepage** (7 unique images): hero-trucks-warehouse (gbp-15), card-truck-repair (gbp-12), card-diagnostics (gbp-10), card-fleet (gbp-01), card-roadside (gbp-02), strip-1 (gbp-07), strip-2 (gbp-16), strip-3 (gbp-05) — NO REPEATS.

**/services index** (4 unique images): card-truck-repair (gbp-12), card-diagnostics (gbp-10), card-fleet (gbp-01), card-roadside (gbp-02) — NO REPEATS.

**Card ≠ Header check** (each service's card image differs from its page header):
- Truck Repair: card=gbp-12, header=gbp-06 ✓
- Diagnostics: card=gbp-10, header=gbp-03 ✓
- Fleet: card=gbp-01, header=gbp-13 ✓
- Roadside: card=gbp-02, header=gbp-17 ✓

### Hero Decision

gbp-15 (red semi + white box truck at warehouse) is the hero because:
- Landscape crop (4284×2400 → 1920×1076) from portrait source — true 16:9 banner
- Shows two commercial trucks at a working facility — tells the business story
- Red semi cab is the dominant visual element, immediately communicates "truck repair"
- Warehouse with roll-up doors provides operational context
- Blue sky at top provides text overlay zone for the H1 and phone CTA
- Scrim at bg-asphalt/50 keeps Bone text at AA+ contrast
- At 390px mobile: red cab and truck details remain visible

### Unused Photos (and why)

- gbp-08: Underside driveshaft shot, too dark and abstract for website placement
- gbp-09: Rusty liftgate, not flattering for the business
- gbp-11: Mud flap bracket on ground, not visually strong
- gbp-14: Niche battery box side detail, not a compelling placement
