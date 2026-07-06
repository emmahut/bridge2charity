import Button from "@/components/ui/Button"
import Image from "next/image"
import { Heart } from "lucide-react"

export default function VolunteerCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-navy py-16 lg:py-20">
      <Image
        src="/images/programs/eep-classroom-2.jpg"
        alt=""
        fill
        className="object-cover object-center opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/88 to-navy/70" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-light/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-orange-light/15">
          <Heart size={28} className="text-orange-light" />
        </div>

        <h2
          className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Your Skills Can Change a Child&apos;s Life
        </h2>

        <p
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Whether you teach, mentor, organise, or simply show up — there&apos;s a role for you at
          Bridge2Charity. Join a team of people who believe that everyone can be part of this mission.
        </p>

        <div className="mx-auto flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button href="/volunteer" variant="primary" size="lg" className="w-full sm:w-auto">
            Become a Volunteer
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="w-full border-white/30 text-white/80 hover:border-white/60 hover:bg-white/10 hover:text-white sm:w-auto"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
