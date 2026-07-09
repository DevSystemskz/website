import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-md shadow-accent/20",
  secondary:
    "bg-canvas-muted text-ink hover:bg-line dark:bg-canvas-elevated-dark dark:text-white dark:hover:bg-line-dark",
  outline:
    "border border-accent text-accent hover:bg-accent hover:text-white dark:text-accent",
  ghost:
    "text-ink-muted hover:bg-canvas-muted dark:text-ink-faint dark:hover:bg-canvas-elevated-dark dark:hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-base rounded-md",
  lg: "px-8 py-4 text-lg rounded-md",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas dark:focus:ring-offset-canvas-dark";

  const combined = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combined}>
      {children}
    </button>
  );
}
