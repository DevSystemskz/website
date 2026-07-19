"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { contactLinks } from "@/lib/contact";

function TelegramIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export function Contact() {
  const { section, item } = useStaggerVariants();
  const { m } = useI18n();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || m.sections.submitError);
      }

      form.reset();
      setSent(true);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : m.sections.submitError;
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.section
      id="contact"
      className="ds-section bg-canvas-muted dark:bg-canvas-dark"
      variants={section}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:items-start">
          <motion.div variants={item}>
            <div className="relative overflow-hidden border border-line bg-ink p-8 dark:border-line-dark lg:sticky lg:top-28 lg:p-10">
              <div className="blueprint-grid absolute inset-0 opacity-30" aria-hidden />
              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {m.sections.contactTag}
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                  {m.sections.contactTitle}
                </h2>
                <p className="mt-4 text-lg text-white/70">{m.sections.contactDesc}</p>
                <p className="mt-4 text-sm text-white/55">{m.sections.ctaDesc}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={contactLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/30 bg-[#229ED9] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1b8bc0]"
                  >
                    <TelegramIcon />
                    {m.sections.telegram}
                  </a>
                  <a
                    href={contactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/30 bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
                  >
                    <WhatsAppIcon />
                    {m.sections.whatsapp}
                  </a>
                  <a
                    href={`mailto:${contactLinks.email}`}
                    className="inline-flex items-center gap-2 border border-white/20 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-canvas-muted"
                  >
                    {contactLinks.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            {sent ? (
              <motion.div
                className="border border-accent/30 bg-accent-muted p-8 text-center"
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              >
                <p className="text-lg font-medium text-ink dark:text-white">
                  {m.sections.sent}
                </p>
              </motion.div>
            ) : (
              <motion.form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-100">
                    {error}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-muted dark:text-ink-faint">
                    {m.sections.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="ds-input"
                    placeholder={m.sections.namePh}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-muted dark:text-ink-faint">
                    {m.sections.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="ds-input"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-muted dark:text-ink-faint">
                    {m.sections.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="ds-input resize-none"
                    placeholder={m.sections.messagePh}
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {loading ? m.sections.sending : m.sections.send}
                </Button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
