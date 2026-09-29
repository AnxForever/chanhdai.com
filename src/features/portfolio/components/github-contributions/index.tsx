import { getGitHubContributions } from "@/features/portfolio/data/github-contributions"

import { Panel } from "../panel"
import { GitHubContributionGraph } from "./graph"

export async function GitHubContributions() {
  const contributions = await getGitHubContributions()

  // Requires a contributions API (`NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL`).
  // Without one, skip the section instead of rendering an empty graph.
  if (contributions.length === 0) {
    return null
  }

  return (
    <Panel className="screen-line-top-border">
      <h2 className="sr-only">GitHub contributions</h2>

      <GitHubContributionGraph contributions={Promise.resolve(contributions)} />
    </Panel>
  )
}
