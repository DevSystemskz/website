import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Добро пожаловать, {session.user.name ?? "Пользователь"}
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Это ваш рабочий кабинет. Здесь можно управлять аккаунтом и следить за активностью.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Статус
          </p>
          <p className="mt-2 text-lg font-semibold text-emerald-600 dark:text-emerald-400">
            Аккаунт активен
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Метод входа
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
            Credentials / Google
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Безопасность
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
            Базовая защита включена
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Данные профиля
        </h3>
        <div className="mt-4 grid gap-3 text-sm text-slate-700 dark:text-slate-300">
          <p>
            <span className="font-semibold">Имя:</span> {session.user.name ?? "Пользователь"}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {session.user.email}
          </p>
        </div>
      </div>
    </div>
  );
}

