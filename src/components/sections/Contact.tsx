"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900/50">
      <Container>
        <div className="mx-auto max-w-2xl">
          <SectionTitle
            tag="Контакты"
            title="Напишите нам"
            description="Расскажите о проекте — мы свяжемся с вами и предложим варианты сотрудничества."
          />
          {sent ? (
            <div className="mt-10 rounded-2xl border border-indigo-300 bg-indigo-50 p-8 text-center dark:border-indigo-500/30 dark:bg-indigo-500/10">
              <p className="text-lg font-medium text-slate-900 dark:text-white">
                Заявка отправлена. Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-300">
                  Имя / Компания
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder-slate-500"
                  placeholder="Как к вам обращаться?"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder-slate-500"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-300">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder-slate-500"
                  placeholder="Опишите проект или задачу..."
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                Отправить заявку
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
