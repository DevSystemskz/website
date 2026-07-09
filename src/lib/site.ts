export const siteConfig = {
  name: "DevSystems",
  url: "https://devsystems.dev",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "devsystemg@gmail.com",
  telegramUrl:
    process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/devsystems",
  linkedInUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/company/devsystems",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/devsystems/intro",
} as const;
