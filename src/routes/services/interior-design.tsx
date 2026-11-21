import { ceiling, interior, modularKitchen } from "@/lib/site-images";
import { createFileRoute } from "@tanstack/react-router";
import { ContactCta, ContentSection, FeatureList, HeroPage } from "@/components/page-content";

export const Route = createFileRoute("/services/interior-design")({
  head: () => ({
    meta: [
      { title: "Interior Design & Decoration in Delhi | TIP TOP INTERIORS" },
      {
        name: "description",
        content:
          "Residential interiors, modular kitchens, bedrooms, lighting and furniture arrangements by TIP TOP INTERIORS in Delhi.",
      },
      { property: "og:title", content: "Interior Design | TIP TOP INTERIORS" },
      {
        property: "og:description",
        content: "Warm, functional home interiors designed around the way you live.",
      },
    ],
  }),
  component: InteriorDesignPage,
});

function InteriorDesignPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPage
        eyebrow="INTERIOR DESIGN"
        title="A room should feel like it belongs to you."
        description="Residential and commercial interiors that balance useful planning, warm materials, thoughtful lighting and a calm sense of place."
        image={modularKitchen.url}
        imageAlt="Ivory and walnut modular kitchen with stone counters"
        breadcrumb={[{ label: "Services", href: "/services" }, { label: "Interior design" }]}
      />
      <ContentSection eyebrow="DESIGNED FOR DAILY LIVING" title="Spaces with warmth and purpose">
        <div className="grid gap-8 md:grid-cols-[1fr_0.85fr] md:items-center">
          <FeatureList
            items={[
              "Luxury living room interiors and furniture arrangements.",
              "Bedroom interiors and fitted wardrobe planning.",
              "Modular kitchen layouts and cabinetry.",
              "False ceiling details and integrated lighting concepts.",
              "Residential and commercial interior decoration.",
            ]}
          />
          <img
            className="aspect-[4/3] w-full object-cover"
            src={interior.url}
            alt="Bright contemporary living space and interior decoration"
            loading="lazy"
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="MATERIAL · LIGHT · FORM"
        title="A consistent visual language"
        tone="warm"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <figure>
            <img
              className="aspect-[4/3] w-full object-cover"
              src={ceiling.url}
              alt="False ceiling detail with integrated lighting"
              loading="lazy"
            />
            <figcaption className="mt-3 font-display text-2xl">
              Lighting &amp; ceiling details
            </figcaption>
          </figure>
          <figure>
            <img
              className="aspect-[4/3] w-full object-cover"
              src={modularKitchen.url}
              alt="Modern modular kitchen in walnut and ivory"
              loading="lazy"
            />
            <figcaption className="mt-3 font-display text-2xl">
              Kitchens &amp; fitted storage
            </figcaption>
          </figure>
        </div>
        <p className="mt-7 max-w-3xl text-sm leading-7 text-muted-foreground">
          Each scheme begins with the room and its everyday use. Material choices, furniture
          placement, storage, finishes and light are considered together to create a more cohesive
          interior.
        </p>
      </ContentSection>
      <ContactCta title="Let’s shape your interior" />
    </main>
  );
}
