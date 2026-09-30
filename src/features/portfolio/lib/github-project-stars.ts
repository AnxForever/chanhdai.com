import "server-only"

import { unstable_cache } from "next/cache"

/** Official GitHub API. Anonymous requests are rate limited per IP; when a
 * token is configured (GITHUB_API_TOKEN, no scopes needed) the limit is much
 * higher. Returns null on any failure so the caller can fall back. */
async function fetchFromGitHubApi(
  repo: string,
  token?: string
): Promise<number | null> {
  const response = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })

  if (!response.ok) {
    return null
  }

  const json = (await response.json()) as { stargazers_count?: number }
  const count = Number(json?.stargazers_count)
  return Number.isFinite(count) ? count : null
}

/** No-auth fallback (ungh.cc) for when the anonymous GitHub quota is spent —
 * shared build IPs can exhaust it. Same public data, exact count. */
async function fetchFromUngh(repo: string): Promise<number | null> {
  const response = await fetch(`https://ungh.cc/repos/${repo}`)

  if (!response.ok) {
    return null
  }

  const json = (await response.json()) as { repo?: { stars?: number } }
  const count = Number(json?.repo?.stars)
  return Number.isFinite(count) ? count : null
}

/**
 * Stargazer counts for the project repos, keyed by `owner/name`, cached for a
 * day. A repo that cannot be fetched from either source resolves to null, and
 * its badge is simply not rendered — a failed lookup must never break the page.
 */
export const getProjectStargazers = unstable_cache(
  async (repos: string[]): Promise<Record<string, number | null>> => {
    const token = process.env.GITHUB_API_TOKEN

    const entries = await Promise.all(
      repos.map(async (repo) => {
        try {
          const count =
            (await fetchFromGitHubApi(repo, token)) ??
            (await fetchFromUngh(repo))
          return [repo, count] as const
        } catch {
          return [repo, null] as const
        }
      })
    )

    return Object.fromEntries(entries)
  },
  ["project-stargazers"],
  { revalidate: 86400 } // 1 day
)
