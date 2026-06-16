import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Scholars", href: "/scholars" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
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
      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-orange via-olive to-orange" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo/logo.png"
                alt="Bridge2Charity Foundation"
                width={110}
                height={36}
                className="h-9 w-auto object-contain mb-5"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-5" style={{ fontFamily: "var(--font-nunito)" }}>
              Improving primary students' lives through sustainable community initiatives in Rwanda.
            </p>
            <p className="text-cream/60 text-xs font-medium tracking-wide uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>
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
              {/* X (Twitter) */}
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

          {/* Quick links */}
          <div>
            <h3 className="font-playfair text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-orange text-sm font-lato transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-playfair text-white font-semibold text-lg mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-white/70 hover:text-orange text-sm font-lato transition-colors duration-200"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/donate"
                className="inline-flex items-center px-6 py-3 bg-orange hover:bg-orange-light text-white text-sm font-lato font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange/30"
              >
                Donate Now
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-playfair text-white font-semibold text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-orange mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm font-lato">KK 737 St, Kigali, Rwanda</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-orange mt-0.5 flex-shrink-0" />
                <div className="text-white/70 text-sm font-lato space-y-1">
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
                  href="mailto:bridge2charity@gmail.com"
                  className="text-white/70 hover:text-orange text-sm font-lato transition-colors"
                >
                  bridge2charity@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-orange mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm font-lato">Monday – Friday</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm font-lato text-center sm:text-left">
            © {currentYear} Bridge2Charity Foundation. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-lato">
            Built with purpose — for Rwanda's future.
          </p>
        </div>
      </div>
    </footer>
  )
}
