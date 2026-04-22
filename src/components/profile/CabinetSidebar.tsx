"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

type CabinetSidebarProps = {
  userName: string;
  userEmail: string;
};

const navItems = [
  { href: "/profile", label: "Обзор" },
  { href: "/profile/settings", label: "Настройки" },
];

export function CabinetSidebar({ userName, userEmail }: CabinetSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5 rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{userName}</p>
        <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">{userEmail}</p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                active
                  ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={async () => {
          await signOut({ redirect: false });
          router.push("/auth/login");
          router.refresh();
        }}
        className="mt-6 w-full rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:border-red-900/50 dark:text-red-400 dark:hover:bg-red-500/10"
      >
        Выйти
      </button>
    </aside>
  );
}

