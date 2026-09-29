import { describe, expect, it } from "vitest"

import { SITE_DOMAIN } from "@/config/site"

import { getBookmarkExternalHref } from "./bookmark-link"

// Derived rather than hardcoded so changing SITE_DOMAIN does not break tests.
const UTM = `utm_source=${SITE_DOMAIN}`

describe("getBookmarkExternalHref", () => {
  it("appends utm_source", () => {
    expect(getBookmarkExternalHref("https://example.com/page")).toBe(
      `https://example.com/page?${UTM}`
    )
  })

  it("preserves params already on the url", () => {
    const href = getBookmarkExternalHref("https://example.com?atp=example")

    expect(href).toContain("atp=example")
    expect(href).toContain(UTM)
    expect(href.indexOf("atp=example")).toBeLessThan(href.indexOf(UTM))
  })

  it("returns invalid urls unchanged", () => {
    expect(getBookmarkExternalHref("not a url")).toBe("not a url")
  })

  it("normalizes bare origins with a trailing slash", () => {
    expect(getBookmarkExternalHref("https://animations.dev")).toBe(
      `https://animations.dev/?${UTM}`
    )
  })
})
