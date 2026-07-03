"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import type { Scholar } from "@/types/scholars"

function getInitials(student: Scholar): string {
  const first = student.firstName.charAt(0).toUpperCase()
  const last = student.lastName ? student.lastName.charAt(0).toUpperCase() : ""
  return last ? `${first}.${last}.` : first
}

export default function CohortGallery({ students }: { students: Scholar[] }) {
  const [zoomed, setZoomed] = useState<Scholar | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!zoomed) return
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomed(null)
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [zoomed])

  return (
    <>
      {/* ── Student grid ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
            {students.map(student => {
              const hasPhoto = !!student.photoUrl
              const cardContent = (
                <>
                  {/* Photo circle */}
                  <div
                    className="rounded-full overflow-hidden mb-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      width: "160px",
                      height: "160px",
                      border: "2px solid #d0d0d0",
                      flexShrink: 0,
                    }}
                  >
                    {hasPhoto ? (
                      <Image
                        src={student.photoUrl!}
                        alt={`Photo of ${student.firstName} ${student.lastName}`}
                        width={160}
                        height={160}
                        sizes="160px"
                        className="rounded-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#050a30" }}
                      >
                        <span
                          className="font-bold select-none font-montserrat"
                          style={{
                            color: "white",
                            fontSize: "22px",
                            letterSpacing: "2px",
                          }}
                        >
                          {getInitials(student)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <p
                    className="text-navy font-semibold text-sm leading-tight group-hover:text-orange transition-colors duration-200 font-jakarta"
                  >
                    {student.firstName} {student.lastName}
                  </p>
                  {/* School */}
                  <p
                    className="text-navy/45 text-xs mt-0.5 font-nunito"
                  >
                    {student.school ?? "EP Kirambo"}
                  </p>
                </>
              )

              return hasPhoto ? (
                <button
                  key={student.id}
                  type="button"
                  className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
                  onClick={() => setZoomed(student)}
                  aria-label={`View larger photo of ${student.firstName} ${student.lastName}`}
                >
                  {cardContent}
                </button>
              ) : (
                <div
                  key={student.id}
                  className="flex flex-col items-center text-center group"
                >
                  {cardContent}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────────────── */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
          onClick={() => setZoomed(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo of ${zoomed.firstName} ${zoomed.lastName}`}
        >
          <div
            className="relative flex flex-col items-center px-6"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setZoomed(null)}
              className="absolute -top-4 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-xl z-10"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#050a30" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Zoomed photo */}
            <div
              className="rounded-full overflow-hidden shadow-2xl"
              style={{ width: "320px", height: "320px", flexShrink: 0 }}
            >
              <Image
                src={zoomed.photoUrl!}
                alt={`Photo of ${zoomed.firstName} ${zoomed.lastName}`}
                width={320}
                height={320}
                sizes="320px"
                className="rounded-full object-cover object-center"
              />
            </div>

            {/* Name + school */}
            <p
              className="text-white font-bold text-lg mt-5 text-center font-jakarta"
            >
              {zoomed.firstName} {zoomed.lastName}
            </p>
            <p
              className="text-white/50 text-sm mt-1 text-center font-nunito"
            >
              {zoomed.school ?? "EP Kirambo"}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
