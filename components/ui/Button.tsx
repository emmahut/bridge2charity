import Link from "next/link"
import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-jakarta font-bold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"

  const sizes = {
    sm: "min-h-10 px-4 py-2 text-sm",
    md: "min-h-11 px-6 py-3 text-sm",
    lg: "min-h-12 px-7 py-3.5 text-base",
  }

  const variants = {
    primary:
      "bg-orange text-white shadow-lg shadow-orange/20 hover:-translate-y-0.5 hover:bg-orange-light hover:shadow-orange/30 active:translate-y-0",
    secondary:
      "bg-navy text-white shadow-lg shadow-navy/20 hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-navy/30 active:translate-y-0",
    outline:
      "border border-orange text-orange hover:-translate-y-0.5 hover:bg-orange hover:text-white active:translate-y-0",
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
