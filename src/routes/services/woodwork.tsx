import { customFurniture, customWardrobe, modularKitchen } from "@/lib/site-images";
import { createFileRoute } from "@tanstack/react-router";
import { ContactCta, ContentSection, FeatureList, HeroPage } from "@/components/page-content";

export const Route = createFileRoute("/services/woodwork")({
  head: () => ({
    meta: [
      { title: "Woodwork & Carpentry in Delhi | TIP TOP INTERIORS" },
      {
        name: "description",
        content:
          "Made-to-measure furniture, wardrobes, doors, cabinets, partitions, repairs and professional wood finishing by Khalid Carpenter and Woodwork Service Interior Decorator.",
      },
      { property: "og:title", content: "Woodwork & Carpentry | TIP TOP INTERIORS" },
      {
        property: "og:description",
        content: "Custom carpentry and timber finishes for homes in Delhi.",
      },
    ],
  }),
  component: WoodworkPage,
});

function WoodworkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPage
        eyebrow="WOODWORK & CARPENTRY"
        title="Made for your home. Finished with care."
        description="Custom carpentry and practical woodwork, measured to fit your rooms, your routines and the details that matter."
        image={customFurniture.url}
        imageAlt="Custom wooden furniture with carefully finished surfaces"
        breadcrumb={[{ label: "Services", href: "/services" }, { label: "Woodwork & carpentry" }]}
      />
      <ContentSection eyebrow="MADE TO MEASURE" title="Useful details, crafted to fit" tone="warm">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <FeatureList
              items={[
                "Custom wooden furniture and fitted storage.",
                "Wardrobes and dressing units made for your space.",
                "Wooden doors, cabinets and partitions.",
                "Furniture repair and custom carpentry.",
                "Careful sanding, polishing and wood finishing.",
              ]}
            />
          </div>
          <img
            src={customWardrobe.url}
            alt="Floor-to-ceiling custom wardrobe with fitted storage"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="BUILT AROUND YOUR SPACE"
        title="From the first measurement to final fit"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Understand",
              text: "We discuss dimensions, use, finish and how the woodwork needs to work in your home.",
              image: customFurniture.url,
              alt: "Custom furniture detail",
            },
            {
              title: "Craft",
              text: "Pieces are prepared to suit the brief, with attention to structure and finish.",
              image: modularKitchen.url,
              alt: "Fitted modular storage and cabinetry",
            },
            {
              title: "Install",
              text: "Fitting and finishing are handled with care for a neat, useful result.",
              image: customWardrobe.url,
              alt: "Installed fitted wardrobe",
            },
          ].map((item, i) => (
            <article key={item.title}>
              <img
                className="aspect-[4/3] w-full object-cover"
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />
              <p className="mt-4 text-xs font-bold tracking-[0.16em] text-gold-strong">0{i + 1}</p>
              <h3 className="mt-2 font-display text-3xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </ContentSection>
      <ContactCta
        title="Planning custom woodwork?"
        text="Share the room, dimensions or a reference and discuss the right carpentry for your home."
      />
    </main>
  );
}
