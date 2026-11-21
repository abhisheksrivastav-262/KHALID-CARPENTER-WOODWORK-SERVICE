import { kitchen } from "@/lib/site-images";
import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { ContactCta, ContentSection, HeroPage, ServiceGrid } from "@/components/page-content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Interior, Carpentry & Renovation Services | TIP TOP INTERIORS" },
      {
        name: "description",
        content:
          "Explore custom woodwork, carpentry, modular furniture, interior decoration, false ceilings and renovation services in Laxmi Nagar, Delhi.",
      },
      { property: "og:title", content: "Services | TIP TOP INTERIORS" },
      {
        property: "og:description",
        content: "Carpentry, interior design and home renovation services in Delhi.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname !== "/services" && pathname !== "/services/") return <Outlet />;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPage
        eyebrow="OUR SERVICES"
        title="Considered work for the spaces you live in."
        description="From made-to-measure woodwork to complete home refreshes, find practical services shaped around your space and priorities."
        image={kitchen.url}
        imageAlt="Contemporary kitchen and interior in warm wood and neutral tones"
        breadcrumb={[{ label: "Services" }]}
      />
      <ContentSection eyebrow="WHAT WE DO" title="Care, craft & considered spaces">
        <ServiceGrid />
      </ContentSection>
      <ContentSection
        eyebrow="ONE POINT OF CONTACT"
        title="A coordinated approach to the details"
        tone="warm"
      >
        <p className="max-w-3xl text-base leading-8 text-muted-foreground">
          Discuss related work together—from furniture and carpentry to painting, POP, civil work
          and maintenance. Md. Khalid can help shape a practical scope and connect the right
          services for your project.
        </p>
      </ContentSection>
      <ContactCta title="Which service can we help with?" />
    </main>
  );
}
