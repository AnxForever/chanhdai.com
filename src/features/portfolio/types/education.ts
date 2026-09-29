export type Education = {
  id: string
  school: string
  degree?: string
  fieldOfStudy?: string
  /** Omitted when the years are unknown; the card then shows no period. */
  period?: {
    start: string
    end?: string
  }
  description?: string
  skills?: string[]
  isExpanded?: boolean
}
