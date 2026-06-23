export const WHATSAPP_NUMBER = "5492615753165";
export const VISIBLE_PHONE = "261 5753165";
export const CONTACT_EMAIL = "Calvojoaquin987@gmail.com";

export interface WhatsAppPayloadContext {
  source: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  product?: string;
}

export function buildWhatsAppUrl(context: WhatsAppPayloadContext) {
  const lines = [
    "Hola, te contacto desde la web de TechSoft.",
    "",
    `Origen: ${context.source}`,
  ];

  if (context.product) {
    lines.push(`Producto de interés: ${context.product}`);
  }

  if (context.name) {
    lines.push(`Nombre: ${context.name}`);
  }

  if (context.email) {
    lines.push(`Email: ${context.email}`);
  }

  if (context.phone) {
    lines.push(`Teléfono: ${context.phone}`);
  }

  if (context.company) {
    lines.push(`Empresa: ${context.company}`);
  }

  if (context.service) {
    lines.push(`Servicio de interés: ${context.service}`);
  }

  if (context.budget) {
    lines.push(`Presupuesto estimado: ${context.budget}`);
  }

  if (context.message) {
    lines.push("", "Mensaje:", context.message);
  } else {
    lines.push("", "Quisiera recibir más información.");
  }

  const query = new URLSearchParams({
    text: lines.join("\n"),
  });

  return `https://wa.me/${WHATSAPP_NUMBER}?${query.toString()}`;
}

export const primaryWhatsAppUrl = buildWhatsAppUrl({
  source: "Hero principal",
  message: "Quiero conversar sobre un proyecto para mi negocio.",
});
