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
    "inline-flex items-center justify-center font-lato font-bold rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-orange"

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }

  const variants = {
    primary:
      "bg-orange text-white hover:bg-orange-light hover:shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-navy text-white hover:bg-navy-light hover:shadow-lg hover:shadow-navy/30 hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border-2 border-orange text-orange hover:bg-orange hover:text-white hover:-translate-y-0.5 active:translate-y-0",
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
