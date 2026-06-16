import Image from "next/image"
import Button from "@/components/ui/Button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/programs/eep-volunteer-selfie.jpg"
        alt="Bridge2Charity volunteers with students at EP Kirambo"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/60 to-navy/40" />

      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-olive to-orange" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
          <span
            className="text-orange text-sm font-semibold tracking-wide uppercase"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Bridge2Charity Foundation
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Empowering{" "}
          <span className="text-orange">Rwanda&apos;s</span>
          <br />
          Next Generation
        </h1>

        {/* Core message quote */}
        <p
          className="text-lg sm:text-xl lg:text-2xl text-white/85 font-light leading-relaxed max-w-3xl mx-auto mb-4"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          &ldquo;At B2C, we are improving primary students&apos; lives through sustainable
          community initiatives, and everyone can be part of that mission.&rdquo;
        </p>

        {/* Supporting text */}
        <p
          className="text-white/60 text-base max-w-xl mx-auto mb-10"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Education. Nutrition. Community. Three programs, one purpose — a Rwanda
          where every child has the chance to thrive.
        </p>

        {/* Primary row: Become a Volunteer + Donate */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Button href="/volunteer" variant="primary" size="lg">
            Become a Volunteer
          </Button>
          <Button href="/donate" variant="secondary" size="lg"
            className="bg-white/15 hover:bg-white/25 border border-white/30 text-white hover:border-white/60"
          >
            Donate
          </Button>
        </div>

        {/* Secondary: Explore Programs below */}
        <div className="flex items-center justify-center">
          <Button
            href="/programs"
            variant="outline"
            size="md"
            className="border-white/30 text-white/80 hover:bg-white/10 hover:border-white/60 hover:text-white"
          >
            Explore Our Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
