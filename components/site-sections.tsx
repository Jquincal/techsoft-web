import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Globe2,
  Gauge,
  Mail,
  MessageCircleMore,
  PhoneCall,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import {
  CONTACT_EMAIL,
  VISIBLE_PHONE,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";
import {
  SITE_ROUTES,
  aboutIntro,
  aboutPillars,
  principles,
  processSteps,
  products,
  services,
  stats,
  testimonials,
  type ProductItem,
  type ServiceIconKey,
} from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

const iconMap: Record<ServiceIconKey, React.ComponentType<{ size?: number; className?: string }>> = {
  globe: Globe2,
  server: Server,
  sparkles: Sparkles,
  shield: ShieldCheck,
  gauge: Gauge,
  users: UsersRound,
};

export function PageIntro({
  title,
  description,
  primaryLabel = "Hablar por WhatsApp",
  primaryHref = buildWhatsAppUrl({
    source: "Introducción de página",
    message: "Quiero conversar sobre una necesidad puntual de mi negocio.",
  }),
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="section-knot overflow-hidden px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_28%),radial-gradient(circle_at_right,rgba(14,165,233,0.12),transparent_24%)]" />
          <div className="relative max-w-4xl">
            <h1 className="font-display text-4xl font-semibold tracking-[-0.07em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={primaryHref}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                <MessageCircleMore size={16} />
                {primaryLabel}
              </a>
              {secondaryHref && secondaryLabel ? (
                <Link href={secondaryHref} className="button-secondary">
                  {secondaryLabel}
                  <ArrowRight size={16} />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="section-space pt-8">
      <div className="page-shell">
        <div className="section-knot px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[28px] border border-white/60 bg-white/78 p-6 backdrop-blur">
                <p className="font-display text-4xl font-semibold tracking-[-0.06em] text-[var(--foreground)]">
                  {item.value}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)]">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesOverview() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          title="Servicios pensados para destrabar decisiones, procesos y crecimiento."
          description="Trabajamos sobre las capas que más impactan: experiencia digital, operación interna y criterio técnico para escalar sin improvisar."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <article key={service.title} className="surface-card p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-strong)]">
                  <Icon size={26} />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  {service.summary}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[var(--muted-strong)]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--brand)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-[22px] bg-[var(--brand-softer)] px-4 py-4 text-sm leading-6 text-[var(--muted-strong)]">
                  {service.highlight}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServicesDeepDive() {
  return (
    <section className="section-space pt-0">
      <div className="page-shell space-y-7">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          const reverse = index % 2 === 1;

          return (
            <article
              key={service.title}
              className="section-knot overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-10"
            >
              <div
                className={[
                  "grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]",
                  reverse ? "lg:[&>*:first-child]:order-2" : "",
                ].join(" ")}
              >
                <div className="rounded-[30px] bg-[linear-gradient(180deg,#081120,#12305f)] p-8 text-white shadow-[var(--shadow-hero)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-white">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-6 font-display text-4xl font-semibold tracking-[-0.06em]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-white/72">
                    {service.highlight}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-strong)]">
                    Cómo trabajamos esta capa
                  </p>
                  <p className="mt-4 text-xl leading-8 text-[var(--muted-strong)]">
                    {service.description}
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-[24px] border border-[var(--border)] bg-white/82 px-5 py-4 text-sm font-medium text-[var(--foreground)] backdrop-blur"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function ProductsGrid({ preview = false }: { preview?: boolean }) {
  const items = preview ? products.slice(0, 3) : products;

  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          title={
            preview
              ? "Productos listos para acelerar la operación y el crecimiento."
              : "Productos con foco en adopción, claridad y operación real."
          }
          description="Cada producto fue pensado para resolver un frente clave del negocio sin meter complejidad innecesaria."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {items.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>

        {preview ? (
          <div className="mt-10 flex justify-start">
            <Link href={SITE_ROUTES.products} className="button-secondary">
              Ver todos los productos
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: ProductItem }) {
  return (
    <article className="surface-card group overflow-hidden p-7">
      <div
        className={`rounded-[26px] bg-gradient-to-br ${product.accent} p-6 text-white shadow-[var(--shadow-soft)]`}
      >
        <div className="flex items-center justify-between gap-3">
          <p className="font-display text-3xl font-semibold tracking-[-0.05em]">
            {product.title}
          </p>
          <BriefcaseBusiness size={22} className="opacity-75" />
        </div>
        <p className="mt-3 max-w-sm text-sm leading-6 text-white/76">
          {product.summary}
        </p>
      </div>

      <p className="mt-6 text-base leading-7 text-[var(--muted)]">
        {product.description}
      </p>

      <ul className="mt-6 space-y-3 text-sm text-[var(--muted-strong)]">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--brand)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={buildWhatsAppUrl({
            source: "Productos",
            product: product.title,
          })}
          target="_blank"
          rel="noreferrer"
          className="button-primary w-full sm:w-auto"
        >
          Contactar
        </a>
        <Link href={SITE_ROUTES.contact} className="button-secondary w-full sm:w-auto">
          Ir a contacto
        </Link>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          title="Lo que pasa cuando el software deja de ser un problema."
          description="Historias de clientes que necesitaban ordenar su operación, vender mejor o construir una base digital más sólida."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.nombre} className="glass-card p-7">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: item.estrellas }, (_, index) => (
                  <Star key={`${item.nombre}-${index}`} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-6 text-base leading-8 text-[var(--muted-strong)]">
                “{item.comentario}”
              </p>
              <div className="mt-8">
                <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                  {item.nombre}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.empresa}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutNarrative() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <div className="section-knot px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <SectionHeading
              title="Construimos tecnología útil para negocios que ya no quieren improvisar."
              description="TechSoft Solutions nace de una idea simple: el software correcto debe hacer más clara la operación, más rápida la ejecución y más fuerte la capacidad de crecer."
            />
          </div>

          <div className="surface-card p-8">
            <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
              {aboutIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-3">
              {principles.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[var(--border)] bg-[var(--brand-softer)] px-4 py-4 text-sm font-medium text-[var(--muted-strong)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MissionValues() {
  return (
    <section className="section-space pt-0">
      <div className="page-shell">
        <div className="grid gap-6 lg:grid-cols-3">
          {aboutPillars.map((pillar) => {
            const Icon = iconMap[pillar.icon];

            return (
              <article key={pillar.title} className="surface-card p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-strong)]">
                  <Icon size={26} />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  {pillar.copy}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          title="Una forma de trabajo diseñada para bajar complejidad y mantener foco."
          description="No avanzamos por intuición ni por modas. Cada etapa existe para alinear negocio, producto y ejecución."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="surface-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--brand-softer)] font-display text-lg font-semibold text-[var(--brand-strong)]">
                0{index + 1}
              </div>
              <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection({
  source,
  title,
  description,
  showBudget = false,
}: {
  source: string;
  title: string;
  description: string;
  showBudget?: boolean;
}) {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="section-knot hero-grid overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_right,rgba(8,17,32,0.08),transparent_28%)]" />
            <div className="relative">
              <SectionHeading title={title} description={description} />

              <div className="mt-8 grid gap-4">
                <div className="rounded-[24px] border border-white/60 bg-white/86 p-5 backdrop-blur">
                  <div className="flex items-center gap-3 text-[var(--foreground)]">
                    <PhoneCall size={18} className="text-[var(--brand-strong)]" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)]">
                      Teléfono
                    </span>
                  </div>
                  <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                    {VISIBLE_PHONE}
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/60 bg-white/86 p-5 backdrop-blur">
                  <div className="flex items-center gap-3 text-[var(--foreground)]">
                    <Mail size={18} className="text-[var(--brand-strong)]" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)]">
                      Email
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                    {CONTACT_EMAIL}
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/60 bg-white/86 p-5 backdrop-blur">
                  <div className="flex items-center gap-3 text-[var(--foreground)]">
                    <Clock3 size={18} className="text-[var(--brand-strong)]" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)]">
                      Horario
                    </span>
                  </div>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                    Lunes a viernes · 9:00 a 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card p-6 sm:p-8">
            <ContactForm source={source} showBudget={showBudget} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaPanel({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="section-space pt-6">
      <div className="page-shell">
        <div className="overflow-hidden rounded-[38px] bg-[linear-gradient(135deg,#081120_0%,#102347_45%,#2563eb_100%)] px-6 py-10 text-white shadow-[var(--shadow-hero)] sm:px-8 lg:px-10 lg:py-12">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72 sm:text-lg">
              {description}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppUrl({
                source: "CTA final",
                message: "Hola, quiero conversar sobre un proyecto para mi negocio.",
              })}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--navy)]"
            >
              <MessageCircleMore size={16} />
              Hablar por WhatsApp
            </a>
            <Link
              href={SITE_ROUTES.contact}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white"
            >
              Ir a contacto
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
