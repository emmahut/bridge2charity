"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { impactStats } from "@/data/impact"

function useCountUp(target: number, duration = 2000, triggered: boolean) {
  const [count, setCount] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!triggered || prefersReducedMotion) return
    const startTime = performance.now()
    let frameId: number

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) frameId = requestAnimationFrame(step)
      else setCount(target)
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [target, duration, triggered, prefersReducedMotion])

  if (!triggered) return 0
  if (prefersReducedMotion) return target
  return count
}

function StatCard({ stat, triggered }: { stat: typeof impactStats[0]; triggered: boolean }) {
  const count = useCountUp(stat.value, 2000, triggered)

  return (
    <div className="group rounded-lg border border-white/10 bg-white/[0.04] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
      <div className="relative mb-4 inline-flex items-center justify-center">
        <div className="h-24 w-24 rounded-full bg-orange-light/10 transition-colors duration-300 group-hover:bg-orange-light/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-3xl font-bold text-orange-light"
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
    <section className="bg-navy py-16 lg:py-24" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-orange-light" />
          <span
            className="text-sm font-semibold uppercase tracking-widest text-orange-light"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Our Impact
          </span>
        </div>

        <div className="mb-12 text-center lg:mb-16">
          <h2
            className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            The Change We&apos;ve Made Together
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg text-white/60"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Behind every number is a student who stayed in school, a family with food on the table,
            and a community growing stronger.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {impactStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} triggered={triggered} />
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center">
          <p
            className="text-sm font-bold text-white"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Numbers reflect verified program data as of 2026. Updated at the end of each program term.
          </p>
        </div>
      </div>
    </section>
  )
}
