import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
  { label: "Impact", href: "/impact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
]

const programs = [
  { label: "English Enhancement Program", href: "/programs/english-enhancement-program" },
  { label: "Back to School", href: "/programs/back-to-school" },
  { label: "One Hen Per Child", href: "/programs/one-hen-per-child" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="h-1 bg-gradient-to-r from-orange via-olive to-orange" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column — no logo, description + social only */}
          <div className="lg:col-span-1">
            <p
              className="text-white/70 text-sm leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Improving primary students&apos; lives through sustainable community initiatives in Rwanda.
            </p>
            <p
              className="text-cream/60 text-xs font-medium tracking-wide uppercase"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Registered Non-Profit Organisation
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/bridge2charity/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-orange rounded-lg transition-colors duration-200"
                aria-label="Bridge2Charity on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/bridge2charity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-orange rounded-lg transition-colors duration-200"
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
                className="p-2 bg-white/10 hover:bg-orange rounded-lg transition-colors duration-200"
                aria-label="Bridge2Charity on X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.907-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links — two-column internal grid */}
          <div>
            <h3
              className="text-white font-semibold text-lg mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream/80 hover:text-cream hover:underline decoration-orange text-[13px] font-medium leading-[1.8] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3
              className="text-white font-semibold text-lg mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-white/70 hover:text-orange text-sm transition-colors duration-200"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3
              className="text-white font-semibold text-lg mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-orange mt-0.5 flex-shrink-0" />
                <span
                  className="text-white/70 text-sm"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  KK 737 St, Kigali, Rwanda
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-orange mt-0.5 flex-shrink-0" />
                <div
                  className="text-white/70 text-sm space-y-1"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  <a href="tel:+250799311463" className="block hover:text-orange transition-colors">
                    +250 799 311 463
                  </a>
                  <a href="tel:+250786270684" className="block hover:text-orange transition-colors">
                    +250 786 270 684
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-orange mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:bridge2char@gmail.com"
                  className="text-white/70 hover:text-orange text-sm transition-colors"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  bridge2char@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-orange mt-0.5 flex-shrink-0" />
                <span
                  className="text-white/70 text-sm"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  Monday – Friday
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Centered Invest In B2C CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/donate"
            className="inline-flex items-center px-8 py-3 bg-orange hover:bg-orange-light text-white text-sm font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Invest In B2C
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/50 text-sm text-center sm:text-left"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            © {currentYear} Bridge2Charity Foundation. All rights reserved.
          </p>
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Built with purpose — for Rwanda&apos;s future.
          </p>
        </div>
      </div>
    </footer>
  )
}
