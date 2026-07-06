import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { programs } from "@/data/programs"

const programStyles = [
  {
    bar: "bg-orange",
    chip: "bg-orange/90 text-white",
    imageWash: "from-navy/75 via-navy/15 to-transparent",
    number: "text-orange/18",
  },
  {
    bar: "bg-olive",
    chip: "bg-olive/90 text-white",
    imageWash: "from-navy/72 via-olive/20 to-transparent",
    number: "text-olive/18",
  },
  {
    bar: "bg-maroon",
    chip: "bg-maroon/90 text-white",
    imageWash: "from-navy/75 via-maroon/20 to-transparent",
    number: "text-maroon/16",
  },
]

export default function ProgramsOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24" id="programs">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/12 to-transparent"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-orange" />
          <span
            className="text-sm font-semibold uppercase tracking-widest text-orange"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            What We Do
          </span>
        </div>

        <div className="mb-14 text-center">
          <h2
            className="mb-6 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Three Programs. One Mission.
          </h2>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange transition-all duration-200 hover:gap-3"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            View all programs <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map((program, index) => {
            const style = programStyles[index] ?? programStyles[0]

            return (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="group relative overflow-hidden rounded-lg border border-navy/10 bg-white shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-xl hover:shadow-navy/10"
            >
              <div className={`absolute inset-x-0 top-0 z-20 h-1 ${style.bar}`} />

              {/* Image or color block */}
              <div className="relative h-52 overflow-hidden">
                {program.heroImage ? (
                  <Image
                    src={program.heroImage}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div
                    className={`flex h-full w-full items-center justify-center ${
                      index === 1 ? "bg-olive/20" : "bg-maroon/10"
                    }`}
                  >
                    <span
                      className="text-6xl font-bold text-navy/10"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {program.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-t ${style.imageWash}`} />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${style.chip}`}>
                    Active
                  </span>
                  <span
                    className="rounded-full border border-white/18 bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white/78 backdrop-blur-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    0{index + 1}
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className={`absolute -bottom-3 right-4 text-7xl font-extrabold leading-none ${style.number}`}
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  0{index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="mb-3 text-xl font-bold text-navy transition-colors duration-200 group-hover:text-orange"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {program.title}
                </h3>
                <p
                  className="mb-5 text-sm leading-relaxed text-navy/60"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {program.shortDescription}
                </p>

                {program.impactStats && program.impactStats.length > 0 && (
                  <div className="mb-5 flex gap-4 border-t border-navy/5 pt-4">
                    {program.impactStats.slice(0, 2).map((stat) => (
                      <div key={stat.label}>
                        <div
                          className="text-lg font-bold text-orange"
                          style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-navy/50">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange transition-all duration-200 group-hover:gap-2.5">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
