"use client"

import { useMemo } from "react"
import dynamic from "next/dynamic"
import { useReducedMotion } from "motion/react"

import { useIsClient } from "@/hooks/use-is-client"

function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false
  // Hide the duck only on touch-first devices (phones/tablets): a coarse
  // PRIMARY pointer means there is no mouse at all. The upstream check
  // (maxTouchPoints > 0) also hid it on touch-capable laptops and in
  // browsers that report touch support, where the duck works fine.
  return window.matchMedia("(pointer: coarse)").matches
}

const DuckFollowerCore = dynamic(
  () =>
    import("@/features/portfolio/components/duck-follower/duck-follower-core"),
  {
    ssr: false,
  }
)

export function DuckFollower() {
  const isClient = useIsClient()
  const shouldReduceMotion = useReducedMotion()

  const isTouch = useMemo(() => {
    if (!isClient) return true
    return isTouchDevice()
  }, [isClient])

  const shouldRender = isClient && !shouldReduceMotion && !isTouch

  if (!shouldRender) return null

  return <DuckFollowerCore />
}
