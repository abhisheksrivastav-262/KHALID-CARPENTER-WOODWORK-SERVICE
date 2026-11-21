import { ceiling, kitchen, renovation } from "@/lib/site-images";
import { createFileRoute } from "@tanstack/react-router";
import { ContactCta, ContentSection, FeatureList, HeroPage } from "@/components/page-content";

export const Route = createFileRoute("/services/renovation")({
  head: () => ({
    meta: [
      {
        title:
          "Home Renovation & Maintenance in Delhi | Khalid Carpenter and Woodwork Service Interior Decorator",
      },
      {
        name: "description",
        content:
          "Home renovation, painting and polishing, POP work, civil work, false ceilings, repairs and house maintenance in Laxmi Nagar, Delhi.",
      },
      {
        property: "og:title",
        content:
          "Renovation & Maintenance | Khalid Carpenter and Woodwork Service Interior Decorator",
      },
      {
        property: "og:description",
        content: "Practical home repairs, renovation, painting and finishing services in Delhi.",
      },
    ],
  }),
  component: RenovationPage,
});

function RenovationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPage
        eyebrow="RENOVATION & MAINTENANCE"
        title="Refresh the home. Refine the details."
        description="Coordinate renovation, repair and finishing work with a practical plan that respects the home and keeps the important details in view."
        image={renovation.url}
        imageAlt="Calm bedroom interior with refreshed finishes and fitted details"
        breadcrumb={[
          { label: "Services", href: "/services" },
          { label: "Renovation & maintenance" },
        ]}
      />
      <ContentSection
        eyebrow="REPAIRS · UPDATES · FINISHES"
        title="The work that brings a home together"
        tone="warm"
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <FeatureList
            items={[
              "Complete home renovation and room refreshes.",
              "Painting, surface preparation and wood polishing.",
              "POP work and false ceiling installation.",
              "Civil improvements and interior repairs.",
              "House maintenance and finishing services.",
            ]}
          />
          <img
            className="aspect-[4/3] w-full object-cover"
            src={ceiling.url}
            alt="Contemporary ceiling and interior finishing details"
            loading="lazy"
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="PLANNED AROUND YOUR HOME"
        title="Careful coordination at every stage"
      >
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <img
            src={kitchen.url}
            alt="Renovated open plan kitchen with warm timber finishes"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <div>
            <p className="text-base leading-8 text-muted-foreground">
              Renovation can involve many connected decisions. Talk through the spaces, repairs and
              finishes together so the work can be scoped clearly and completed in a sensible order.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The team can discuss what needs attention, what you want to improve and how to finish
              the space with care.
            </p>
          </div>
        </div>
      </ContentSection>
      <ContactCta title="Planning a home refresh?" />
    </main>
  );
}
