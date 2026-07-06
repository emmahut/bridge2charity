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
    <section className="py-12 lg:py-16 bg-cream" id="mission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — label + intro + mission/vision */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-orange" />
              <span
                className="text-orange text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Who We Are
              </span>
            </div>

            <p
              className="text-navy/75 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Bridge2Charity Foundation was not born in a boardroom. It was born in a community in the quiet
              recognition that the children around us deserved more than what circumstance had given them,
              and in the conviction that young people, when given structure and purpose, could be the ones
              to change that.
            </p>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-navy font-bold leading-tight mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Mission &amp; Vision
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-orange pl-6">
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
              <div className="border-l-4 border-olive pl-6">
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
            <h3
              className="text-2xl text-navy font-bold mb-8"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Our Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-navy/5 hover:border-orange/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange/10 group-hover:bg-orange/20 flex items-center justify-center mb-4 transition-colors duration-300">
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
          </div>

        </div>
      </div>
    </section>
  )
}
