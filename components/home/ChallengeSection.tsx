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
    <section className="py-12 lg:py-16 bg-navy" id="challenge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section label */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px w-8 bg-orange" />
        <span
          className="text-orange text-sm font-semibold tracking-widest uppercase"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          The Reality
        </span>
      </div>

      <div className="mb-14 text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Challenges We&apos;re Addressing
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {challenges.map((challenge) => {
          const Icon = challenge.icon
          return (
            <div
              key={challenge.title}
              className={`group rounded-2xl border bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300 ${challenge.borderColor}`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${challenge.iconColor}`}>
                <Icon size={22} />
              </div>

              {/* Stat — big, bold, font-matched */}
              <div
                className={`text-5xl font-bold mb-6 ${challenge.statColor}`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {challenge.stat}
              </div>

              {/* Title & description */}
              <h3
                className="text-white font-semibold text-xl mb-3"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {challenge.title}
              </h3>
              <p
                className="text-white/60 text-sm leading-relaxed"
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
