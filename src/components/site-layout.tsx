import { useEffect, useState } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/contact";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const serviceNavigation = [
  { label: "All services", href: "/services" },
  { label: "Woodwork & carpentry", href: "/services/woodwork" },
  { label: "Interior design", href: "/services/interior-design" },
  { label: "Renovation & maintenance", href: "/services/renovation" },
];

export function SiteLayout() {
  useEffect(() => {
    const fallbackBrokenImage = (event: Event) => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied) return;
      image.dataset.fallbackApplied = "true";
      image.src = "/images/hero-living-room.jpg";
    };
    document.addEventListener("error", fallbackBrokenImage, true);
    return () => document.removeEventListener("error", fallbackBrokenImage, true);
  }, []);

  return (
    <>
      <SiteHeader />
      <div className="pb-16 sm:pb-0">
        <Outlet />
        <SiteFooter />
      </div>
      <a
        href={createWhatsAppUrl("Hello Md. Khalid, I would like to enquire about your services.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Khalid Carpenter and Woodwork Service Interior Decorator on WhatsApp"
        className="floating-whatsapp fixed bottom-20 right-4 z-[60] grid size-14 place-items-center rounded-full border border-gold bg-ink text-gold shadow-xl transition-[transform,opacity] hover:scale-105 sm:bottom-5"
      >
        <MessageCircle aria-hidden="true" className="size-6" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-2 gap-2 border-t border-white/10 bg-ink p-2 sm:hidden">
        <a
          href="tel:9212461719"
          className="flex min-h-11 items-center justify-center gap-2 bg-primary text-xs font-bold tracking-wide text-primary-foreground"
        >
          <Phone aria-hidden="true" className="size-4" /> CALL NOW
        </a>
        <a
          href={createWhatsAppUrl("Hello Md. Khalid, I would like to enquire about your services.")}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-11 items-center justify-center gap-2 border border-gold text-xs font-bold tracking-wide text-gold"
        >
          <MessageCircle aria-hidden="true" className="size-4" /> WHATSAPP
        </a>
      </div>
    </>
  );
}

function Brand({ showDecorator = true }: { showDecorator?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
      aria-label={`${showDecorator ? "Khalid Carpenter and Woodwork Service Interior Decorator" : "Khalid Carpenter and Woodwork Service"} home`}
    >
      <span className="grid size-9 shrink-0 place-items-center border border-gold/80 font-display text-xl leading-none text-gold sm:size-10">
        K
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="mb-1 text-[0.48rem] font-bold tracking-[0.18em] text-gold sm:text-[0.54rem]">
          TIP TOP INTERIOR
        </span>
        <span className="font-display text-lg font-semibold tracking-[0.04em] text-background sm:text-xl">
          KHALID
        </span>
        <span className="mt-1 whitespace-nowrap text-[0.54rem] font-semibold tracking-[0.08em] text-background sm:text-[0.62rem]">
          CARPENTER &amp; WOODWORK SERVICE
        </span>
        {showDecorator && (
          <span className="mt-1 text-[0.54rem] font-semibold tracking-[0.16em] text-gold sm:text-[0.62rem]">
            INTERIOR DECORATOR
          </span>
        )}
      </span>
    </Link>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-ink text-background shadow-lg">
      <div className="border-b border-background/10">
        <div className="site-container flex h-8 items-center justify-end gap-5 text-xs tracking-[0.08em] text-background/75">
          <span className="hidden sm:inline">LAXMI NAGAR · DELHI</span>
          <a
            className="inline-flex items-center gap-2 transition-colors hover:text-gold"
            href="tel:9212461719"
          >
            <Phone aria-hidden="true" className="size-3" />
            CALL NOW · 9212461719
          </a>
        </div>
      </div>
      <div className="site-container relative flex min-h-[4.5rem] items-center justify-between gap-4">
        <Brand showDecorator={false} />
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navigation.slice(0, 2).map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
          <div className="group relative py-6">
            <a href="/services" className="nav-link inline-flex items-center gap-1">
              Services{" "}
              <ChevronDown
                aria-hidden="true"
                className="size-3 transition-transform group-hover:rotate-180"
              />
            </a>
            <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 border border-background/10 bg-ink p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {serviceNavigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm text-background/75 transition-colors hover:bg-background/5 hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          {navigation.slice(2).map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={createWhatsAppUrl(
              "Hello Md. Khalid, I would like to enquire about your services.",
            )}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 items-center gap-2 bg-primary px-5 text-xs font-bold tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            WHATSAPP <ArrowRight aria-hidden="true" className="size-4" />
          </a>
          <button
            className="grid size-10 place-items-center border border-background/20 bg-transparent text-background hover:bg-background/10 lg:hidden"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full border-t border-background/10 bg-ink px-4 pb-5 pt-2 shadow-lg lg:hidden"
          >
            {[...navigation.slice(0, 2), ...serviceNavigation, ...navigation.slice(2)].map(
              (item) => (
                <a
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center justify-between border-b border-background/10 text-sm text-background/90"
                  href={item.href}
                >
                  {item.label}
                  <ArrowRight aria-hidden="true" className="size-4 text-gold" />
                </a>
              ),
            )}
            <a
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold"
              href="tel:9212461719"
            >
              <Phone aria-hidden="true" className="size-4" />
              Call 9212461719
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-ink text-background">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1fr_auto_auto] md:items-start md:gap-16">
        <div>
          <Brand />
          <p className="mt-5 max-w-sm text-xs leading-6 text-background/65">
            Khalid Carpenter and Woodwork Service Interior Decorator
            <br />
            Interior Decoration | Woodwork | Carpentry | Renovation
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.16em] text-gold">QUICK LINKS</p>
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-background/75"
          >
            {[
              ...navigation.slice(0, 2),
              { label: "Services", href: "/services" },
              ...navigation.slice(2),
            ].map((item) => (
              <a className="transition-colors hover:text-gold" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.16em] text-gold">CONTACT</p>
          <a className="block text-sm text-background/75 hover:text-gold" href="tel:9212461719">
            9212461719
          </a>
          <p className="mt-3 max-w-xs text-xs leading-5 text-background/60">
            Krishna Kunj, Laxmi Nagar, Delhi – 110092
          </p>
          <a
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold"
            href={createWhatsAppUrl(
              "Hello Md. Khalid, I would like to enquire about your services.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-background/15">
        <div className="site-container flex flex-col gap-2 py-4 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 Khalid Carpenter and Woodwork Service Interior Decorator. All rights reserved.
          </span>
          <span>Laxmi Nagar, Delhi – 110092, India</span>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="site-container pt-7 text-xs tracking-wide text-muted-foreground"
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <a href="/" className="hover:text-gold-strong">
            Home
          </a>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <a href={item.href} className="hover:text-gold-strong">
                {item.label}
              </a>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumb: { label: string; href?: string }[];
}) {
  return (
    <>
      <Breadcrumbs items={breadcrumb} />
      <section className="site-container grid gap-8 py-10 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-14 md:py-14">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold-strong">{eyebrow}</p>
          <h1 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.04] text-foreground sm:text-[3rem] md:text-[3.25rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{description}</p>
        </div>
        <img
          className="aspect-[16/10] w-full object-cover"
          src={image}
          alt={imageAlt}
          fetchPriority="high"
        />
      </section>
    </>
  );
}

export function ContactCta({
  title = "Let’s talk about your space",
  text = "Tell us what you have in mind and speak with Md. Khalid about the next step.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink text-background">
      <div className="site-container flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-20">
        <div>
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-gold">
            KHALID CARPENTER &amp; WOODWORK SERVICE
          </p>
          <h2 className="font-display text-[clamp(1.625rem,3vw,2.625rem)] font-medium md:text-[2.625rem]">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-background/65">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
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
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-gold px-5 text-xs font-bold tracking-wide text-gold"
          >
            <MessageCircle aria-hidden="true" className="size-4" /> WHATSAPP
          </a>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 px-3 text-xs font-bold tracking-wide text-background hover:text-gold"
          >
            CONTACT PAGE <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
