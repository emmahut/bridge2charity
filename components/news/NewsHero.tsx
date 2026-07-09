import Image from "next/image"

export default function NewsHero() {
  return (
    <section className="bg-white py-[60px]">
      <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-orange" />
          <span
            className="text-sm font-semibold uppercase tracking-[3px] text-orange"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Latest from B2C
          </span>
          <div className="h-px w-8 bg-orange" />
        </div>
        <h1
          className="text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          See What&apos;s New
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy/65 sm:text-lg"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Program milestones, student moments, and community updates from the people building
          practical changes across Rwanda.
        </p>

        <div className="relative mx-auto mt-10 aspect-[2.24/1] w-full max-w-[900px] overflow-hidden rounded-2xl border border-navy/8 shadow-sm">
          <Image
            src="/images/pages/news-hero.jpg"
            alt="Bridge2Charity field update"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 900px, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
