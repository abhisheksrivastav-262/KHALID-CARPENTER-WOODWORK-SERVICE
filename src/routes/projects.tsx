import { customFurniture } from "@/lib/site-images";
import { createFileRoute } from "@tanstack/react-router";
import { ContactCta, ContentSection, HeroPage, ProjectGallery } from "@/components/page-content";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title:
          "Interior & Woodwork Gallery | Khalid Carpenter and Woodwork Service Interior Decorator",
      },
      {
        name: "description",
        content:
          "Explore representative inspiration for living rooms, bedrooms, modular kitchens, custom woodwork, wardrobes and false ceilings.",
      },
      {
        property: "og:title",
        content: "Project Gallery | Khalid Carpenter and Woodwork Service Interior Decorator",
      },
      { property: "og:description", content: "Interior, carpentry and renovation inspiration." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPage
        eyebrow="PROJECT GALLERY"
        title="Ideas for considered interiors."
        description="Browse a selection of interior and woodwork inspiration across rooms, materials and finishes. Use the filters to explore by category."
        image={customFurniture.url}
        imageAlt="Warm handcrafted timber furniture and joinery inspiration"
        breadcrumb={[{ label: "Projects" }]}
      />
      <ContentSection eyebrow="SELECTED SPACES" title="Explore by room and detail">
        <ProjectGallery />
      </ContentSection>
      <ContactCta
        title="Have a reference in mind?"
        text="Share an image or describe the space and talk through what could work for your project."
      />
    </main>
  );
}
