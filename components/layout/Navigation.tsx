"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, HeartHandshake } from "lucide-react"

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

  const closeMobileMenu = () => {
    setIsOpen(false)
    setMobileOpenDropdown(null)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
        setMobileOpenDropdown(null)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
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
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-navy/95 shadow-lg shadow-navy/20 backdrop-blur-xl"
            : "border-white/5 bg-navy/90 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid h-16 grid-cols-[1fr_auto] items-center gap-4 lg:h-20 lg:grid-cols-[minmax(220px,1fr)_auto_minmax(220px,1fr)]">

            {/* Logo */}
            <Link href="/" className="group inline-flex min-w-0 items-center gap-3 justify-self-start">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-inner lg:h-12 lg:w-12">
                <Image
                  src="/images/logo/icon.png"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </span>
              <span className="hidden min-w-0 flex-col leading-none sm:flex">
                <span
                  className="text-base font-extrabold tracking-[0.01em] text-white transition-colors duration-200 group-hover:text-orange-light"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Bridge2Charity
                </span>
                <span
                  className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white/45"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Foundation
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center justify-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 shadow-inner lg:flex">
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
                        type="button"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                        aria-expanded={isDropOpen}
                        aria-controls={`${link.dropdownKey}-dropdown`}
                        onClick={() => setOpenDropdown(isDropOpen ? null : link.dropdownKey!)}
                        className={`flex min-h-10 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                          active
                            ? "bg-orange text-white shadow-sm shadow-orange/20"
                            : "text-white/78 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${isDropOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      <div
                        id={`${link.dropdownKey}-dropdown`}
                        aria-hidden={!isDropOpen}
                        className={`absolute left-0 top-full mt-3 w-60 overflow-hidden rounded-lg border border-white/10 bg-navy-light shadow-xl shadow-navy/40 transition-all duration-200 ${
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
                            onClick={() => setOpenDropdown(null)}
                            className="flex min-h-11 items-center border-b border-white/5 px-4 py-3 text-sm font-medium text-white/80 transition-colors duration-150 last:border-0 hover:bg-orange-light/20 hover:text-white"
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
                    className={`flex min-h-10 items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                      active
                        ? "bg-orange text-white shadow-sm shadow-orange/20"
                        : "text-white/78 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Donate button + mobile toggle */}
            <div className="flex items-center justify-self-end gap-3">
              <Link
                href="/donate"
                style={{ fontFamily: "var(--font-montserrat)" }}
                className="hidden min-h-11 items-center gap-2 rounded-lg bg-orange px-5 py-2 text-sm font-bold text-white shadow-lg shadow-orange/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-dark hover:shadow-orange/30 sm:inline-flex"
              >
                <HeartHandshake size={16} aria-hidden="true" />
                Donate
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:bg-white/10 lg:hidden"
                aria-label="Open menu"
                aria-controls="mobile-navigation-menu"
                aria-expanded={isOpen}
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
        id="mobile-navigation-menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 bg-navy flex flex-col lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <Link href="/" onClick={closeMobileMenu} className="inline-flex items-center gap-3">
            <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <Image
                src="/images/logo/icon.png"
                alt=""
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className="text-sm font-extrabold text-white"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Bridge2Charity
              </span>
              <span
                className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/45"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Foundation
              </span>
            </span>
          </Link>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
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
                    type="button"
                    onClick={() => setMobileOpenDropdown(mobileOpen ? null : link.dropdownKey!)}
                    aria-expanded={mobileOpen}
                    aria-controls={`mobile-${link.dropdownKey}-dropdown`}
                    className={`flex min-h-12 w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-colors duration-200 ${
                      active ? "bg-orange-light/20 text-orange-light" : "text-white/90 hover:bg-white/10 hover:text-white"
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
                    <div id={`mobile-${link.dropdownKey}-dropdown`} className="ml-4 mt-1 space-y-1 border-l-2 border-orange-light/30 pl-3">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={closeMobileMenu}
                          className="flex min-h-10 items-center rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
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
                onClick={closeMobileMenu}
                className={`flex min-h-12 items-center rounded-lg px-4 py-3 text-base font-semibold transition-colors duration-200 ${
                  active ? "bg-orange-light/20 text-orange-light" : "text-white/90 hover:bg-white/10 hover:text-white"
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
            onClick={closeMobileMenu}
            style={{ fontFamily: "var(--font-montserrat)" }}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-orange py-3 font-bold text-white transition-colors duration-200 hover:bg-orange-dark"
          >
            <HeartHandshake size={17} aria-hidden="true" />
            Donate
          </Link>
        </div>
      </div>
    </>
  )
}
