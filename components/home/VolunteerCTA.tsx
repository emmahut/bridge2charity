import Button from "@/components/ui/Button"
import { Heart } from "lucide-react"

export default function VolunteerCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-14">
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-olive/5 rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange/15 mb-8">
          <Heart size={28} className="text-orange" />
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Your Skills Can Change a Child&apos;s Life
        </h2>

        <p
          className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Whether you teach, mentor, organise, or simply show up — there&apos;s a role for you at
          Bridge2Charity. Join a team of people who believe that everyone can be part of this mission.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/volunteer" variant="primary" size="lg">
            Become a Volunteer
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-white/30 text-white/80 hover:bg-white/10 hover:border-white/60 hover:text-white"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
