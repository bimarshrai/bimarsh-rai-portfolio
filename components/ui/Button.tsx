import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
interface ButtonProps { children: ReactNode; href?: string; variant?: ButtonVariant; className?: string; disabled?: boolean; type?: "button" | "submit"; onClick?: () => void; }
const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-bright focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50";
const variantStyles: Record<ButtonVariant, string> = { primary: "bg-violet text-white shadow-lg shadow-violet/20 hover:-translate-y-0.5 hover:bg-violet-bright hover:shadow-violet/30", secondary: "border border-border bg-white/[.02] text-foreground hover:-translate-y-0.5 hover:border-violet-bright hover:text-violet-bright" };
function isExternalLink(href: string) { return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:"); }
export default function Button({ children, href, variant = "primary", className = "", disabled = false, type = "button", onClick }: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  if (href && !disabled) return isExternalLink(href) ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={styles}>{children}</a> : <Link href={href} className={styles}>{children}</Link>;
  return <button type={type} disabled={disabled} onClick={onClick} className={styles}>{children}</button>;
}
