import { getServerSession } from "next-auth";
import { authOptions } from "../../../../auth";

export default async function ProfileSettingsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Настройки аккаунта
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Управляйте параметрами профиля и безопасностью доступа.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">
          Профиль
        </h3>
        <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <p>
            <span className="font-semibold">Текущий email:</span> {session.user.email}
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Обновление данных профиля будет добавлено следующим этапом.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">
          Безопасность
        </h3>
        <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300">
          Скоро здесь появятся: смена пароля, подтверждение email и история входов.
        </div>
      </div>
    </div>
  );
}

