"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/components/auth/AuthProvider";

export default function LoginPage() {
  const router = useRouter();
  const { login, loginWithGoogleCredential, user, isReady } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isReady && user) {
      router.replace("/profile");
      router.refresh();
    }
  }, [isReady, user, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      router.replace("/profile");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка входа");
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 dark:bg-slate-900">
        <Container className="py-12 lg:py-16">
          <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/30">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Вход</h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Введите email и пароль, чтобы войти в аккаунт.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Пароль
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

              <Button type="submit" className="w-full">
                Войти
              </Button>
            </form>

            <div className="my-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
              <span className="text-xs uppercase tracking-wide text-slate-500">или</span>
              <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={async () => {
                setError("");
                try {
                  await loginWithGoogleCredential();
                } catch (err) {
                  setError(err instanceof Error ? err.message : "Ошибка Google входа");
                }
              }}
            >
              Войти через Google
            </Button>

            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Нет аккаунта?{" "}
              <Link href="/auth/register" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-300">
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

