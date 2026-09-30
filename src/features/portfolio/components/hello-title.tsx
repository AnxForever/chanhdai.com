"use client"

import { useState, useSyncExternalStore } from "react"
import { useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"
import { InlineScript } from "@/components/inline-script"
import { AppleHelloEffectEnglish } from "@/registry/components/apple-hello-effect/apple-hello-effect-english"
import { PanelTitle } from "@/features/portfolio/components/panel"

const ID = "hello"
const SSR_TEXT = "Hello"
const INTRO_STORAGE_KEY = "hello-intro-played"

// The intro flag lives in sessionStorage, which only exists on the client.
// useSyncExternalStore keeps this hydration-safe: the server snapshot assumes
// the intro was already played (so SSR renders the plain greeting), and React
// re-checks the client snapshot after hydration without an effect or mismatch.
const noopSubscribe = () => () => {}

function subscribeToIntroFlag() {
  return noopSubscribe
}

function hasPlayedIntroSnapshot() {
  try {
    return sessionStorage.getItem(INTRO_STORAGE_KEY) !== null
  } catch {
    return true
  }
}

function hasPlayedIntroServerSnapshot() {
  return true
}

export function HelloTitle() {
  // Server renders "Hello"; the client snapshot resolves the viewer's local
  // greeting, which also covers client-side navigation (no inline script).
  const greeting = useSyncExternalStore(
    subscribeToIntroFlag,
    getGreeting,
    () => SSR_TEXT
  )

  const hasSeenIntro = useSyncExternalStore(
    subscribeToIntroFlag,
    hasPlayedIntroSnapshot,
    hasPlayedIntroServerSnapshot
  )
  const shouldReduceMotion = useReducedMotion()
  // Set from the animation-complete event (not an effect), after a short hold
  // of the finished word.
  const [holdDone, setHoldDone] = useState(false)

  const animating = !hasSeenIntro && !holdDone && !shouldReduceMotion

  return (
    <>
      <div className="relative inline-flex">
        <PanelTitle
          as="div"
          id={`${ID}-greeting`}
          className={cn(
            "font-handwritten leading-none transition-opacity duration-500",
            animating && "opacity-0"
          )}
          aria-hidden
          suppressHydrationWarning
        >
          {greeting}
        </PanelTitle>

        {animating && (
          <AppleHelloEffectEnglish
            className="absolute top-1/2 left-0 h-14 -translate-y-1/2"
            onAnimationComplete={() => {
              try {
                sessionStorage.setItem(INTRO_STORAGE_KEY, "1")
              } catch {}
              // Hold the finished word for a beat before settling back.
              setTimeout(() => setHoldDone(true), 1500)
            }}
          />
        )}
      </div>

      <InlineScript html={getInlineScript(`${ID}-greeting`)} />
    </>
  )
}

// Self-contained (globals only) so it can be serialized via `.toString()` into
// the pre-hydration script as well as used as the client snapshot.
function getGreeting() {
  const hour = new Date().getHours()
  if (hour >= 0 && hour < 12) return "Good morning"
  if (hour >= 12 && hour < 17) return "Good afternoon"
  return "Good evening"
}

function runGreetingScript(elementId: string, compute: typeof getGreeting) {
  try {
    const el = document.getElementById(elementId)
    if (el) el.textContent = compute()
  } catch {}
}

// Blocking inline script that paints the greeting before hydration on the
// initial document load (Next.js "prevent flash before hydration").
function getInlineScript(elementId: string) {
  return `(${runGreetingScript.toString()})(${JSON.stringify(elementId)},${getGreeting.toString()})`
}
