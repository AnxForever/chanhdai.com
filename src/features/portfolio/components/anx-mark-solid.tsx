"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

const VIEW_WIDTH = 800
const VIEW_HEIGHT = 256

/** Extrusion direction and depth, in viewBox units. */
const DEPTH_X = 26
const DEPTH_Y = 26
const STEPS = 14

/** How far the face retreats when pressed, as a fraction of the depth. */
const PRESS_FRACTION = 0.62

const GLYPH_PATH =
  "M64 0h96v32h-96zM32 32h160v32h-160zM0 64h64v32h-64zM160 64h64v32h-64zM0 96h64v32h-64zM160 96h64v32h-64zM0 128h224v32h-224zM0 160h224v32h-224zM0 192h64v32h-64zM160 192h64v32h-64zM0 224h64v32h-64zM160 224h64v32h-64zM288 0h96v32h-96zM448 0h64v32h-64zM288 32h96v32h-96zM448 32h64v32h-64zM288 64h128v32h-128zM448 64h64v32h-64zM288 96h64v32h-64zM384 96h32v32h-32zM448 96h64v32h-64zM288 128h64v32h-64zM384 128h32v32h-32zM448 128h64v32h-64zM288 160h64v32h-64zM384 160h128v32h-128zM288 192h64v32h-64zM416 192h96v32h-96zM288 224h64v32h-64zM416 224h96v32h-96zM576 0h64v32h-64zM736 0h64v32h-64zM576 32h96v32h-96zM704 32h96v32h-96zM608 64h160v32h-160zM640 96h96v32h-96zM640 128h96v32h-96zM608 160h160v32h-160zM576 192h96v32h-96zM704 192h96v32h-96zM576 224h64v32h-64zM736 224h64v32h-64z"

/**
 * The "ANX" logotype as an extruded block.
 *
 * A true isometric projection of these glyphs is not legible — their diagonal
 * strokes shear into staircases once the ground plane is tilted. Extruding the
 * flat wordmark along a fixed screen vector keeps all three letters readable,
 * and the site's line-and-hatch treatment keeps it from reading as a solid.
 */
export function AnxMarkSolid() {
  const id = useId()
  const ids = {
    body: `anx-body-${id}`,
    facePattern: `anx-face-pattern-${id}`,
    radialGradient: `anx-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, VIEW_WIDTH]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, VIEW_HEIGHT]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  // Offset fractions from the face (0) back to the full depth (1).
  const layers = Array.from({ length: STEPS + 1 }, (_, i) => 1 - i / STEPS)

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--side:color-mix(in_oklab,var(--foreground)_9%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox={`0 0 ${VIEW_WIDTH + DEPTH_X} ${VIEW_HEIGHT + DEPTH_Y}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="240"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>

        {/* The body of the block, step by step along the extrusion vector.
            Later copies sit further back, so the union reads as one solid. */}
        <g id={ids.body}>
          {layers.map((t) => (
            <path
              key={t}
              d={GLYPH_PATH}
              transform={`translate(${DEPTH_X * t} ${DEPTH_Y * t})`}
            />
          ))}
        </g>
      </defs>

      <use href={`#${ids.body}`} fill="var(--side)" />

      {/* The face, which retreats into the block while pressed. */}
      <motion.g
        variants={{
          normal: { x: 0, y: 0 },
          pressed: { x: DEPTH_X * PRESS_FRACTION, y: DEPTH_Y * PRESS_FRACTION },
        }}
        transition={transition}
      >
        <path d={GLYPH_PATH} fill="var(--background)" />
        <path d={GLYPH_PATH} fill={`url(#${ids.facePattern})`} />
        <path
          d={GLYPH_PATH}
          stroke="var(--stroke)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d={GLYPH_PATH}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1"
          fill="none"
        />
      </motion.g>
    </motion.svg>
  )
}
