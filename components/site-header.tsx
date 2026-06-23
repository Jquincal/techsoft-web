"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircleMore, X } from "lucide-react";
import { useState } from "react";
import { SITE_NAME, SITE_ROUTES, navigation } from "@/content/site";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";

function isActive(pathname: string, matches: string[]) {
  return matches.some((candidate) => pathname === candidate);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="page-shell pt-4">
        <div className="flex items-center justify-between gap-3 rounded-full border border-white/60 bg-white/78 px-4 py-3 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:px-6">
          <Link
            href={SITE_ROUTES.home}
            className="flex min-w-0 flex-1 items-center gap-3 text-[var(--foreground)] lg:flex-none"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f172a,#2563eb)] font-display text-lg font-bold text-white shadow-lg shadow-blue-500/20">
              T
            </span>
            <span className="truncate font-display text-base font-semibold tracking-[-0.04em] sm:text-xl">
              {SITE_NAME}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = pathname ? isActive(pathname, item.matches) : false;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-medium",
                    active
                      ? "bg-[var(--brand-soft)] text-[var(--brand-strong)]"
                      : "text-[var(--muted-strong)] hover:bg-white hover:text-[var(--foreground)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              <MessageCircleMore size={16} />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-3 rounded-[28px] border border-white/60 bg-white/92 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl lg:hidden">
            <nav className="grid gap-2">
              {navigation.map((item) => {
                const active = pathname ? isActive(pathname, item.matches) : false;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={[
                      "rounded-2xl px-4 py-3 text-sm font-medium",
                      active
                        ? "bg-[var(--brand-soft)] text-[var(--brand-strong)]"
                        : "text-[var(--muted-strong)] hover:bg-[var(--brand-softer)] hover:text-[var(--foreground)]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="button-primary mt-4 w-full"
            >
              <MessageCircleMore size={16} />
              Conversar por WhatsApp
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
