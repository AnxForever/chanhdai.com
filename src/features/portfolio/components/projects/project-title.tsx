"use client"

import { useState } from "react"

import { ShimmeringText } from "@/registry/components/shimmering-text"

/**
 * Plain text by default; when `effect` is "shimmer" the title plays a light
 * sweep only while hovered, so nothing moves unless the visitor asks for it.
 */
export function ProjectTitle({
  title,
  effect,
}: {
  title: string
  effect?: ProjectTitleEffect
}) {
  const [hovered, setHovered] = useState(false)

  if (effect !== "shimmer") {
    return <>{title}</>
  }

  return (
    <span
      className="inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ShimmeringText
        text={title}
        duration={1.2}
        isStopped={!hovered}
        className="[--color:var(--muted-foreground)] [--shimmering-color:var(--foreground)]"
      />
    </span>
  )
}

type ProjectTitleEffect = "shimmer"
