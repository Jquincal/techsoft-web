import testimonialsSeed from "@/data/testimonios.json";

export const SITE_NAME = "TechSoft Solutions";
export const SITE_DESCRIPTION =
  "Diseñamos productos digitales, software a medida y sistemas empresariales con foco en crecimiento, claridad y velocidad de implementación.";

export const SITE_ROUTES = {
  home: "/",
  services: "/templates/servicios.html",
  products: "/templates/productos.html",
  contact: "/templates/contacto.html",
  about: "/templates/nosotros.html",
} as const;

export type RouteKey = keyof typeof SITE_ROUTES;
export type ServiceIconKey =
  | "globe"
  | "server"
  | "sparkles"
  | "shield"
  | "gauge"
  | "users";

export interface NavItem {
  label: string;
  href: string;
  matches: string[];
}

export interface HeroCard {
  title: string;
  link: string;
  image: string;
  category: string;
  blurb: string;
  metric: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  summary: string;
  description: string;
  bullets: string[];
  icon: ServiceIconKey;
  highlight: string;
}

export interface ProductItem {
  title: string;
  summary: string;
  description: string;
  features: string[];
  accent: string;
}

export interface TestimonialItem {
  nombre: string;
  empresa: string;
  comentario: string;
  estrellas: number;
}

export interface AboutPillar {
  title: string;
  copy: string;
  icon: ServiceIconKey;
}

export interface ProcessStep {
  title: string;
  copy: string;
}

export const navigation: NavItem[] = [
  {
    label: "Inicio",
    href: SITE_ROUTES.home,
    matches: ["/", "/index.html"],
  },
  {
    label: "Servicios",
    href: SITE_ROUTES.services,
    matches: ["/servicios", SITE_ROUTES.services],
  },
  {
    label: "Productos",
    href: SITE_ROUTES.products,
    matches: ["/productos", SITE_ROUTES.products],
  },
  {
    label: "Contacto",
    href: SITE_ROUTES.contact,
    matches: ["/contacto", SITE_ROUTES.contact],
  },
  {
    label: "Nosotros",
    href: SITE_ROUTES.about,
    matches: ["/nosotros", SITE_ROUTES.about],
  },
];

export const heroCards: HeroCard[] = [
  {
    title: "ERP Starter",
    link: SITE_ROUTES.products,
    image: "/hero/erp-starter.jpg",
    category: "Producto",
    blurb: "Operación centralizada para pequeñas empresas.",
    metric: "Inventario + facturación",
  },
  {
    title: "CRM Professional",
    link: SITE_ROUTES.products,
    image: "/hero/crm-professional.jpg",
    category: "Producto",
    blurb: "Pipeline comercial y automatización en una sola vista.",
    metric: "Ventas + marketing",
  },
  {
    title: "Analytics Suite",
    link: SITE_ROUTES.products,
    image: "/hero/analytics-suite.jpg",
    category: "Producto",
    blurb: "BI claro para decidir más rápido.",
    metric: "Dashboards + predicción",
  },
  {
    title: "E-commerce Pro",
    link: SITE_ROUTES.products,
    image: "/hero/ecommerce-pro.jpg",
    category: "Producto",
    blurb: "Catálogo, pagos y logística bajo una misma experiencia.",
    metric: "Checkout + catálogo",
  },
  {
    title: "Desarrollo Web",
    link: SITE_ROUTES.services,
    image: "/hero/desarrollo-web.jpg",
    category: "Servicio",
    blurb: "Sitios y plataformas con foco en performance y conversión.",
    metric: "UX + rendimiento",
  },
  {
    title: "Consultoría IT",
    link: SITE_ROUTES.services,
    image: "/hero/consultoria-it.jpg",
    category: "Servicio",
    blurb: "Arquitectura, auditoría y decisiones técnicas con criterio.",
    metric: "Escala + claridad",
  },
];

export const stats: StatItem[] = [
  {
    value: "150+",
    label: "proyectos completados",
    description: "Implementaciones para procesos, ventas, operaciones y producto.",
  },
  {
    value: "50+",
    label: "clientes satisfechos",
    description: "Equipos que hoy trabajan con flujos más simples y medibles.",
  },
  {
    value: "5 años",
    label: "de experiencia",
    description: "Trayectoria construyendo software útil y escalable para negocio real.",
  },
  {
    value: "24/7",
    label: "acompañamiento",
    description: "Soporte y seguimiento cuando el proyecto necesita continuidad.",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Desarrollo Web",
    summary: "Experiencias web con foco en negocio, conversión y performance.",
    description:
      "Creamos sitios, landings y plataformas web a medida que combinan velocidad, diseño claro y una base técnica lista para crecer con tu operación.",
    bullets: ["Diseño responsivo", "Optimización SEO", "CMS personalizado"],
    icon: "globe",
    highlight: "Ideal para marcas que necesitan vender mejor, comunicar mejor o lanzar más rápido.",
  },
  {
    title: "Sistemas Empresariales",
    summary: "Software robusto para ordenar procesos, datos y equipos.",
    description:
      "Desarrollamos soluciones empresariales como ERP, CRM, inventario y tableros operativos con integraciones pensadas para la realidad de cada empresa.",
    bullets: ["ERP personalizado", "Integración de APIs", "Base de datos sólida"],
    icon: "server",
    highlight: "Pensado para operaciones que ya crecieron y necesitan dejar atrás planillas y parches.",
  },
  {
    title: "Consultoría IT",
    summary: "Decisiones técnicas con visión de producto y crecimiento.",
    description:
      "Auditamos, ordenamos y diseñamos arquitectura, stack y roadmap para que cada inversión tecnológica tenga impacto real en el negocio.",
    bullets: ["Auditoría técnica", "Arquitectura", "Optimización"],
    icon: "sparkles",
    highlight: "Útil cuando tenés que definir qué construir, cómo escalar o cómo corregir una base frágil.",
  },
];

export const products: ProductItem[] = [
  {
    title: "ERP Starter",
    summary: "Sistema ERP básico perfecto para pequeñas empresas.",
    description:
      "Gestiona inventario, ventas y contabilidad con una experiencia clara, modular y lista para empezar a ordenar la operación.",
    features: [
      "Gestión de inventario",
      "Facturación",
      "Reportes básicos",
      "5 usuarios",
      "Soporte por email",
    ],
    accent: "from-blue-500 to-cyan-400",
  },
  {
    title: "CRM Professional",
    summary: "Plataforma CRM completa para el equipo comercial.",
    description:
      "Controla relaciones con clientes, pipeline de ventas y automatizaciones de marketing desde un mismo sistema.",
    features: [
      "Gestión de contactos",
      "Pipeline de ventas",
      "Email marketing",
      "20 usuarios",
      "Soporte 24/7",
      "Integraciones",
    ],
    accent: "from-emerald-500 to-teal-400",
  },
  {
    title: "Analytics Suite",
    summary: "Business Intelligence con dashboards y análisis predictivo.",
    description:
      "Unifica datos y visibilidad ejecutiva para tomar decisiones con reportes automatizados y lectura clara del negocio.",
    features: [
      "Dashboards personalizados",
      "Análisis predictivo",
      "Reportes automáticos",
      "Usuarios ilimitados",
      "API completa",
      "Consultor dedicado",
    ],
    accent: "from-slate-900 to-slate-700",
  },
  {
    title: "E-commerce Pro",
    summary: "Comercio electrónico con catálogo, pagos y logística.",
    description:
      "Una base completa para vender online con una experiencia cuidada, integrada y lista para campañas de crecimiento.",
    features: [
      "Tienda online",
      "Gestión de productos",
      "Pagos integrados",
      "Logística",
      "SEO optimizado",
    ],
    accent: "from-cyan-500 to-sky-400",
  },
  {
    title: "HR Management",
    summary: "Recursos humanos, nómina y evaluación en una sola plataforma.",
    description:
      "Organiza colaboradores, liquidaciones y reclutamiento con un flujo simple para el equipo de personas.",
    features: [
      "Gestión de empleados",
      "Nómina automática",
      "Evaluaciones",
      "Reclutamiento",
      "Portal del empleado",
    ],
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "Project Manager",
    summary: "Gestión de proyectos con foco en equipos ágiles.",
    description:
      "Coordina tareas, tiempos y visibilidad del equipo con una herramienta pensada para ejecución y seguimiento.",
    features: [
      "Gestión de tareas",
      "Metodologías ágiles",
      "Time tracking",
      "Colaboración",
      "Reportes",
    ],
    accent: "from-violet-500 to-fuchsia-500",
  },
];

export const aboutIntro = [
  "En TechSoft Solutions creemos que la tecnología no es una capa decorativa: es infraestructura para crecer, operar mejor y tomar decisiones con más claridad.",
  "Somos un equipo de desarrollo, diseño y estrategia que trabaja junto al cliente para convertir procesos complejos en software útil, escalable y entendible.",
  "No vendemos productos genéricos. Diseñamos sistemas, experiencias y herramientas que se adaptan al negocio real de cada equipo.",
];

export const aboutPillars: AboutPillar[] = [
  {
    title: "Misión",
    copy:
      "Potenciar el crecimiento de nuestros clientes a través de tecnología innovadora, confiable y orientada al usuario final.",
    icon: "gauge",
  },
  {
    title: "Visión",
    copy:
      "Ser una referencia en transformación digital en América Latina por criterio técnico, diseño claro y compromiso real con los resultados.",
    icon: "shield",
  },
  {
    title: "Valores",
    copy:
      "Innovación continua, integridad, trabajo en equipo, empatía con el cliente y excelencia en cada entrega.",
    icon: "users",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Entendemos el negocio",
    copy:
      "Primero ordenamos objetivos, restricciones y puntos de fricción para que la solución responda a la operación real.",
  },
  {
    title: "Diseñamos un sistema claro",
    copy:
      "Traducimos esa necesidad en flujos, arquitectura y producto con foco en crecimiento, mantenimiento y adopción.",
  },
  {
    title: "Implementamos y acompañamos",
    copy:
      "Lanzamos, medimos y ajustamos para que el software no se quede en una demo bonita, sino que sostenga el trabajo diario.",
  },
];

export const principles = [
  "Diseño útil antes que complejidad visual gratuita.",
  "Arquitectura preparada para crecer sin rehacer todo.",
  "Procesos entendibles para equipos no técnicos.",
  "Acompañamiento cercano durante cada iteración.",
];

export const testimonials: TestimonialItem[] = testimonialsSeed;
