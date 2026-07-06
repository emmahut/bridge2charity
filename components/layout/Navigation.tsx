"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

type DropdownKey = "about" | "programs" | "getInvolved"

type NavLink = {
  label: string
  href: string
  dropdown?: { label: string; href: string }[]
  dropdownKey?: DropdownKey
}

const aboutDropdown = [
  { label: "About Us", href: "/about" },
  { label: "Meet the Team", href: "/about/team" },
  { label: "Board of Directors", href: "/about/board" },
]

const programsDropdown = [
  { label: "Back To School", href: "/programs/back-to-school" },
  { label: "English Enhancement", href: "/programs/english-enhancement" },
  { label: "One Hen Per Child", href: "/programs/one-hen-per-child" },
]

const getInvolvedDropdown = [
  { label: "Support a Student", href: "/donate" },
  { label: "Become a Volunteer", href: "/volunteer" },
  { label: "Join the Team", href: "/join" },
  { label: "Contact Us", href: "/contact" },
]

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", dropdown: aboutDropdown, dropdownKey: "about" },
  { label: "Programs", href: "/programs", dropdown: programsDropdown, dropdownKey: "programs" },
  { label: "Get Involved", href: "/volunteer", dropdown: getInvolvedDropdown, dropdownKey: "getInvolved" },
  { label: "News", href: "/news" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<DropdownKey | null>(null)
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  const openDrop = (key: DropdownKey) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
    setOpenDropdown(key)
  }

  const closeDrop = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 350)
  }

  const keepDrop = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setMobileOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  function isNavLinkActive(link: NavLink): boolean {
    if (link.dropdownKey === "about") return pathname.startsWith("/about") || pathname.startsWith("/team")
    if (link.dropdownKey === "programs") return pathname.startsWith("/programs")
    if (link.dropdownKey === "getInvolved") return pathname === "/volunteer" || pathname === "/donate" || pathname === "/join" || pathname === "/contact"
    return pathname === link.href
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-navy shadow-lg shadow-navy/20" : "bg-navy/95 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 py-2">
              <Image
                src="/images/logo/logo.png"
                alt="Bridge2Charity Foundation"
                width={120}
                height={40}
                className="h-10 w-auto object-contain mix-blend-screen"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active = isNavLinkActive(link)

                if (link.dropdown && link.dropdownKey) {
                  const isDropOpen = openDropdown === link.dropdownKey
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => openDrop(link.dropdownKey!)}
                      onMouseLeave={closeDrop}
                    >
                      <button
                        style={{ fontFamily: "var(--font-jakarta)" }}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                          active
                            ? "text-orange border-b-2 border-orange"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${isDropOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      <div
                        className={`absolute top-full left-0 mt-1 w-56 bg-navy-light border border-white/10 rounded-xl shadow-xl shadow-navy/40 overflow-hidden transition-all duration-200 ${
                          isDropOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                        onMouseEnter={keepDrop}
                        onMouseLeave={closeDrop}
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            style={{ fontFamily: "var(--font-jakarta)" }}
                            className="flex items-center px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-orange/20 transition-colors duration-150 border-b border-white/5 last:border-0"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ fontFamily: "var(--font-jakarta)" }}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      active
                        ? "text-orange border-b-2 border-orange"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Donate button + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/donate"
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="hidden sm:inline-flex items-center px-5 py-2 bg-orange hover:bg-orange-light text-white text-sm font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5"
              >
                Donate
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 bg-navy flex flex-col lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Image
            src="/images/logo/icon.png"
            alt="Bridge2Charity"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {navLinks.map((link) => {
            const active = isNavLinkActive(link)

            if (link.dropdown && link.dropdownKey) {
              const mobileOpen = mobileOpenDropdown === link.dropdownKey
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileOpenDropdown(mobileOpen ? null : link.dropdownKey!)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                      active ? "bg-orange/20 text-orange" : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobileOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange/30 pl-3">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="flex items-center px-3 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  active ? "bg-orange/20 text-orange" : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Drawer footer */}
        <div className="px-6 py-6 border-t border-white/10">
          <Link
            href="/donate"
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="flex items-center justify-center w-full py-3 bg-orange hover:bg-orange-light text-white font-bold rounded-lg transition-colors duration-200"
          >
            Donate
          </Link>
        </div>
      </div>
    </>
  )
}
