import Image from "next/image"

export default function NewsHero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-navy px-6 py-16 text-center sm:py-20">
      <Image
        src="/images/pages/news-hero.jpg"
        alt=""
        fill
        className="object-cover object-center opacity-[0.18]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy/85" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <h1
          className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          See What&apos;s New
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Program milestones, student moments, and community updates from the people building
          practical changes across Rwanda.
        </p>
      </div>
    </section>
  )
}
