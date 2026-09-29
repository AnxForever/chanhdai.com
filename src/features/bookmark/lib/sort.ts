import { compareDesc } from "date-fns"

import type { Bookmark } from "../types"

/**
 * Newest first; when dates tie, entries added later in the data file come
 * first. Undated entries settle at the end, also in data-file order.
 */
export function sortBookmarksNewestFirst(bookmarks: readonly Bookmark[]) {
  return bookmarks
    .map((bookmark, index) => ({ bookmark, index }))
    .sort((a, b) => {
      const at = a.bookmark.bookmarkedAt
      const bt = b.bookmark.bookmarkedAt

      if (!at && !bt) return b.index - a.index
      if (!at) return 1
      if (!bt) return -1

      return compareDesc(new Date(at), new Date(bt)) || b.index - a.index
    })
    .map(({ bookmark }) => bookmark)
}
