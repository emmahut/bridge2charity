import Link from "next/link"
import Image from "next/image"
import { getCollageMembers } from "@/data/team"

export default function TeamCollage() {
  const collageMembers = getCollageMembers()

  return (
    <section className="bg-navy py-14 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text — LEFT */}
          <div>
            <p
              className="text-white text-center text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Our Team
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Civic Leaders,{" "}
              <span className="text-orange">Driving Change</span>
            </h2>
            <p
              className="text-white/60 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Bridge2Charity is powered by a small group of passionate young civic leaders dedicated
              to advancing its mission and vision, and to developing excellent talent in Africa.
            </p>
            <Link
              href="/about/team"
              className="text-cream/70 hover:text-cream text-sm font-semibold underline underline-offset-4 decoration-cream/30 hover:decoration-cream transition-colors duration-200"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Meet Our Team
            </Link>
          </div>

          {/* Photo mosaic — RIGHT, square tiles, tight cluster */}
          <div className="grid grid-cols-4 gap-1">
            {collageMembers.slice(0, 12).map((member) => (
              <div
                key={member.id}
                className="aspect-square overflow-hidden bg-navy/50"
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center border border-white/5"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                    <span
                      className="text-sm font-bold text-white/20 select-none"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {member.initials}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
