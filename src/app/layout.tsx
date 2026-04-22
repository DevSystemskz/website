import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { ScrollToHash } from "@/components/layout/ScrollToHash";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeScript = `
  (function() {
    const key = 'devsystems-theme';
    const stored = localStorage.getItem(key);
    const dark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  })();
`;

export const metadata: Metadata = {
  title: "DevSystems — Разработка программного обеспечения",
  description:
    "Веб и мобильная разработка, облачные решения, интеграции и поддержка. От идеи до запуска и масштабирования.",
  verification: {
    google: "3xCMeJGFQymP5Q2u2tj3KKyorIQp7eqi7o9Cb0Ggetc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpeedInsights />
        <Analytics />
        <I18nProvider>
          <ThemeProvider>
            <ScrollToHash />
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
