import Link from "next/link";
import {
  CONTACT_EMAIL,
  VISIBLE_PHONE,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";
import { BrandLogo } from "@/components/brand-logo";
import { SITE_NAME, SITE_ROUTES, navigation, products, services } from "@/content/site";
import { SiteHeader } from "@/components/site-header";

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="overflow-x-hidden pt-24">{children}</main>
      <footer className="pb-10 pt-20">
        <div className="page-shell">
          <div className="section-knot px-6 py-8 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]">
              <div>
                <div className="flex items-center gap-3">
                  <BrandLogo className="h-auto w-[112px] sm:w-[132px]" />
                </div>
                <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">
                  Software a medida, productos empresariales y decisiones técnicas
                  con foco en claridad, velocidad y crecimiento sostenido.
                </p>
                <a
                  href={buildWhatsAppUrl({
                    source: "Footer",
                    message: "Hola, quiero conversar sobre una oportunidad para mi negocio.",
                  })}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary mt-6"
                >
                  Hablar por WhatsApp
                </a>
              </div>

              <div>
                <p className="font-display text-lg font-semibold text-[var(--foreground)]">
                  Navegación
                </p>
                <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="hover:text-[var(--foreground)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-display text-lg font-semibold text-[var(--foreground)]">
                  Oferta
                </p>
                <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                  {services.map((item) => (
                    <li key={item.title}>{item.title}</li>
                  ))}
                  {products.slice(0, 2).map((item) => (
                    <li key={item.title}>{item.title}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-display text-lg font-semibold text-[var(--foreground)]">
                  Contacto
                </p>
                <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                  <p>{VISIBLE_PHONE}</p>
                  <p>{CONTACT_EMAIL}</p>
                  <p>Lunes a viernes · 9:00 a 18:00</p>
                </div>
                <div className="mt-6 grid gap-3">
                  <Link href={SITE_ROUTES.contact} className="button-secondary">
                    Ir a contacto
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 {SITE_NAME}. Todos los derechos reservados.</p>
              <div className="flex items-center gap-4">
                <Link href={SITE_ROUTES.services} className="hover:text-[var(--foreground)]">
                  Servicios
                </Link>
                <Link href={SITE_ROUTES.products} className="hover:text-[var(--foreground)]">
                  Productos
                </Link>
                <Link href={SITE_ROUTES.contact} className="hover:text-[var(--foreground)]">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
