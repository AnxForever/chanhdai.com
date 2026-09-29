import type { AvatarLightsVariants } from "@/features/portfolio/components/avatar-lights"

export type User = {
  firstName: string
  lastName: string
  /** Preferred public-facing name */
  displayName: string
  /** Handle/username used in links or mentions */
  username: string
  bio: string
  /** Short phrases rotated in UI (e.g., homepage flip effect) */
  flipSentences: string[]
  /** General location for display. Omitted when not public. */
  address?: string
  /**
   * E.164 format, base64 encoded (https://t.io.vn/base64-string-converter).
   * Omitted when the profile does not publish a phone number — the overview
   * item is skipped rather than rendered empty.
   */
  phoneNumberB64?: string
  /** base64 encoded (https://t.io.vn/base64-string-converter) */
  emailB64?: string
  /** Personal/homepage URL */
  website: string
  /** Primary/current role shown on profile */
  jobTitle?: string
  /** Work history entries */
  jobs: {
    title: string
    company: string
    website: string
    experienceId?: string
  }[]
  /** Rich about section; supports Markdown */
  about: string
  /** Public URL to avatar image */
  avatar: string
  avatarSketch?: string
  /** Different avatar variants based on theme and lighting */
  avatarVariants?: AvatarLightsVariants
  /** Open Graph image URL for social sharing */
  ogImage: string
  /** Audio URL for name pronunciation. Omitted when there is no recording. */
  namePronunciationUrl?: string
  /** SEO keywords list for metadata */
  keywords: string[]
  /** Time zone in IANA format (e.g., "Asia/Ho_Chi_Minh") */
  timeZone: string
  /** Profile/site start date in YYYY-MM-DD */
  dateCreated: string
}
