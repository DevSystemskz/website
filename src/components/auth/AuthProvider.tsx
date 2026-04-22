"use client";

import { createContext, useContext, useMemo } from "react";
import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";

type SessionUser = {
  name: string;
  email: string;
};

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

type AuthContextValue = {
  user: SessionUser | null;
  isReady: boolean;
  register: (payload: RegisterPayload) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogleCredential: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);
function AuthProviderInner({ children }: { children: React.ReactNode }) {
  const { data, status } = useSession();

  const user: SessionUser | null = data?.user?.email
    ? {
        name: data.user.name ?? data.user.email.split("@")[0],
        email: data.user.email,
      }
    : null;

  const register = async ({ name, email, password }: RegisterPayload) => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const payload = (await response.json().catch(() => ({}))) as { error?: string };

    if (!response.ok) {
      throw new Error(payload.error ?? "Ошибка регистрации");
    }

    const loginResult = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!loginResult || loginResult.error) {
      throw new Error("Регистрация выполнена, но не удалось войти");
    }
  };

  const login = async (email: string, password: string) => {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!result || result.error) {
      throw new Error("Неверный email или пароль");
    }
  };

  const loginWithGoogleCredential = async () => {
    await signIn("google", { callbackUrl: "/profile" });
  };

  const logout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const value = useMemo(
    () => ({
      user,
      isReady: status !== "loading",
      register,
      login,
      loginWithGoogleCredential,
      logout,
    }),
    [user, status],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AuthProviderInner>{children}</AuthProviderInner>
    </SessionProvider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

