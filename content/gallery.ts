export interface GalleryImage {
  src: string;
  alt: string;
  label?: string;
}

export interface GalleryGroup {
  title: string;
  images: GalleryImage[];
}

export interface GalleryCategory {
  slug: string;
  name: string;
  groups: GalleryGroup[];
}

export const galleryData: GalleryCategory[] = [
  {
    slug: "truck-repair",
    name: "Truck Repair",
    groups: [
      {
        title: "Brake Chamber Replacement",
        images: [
          { src: "/images/brake-chamber-before-768w.webp", alt: "Worn brake chamber on a commercial truck axle before replacement", label: "Before" },
          { src: "/images/brake-chamber-after-768w.webp", alt: "New brake chamber installed on a commercial truck axle", label: "After" },
        ],
      },
      {
        title: "Air Bag Suspension Repair",
        images: [
          { src: "/images/airbag-suspension-repair-768w.webp", alt: "Failed air bag suspension removed with new air bag installed on truck axle" },
        ],
      },
      {
        title: "Serpentine Belt Replacement",
        images: [
          { src: "/images/serpentine-belt-before-768w.webp", alt: "Worn serpentine belt routed around truck engine pulleys before replacement", label: "Before" },
          { src: "/images/serpentine-belt-after-768w.webp", alt: "New serpentine belt installed on truck engine pulleys", label: "After" },
        ],
      },
    ],
  },
  {
    slug: "roadside-assistance",
    name: "Roadside Assistance",
    groups: [
      {
        title: "On-Site Roadside Repairs",
        images: [
          { src: "/images/roadside-box-truck-768w.webp", alt: "Box truck pulled over on highway shoulder receiving roadside repair service" },
          { src: "/images/roadside-semi-truck-768w.webp", alt: "Black semi truck on highway shoulder being serviced by Big Bear Truck Repair" },
        ],
      },
    ],
  },
];

export function getGalleryForService(slug: string): GalleryGroup[] | undefined {
  const category = galleryData.find((c) => c.slug === slug);
  return category?.groups;
}
