import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { programs } from "@/data/programs"

export default function ProgramsOverview() {
  return (
    <section className="py-10 lg:py-14 bg-white" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-navy font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Three Programs. One Mission.
          </h2>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-orange font-semibold text-sm hover:gap-3 transition-all duration-200"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            View all programs <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="group block rounded-2xl overflow-hidden bg-white border border-[#EEEEEE] shadow-[0_2px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: 260 }}>
                {program.heroImage ? (
                  <Image
                    src={program.heroImage}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-navy/10 flex items-center justify-center">
                    <span
                      className="text-6xl font-bold text-navy/10"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {program.title.charAt(0)}
                    </span>
                  </div>
                )}
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                {/* Pills */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    style={{
                      backgroundColor: "#C9601C",
                      color: "#ffffff",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      padding: "5px 12px",
                      borderRadius: 999,
                      textTransform: "uppercase",
                      fontFamily: "var(--font-jakarta)",
                    }}
                  >
                    Active
                  </span>
                  <span
                    style={{
                      backgroundColor: "#050A30",
                      color: "#ffffff",
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "5px 12px",
                      borderRadius: 999,
                      fontFamily: "var(--font-montserrat)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    color: "#050A30",
                    fontWeight: 800,
                    fontSize: 22,
                    lineHeight: 1.3,
                    marginBottom: 10,
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  {program.title}
                </h3>
                <p
                  style={{
                    color: "#555555",
                    fontSize: 15,
                    lineHeight: 1.6,
                    marginBottom: 20,
                    fontFamily: "var(--font-nunito)",
                  }}
                >
                  {program.shortDescription}
                </p>

                {/* Stats row */}
                {program.impactStats && program.impactStats.length >= 2 && (
                  <div
                    style={{
                      display: "flex",
                      gap: 24,
                      paddingTop: 16,
                      borderTop: "1px solid #F0F0F0",
                      marginBottom: 20,
                    }}
                  >
                    {program.impactStats.slice(0, 2).map((stat) => (
                      <div key={stat.label}>
                        <div
                          style={{
                            color: "#C9601C",
                            fontWeight: 800,
                            fontSize: 28,
                            lineHeight: 1.1,
                            fontFamily: "var(--font-montserrat)",
                          }}
                        >
                          {stat.value}
                        </div>
                        <div
                          style={{
                            color: "#888888",
                            fontSize: 12,
                            marginTop: 3,
                            fontFamily: "var(--font-nunito)",
                          }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <span
                  style={{
                    color: "#C9601C",
                    fontWeight: 600,
                    fontSize: 15,
                    fontFamily: "var(--font-jakarta)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
