"use client"

import { useEffect, useRef, useState } from "react"

const TARGET = 30

function useCountUp(target: number, duration: number, triggered: boolean) {
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

export default function VolunteersReachedCard() {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(TARGET, 2000, triggered)

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
    <div
      ref={ref}
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 16,
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        maxWidth: 220,
      }}
    >
      <span
        style={{
          color: "#C9601C",
          fontSize: 40,
          fontWeight: 800,
          lineHeight: 1,
          fontFamily: "var(--font-montserrat)",
        }}
      >
        {count}+
      </span>
      <span
        style={{
          color: "#FBF6F0",
          fontSize: 13,
          fontWeight: 700,
          marginTop: 10,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          fontFamily: "var(--font-jakarta)",
        }}
      >
        Volunteers Reached
      </span>
    </div>
  )
}
