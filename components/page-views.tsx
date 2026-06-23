import type { Metadata } from "next";
import { HomeHeroParallax } from "@/components/home-hero-parallax";
import { SiteShell } from "@/components/site-shell";
import {
  AboutNarrative,
  ContactSection,
  CtaPanel,
  MissionValues,
  PageIntro,
  ProcessSection,
  ProductsGrid,
  ServicesDeepDive,
  ServicesOverview,
  StatsBand,
  TestimonialsSection,
} from "@/components/site-sections";
import { SITE_ROUTES, heroCards } from "@/content/site";

export const homeMetadata: Metadata = {
  title: "Inicio",
};

export const servicesMetadata: Metadata = {
  title: "Servicios",
};

export const productsMetadata: Metadata = {
  title: "Productos",
};

export const contactMetadata: Metadata = {
  title: "Contacto",
};

export const aboutMetadata: Metadata = {
  title: "Nosotros",
};

export function HomePage() {
  return (
    <SiteShell>
      <HomeHeroParallax products={heroCards} />
      <StatsBand />
      <ServicesOverview />
      <ProductsGrid preview />
      <TestimonialsSection />
      <AboutNarrative />
      <CtaPanel
        title="Cuando el software acompaña bien, el negocio se siente más liviano."
        description="Si querés ordenar procesos, lanzar un producto o construir una base digital más sólida, podemos pensarlo juntos."
      />
    </SiteShell>
  );
}

export function ServicesPage() {
  return (
    <SiteShell>
      <PageIntro
        title="Servicios para marcas y equipos que necesitan ejecutar con más claridad."
        description="Diseñamos experiencias web, sistemas internos y decisiones técnicas con foco en negocio real: menos fricción, más lectura operativa y una base mejor preparada para crecer."
        secondaryLabel="Ver productos"
        secondaryHref={SITE_ROUTES.products}
      />
      <ServicesDeepDive />
      <ProcessSection />
      <ContactSection
        source="Servicios"
        title="Conversemos sobre el frente que hoy más te frena."
        description="Si ya sabés qué querés construir o necesitás claridad antes de decidir, abrimos la conversación por WhatsApp con tu mensaje listo."
      />
    </SiteShell>
  );
}

export function ProductsPage() {
  return (
    <SiteShell>
      <PageIntro
        title="Productos listos para ordenar la operación y ganar velocidad."
        description="Nuestra línea de productos aborda ventas, operación, analytics, e-commerce, personas y gestión de proyectos con una lógica simple: resolver lo importante sin sumar ruido."
        secondaryLabel="Ir a contacto"
        secondaryHref={SITE_ROUTES.contact}
      />
      <ProductsGrid />
      <ProcessSection />
      <ContactSection
        source="Productos"
        title="¿Querés evaluar cuál producto encaja mejor con tu negocio?"
        description="Podés escribirnos desde el formulario o tocar cualquier tarjeta para abrir WhatsApp con el producto ya preseleccionado."
        showBudget
      />
    </SiteShell>
  );
}

export function ContactPage() {
  return (
    <SiteShell>
      <PageIntro
        title="Abramos la conversación y definamos el siguiente paso con claridad."
        description="Contanos qué querés construir, optimizar o destrabar. Te respondemos por WhatsApp con el contexto ya armado desde el formulario."
        secondaryLabel="Ver servicios"
        secondaryHref={SITE_ROUTES.services}
      />
      <ContactSection
        source="Contacto"
        title="Tu proyecto, directo a WhatsApp."
        description="Compartí la necesidad, el contexto y, si querés, un rango estimado. El objetivo no es llenarte de pasos: es acelerar la conversación correcta."
        showBudget
      />
    </SiteShell>
  );
}

export function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        title="Un equipo que combina criterio técnico, diseño claro y foco real en negocio."
        description="No nos interesa entregar software para cerrar una checklist. Nos interesa que el resultado se use, sostenga la operación y ayude a decidir mejor."
        secondaryLabel="Hablar con nosotros"
        secondaryHref={SITE_ROUTES.contact}
      />
      <AboutNarrative />
      <MissionValues />
      <StatsBand />
      <CtaPanel
        title="Si necesitás un socio técnico de largo plazo, conversemos."
        description="Podemos ayudarte a diseñar el siguiente sistema, ordenar una base existente o definir mejor hacia dónde tiene sentido invertir."
      />
    </SiteShell>
  );
}
