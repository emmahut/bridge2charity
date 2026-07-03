import { AlertTriangle, BookOpen, Apple } from "lucide-react"

const challenges = [
  {
    icon: BookOpen,
    stat: "37%",
    title: "The Education Gap",
    description:
      "Financial barriers, language gaps, and under-resourced classrooms leave thousands of children behind — not for lack of ability, but for lack of support.",
    statColor: "text-orange",
    borderColor: "border-orange/20 hover:border-orange/40",
    iconColor: "bg-orange/10 text-orange",
  },
  {
    icon: Apple,
    stat: "38%",
    title: "Child Malnutrition",
    description:
      "Without adequate nutrition in early childhood, cognitive development suffers — affecting school performance and long-term life outcomes.",
    statColor: "text-cream",
    borderColor: "border-cream/20 hover:border-cream/30",
    iconColor: "bg-cream/10 text-cream",
  },
  {
    icon: AlertTriangle,
    stat: "1 in 3",
    title: "Lack of Resources",
    description:
      "No notebooks. No pens. No school fees. For many families, the cost of education is simply out of reach — and children pay the price.",
    statColor: "text-amber",
    borderColor: "border-amber/20 hover:border-amber/40",
    iconColor: "bg-amber/10 text-amber",
  },
]

export default function ChallengeSection() {
  return (
    <section className="bg-navy py-16 lg:py-24" id="challenge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-orange" />
          <span
            className="text-sm font-semibold uppercase tracking-widest text-orange"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            The Reality
          </span>
        </div>

        <div className="mb-14 text-center">
          <h2
            className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            The Challenges We&apos;re Addressing
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {challenges.map((challenge) => {
            const Icon = challenge.icon
            return (
              <div
                key={challenge.title}
                className={`group rounded-lg border bg-white/[0.06] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 ${challenge.borderColor}`}
              >
                {/* Icon */}
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${challenge.iconColor}`}>
                  <Icon size={22} />
                </div>

                {/* Stat */}
                <div
                  className={`mb-5 text-5xl font-bold ${challenge.statColor}`}
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {challenge.stat}
                </div>

                <h3
                  className="mb-3 text-xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {challenge.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-white/60"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {challenge.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
