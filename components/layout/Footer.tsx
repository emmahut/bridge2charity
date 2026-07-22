"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, Check } from "lucide-react"
import { usePathname } from "next/navigation"

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Join The Team", href: "/join" },
]

const programLinks = [
  { label: "Back To School", href: "/programs/back-to-school" },
  { label: "One Hen Per Child", href: "/programs/one-hen-per-child" },
  { label: "English Enhancement Program", href: "/programs/english-enhancement-program" },
  { label: "News", href: "/news" },
]

const NO_INVEST_PAGES = ["/donate", "/volunteer", "/join", "/contact", "/news"]
const NO_VOLUNTEER_LINKS = ["/contact", "/news"]

const navLinkClass =
  "uppercase text-[13px] font-bold tracking-wide text-orange hover:text-white transition-colors duration-200"

export default function Footer() {
  const pathname = usePathname()
  const hideInvest = NO_INVEST_PAGES.includes(pathname)
  const links = NO_VOLUNTEER_LINKS.includes(pathname)
    ? primaryLinks.filter((l) => l.label !== "Volunteer")
    : primaryLinks
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="h-1 bg-gradient-to-r from-orange via-olive to-orange" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact info — icon rows, no heading */}
          <div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} strokeWidth={2.5} className="mt-0.5 flex-shrink-0 text-orange" />
                <a
                  href="mailto:info@bridge2charity.org"
                  className="text-sm font-bold text-white transition-colors hover:text-orange"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  info@bridge2charity.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} strokeWidth={2.5} className="mt-0.5 flex-shrink-0 text-orange" />
                <div
                  className="space-y-1 text-sm font-bold text-white"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  <a href="tel:+250799311463" className="block transition-colors hover:text-orange">
                    +250 799 311 463
                  </a>
                  <a href="tel:+250786270684" className="block transition-colors hover:text-orange">
                    +250 786 270 684
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={2.5} className="mt-0.5 flex-shrink-0 text-orange" />
                <span
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  KK 737 St, Kigali, Rwanda
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={16} strokeWidth={2.5} className="mt-0.5 flex-shrink-0 text-orange" />
                <span
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  Powered by Bridge2Charity
                </span>
              </li>
            </ul>
          </div>

          {/* Primary links — no heading */}
          <div>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={navLinkClass}
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program links — no heading */}
          <div>
            <ul className="space-y-3">
              {programLinks.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className={navLinkClass}
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3
              className="mb-5 text-xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://www.youtube.com/@Bridge2CharityFoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2 transition-colors duration-200 hover:bg-orange"
                aria-label="Bridge2Charity on YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/18Xzni4fs1/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2 transition-colors duration-200 hover:bg-orange"
                aria-label="Bridge2Charity on Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bridge2charity/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2 transition-colors duration-200 hover:bg-orange"
                aria-label="Bridge2Charity on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/bridge2charity-foundation-21046840b/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2 transition-colors duration-200 hover:bg-orange"
                aria-label="Bridge2Charity on LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="https://x.com/bridge2charity/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2 transition-colors duration-200 hover:bg-orange"
                aria-label="Bridge2Charity on X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.907-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Invest In B2C CTA — hidden on donate/volunteer/join/contact/news pages */}
        {!hideInvest && (
          <div className="mt-6 flex justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center rounded-lg px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange/30 active:scale-95"
              style={{ fontFamily: "var(--font-montserrat)", backgroundColor: "#C2410C" }}
            >
              Invest In B2C
            </Link>
          </div>
        )}

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 pt-5">
          <p
            className="text-xs text-white/50"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            © {currentYear} Bridge2Charity Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
