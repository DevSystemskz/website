"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { siteConfig } from "@/lib/site";

const selectClass =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white";

export function Contact() {
  const { section, item } = useStaggerVariants();
  const { m } = useI18n();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const projectTypeOptions = [
    { value: "ai", label: m.sections.projectTypes.ai },
    { value: "mvp", label: m.sections.projectTypes.mvp },
    { value: "web", label: m.sections.projectTypes.web },
    { value: "mobile", label: m.sections.projectTypes.mobile },
    { value: "support", label: m.sections.projectTypes.support },
    { value: "other", label: m.sections.projectTypes.other },
  ];

  const budgetOptions = [
    { value: "under10", label: m.sections.budgets.under10 },
    { value: "mid", label: m.sections.budgets.mid },
    { value: "high", label: m.sections.budgets.high },
    { value: "enterprise", label: m.sections.budgets.enterprise },
    { value: "unknown", label: m.sections.budgets.unknown },
  ];

  const timelineOptions = [
    { value: "asap", label: m.sections.timelines.asap },
    { value: "oneThree", label: m.sections.timelines.oneThree },
    { value: "threePlus", label: m.sections.timelines.threePlus },
    { value: "flexible", label: m.sections.timelines.flexible },
  ];

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
      projectType: String(formData.get("projectType") || ""),
      budget: String(formData.get("budget") || ""),
      timeline: String(formData.get("timeline") || ""),
      nda: formData.get("nda") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || m.sections.submitError);
      }

      form.reset();
      setSent(true);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : m.sections.submitError;
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.section
      id="contact"
      className="border-t border-slate-200 bg-slate-50 py-20 pb-28 lg:py-28 lg:pb-28 dark:border-slate-800 dark:bg-slate-900/50"
      variants={section}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <div className="mx-auto max-w-2xl">
          <motion.div variants={item}>
            <SectionTitle
              tag={m.sections.contactTag}
              title={m.sections.contactTitle}
              description={m.sections.contactDesc}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                href={siteConfig.calendlyUrl}
                variant="outline"
                size="md"
                external
              >
                {m.hero.calendlyBtn}
              </Button>
              <Button
                href={siteConfig.telegramUrl}
                variant="ghost"
                size="md"
                external
              >
                {m.hero.telegramBtn}
              </Button>
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="ghost"
                size="md"
              >
                {siteConfig.email}
              </Button>
            </div>
          </motion.div>
          {sent ? (
            <motion.div
              className="mt-10 rounded-2xl border border-indigo-300 bg-indigo-50 p-8 text-center dark:border-indigo-500/30 dark:bg-indigo-500/10"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            >
              <p className="text-lg font-medium text-slate-900 dark:text-white">
                {m.sections.sent}
              </p>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} className="mt-10 space-y-6" variants={item}>
              {error && (
                <div className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-100">
                  {error}
                </div>
              )}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-600 dark:text-slate-300"
                  >
                    {m.sections.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder-slate-500"
                    placeholder={m.sections.namePh}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-600 dark:text-slate-300"
                  >
                    {m.sections.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder-slate-500"
                    placeholder="email@company.com"
                  />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-slate-600 dark:text-slate-300"
                  >
                    {m.sections.projectType}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className={selectClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      —
                    </option>
                    {projectTypeOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-slate-600 dark:text-slate-300"
                  >
                    {m.sections.budget}
                  </label>
                  <select id="budget" name="budget" className={selectClass} defaultValue="">
                    <option value="" disabled>
                      —
                    </option>
                    {budgetOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-slate-600 dark:text-slate-300"
                  >
                    {m.sections.timeline}
                  </label>
                  <select id="timeline" name="timeline" className={selectClass} defaultValue="">
                    <option value="" disabled>
                      —
                    </option>
                    {timelineOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-600 dark:text-slate-300"
                >
                  {m.sections.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder-slate-500"
                  placeholder={m.sections.messagePh}
                />
              </div>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <input
                  type="checkbox"
                  name="nda"
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                {m.sections.nda}
              </label>
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
        </div>
      </Container>
    </motion.section>
  );
}
