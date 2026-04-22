import Link from "next/link";
import { authOptions } from "../../../auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { CabinetSidebar } from "@/components/profile/CabinetSidebar";

type ProfileLayoutProps = {
  children: React.ReactNode;
};

export default async function ProfileLayout({ children }: ProfileLayoutProps) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect("/auth/login");
  }

  const userName = session.user.name ?? "Пользователь";
  const userEmail = session.user.email;

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-bold text-slate-900 dark:text-white">
            DevSystems Cabinet
          </Link>
          <div className="text-sm text-slate-600 dark:text-slate-300">{userEmail}</div>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8">
        <CabinetSidebar userName={userName} userEmail={userEmail} />

        <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          {children}
        </section>
      </div>
    </div>
  );
}

