"use client"

import { useEffect, useRef, useState } from "react"
import { impactStats } from "@/data/impact"

function useCountUp(target: number, duration = 2000, triggered: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered) return
    const startTime = performance.now()

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }

    requestAnimationFrame(step)
  }, [target, duration, triggered])

  return count
}

function StatCard({ stat, triggered }: { stat: typeof impactStats[0]; triggered: boolean }) {
  const count = useCountUp(stat.value, 2000, triggered)

  return (
    <div className="text-center group">
      <div className="relative inline-flex items-center justify-center mb-4">
        <div className="w-24 h-24 rounded-full bg-orange/10 group-hover:bg-orange/20 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-3xl font-bold text-orange"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {count}
            {stat.suffix ?? "+"}
          </span>
        </div>
      </div>
      <h3
        className="text-white font-semibold text-base mb-2"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {stat.label}
      </h3>
      {stat.description && (
        <p
          className="text-white/50 text-xs leading-relaxed max-w-40 mx-auto"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          {stat.description}
        </p>
      )}
    </div>
  )
}

export default function ImpactNumbers() {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 lg:py-16 bg-navy" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section label */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px w-8 bg-orange" />
        <span
          className="text-orange text-sm font-semibold tracking-widest uppercase"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Our Impact
        </span>
      </div>

      <div className="mb-16 text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Change We&apos;ve Made Together
        </h2>
        <p
          className="text-white/60 text-lg max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Behind every number is a student who stayed in school, a family with food on the table,
          and a community growing stronger.
        </p>
      </div>

      <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {impactStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} triggered={triggered} />
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 text-center">
        <p
          className="text-white font-bold text-sm"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Numbers reflect verified program data as of 2026. Updated at the end of each program term.
        </p>
      </div>
      </div>
    </section>
  )
}
