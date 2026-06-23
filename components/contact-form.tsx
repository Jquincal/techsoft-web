"use client";

import { useId } from "react";
import { services } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface ContactFormProps {
  source: string;
  showBudget?: boolean;
  presetService?: string;
}

export function ContactForm({
  source,
  showBudget = false,
  presetService,
}: ContactFormProps) {
  const prefix = useId().replace(/:/g, "");

  return (
    <form
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (!form.reportValidity()) {
          return;
        }

        const formData = new FormData(form);
        const serviceValue = String(formData.get("service") || "").trim();
        const budgetValue = String(formData.get("budget") || "").trim();

        window.location.href = buildWhatsAppUrl({
          source,
          name: String(formData.get("name") || "").trim(),
          email: String(formData.get("email") || "").trim(),
          phone: String(formData.get("phone") || "").trim(),
          company: String(formData.get("company") || "").trim(),
          service: serviceValue,
          budget: budgetValue,
          message: String(formData.get("message") || "").trim(),
        });
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
          <span>Nombre *</span>
          <input
            id={`${prefix}-name`}
            name="name"
            required
            className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-blue-400"
            type="text"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
          <span>Email *</span>
          <input
            id={`${prefix}-email`}
            name="email"
            required
            className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-blue-400"
            type="email"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
          <span>Teléfono</span>
          <input
            id={`${prefix}-phone`}
            name="phone"
            className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-blue-400"
            type="tel"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
          <span>Empresa</span>
          <input
            id={`${prefix}-company`}
            name="company"
            className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-blue-400"
            type="text"
          />
        </label>
      </div>

      <div className={showBudget ? "grid gap-5 md:grid-cols-2" : "grid gap-5"}>
        <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
          <span>Servicio de interés</span>
          <select
            id={`${prefix}-service`}
            name="service"
            defaultValue={presetService || ""}
            className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-blue-400"
          >
            <option value="">Selecciona un servicio</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>

        {showBudget ? (
          <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
            <span>Presupuesto estimado</span>
            <select
              id={`${prefix}-budget`}
              name="budget"
              className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-blue-400"
              defaultValue=""
            >
              <option value="">Selecciona un rango</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000 - $50,000">$25,000 - $50,000</option>
              <option value="$50,000+">$50,000+</option>
            </select>
          </label>
        ) : null}
      </div>

      <label className="grid gap-2 text-sm font-medium text-[var(--foreground)]">
        <span>Mensaje *</span>
        <textarea
          id={`${prefix}-message`}
          name="message"
          required
          rows={5}
          placeholder="Cuéntanos sobre tu proyecto..."
          className="rounded-[28px] border border-[var(--border)] bg-white px-4 py-4 text-sm text-[var(--foreground)] outline-none focus:border-blue-400"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="detail-copy">
          Al enviar, se abrirá WhatsApp con tu mensaje listo para compartir.
        </p>
        <button type="submit" className="button-primary">
          Enviar por WhatsApp
        </button>
      </div>
    </form>
  );
}
