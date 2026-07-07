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
      {/* ── Fixed navbar ──────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: "#050A30", height: "66px" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">

            {/* ── Logo ───────────────────────────────────────────────────── */}
            <Link href="/" className="flex items-center flex-shrink-0" style={{ gap: 10 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  overflow: "hidden",
                  flexShrink: 0,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/images/logo/icon.png"
                  alt="B2C"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain", width: 40, height: 40 }}
                  priority
                />
              </div>
              <div className="flex flex-col" style={{ lineHeight: 1 }}>
                <span
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "white",
                    fontFamily: "var(--font-montserrat)",
                    lineHeight: 1.25,
                  }}
                >
                  Bridge2Charity
                </span>
                <span
                  className="hidden md:block"
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-jakarta)",
                    lineHeight: 1.3,
                    marginTop: 3,
                  }}
                >
                  Foundation
                </span>
              </div>
            </Link>

            {/* ── Center pill nav ────────────────────────────────────────── */}
            <div
              className="hidden lg:flex items-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "999px",
                padding: "4px",
                gap: "2px",
              }}
            >
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
                        style={{
                          backgroundColor: active ? "#C9601C" : "transparent",
                          borderRadius: "999px",
                          padding: "7px 15px",
                          color: "white",
                          fontSize: 14,
                          fontWeight: active ? 600 : 500,
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          fontFamily: "var(--font-jakarta)",
                          whiteSpace: "nowrap",
                          cursor: "pointer",
                          border: "none",
                          outline: "none",
                          transition: "background-color 0.15s",
                        }}
                        className={!active ? "hover:bg-white/10 rounded-full" : ""}
                      >
                        {link.label}
                        <ChevronDown
                          size={13}
                          style={{
                            transition: "transform 0.2s",
                            transform: isDropOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        />
                      </button>

                      {/* Dropdown panel */}
                      <div
                        style={{
                          position: "absolute",
                          top: "calc(100% + 10px)",
                          left: "50%",
                          minWidth: 200,
                          backgroundColor: "#0c1245",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 12,
                          overflow: "hidden",
                          boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                          opacity: isDropOpen ? 1 : 0,
                          pointerEvents: isDropOpen ? "auto" : "none",
                          transform: isDropOpen
                            ? "translateX(-50%) translateY(0)"
                            : "translateX(-50%) translateY(-6px)",
                          transition: "opacity 0.2s, transform 0.2s",
                        }}
                        onMouseEnter={keepDrop}
                        onMouseLeave={closeDrop}
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            style={{
                              fontFamily: "var(--font-jakarta)",
                              ...(sub.href === "/volunteer" ? { color: "#C2410C", fontWeight: 600 } : {}),
                            }}
                            className="flex items-center px-4 py-3 text-sm hover:text-white hover:bg-white/10 transition-colors duration-150 border-b border-white/5 last:border-0"
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
                    style={{
                      backgroundColor: active ? "#C9601C" : "transparent",
                      borderRadius: "999px",
                      padding: "7px 15px",
                      color: "white",
                      fontSize: 14,
                      fontWeight: active ? 600 : 500,
                      fontFamily: "var(--font-jakarta)",
                      whiteSpace: "nowrap",
                      transition: "background-color 0.15s",
                      display: "inline-block",
                    }}
                    className={!active ? "hover:bg-white/10" : ""}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* ── Right: Donate + hamburger ──────────────────────────────── */}
            <div className="flex items-center gap-3">
              <Link
                href="/donate"
                className="hidden sm:inline-flex items-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 active:translate-y-0"
                style={{
                  backgroundColor: "#C2410C",
                  borderRadius: "10px",
                  padding: "9px 20px",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 14,
                  fontFamily: "var(--font-montserrat)",
                  gap: 8,
                  whiteSpace: "nowrap",
                }}
              >
                <HeartHandshake size={17} color="white" strokeWidth={2} />
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

      {/* ── Mobile backdrop ───────────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile drawer ─────────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 flex flex-col lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#050A30" }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center" style={{ gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                overflow: "hidden",
                flexShrink: 0,
                backgroundColor: "rgba(255,255,255,0.06)",
              }}
            >
              <Image
                src="/images/logo/icon.png"
                alt="Bridge2Charity"
                width={36}
                height={36}
                style={{ objectFit: "contain", width: 36, height: 36 }}
              />
            </div>
            <div className="flex flex-col" style={{ lineHeight: 1 }}>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "white",
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: 1.25,
                }}
              >
                Bridge2Charity
              </span>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-jakarta)",
                  lineHeight: 1.3,
                  marginTop: 3,
                }}
              >
                Foundation
              </span>
            </div>
          </div>
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
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-full transition-colors duration-200"
                    style={{
                      backgroundColor: active ? "#C9601C" : "transparent",
                      color: "white",
                      fontFamily: "var(--font-jakarta)",
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      style={{
                        transition: "transform 0.2s",
                        transform: mobileOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  {mobileOpen && (
                    <div
                      className="ml-4 mt-1 space-y-1 border-l-2 pl-3"
                      style={{ borderColor: "rgba(201,96,28,0.35)" }}
                    >
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-white/10 transition-colors"
                          style={{
                            color: sub.href === "/volunteer" ? "#C2410C" : "rgba(255,255,255,0.7)",
                            fontWeight: sub.href === "/volunteer" ? 600 : 400,
                            fontFamily: "var(--font-jakarta)",
                          }}
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
                className="flex items-center px-4 py-3 text-base font-medium rounded-full transition-colors duration-200"
                style={{
                  backgroundColor: active ? "#C9601C" : "transparent",
                  color: "white",
                  fontFamily: "var(--font-jakarta)",
                }}
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
            className="flex items-center justify-center w-full py-3 gap-2 font-bold hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: "#C2410C",
              borderRadius: "10px",
              color: "white",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            <HeartHandshake size={17} color="white" strokeWidth={2} />
            Donate
          </Link>
        </div>
      </div>
    </>
  )
}
