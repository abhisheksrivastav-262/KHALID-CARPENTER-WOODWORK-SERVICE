import { interior } from "@/lib/site-images";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/contact";
import { EnquiryForm, HeroPage } from "@/components/page-content";

const address = "J-3/137, J Extension, Krishna Kunj, Laxmi Nagar, Delhi – 110092, India.";
const mapEmbedUrl =
  "https://maps.google.com/maps?q=J-3%2F137%2C%20J%20Extension%2C%20Krishna%20Kunj%2C%20Laxmi%20Nagar%2C%20Delhi%20110092&output=embed";
const mapDirectionsUrl =
  "https://www.google.com/maps/search/?api=1&query=J-3%2F137%2C%20J%20Extension%2C%20Krishna%20Kunj%2C%20Laxmi%20Nagar%2C%20Delhi%20110092";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TIP TOP INTERIORS | Laxmi Nagar, Delhi" },
      {
        name: "description",
        content:
          "Contact Md. Khalid for carpentry, woodwork, interior decoration, renovation or M.K. Property enquiries. Call, WhatsApp or send an enquiry.",
      },
      { property: "og:title", content: "Contact TIP TOP INTERIORS" },
      { property: "og:description", content: "Call or WhatsApp Md. Khalid in Laxmi Nagar, Delhi." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPage
        eyebrow="CONTACT US"
        title="A better space starts with a conversation."
        description="Speak with Md. Khalid about carpentry, interiors, renovation, maintenance or property enquiries."
        image={interior.url}
        imageAlt="Light-filled contemporary interior in warm natural tones"
        breadcrumb={[{ label: "Contact" }]}
      />
      <section className="section-pad bg-warm">
        <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-gold-strong">
              KHALID CARPENTER AND WOODWORK SERVICE INTERIOR DECORATOR
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">
              TIP TOP INTERIORS
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Interior decoration, woodwork, carpentry and renovation. M.K. PROPERTY enquiries
              welcome.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="tel:9212461719"
                className="inline-flex h-11 items-center gap-2 bg-primary px-5 text-xs font-bold tracking-wide text-primary-foreground"
              >
                <Phone aria-hidden="true" className="size-4" /> CALL NOW
              </a>
              <a
                href={createWhatsAppUrl("Hello Md. Khalid, I would like to discuss a project.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 border border-foreground/30 px-5 text-xs font-bold tracking-wide"
              >
                WHATSAPP <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <p className="mb-2 text-xs font-bold tracking-[0.16em] text-gold-strong">PHONE</p>
              <a className="block text-sm font-semibold" href="tel:9212461719">
                9212461719
              </a>
              <p className="mb-2 mt-6 flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-gold-strong">
                <MapPin aria-hidden="true" className="size-4" /> BUSINESS ADDRESS
              </p>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">{address}</p>
              <p className="mb-2 mt-5 text-xs font-bold tracking-[0.16em] text-gold-strong">
                ADDITIONAL ADDRESS
              </p>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                J3/149, Extension, Kishan Kunj, Laxmi Nagar, Delhi – 110092, India.
              </p>
              <a
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-wide hover:text-gold-strong"
                href={mapDirectionsUrl}
                target="_blank"
                rel="noreferrer"
              >
                GET DIRECTIONS <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
      <section className="site-container py-12">
        <div className="grid overflow-hidden border border-border md:grid-cols-[1.1fr_0.9fr]">
          <div className="min-h-72 bg-secondary">
            <iframe
              className="size-full min-h-72 border-0"
              src={mapEmbedUrl}
              title="Map to TIP TOP INTERIORS in Laxmi Nagar, Delhi"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="mb-3 text-xs font-bold tracking-[0.18em] text-gold-strong">
              FIND US IN DELHI
            </p>
            <p className="font-display text-3xl font-semibold leading-snug">
              J-3/137, J Extension,
              <br />
              Krishna Kunj, Laxmi Nagar
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Delhi – 110092, India</p>
          </div>
        </div>
      </section>
    </main>
  );
}
