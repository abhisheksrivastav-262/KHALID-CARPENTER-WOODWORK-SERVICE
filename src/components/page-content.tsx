import {
  ceiling,
  customFurniture,
  customWardrobe,
  heroLivingRoom,
  interior,
  kitchen,
  modularKitchen,
  renovation,
} from "@/lib/site-images";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createEnquiryMessage, createWhatsAppUrl } from "@/lib/contact";
import { ContactCta, PageHero } from "@/components/site-layout";
import { serviceCards } from "@/components/service-data";

export function ServiceGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {serviceCards.map((service, index) => (
        <article className="group border border-border bg-card" key={service.title}>
          <a href={service.href} className="block overflow-hidden">
            <img
              src={service.image}
              alt={service.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
            />
          </a>
          <div className="p-5 sm:p-6">
            <p className="text-xs font-bold tracking-[0.15em] text-gold-strong">0{index + 1}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
            <a
              href={service.href}
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.08em] text-foreground hover:text-gold-strong"
            >
              LEARN MORE <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ContentSection({
  eyebrow,
  title,
  children,
  tone = "background",
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  tone?: "background" | "warm" | "ink";
}) {
  const toneClass =
    tone === "warm" ? "bg-warm" : tone === "ink" ? "bg-ink text-background" : "bg-background";
  return (
    <section className={`section-pad ${toneClass}`}>
      <div className="site-container">
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold-strong">{eyebrow}</p>
          <h2 className="font-display text-[clamp(1.625rem,3vw,2.625rem)] font-medium leading-tight md:text-[2.625rem]">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li className="flex gap-4 border-t border-border py-4" key={item}>
          <span className="font-display text-xl text-gold-strong">0{index + 1}</span>
          <span className="text-sm leading-6 text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

const galleryItems = [
  {
    title: "Warm living room",
    categories: ["Living Room"],
    image: heroLivingRoom.url,
    alt: "Warm living room with walnut details and soft neutral furnishings",
  },
  {
    title: "Modular kitchen",
    categories: ["Modular Kitchen"],
    image: modularKitchen.url,
    alt: "Walnut and ivory modular kitchen with stone counters",
  },
  {
    title: "Custom wardrobe",
    categories: ["Wardrobes"],
    image: customWardrobe.url,
    alt: "Floor-to-ceiling walnut wardrobe with custom dressing space",
  },
  {
    title: "Handcrafted furniture",
    categories: ["Wooden Furniture"],
    image: customFurniture.url,
    alt: "Handcrafted walnut furniture and timber detailing",
  },
  {
    title: "Bright living space",
    categories: ["Interior Decoration"],
    image: interior.url,
    alt: "Bright living room with carefully arranged furniture",
  },
  {
    title: "Open-plan interior",
    categories: ["Modular Kitchen"],
    image: kitchen.url,
    alt: "Open-plan interior with modern kitchen and warm wood details",
  },
  {
    title: "Ceiling and interior work",
    categories: ["False Ceiling"],
    image: ceiling.url,
    alt: "Contemporary interior with sculpted ceiling and staircase",
  },
  {
    title: "Bedroom renovation",
    categories: ["Bedroom", "Renovation"],
    image: renovation.url,
    alt: "Calm bedroom with modern bed and fitted details",
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

export function ProjectGallery() {
  const [filter, setFilter] = useState("All");
  const [activeImage, setActiveImage] = useState<(typeof galleryItems)[number] | null>(null);
  const visibleItems = galleryItems.filter(
    (item) => filter === "All" || item.categories.includes(filter),
  );
  const activeIndex = activeImage
    ? visibleItems.findIndex((item) => item.title === activeImage.title)
    : -1;
  function moveImage(direction: number) {
    if (!visibleItems.length) return;
    const currentIndex = Math.max(0, activeIndex);
    setActiveImage(
      visibleItems[(currentIndex + direction + visibleItems.length) % visibleItems.length],
    );
  }
  useEffect(() => {
    if (!activeImage) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeImage]);
  return (
    <>
      <div className="mb-7 flex flex-wrap gap-2" aria-label="Filter gallery">
        {galleryFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={`min-h-11 border px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${filter === item ? "border-ink bg-ink text-background" : "border-border bg-transparent text-muted-foreground hover:border-gold-strong hover:text-foreground"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <button
            type="button"
            aria-label={`View ${item.title}`}
            onClick={() => setActiveImage(item)}
            className="group relative aspect-[4/3] overflow-hidden bg-warm text-left"
            key={item.title}
          >
            <img
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={item.image}
              alt={item.alt}
              loading="lazy"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-5 pb-4 pt-14 font-display text-2xl text-background">
              {item.title}
            </span>
          </button>
        ))}
      </div>
      <p className="mt-5 text-xs text-muted-foreground">
        Representative interior inspiration. Images illustrate design possibilities and are not
        presented as completed client projects.
      </p>
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
              moveImage(-1);
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
              moveImage(1);
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
            ×
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
    </>
  );
}

export function ReviewsContent() {
  const reviews = [
    "Exceptional carpenter, unparalleled craftsmanship. Honest, skilled, and dedicated, transforming wood into art with precision.",
    "Very good service, nice work, experienced Carpenter works. My work is done shortly time.",
    "He is sincere and honest. My wooden work is completed within time.",
  ];
  return (
    <>
      <div className="mb-10 flex flex-wrap items-end gap-x-7 gap-y-3 border-b border-border pb-8">
        <div className="font-display text-7xl leading-none text-gold-strong">
          4.9<span className="text-3xl">/5</span>
        </div>
        <div>
          <div className="flex gap-1 text-gold-strong" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} aria-hidden="true" className="size-4 fill-current" />
            ))}
          </div>
          <p className="mt-2 text-xs tracking-[0.1em] text-muted-foreground">15 GOOGLE REVIEWS</p>
        </div>
      </div>
      <div className="grid gap-0 md:grid-cols-3">
        {reviews.map((review, i) => (
          <blockquote
            key={review}
            className="flex min-h-56 flex-col justify-between border-b border-border py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
          >
            <div className="flex gap-1 text-gold-strong" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, j) => (
                <Star key={j} aria-hidden="true" className="size-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-5 font-display text-2xl leading-snug">“{review}”</p>
            <footer className="mt-5 text-xs font-semibold tracking-[0.15em] text-muted-foreground">
              GOOGLE REVIEW 0{i + 1}
            </footer>
          </blockquote>
        ))}
      </div>
    </>
  );
}

export function EnquiryForm({
  idPrefix = "enquiry",
  heading = "Send an enquiry",
  description = "Your details open in a WhatsApp message addressed to TIP TOP INTERIORS at 9212461719.",
  submitLabel = "SUBMIT ENQUIRY",
}: {
  idPrefix?: string;
  heading?: string | null;
  description?: string | null;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState("");
  const [whatsAppHref, setWhatsAppHref] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const propertyType = String(data.get("propertyType") ?? "").trim() || "Not specified";
    const message = String(data.get("message") ?? "").trim();
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) {
      setStatus("Enter a valid mobile number with 10 to 15 digits.");
      form.querySelector<HTMLInputElement>('input[name="phone"]')?.focus();
      return;
    }
    const formattedMessage = createEnquiryMessage({ name, phone, service, propertyType, message });
    const href = createWhatsAppUrl(formattedMessage);
    setWhatsAppHref(href);
    const whatsappWindow = window.open(href, "_blank");
    if (whatsappWindow) whatsappWindow.opener = null;
    setStatus(
      whatsappWindow
        ? "WhatsApp opened with your enquiry. Press Send in WhatsApp to submit it."
        : "WhatsApp did not open automatically. Use the link below to continue.",
    );
  }
  return (
    <form
      className="border border-border bg-paper p-5 shadow-[0_18px_50px_-35px_rgba(30,24,17,0.45)] sm:p-8"
      onSubmit={submit}
      aria-label={heading ?? "Project enquiry form"}
    >
      {heading && (
        <h2 className="mb-2 font-display text-3xl font-semibold leading-tight">{heading}</h2>
      )}
      {description && <p className="mb-6 text-sm leading-6 text-muted-foreground">{description}</p>}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-semibold" htmlFor={`${idPrefix}-name`}>
          Full Name <span className="text-gold-strong">Required</span>
          <Input
            id={`${idPrefix}-name`}
            name="name"
            placeholder="Your full name"
            autoComplete="name"
            required
            className="h-12 rounded-none border-border bg-background px-4 text-sm"
          />
        </label>
        <label className="grid gap-2 text-xs font-semibold" htmlFor={`${idPrefix}-phone`}>
          Mobile Number <span className="text-gold-strong">Required</span>
          <Input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            pattern="[+0-9() -]{10,18}"
            placeholder="Your phone number"
            autoComplete="tel"
            required
            className="h-12 rounded-none border-border bg-background px-4 text-sm"
          />
        </label>
        <label className="grid gap-2 text-xs font-semibold" htmlFor={`${idPrefix}-service`}>
          Select Service <span className="text-gold-strong">Required</span>
          <select
            id={`${idPrefix}-service`}
            name="service"
            required
            defaultValue=""
            className="h-12 rounded-none border border-border bg-background px-4 text-sm text-foreground"
          >
            <option value="" disabled>
              Select a service
            </option>
            {[
              "Woodwork & Carpentry",
              "Custom Furniture",
              "Interior Decoration",
              "Modular Kitchen",
              "POP & False Ceiling",
              "Painting & Polishing",
              "Home Renovation",
              "House Maintenance",
              "Civil Work",
              "Property Sale & Purchase",
              "Property Renting",
              "Other",
            ].map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-xs font-semibold" htmlFor={`${idPrefix}-property`}>
          Property Type <span className="text-muted-foreground">Optional</span>
          <select
            id={`${idPrefix}-property`}
            name="propertyType"
            defaultValue=""
            className="h-12 rounded-none border border-border bg-background px-4 text-sm text-foreground"
          >
            <option value="">Choose if relevant</option>
            {["Apartment", "Independent house", "Villa", "Shop or office", "Other"].map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label
          className="grid gap-2 text-xs font-semibold sm:col-span-2"
          htmlFor={`${idPrefix}-message`}
        >
          Message / Project Details <span className="text-gold-strong">Required</span>
          <Textarea
            id={`${idPrefix}-message`}
            name="message"
            placeholder="Tell us a little about your project"
            required
            className="min-h-32 resize-y rounded-none border-border bg-background px-4 py-3 text-sm"
          />
        </label>
      </div>
      <Button
        className="mt-6 h-12 w-full rounded-none bg-primary text-xs font-bold tracking-[0.12em] text-primary-foreground hover:bg-primary/90"
        type="submit"
      >
        {submitLabel} <ArrowUpRight aria-hidden="true" />
      </Button>
      <p
        aria-live="polite"
        className="mt-3 min-h-5 text-xs leading-5 text-muted-foreground"
        role="status"
      >
        {status || "Required fields are name, mobile, service and project details."}
      </p>
      {whatsAppHref && (
        <a
          href={whatsAppHref}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-gold-strong underline underline-offset-4"
        >
          OPEN THE PREPARED WHATSAPP ENQUIRY <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      )}
    </form>
  );
}

export function HeroPage(props: React.ComponentProps<typeof PageHero>) {
  return <PageHero {...props} />;
}
export { ContactCta };
