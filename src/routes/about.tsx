import { customFurniture, customWardrobe } from "@/lib/site-images";
import { createFileRoute } from "@tanstack/react-router";
import { ContactCta, ContentSection, FeatureList, HeroPage } from "@/components/page-content";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TIP TOP INTERIORS | Md. Khalid, Delhi" },
      {
        name: "description",
        content:
          "Meet Md. Khalid and learn about the careful carpentry, interior work and customer-first approach behind TIP TOP INTERIORS in Delhi.",
      },
      { property: "og:title", content: "About TIP TOP INTERIORS" },
      {
        property: "og:description",
        content:
          "Thoughtful craftsmanship and dependable service from Md. Khalid in Laxmi Nagar, Delhi.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPage
        eyebrow="ABOUT TIP TOP INTERIORS"
        title="Good work begins with listening."
        description="Khalid Carpenter and Woodwork Service Interior Decorator brings practical craftsmanship and considered interior solutions to homes and commercial spaces across Delhi."
        image={customWardrobe.url}
        imageAlt="Fitted walnut wardrobe with carefully aligned cabinet fronts"
        breadcrumb={[{ label: "About" }]}
      />
      <ContentSection eyebrow="OUR STORY" title="A personal approach to every space" tone="warm">
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <p className="text-base leading-8 text-muted-foreground">
              TIP TOP INTERIORS is the home interior and woodwork service led by Md. Khalid. From a
              custom cabinet to renovation and finishing work, each enquiry starts with
              understanding how the space is used and what the customer needs.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The work is built around clear communication, considered material choices, neat
              finishing and respect for the home. M.K. PROPERTY offers a connected point of contact
              for property sale, purchase, renting and collaboration enquiries.
            </p>
            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 border-b border-gold-strong pb-2 text-sm font-bold"
            >
              SPEAK WITH MD. KHALID <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <img
            src={customFurniture.url}
            alt="Warm wood furniture and crafted joinery"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </ContentSection>
      <ContentSection eyebrow="WHAT MATTERS" title="Craftsmanship with care">
        <FeatureList
          items={[
            "Quality work with attention to fit, finish and everyday use.",
            "Professional communication throughout the project.",
            "A practical plan shaped around the home and its needs.",
            "Customer satisfaction through a considerate, reliable approach.",
          ]}
        />
      </ContentSection>
      <ContentSection eyebrow="HOW WE WORK" title="A clear path from idea to finish" tone="warm">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {["Listen & understand", "Plan the details", "Craft with care", "Finish & refine"].map(
            (step, i) => (
              <article className="border-t border-border pt-5" key={step}>
                <p className="font-display text-3xl text-gold-strong">0{i + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{step}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  We keep the next step clear, from the first discussion through the finishing
                  details.
                </p>
              </article>
            ),
          )}
        </div>
      </ContentSection>
      <ContactCta />
    </main>
  );
}
