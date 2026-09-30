import { CollapsibleList } from "@/components/collapsible-list"
import { GlowCardGrid } from "@/registry/components/glow-card-grid"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { getProjectStargazers } from "@/features/portfolio/lib/github-project-stars"

import { ProjectItem } from "./project-item"

const ID = "projects"

export async function Projects() {
  // Nothing to show until PROJECTS is filled in.
  if (PROJECTS.length === 0) {
    return null
  }

  const repos = PROJECTS.flatMap((project) =>
    project.repo ? [project.repo] : []
  )
  const stargazers = repos.length > 0 ? await getProjectStargazers(repos) : {}

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Projects</a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      {/* Pointer tracking only; neutralized to a single column so the
          project list keeps its vertical layout. */}
      <GlowCardGrid className="grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
        <CollapsibleList
          items={PROJECTS}
          max={4}
          renderItem={(item) => (
            <ProjectItem
              project={item}
              stargazersCount={
                item.repo ? (stargazers[item.repo] ?? null) : null
              }
            />
          )}
        />
      </GlowCardGrid>
    </Panel>
  )
}
