export const contactLinks = {
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "devsystemg@gmail.com",
  telegram:
    process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/almatdev",
  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_URL ||
    "https://wa.me/77761244111",
} as const;
