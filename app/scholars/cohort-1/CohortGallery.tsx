"use client"

import { useState } from "react"
import type { Scholar } from "@/types/scholars"

function getInitials(student: Scholar): string {
  const first = student.firstName.charAt(0).toUpperCase()
  const last = student.lastName ? student.lastName.charAt(0).toUpperCase() : ""
  return last ? `${first}.${last}.` : first
}

export default function CohortGallery({ students }: { students: Scholar[] }) {
  const [zoomed, setZoomed] = useState<Scholar | null>(null)

  return (
    <>
      {/* ── Student grid ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
            {students.map(student => {
              const hasPhoto = !!student.photoUrl
              return (
                <div
                  key={student.id}
                  className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
                  style={{ cursor: hasPhoto ? "pointer" : "default" }}
                  onClick={() => hasPhoto && setZoomed(student)}
                >
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
                      <img
                        src={student.photoUrl!}
                        alt={student.firstName}
                        style={{
                          width: "160px",
                          height: "160px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          objectPosition: "center",
                          display: "block",
                        }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#050a30" }}
                      >
                        <span
                          className="font-bold select-none"
                          style={{
                            color: "white",
                            fontSize: "22px",
                            fontFamily: "var(--font-montserrat)",
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
                    className="text-navy font-semibold text-sm leading-tight group-hover:text-orange transition-colors duration-200"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {student.firstName} {student.lastName}
                  </p>
                  {/* School */}
                  <p
                    className="text-navy/45 text-xs mt-0.5"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {student.school ?? "EP Kirambo"}
                  </p>
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
        >
          <div
            className="relative flex flex-col items-center px-6"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
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
              <img
                src={zoomed.photoUrl!}
                alt={`${zoomed.firstName} ${zoomed.lastName}`}
                style={{
                  width: "320px",
                  height: "320px",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "50%",
                  display: "block",
                }}
              />
            </div>

            {/* Name + school */}
            <p
              className="text-white font-bold text-lg mt-5 text-center"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {zoomed.firstName} {zoomed.lastName}
            </p>
            <p
              className="text-white/50 text-sm mt-1 text-center"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              {zoomed.school ?? "EP Kirambo"}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
