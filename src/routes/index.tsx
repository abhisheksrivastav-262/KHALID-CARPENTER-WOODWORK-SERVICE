import {
  carpentry,
  ceiling as ceilingImage,
  customFurniture,
  customWardrobe,
  heroLivingRoom,
  interior as interiorImage,
  kitchen as kitchenImage,
  modularKitchen,
  propertyApartment,
  renovation as renovationImage,
} from "@/lib/site-images";
import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Handshake,
  Hammer,
  Home,
  KeyRound,
  MapPin,
  Paintbrush,
  PanelTop,
  Phone,
  Sparkles,
  Star,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/page-content";
import { createWhatsAppUrl } from "@/lib/contact";

const services: { title: string; description: string; icon: LucideIcon; image: string }[] = [
  {
    title: "Woodwork & Custom Furniture",
    description: "Thoughtful, made-to-measure woodwork for the way you live.",
    icon: Hammer,
    image: customFurniture.url,
  },
  {
    title: "Carpenter Services",
    description: "Repairs, installations and bespoke carpentry finished with care.",
    icon: Wrench,
    image: carpentry.url,
  },
  {
    title: "Modular Furniture & Installation",
    description: "Practical fitted furniture, carefully assembled and installed.",
    icon: Home,
    image: modularKitchen.url,
  },
  {
    title: "POP & False Ceiling",
    description: "Clean ceiling details that bring balance and character to a room.",
    icon: PanelTop,
    image: ceilingImage.url,
  },
  {
    title: "Painting & Polishing",
    description: "Fresh finishes and careful polishing for walls and wood surfaces.",
    icon: Paintbrush,
    image: customWardrobe.url,
  },
  {
    title: "House Maintenance Services",
    description: "Reliable help with the repairs and upkeep your home needs.",
    icon: Wrench,
    image: interiorImage.url,
  },
  {
    title: "Civil & Renovation Work",
    description: "Practical renovation work, planned around your home and needs.",
    icon: Building2,
    image: kitchenImage.url,
  },
  {
    title: "Interior Decoration",
    description: "A considered mix of colour, materials and useful details.",
    icon: Sparkles,
    image: heroLivingRoom.url,
  },
  {
    title: "Property Sale & Purchase",
    description: "Local assistance for property sale and purchase enquiries.",
    icon: Home,
    image: propertyApartment.url,
  },
  {
    title: "Property Renting",
    description: "Support for finding or listing a rental property in the area.",
    icon: KeyRound,
    image: interiorImage.url,
  },
  {
    title: "Property Collaboration",
    description: "Connect about property collaboration opportunities.",
    icon: Handshake,
    image: customFurniture.url,
  },
];

const galleryItems = [
  {
    title: "Warm living room",
    category: "Living Room",
    image: heroLivingRoom.url,
    alt: "Warm living room with walnut wall panels and soft neutral furnishings",
  },
  {
    title: "Modular kitchen",
    category: "Modular Kitchen",
    image: modularKitchen.url,
    alt: "Walnut and ivory modular kitchen with stone counters",
  },
  {
    title: "Custom wardrobe",
    category: "Wardrobes",
    image: customWardrobe.url,
    alt: "Floor-to-ceiling walnut wardrobe with custom dressing space",
  },
  {
    title: "Handcrafted furniture",
    category: "Wooden Furniture",
    image: customFurniture.url,
    alt: "Handcrafted walnut dining table and chairs",
  },
  {
    title: "Bright living space",
    category: "Interior Decoration",
    image: interiorImage.url,
    alt: "Bright living room with carefully arranged furniture",
  },
  {
    title: "Open-plan interior",
    category: "Modular Kitchen",
    image: kitchenImage.url,
    alt: "Open-plan interior with a modern kitchen and warm wood details",
  },
  {
    title: "Ceiling and interior work",
    category: "False Ceiling",
    image: ceilingImage.url,
    alt: "Contemporary interior with a sculpted ceiling and staircase",
  },
  {
    title: "Bedroom renovation",
    category: "Renovation",
    secondaryCategory: "Bedroom",
    image: renovationImage.url,
    alt: "Calm bedroom interior with a modern bed and fitted details",
  },
];
const galleryFilters = [
  "All",
  "Living Room",
  "Bedroom",
  "Modular Kitchen",
  "Wooden Furniture",
  "Wardrobes",
  "False Ceiling",
  "Renovation",
  "Interior Decoration",
];

const reviews = [
  "Exceptional carpenter, unparalleled craftsmanship. Honest, skilled, and dedicated, transforming wood into art with precision.",
  "Very good service, nice work, experienced Carpenter works. My work is done shortly time.",
  "He is sincere and honest. My wooden work is completed within time.",
];

const mainAddress = "J-3/137, J Extension, Krishna Kunj, Laxmi Nagar, Delhi – 110092, India.";
const mapEmbedUrl =
  "https://maps.google.com/maps?q=J-3%2F137%2C%20J%20Extension%2C%20Krishna%20Kunj%2C%20Laxmi%20Nagar%2C%20Delhi%20110092&output=embed";
const mapDirectionsUrl =
  "https://www.google.com/maps/search/?api=1&query=J-3%2F137%2C%20J%20Extension%2C%20Krishna%20Kunj%2C%20Laxmi%20Nagar%2C%20Delhi%20110092";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Khalid Carpenter and Woodwork Service Interior Decorator | Khalid Carpenter and Woodwork Service Interior Decorator, Delhi",
      },
      {
        name: "description",
        content:
          "Expert carpentry, custom furniture, interior decoration and home renovation by Khalid Carpenter and Woodwork Service Interior Decorator in Laxmi Nagar, Delhi.",
      },
      {
        property: "og:title",
        content:
          "Khalid Carpenter and Woodwork Service Interior Decorator | Khalid Carpenter and Woodwork Service Interior Decorator, Delhi",
      },
      {
        property: "og:description",
        content:
          "Expert carpentry, custom furniture, interior decoration and home renovation in Laxmi Nagar, Delhi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Khalid Carpenter and Woodwork Service Interior Decorator",
          alternateName: "Khalid Carpenter and Woodwork Service Interior Decorator",
          url: "https://tiptopinteriors.online",
          telephone: "+919212461719",
          address: {
            "@type": "PostalAddress",
            streetAddress: "J-3/137, J Extension, Krishna Kunj, Laxmi Nagar",
            addressLocality: "Delhi",
            postalCode: "110092",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "15",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeImage, setActiveImage] = useState<(typeof galleryItems)[number] | null>(null);
  const visibleGalleryItems = galleryItems.filter(
    (item) =>
      activeFilter === "All" ||
      item.category === activeFilter ||
      item.secondaryCategory === activeFilter,
  );
  const activeGalleryIndex = activeImage
    ? visibleGalleryItems.findIndex((item) => item.title === activeImage.title)
    : -1;
  function moveGalleryImage(direction: number) {
    if (!visibleGalleryItems.length) return;
    const currentIndex = Math.max(0, activeGalleryIndex);
    setActiveImage(
      visibleGalleryItems[
        (currentIndex + direction + visibleGalleryItems.length) % visibleGalleryItems.length
      ],
    );
  }

  useEffect(() => {
    if (!activeImage) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeImage]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <main>
        <section
          id="home"
          className="relative flex min-h-[600px] md:min-h-[680px] items-center overflow-hidden bg-ink text-background"
        >
          <img
            className="absolute inset-0 size-full object-cover object-[62%_center] sm:object-center"
            src={heroLivingRoom.url}
            alt="Warm luxury living room with layered natural materials and soft neutral tones"
            fetchPriority="high"
          />
          <div className="hero-shade absolute inset-0" aria-hidden="true" />
          <div className="site-container relative z-10 flex w-full items-center py-14 sm:py-20 md:py-24">
            <div className="animate-rise max-w-3xl">
              <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-gold sm:text-sm">
                <span className="h-px w-10 bg-gold" />
                INTERIOR · WOODWORK · RENOVATION
              </p>
              <h1 className="max-w-3xl font-display text-[clamp(2rem,8.8vw,4.75rem)] font-medium leading-[1.02] text-background sm:text-6xl md:text-7xl">
                Crafting Beautiful Spaces.
                <br />
                <span className="text-gold">Creating Timeless Living.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-background/80 sm:text-lg">
                Expert craftsmanship, premium woodwork and sophisticated interior solutions for
                homes and commercial spaces.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
                <Button
                  asChild
                  className="h-12 w-full rounded-none bg-primary px-6 text-xs font-bold tracking-[0.1em] text-primary-foreground hover:bg-primary/90 sm:w-auto"
                >
                  <a href="#services">
                    EXPLORE OUR SERVICES <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  className="h-12 w-full rounded-none border border-background/60 bg-background/5 px-6 text-xs font-bold tracking-[0.1em] text-background hover:bg-background/15 sm:w-auto"
                >
                  <a
                    href={createWhatsAppUrl(
                      "Hello Md. Khalid, I would like to discuss an interior or woodwork project.",
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WHATSAPP US <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  className="h-12 w-full rounded-none border border-gold/70 bg-transparent px-6 text-xs font-bold tracking-[0.1em] text-gold hover:bg-gold/10 sm:w-auto"
                >
                  <a href="tel:9212461719">CALL NOW · 9212461719</a>
                </Button>
              </div>
              <div className="mt-7 hidden flex-wrap items-center gap-x-8 gap-y-3 sm:flex border-t border-background/20 pt-5 text-xs tracking-[0.08em] text-background/70">
                <span className="inline-flex items-center gap-2">
                  <MapPin aria-hidden="true" className="size-4 text-gold" /> LAXMI NAGAR, DELHI
                </span>
                <span>CRAFTED FOR EVERYDAY LIVING</span>
              </div>
            </div>
          </div>
          <a
            href="#services"
            className="absolute bottom-7 right-[max(1rem,calc((100vw-84rem)/2))] hidden items-center gap-3 text-xs font-semibold tracking-[0.15em] text-background/75 transition-colors hover:text-gold md:flex"
          >
            EXPLORE OUR SERVICES <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </section>

        <section id="quick-enquiry" className="section-pad bg-warm">
          <div className="site-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold-strong">
                START A PROJECT
              </p>
              <h2 className="font-display text-4xl font-medium leading-tight text-foreground">
                Let’s Bring Your Dream Space to Life
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Tell us about your project and our team will connect with you.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid size-10 shrink-0 place-items-center border border-gold/50 text-gold-strong">
                    <Phone aria-hidden="true" className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-wide text-muted-foreground">
                      CALL OR WHATSAPP
                    </p>
                    <a
                      href="tel:9212461719"
                      className="mt-1 inline-block text-sm font-bold text-foreground hover:text-gold-strong"
                    >
                      9212461719
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid size-10 shrink-0 place-items-center border border-gold/50 text-gold-strong">
                    <MapPin aria-hidden="true" className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-wide text-muted-foreground">
                      SERVING DELHI
                    </p>
                    <p className="mt-1 text-sm font-bold text-foreground">
                      Laxmi Nagar &amp; nearby areas
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <EnquiryForm
              idPrefix="home-enquiry"
              heading={null}
              description={null}
              submitLabel="SUBMIT YOUR ENQUIRY"
            />
          </div>
        </section>

        <section id="about" className="bg-warm">
          <div className="site-container grid gap-10 py-14 md:grid-cols-[1fr_1fr] md:items-center md:gap-16 md:py-24">
            <div className="relative">
              <img
                className="aspect-[4/3] w-full object-cover"
                src={customWardrobe.url}
                alt="Custom walnut wardrobe and dressing area"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-ink px-5 py-4 text-background">
                <span className="font-display text-3xl text-gold">T</span>
                <span className="text-xs font-semibold leading-5 tracking-[0.14em]">
                  KHALID CARPENTER & WOODWORK SERVICE
                  <br />
                  INTERIOR DECORATOR
                </span>
              </div>
            </div>
            <div className="py-2">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold-strong">
                ABOUT THE CRAFT
              </p>
              <h2 className="font-display text-5xl font-medium leading-[1.02] text-foreground md:text-6xl">
                About Khalid Carpenter and Woodwork Service Interior Decorator
              </h2>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                Khalid Carpenter and Woodwork Service Interior Decorator brings together skilled
                carpentry, custom woodwork, interior decoration, painting and dependable home
                renovation in Delhi. Every project is approached with care for the finish, clear
                communication and respect for your home.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Whether you need a thoughtful room refresh, a fitted piece made for your space or
                help with maintenance and property enquiries, Md. Khalid is ready to discuss your
                needs.
              </p>
              <a
                className="mt-8 inline-flex items-center gap-3 border-b border-gold-strong pb-2 text-sm font-bold text-foreground transition-colors hover:text-gold-strong"
                href="#contact"
              >
                TALK ABOUT YOUR PROJECT <ArrowRight aria-hidden="true" className="size-4" />
              </a>
              <a
                href="/about"
                className="mt-5 ml-6 inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-gold-strong"
              >
                MORE ABOUT US <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="section-pad bg-background">
          <div className="site-container">
            <div className="mb-12 flex flex-col justify-between gap-5 border-b border-border pb-8 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold-strong">
                  WHAT WE DO
                </p>
                <h2 className="max-w-2xl font-display text-[clamp(1.75rem,3.2vw,2.625rem)] font-medium leading-tight text-foreground md:text-[2.625rem]">
                  Craft, care &amp; considered spaces
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                From a single piece of custom woodwork to a complete home refresh, find the right
                help for your next project.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ title, description, icon: Icon, image }, index) => (
                <article
                  key={title}
                  className="group overflow-hidden border border-border bg-card transition-colors hover:border-gold/70 hover:bg-paper"
                >
                  <img
                    src={image}
                    alt={`${title} service`}
                    loading="lazy"
                    className="aspect-[16/8] w-full object-cover"
                  />
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between">
                      <span className="grid size-11 place-items-center border border-gold/40 text-gold-strong transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span className="font-display text-xl text-muted-foreground/70">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                  </div>
                </article>
              ))}
            </div>
            <a
              href="/services"
              className="mt-7 inline-flex items-center gap-2 border-b border-gold-strong pb-2 text-xs font-bold tracking-wide hover:text-gold-strong"
            >
              VIEW ALL SERVICES <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </section>

        <section id="gallery" className="section-pad bg-background">
          <div className="site-container">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold-strong">
                  SELECTED SPACES
                </p>
                <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.625rem)] font-medium leading-tight text-foreground md:text-[2.625rem]">
                  Featured project inspiration
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                Interiors and woodwork that bring warmth, function and lasting character to a home.
              </p>
            </div>
            <div className="mb-7 flex flex-wrap gap-2" aria-label="Filter gallery">
              {galleryFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`min-h-11 border px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${activeFilter === filter ? "border-ink bg-ink text-background" : "border-border bg-transparent text-muted-foreground hover:border-gold-strong hover:text-foreground"}`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="gallery-grid">
              {visibleGalleryItems.map((item) => (
                <button
                  type="button"
                  aria-label={`View ${item.title}`}
                  onClick={() => setActiveImage(item)}
                  className="gallery-item group relative overflow-hidden bg-warm text-left"
                  key={item.title}
                >
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent px-4 pb-4 pt-14 sm:px-6 sm:pb-5">
                    <figcaption className="font-display text-2xl font-medium text-background sm:text-3xl">
                      {item.title}
                    </figcaption>
                  </div>
                </button>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Representative interior inspiration. Images illustrate design possibilities and are
              not presented as completed client projects.
            </p>
          </div>
        </section>

        {activeImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
            onClick={() => setActiveImage(null)}
          >
            <button
              type="button"
              className="absolute left-4 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center border border-white/30 bg-ink/55 text-white sm:left-6"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                moveGalleryImage(-1);
              }}
            >
              <ArrowLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              className="absolute right-4 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center border border-white/30 bg-ink/55 text-white sm:right-6"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                moveGalleryImage(1);
              }}
            >
              <ArrowRight aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              className="absolute right-5 top-5 grid size-11 place-items-center border border-white/30 text-white"
              aria-label="Close image"
              onClick={() => setActiveImage(null)}
            >
              <X aria-hidden="true" />
            </button>
            <figure className="max-w-6xl" onClick={(event) => event.stopPropagation()}>
              <img
                className="max-h-[82vh] w-full object-contain"
                src={activeImage.image}
                alt={activeImage.alt}
              />
              <figcaption className="mt-3 text-center font-display text-2xl text-white">
                {activeImage.title}
              </figcaption>
            </figure>
          </div>
        )}

        <section id="why-us" className="section-pad bg-ink text-background">
          <div className="site-container">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold">
                WHY Khalid Carpenter and Woodwork Service Interior Decorator
              </p>
              <h2 className="font-display text-4xl font-medium leading-tight text-background">
                Craftsmanship you can feel at home
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-background/70">
                A thoughtful, personal approach from the first conversation through the final
                details.
              </p>
            </div>
            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "Made for your space",
                  "Fitted work and details are planned around your home, not a standard template.",
                ],
                [
                  "Skilled hands-on craft",
                  "Practical carpentry and interior work with care in the materials and finish.",
                ],
                [
                  "One clear point of contact",
                  "Speak directly with Md. Khalid and keep the conversation straightforward.",
                ],
                [
                  "Care beyond installation",
                  "From renovation to maintenance, get help with the details that keep a space working.",
                ],
              ].map(([title, description], index) => (
                <article
                  className="border-t border-background/20 py-6 sm:px-5 sm:first:pl-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"
                  key={title}
                >
                  <p className="font-display text-3xl text-gold">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-background/65">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section-pad bg-background">
          <div className="site-container">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold-strong">
                A THOUGHTFUL PROCESS
              </p>
              <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.625rem)] font-medium leading-tight text-foreground md:text-[2.625rem]">
                From first conversation to final finish
              </h2>
            </div>
            <div className="grid border-y border-border md:grid-cols-4">
              {[
                "Listen & understand",
                "Plan the details",
                "Craft with care",
                "Finish & refine",
              ].map((step, index) => (
                <article
                  className="border-b border-border py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
                  key={step}
                >
                  <p className="font-display text-3xl text-gold-strong">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{step}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    A clear, considered approach shaped around your space, priorities and project.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="property" className="relative overflow-hidden bg-ink text-background">
          <img
            src={interiorImage.url}
            alt="Contemporary residential interior"
            loading="lazy"
            className="absolute inset-0 size-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
          <div className="site-container relative z-10 grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-center md:py-20">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold">M.K. PROPERTY</p>
              <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.625rem)] font-medium md:text-[2.625rem]">
                A considered approach to property
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-background/75">
                Local assistance for property sale, purchase, renting and collaboration enquiries in
                Delhi.
              </p>
            </div>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-gold px-6 text-xs font-bold tracking-[0.1em] text-gold transition-colors hover:bg-gold hover:text-ink"
              href={createWhatsAppUrl(
                "Hello, I would like to enquire with M.K. PROPERTY about a property.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              PROPERTY ENQUIRY <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="reviews" className="section-pad bg-ink text-background">
          <div className="site-container">
            <div className="grid gap-12 border-b border-background/15 pb-12 md:grid-cols-[0.75fr_1.25fr] md:items-end">
              <div>
                <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold">CLIENT WORDS</p>
                <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.625rem)] font-medium leading-tight text-background md:text-[2.625rem]">
                  Built on trust
                </h2>
              </div>
              <div className="flex flex-wrap items-end gap-x-7 gap-y-3 md:justify-end">
                <div className="font-display text-7xl leading-none text-gold">
                  4.9<span className="text-3xl">/5</span>
                </div>
                <div className="pb-1">
                  <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} aria-hidden="true" className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2 text-xs tracking-[0.1em] text-background/70">
                    15 GOOGLE REVIEWS
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-0 md:grid-cols-3">
              {reviews.map((review, index) => (
                <blockquote
                  className="flex min-h-48 flex-col justify-between border-b border-background/15 py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                  key={review}
                >
                  <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <Star key={starIndex} aria-hidden="true" className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 font-display text-2xl leading-snug text-background">
                    “{review}”
                  </p>
                  <footer className="mt-5 text-xs font-semibold tracking-[0.15em] text-background/50">
                    GOOGLE REVIEW 0{index + 1}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad bg-warm">
          <div className="site-container">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold-strong">LET’S TALK</p>
              <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.625rem)] font-medium leading-tight text-foreground md:text-[2.625rem]">
                A better space starts with a conversation
              </h2>
            </div>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <p className="font-display text-3xl font-semibold text-foreground">
                  Khalid Carpenter and Woodwork Service Interior Decorator
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Contact Md. Khalid for carpentry, interiors, renovation or property enquiries.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="h-11 rounded-none bg-primary px-5 text-xs font-bold tracking-[0.08em] text-primary-foreground hover:bg-primary/90"
                  >
                    <a href="tel:9212461719">
                      <Phone aria-hidden="true" /> CALL NOW
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="h-11 rounded-none border border-foreground/30 bg-transparent px-5 text-xs font-bold tracking-[0.08em] text-foreground hover:bg-foreground/5"
                  >
                    <a
                      href={createWhatsAppUrl(
                        "Hello Md. Khalid, I would like to discuss a project.",
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WHATSAPP <ArrowUpRight aria-hidden="true" />
                    </a>
                  </Button>
                </div>
                <div className="mt-8 grid gap-5 border-t border-border pt-7 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs font-bold tracking-[0.16em] text-gold-strong">
                      PHONE
                    </p>
                    <a
                      className="block text-sm font-semibold text-foreground hover:text-gold-strong"
                      href="tel:9212461719"
                    >
                      9212461719
                    </a>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-bold tracking-[0.16em] text-gold-strong">
                      WEBSITE
                    </p>
                    <a
                      className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-gold-strong"
                      href="https://tiptopinteriors.online"
                      target="_blank"
                      rel="noreferrer"
                    >
                      tiptopinteriors.online <ArrowUpRight aria-hidden="true" className="size-3" />
                    </a>
                  </div>
                </div>
                <div className="mt-7 border-t border-border pt-6">
                  <p className="mb-2 flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-gold-strong">
                    <MapPin aria-hidden="true" className="size-4" /> BUSINESS ADDRESS
                  </p>
                  <p className="max-w-md text-sm leading-6 text-muted-foreground">{mainAddress}</p>
                  <p className="mt-4 text-xs font-bold tracking-[0.16em] text-gold-strong">
                    VISITING CARD ADDRESS
                  </p>
                  <p className="mt-1 max-w-md text-sm leading-6 text-muted-foreground">
                    J3/149, Extension, Kishan Kunj, Laxmi Nagar, Delhi – 110092.
                  </p>
                </div>
              </div>

              <aside className="flex flex-col justify-center border border-border bg-background p-6 sm:p-8">
                <p className="text-xs font-bold tracking-[0.18em] text-gold-strong">LET’S TALK</p>
                <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">
                  Ready to discuss your space?
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Call Md. Khalid or send a WhatsApp message to talk through what you have in mind.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:9212461719"
                    className="inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-5 text-xs font-bold tracking-wide text-primary-foreground"
                  >
                    <Phone aria-hidden="true" className="size-4" /> CALL NOW
                  </a>
                  <a
                    href={createWhatsAppUrl("Hello Md. Khalid, I would like to discuss a project.")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 border border-foreground/30 px-5 text-xs font-bold tracking-wide text-foreground"
                  >
                    <ArrowUpRight aria-hidden="true" className="size-4" /> WHATSAPP
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex min-h-12 items-center text-xs font-bold tracking-wide text-gold-strong hover:text-foreground"
                  >
                    CONTACT PAGE <ArrowRight aria-hidden="true" className="ml-2 size-4" />
                  </a>
                </div>
              </aside>
            </div>

            <div className="mt-12 grid overflow-hidden border border-border bg-background md:grid-cols-[1.1fr_0.9fr]">
              <div className="min-h-72 bg-secondary">
                <iframe
                  className="size-full min-h-72 border-0"
                  src={mapEmbedUrl}
                  title="Map to Khalid Carpenter and Woodwork Service Interior Decorator in Laxmi Nagar, Delhi"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="mb-3 text-xs font-bold tracking-[0.18em] text-gold-strong">
                  FIND US IN DELHI
                </p>
                <p className="font-display text-3xl font-semibold leading-snug text-foreground">
                  J-3/137, J Extension,
                  <br />
                  Krishna Kunj, Laxmi Nagar
                </p>
                <p className="mt-3 text-sm text-muted-foreground">Delhi – 110092, India</p>
                <a
                  className="mt-6 inline-flex w-fit items-center gap-2 border-b border-gold-strong pb-2 text-xs font-bold tracking-[0.1em] text-foreground hover:text-gold-strong"
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GET DIRECTIONS <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
