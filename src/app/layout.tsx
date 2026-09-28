import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { ScrollToHash } from "@/components/layout/ScrollToHash";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, siteJsonLd } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["700"],
  display: "swap",
  preload: false,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  display: "swap",
  preload: false,
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

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} — веб-студия в Астане`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — веб-студия в Астане`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} — веб-студия в Астане`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "3xCMeJGFQymP5Q2u2tj3KKyorIQp7eqi7o9Cb0Ggetc",
    yandex: "f9417b456262d374",
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
        <Script id="yandex-metrika" strategy="lazyOnload">
          {`
            setTimeout(function () {
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=108717678', 'ym');

              ym(108717678, 'init', {
                ssr: true,
                clickmap: true,
                accurateTrackBounce: true,
                trackLinks: true
              });
            }, 4500);
          `}
        </Script>
      </head>
      <body
        className={`${syne.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd()) }}
        />
        <div className="grain" aria-hidden />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/108717678"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
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
