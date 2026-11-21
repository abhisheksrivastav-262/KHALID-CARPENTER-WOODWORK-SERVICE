import { propertyApartment } from "@/lib/site-images";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Handshake, KeyRound, Home, Search } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/contact";
import { ContactCta, ContentSection, HeroPage } from "@/components/page-content";

export const Route = createFileRoute("/property")({
  head: () => ({
    meta: [
      { title: "M.K. PROPERTY | Sale, Purchase & Renting in Delhi" },
      {
        name: "description",
        content:
          "Contact M.K. PROPERTY for property sale, purchase, renting and collaboration enquiries in Delhi.",
      },
      { property: "og:title", content: "M.K. PROPERTY | TIP TOP INTERIORS" },
      {
        property: "og:description",
        content: "A local point of contact for property enquiries in Delhi.",
      },
    ],
  }),
  component: PropertyPage,
});

const propertyServices = [
  {
    title: "Property Sale",
    description: "Discuss a property you are considering listing or selling.",
    icon: Home,
    message: "I would like to enquire about property sale.",
  },
  {
    title: "Property Purchase",
    description: "Share what you are looking for and discuss purchase enquiries.",
    icon: Search,
    message: "I would like to enquire about purchasing a property.",
  },
  {
    title: "Property Renting",
    description: "Connect about rental property availability or listing enquiries.",
    icon: KeyRound,
    message: "I would like to enquire about property renting.",
  },
  {
    title: "Property Collaboration",
    description: "Talk about a property collaboration opportunity.",
    icon: Handshake,
    message: "I would like to discuss a property collaboration.",
  },
];

function PropertyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPage
        eyebrow="M.K. PROPERTY"
        title="A local connection for your next move."
        description="M.K. PROPERTY is the real estate enquiry division associated with TIP TOP INTERIORS. Connect with Md. Khalid for local property sale, purchase, renting and collaboration enquiries."
        image={propertyApartment.url}
        imageAlt="Modern apartment building with balconies and landscaped grounds"
        breadcrumb={[{ label: "Property" }]}
      />
      <ContentSection
        eyebrow="PROPERTY SERVICES"
        title="Tell us what you are looking for"
        tone="warm"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {propertyServices.map(({ title, description, icon: Icon, message }) => (
            <article className="border border-border bg-background p-6" key={title}>
              <Icon aria-hidden="true" className="size-6 text-gold-strong" />
              <h2 className="mt-4 font-display text-3xl font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              <a
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-wide text-foreground hover:text-gold-strong"
                href={createWhatsAppUrl(`Hello Md. Khalid, ${message}`)}
                target="_blank"
                rel="noreferrer"
              >
                ENQUIRE ON WHATSAPP <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </ContentSection>
      <ContentSection eyebrow="LOCAL CONTACT" title="Speak directly with Md. Khalid">
        <p className="max-w-3xl text-base leading-8 text-muted-foreground">
          For property enquiries, contact Md. Khalid by phone or WhatsApp. Share the neighbourhood,
          property type and the kind of assistance you need so your enquiry can be understood
          clearly.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-12 items-center gap-2 bg-primary px-6 text-xs font-bold tracking-wide text-primary-foreground"
            href="tel:9212461719"
          >
            CALL 9212461719
          </a>
          <a
            className="inline-flex min-h-12 items-center gap-2 border border-foreground/30 px-6 text-xs font-bold tracking-wide"
            href={createWhatsAppUrl("Hello Md. Khalid, I have a property enquiry.")}
            target="_blank"
            rel="noreferrer"
          >
            WHATSAPP <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </ContentSection>
      <ContactCta
        title="Connect with M.K. PROPERTY"
        text="Use the enquiry links above or contact us directly to discuss your property requirements."
      />
    </main>
  );
}
