import { heroLivingRoom } from "@/lib/site-images";
import { createFileRoute } from "@tanstack/react-router";
import { ContactCta, ContentSection, HeroPage, ReviewsContent } from "@/components/page-content";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      {
        title: "Customer Reviews | Khalid Carpenter and Woodwork Service Interior Decorator, Delhi",
      },
      {
        name: "description",
        content:
          "Read the supplied customer review excerpts for Khalid Carpenter and Woodwork Service Interior Decorator. Rated 4.9 out of 5 from 15 Google reviews.",
      },
      {
        property: "og:title",
        content: "Customer Reviews | Khalid Carpenter and Woodwork Service Interior Decorator",
      },
      {
        property: "og:description",
        content: "Customer feedback for carpentry and interior work in Delhi.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPage
        eyebrow="CUSTOMER REVIEWS"
        title="Trust is built one detail at a time."
        description="The supplied customer feedback reflects the value of honest communication, careful work and dependable service."
        image={heroLivingRoom.url}
        imageAlt="Warm living room interior with wood panelling and neutral furnishings"
        breadcrumb={[{ label: "Reviews" }]}
      />
      <ContentSection eyebrow="GOOGLE REVIEW HIGHLIGHTS" title="Words from customers">
        <ReviewsContent />
      </ContentSection>
      <ContentSection eyebrow="OUR COMMITMENT" title="Care that carries through" tone="warm">
        <p className="max-w-3xl text-base leading-8 text-muted-foreground">
          Every project deserves careful listening, a clear conversation about the work and
          attention to the details that make a finish feel complete. Get in touch to discuss what
          you need.
        </p>
      </ContentSection>
      <ContactCta title="Ready to discuss your project?" />
    </main>
  );
}
