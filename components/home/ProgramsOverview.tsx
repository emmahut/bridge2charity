import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { programs } from "@/data/programs"

export default function ProgramsOverview() {
  return (
    <section className="py-10 lg:py-14 bg-white" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section label */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px w-8 bg-orange" />
        <span
          className="text-orange text-sm font-semibold tracking-widest uppercase"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          What We Do
        </span>
      </div>

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <Link
            key={program.slug}
            href={`/programs/${program.slug}`}
            className="group relative rounded-2xl overflow-hidden border border-navy/10 hover:border-orange/30 hover:shadow-xl hover:shadow-navy/10 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image or color block */}
            <div className="relative h-52 overflow-hidden">
              {program.heroImage ? (
                <Image
                  src={program.heroImage}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div
                  className={`w-full h-full flex items-center justify-center ${
                    index === 1 ? "bg-olive/20" : "bg-maroon/10"
                  }`}
                >
                  <span className="font-playfair text-6xl font-bold text-navy/10">
                    {program.title.charAt(0)}
                  </span>
                </div>
              )}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

              {/* Active badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-orange/90 text-white text-xs font-lato font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Active
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-playfair text-navy font-bold text-xl mb-3 group-hover:text-orange transition-colors duration-200">
                {program.title}
              </h3>
              <p className="text-navy/60 font-lato text-sm leading-relaxed mb-5">
                {program.shortDescription}
              </p>

              {/* Impact stats */}
              {program.impactStats && program.impactStats.length > 0 && (
                <div className="flex gap-4 mb-5 pt-4 border-t border-navy/5">
                  {program.impactStats.slice(0, 2).map((stat) => (
                    <div key={stat.label}>
                      <div className="font-playfair text-orange font-bold text-lg">{stat.value}</div>
                      <div className="text-navy/50 font-lato text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <span className="inline-flex items-center gap-1.5 text-orange font-lato font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
                Learn more <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  )
}
