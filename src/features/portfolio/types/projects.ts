export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string
  title: string
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   * Omit the whole field when the dates are unknown — the card then shows no
   * period rather than an invented one.
   */
  period?: {
    /** Start date (e.g., "05.2025"). */
    start: string
    /** End date; leave undefined for "Present". */
    end?: string
  }
  /**
   * Public URL (site, repository, demo, or video). Omit when there is no
   * public link — the card then shows no external-link button.
   */
  link?: string
  /** Tags/technologies for chips or filtering. */
  skills: string[]
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string
  /** Inline SVG icon, framed in a tile; defaults to a box icon. */
  icon?: React.ReactElement
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean
  /**
   * `\"shimmer\"` plays a light sweep across the title while the row is
   * hovered; without it the title is plain text.
   */
  titleEffect?: "shimmer"
}
