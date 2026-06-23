"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { useRef } from "react";
import type { HeroCard } from "@/content/site";
import { SITE_ROUTES } from "@/content/site";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";

interface HeroParallaxProps {
  products: HeroCard[];
}

export function HomeHeroParallax({ products }: HeroParallaxProps) {
  const repeated = Array.from({ length: 8 }, (_, index) => products[index % products.length]);
  const firstRow = repeated.slice(0, 4);
  const secondRow = repeated.slice(4, 8);
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 90, damping: 24, mass: 0.35, bounce: 0 };
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 320]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -320]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.18], [0.56, 1]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.24], [32, -12]),
    springConfig,
  );

  return (
    <>
      <section className="relative overflow-hidden px-0 pb-14 pt-6 lg:hidden">
        <div className="page-shell">
          <div className="section-knot hero-grid overflow-hidden px-6 py-10 sm:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_40%),radial-gradient(circle_at_right,rgba(14,165,233,0.16),transparent_36%)]" />
            <div className="relative">
              <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-[-0.07em] text-[var(--foreground)] sm:text-5xl">
                Transformamos ideas en software que hace crecer tu negocio.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                Diseñamos productos digitales, sistemas internos y plataformas web
                con una mezcla precisa de estrategia, experiencia y ejecución.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={primaryWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  <MessageCircleMore size={16} />
                  Hablar por WhatsApp
                </a>
                <Link href={SITE_ROUTES.services} className="button-secondary">
                  Ver servicios
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative mt-10 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {products.map((product) => (
                <div
                  key={product.title}
                  className="min-w-[18rem] rounded-[28px] border border-white/70 bg-white/90 p-3 shadow-[var(--shadow-card)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="18rem"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-strong)]">
                      {product.category}
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                      {product.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {product.blurb}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="relative hidden h-[185vh] overflow-hidden lg:block">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(8,17,32,0.12),transparent_22%)]" />

        <div className="sticky top-0 flex min-h-screen items-center">
          <div className="page-shell relative">
            <div className="max-w-3xl">
              <p className="max-w-sm text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-strong)]">
                Diseñamos, desarrollamos y hacemos despegar software con criterio.
              </p>
              <h1 className="mt-6 max-w-4xl font-display text-6xl font-semibold leading-[0.95] tracking-[-0.08em] text-[var(--foreground)] xl:text-8xl">
                Transformamos ideas en software que hace crecer tu negocio.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Creamos plataformas, sistemas internos y productos digitales con
                una mezcla precisa de estrategia, experiencia y ejecución técnica.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <a
                  href={primaryWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  <MessageCircleMore size={17} />
                  Conversar por WhatsApp
                </a>
                <Link href={SITE_ROUTES.services} className="button-secondary">
                  Ver servicios
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <motion.div
              style={{
                y: translateY,
                opacity,
              }}
              className="mt-16 space-y-6"
            >
              <motion.div
                style={{ x: translateX }}
                className="flex flex-row-reverse gap-6 will-change-transform"
              >
                {firstRow.map((product) => (
                  <ProductCard
                    key={`${product.title}-first`}
                    product={product}
                  />
                ))}
              </motion.div>

              <motion.div
                style={{ x: translateXReverse }}
                className="flex flex-row gap-6 will-change-transform"
              >
                {secondRow.map((product) => (
                  <ProductCard
                    key={`${product.title}-second`}
                    product={product}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ product }: { product: HeroCard }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.01,
      }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="group/product relative h-[24rem] w-[22rem] flex-shrink-0 overflow-hidden rounded-[34px] border border-white/65 bg-white shadow-[var(--shadow-hero)]"
    >
      <Link href={product.link} className="relative block h-full w-full">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,32,0.04),rgba(8,17,32,0.34))]" />
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="22rem"
          className="object-cover object-center transition duration-500 group-hover/product:scale-[1.02]"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
          <span className="rounded-full bg-white/86 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-strong)] backdrop-blur">
            {product.category}
          </span>
          <span className="rounded-full border border-white/60 bg-[rgba(8,17,32,0.58)] px-3 py-1 text-xs font-medium text-white/88 backdrop-blur">
            {product.metric}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="rounded-[28px] border border-white/20 bg-[rgba(8,17,32,0.76)] p-5 text-white backdrop-blur-xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em]">
              {product.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/74">{product.blurb}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
