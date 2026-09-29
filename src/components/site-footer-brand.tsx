"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

const VIEWBOX_WIDTH = 800

/**
 * The glyphs are rectangles on a 32-unit cell grid, emitted per horizontal run.
 * The same data drives both layers: filled for the body, stroked for the
 * technical-drawing keyline the original logotype had.
 */
const GLYPH_PATH =
  "M64 0h96v32h-96zM32 32h160v32h-160zM0 64h64v32h-64zM160 64h64v32h-64zM0 96h64v32h-64zM160 96h64v32h-64zM0 128h224v32h-224zM0 160h224v32h-224zM0 192h64v32h-64zM160 192h64v32h-64zM0 224h64v32h-64zM160 224h64v32h-64zM288 0h96v32h-96zM448 0h64v32h-64zM288 32h96v32h-96zM448 32h64v32h-64zM288 64h128v32h-128zM448 64h64v32h-64zM288 96h64v32h-64zM384 96h32v32h-32zM448 96h64v32h-64zM288 128h64v32h-64zM384 128h32v32h-32zM448 128h64v32h-64zM288 160h64v32h-64zM384 160h128v32h-128zM288 192h64v32h-64zM416 192h96v32h-96zM288 224h64v32h-64zM416 224h96v32h-96zM576 0h64v32h-64zM736 0h64v32h-64zM576 32h96v32h-96zM704 32h96v32h-96zM608 64h160v32h-160zM640 96h96v32h-96zM640 128h96v32h-96zM608 160h160v32h-160zM576 192h96v32h-96zM704 192h96v32h-96zM576 224h64v32h-64zM736 224h64v32h-64z"

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(0.5)
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const containerRect = event.currentTarget.getBoundingClientRect()
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    )
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(0.5)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 800 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={GLYPH_PATH} fill="url(#paint0_linear_1145_73)" />
            <path
              className="stroke-foreground/10"
              d={GLYPH_PATH}
              strokeWidth="2"
            />
            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
                x1={gradientX1}
                y1="1"
                x2="400"
                y2="256"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  )
}
