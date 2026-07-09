"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";

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
                <div className="mt-8">
                  <Button
                    href="mailto:devsystemg@gmail.com"
                    variant="outline"
                    size="md"
                    className="border-white/30 text-white hover:border-accent hover:bg-accent hover:text-white"
                  >
                    devsystemg@gmail.com
                  </Button>
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
