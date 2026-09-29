import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

/**
 * The published origin, without protocol. Single place to change when the
 * deployment target is settled; `.env.local` overrides the dev origin through
 * `NEXT_PUBLIC_APP_URL`, and production should set that variable too.
 *
 * Change this when a custom domain is attached — the Vercel project URL is
 * only the default.
 */
export const SITE_DOMAIN = "anx-portfolio.vercel.app"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || `https://${SITE_DOMAIN}`,
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/AnxForever/anx-portfolio/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Craft",
    href: "/craft",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Sponsors",
    href: "/sponsors",
  },
]

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

/**
 * No X account yet. The `twitter.site` / `twitter.creator` metadata fields are
 * optional, so pages can keep passing this through and Next simply omits them.
 * Once `SOCIAL.x` is back on, point this at `SOCIAL.x.handle`.
 */
export const X_HANDLE: string | undefined = undefined

export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "AnxForever/anx-portfolio"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/AnxForever/anx-portfolio"

export const SPONSORSHIP_URL = "https://github.com/sponsors/AnxForever"

export const UTM_PARAMS = {
  utm_source: SITE_DOMAIN,
}
