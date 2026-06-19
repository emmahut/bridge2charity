import type { Metadata } from "next"
import Link from "next/link"
import { boardMembers } from "@/data/team"

export const metadata: Metadata = {
  title: "Board of Directors — Bridge2Charity Foundation",
  description: "Meet the Board of Directors of Bridge2Charity Foundation.",
}

export default function BoardPage() {
  return (
    <main className="min-h-screen bg-cream pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <h1
          className="text-4xl sm:text-5xl font-bold text-navy text-center mb-14"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Board of Directors
        </h1>

        <div className="flex flex-wrap justify-center gap-10">
          {boardMembers.map((member) => (
            <Link
              key={member.id}
              href={`/team/${member.slug}`}
              className="group flex flex-col items-center text-center w-56 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Circular photo */}
              <div
                className="w-40 h-40 rounded-full overflow-hidden mb-4 flex-shrink-0 flex items-center justify-center"
                style={{ border: "2px solid #e0e0e0", background: "linear-gradient(135deg, #050a30 60%, #1a2050)" }}
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span
                    className="text-4xl font-bold text-white/20 select-none"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {member.initials}
                  </span>
                )}
              </div>

              <p
                className="text-navy font-bold text-lg leading-tight group-hover:text-orange transition-colors duration-200"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {member.name}
              </p>
              <p
                className="text-orange text-sm font-semibold mt-1"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {member.title}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}
