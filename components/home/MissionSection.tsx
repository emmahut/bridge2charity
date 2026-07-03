import { Zap, Shield, Users, Target } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Activeness",
    description:
      "We are a committed team working towards solutions that can make Rwanda and Africa flourish.",
  },
  {
    icon: Shield,
    title: "Courageous",
    description:
      "We work collectively, encouraging one another to accomplish a common goal.",
  },
  {
    icon: Users,
    title: "All In",
    description:
      "We are committed to working together without leaving anyone behind to accomplish the mission, and we believe in partnering with others to accomplish a common goal.",
  },
  {
    icon: Target,
    title: "Results-driven",
    description:
      "We believe in results, and we believe that results should speak louder than words.",
  },
]

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 lg:py-24" id="mission">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(5,10,48,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(5,10,48,0.035)_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* Left — label + intro + mission/vision */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-8 bg-orange" />
              <span
                className="text-orange text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Who We Are
              </span>
            </div>

            <p
              className="mb-7 max-w-2xl text-lg leading-relaxed text-navy/75"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Bridge2Charity Foundation was not born in a boardroom. It was born in a community in the quiet
              recognition that the children around us deserved more than what circumstance had given them,
              and in the conviction that young people, when given structure and purpose, could be the ones
              to change that.
            </p>

            <h2
              className="mb-6 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Mission &amp; Vision
            </h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-orange/15 bg-white/85 p-6 shadow-soft-sm backdrop-blur-sm">
                <div className="mb-4 h-1 w-14 rounded-full bg-orange" />
                <h3
                  className="text-lg text-navy font-semibold mb-2"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Our Mission
                </h3>
                <p
                  className="text-navy/70 leading-relaxed"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  To improve the livelihoods of primary school students and their communities through
                  sustainable, community-driven initiatives that create lasting change.
                </p>
              </div>
              <div className="rounded-lg border border-olive/15 bg-white/85 p-6 shadow-soft-sm backdrop-blur-sm">
                <div className="mb-4 h-1 w-14 rounded-full bg-olive" />
                <h3
                  className="text-lg text-navy font-semibold mb-2"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Our Vision
                </h3>
                <p
                  className="text-navy/70 leading-relaxed"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  Rwanda where every primary school student has access to quality education,
                  proper nutrition, and a community that supports their growth.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Our Values (starts parallel to "Who We Are") */}
          <div>
            <div className="mb-5 flex items-end justify-between gap-4 px-1">
              <h3
                className="text-2xl text-navy font-bold"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Our Values
              </h3>
              <span
                className="hidden text-xs font-bold uppercase tracking-[0.18em] text-navy/35 sm:block"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                operating code
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="group min-h-60 rounded-lg border border-navy/5 bg-white p-6 shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/20 hover:shadow-soft-md"
                  >
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg bg-orange/10 transition-colors duration-300 group-hover:bg-orange/20">
                      <Icon size={22} className="text-orange" />
                    </div>
                    <h4
                      className="text-navy font-bold text-lg mb-2"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {value.title}
                    </h4>
                    <p
                      className="text-navy/60 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
            <div
              className="mt-4 rounded-lg bg-navy px-5 py-4 text-sm font-semibold leading-relaxed text-white/78"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              We build with youth leadership, practical follow-through, and partnerships that stay close to the community.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
