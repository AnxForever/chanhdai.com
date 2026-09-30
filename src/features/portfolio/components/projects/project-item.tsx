import { formatCompactNumber, formatNumber } from "@/utils/format"
import { addQueryParams } from "@/utils/url"
import { BoxIcon, InfinityIcon, LinkIcon, StarIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { IconTile } from "@/components/ui/icon-tile"
import { Tag } from "@/components/ui/tag"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Collapsible,
  CollapsibleChevronsUpDownIcon,
} from "@/components/collapsible-animated"
import { Markdown } from "@/components/markdown"

import type { Project } from "../../types/projects"
import { ProjectTitle } from "./project-title"

export function ProjectItem({
  className,
  project,
  stargazersCount,
}: {
  className?: string
  project: Project
  /** Star count for `project.repo`; null hides the badge. */
  stargazersCount?: number | null
}) {
  const { period, repo } = project
  const isOngoing = !period?.end
  const isSinglePeriod = period?.end === period?.start
  const showStars =
    repo && typeof stargazersCount === "number" && stargazersCount > 0

  return (
    <Collapsible className={className} defaultOpen={project.isExpanded}>
      {/* Only the title is the trigger (accordion pattern); its overlay keeps
          the whole row clickable, while the project link sits above it. */}
      <div
        className="group relative flex items-center overflow-hidden hover:bg-accent-muted"
        data-slot="glow-card"
      >
        {/* Spotlight follows the cursor; --pointer-x/y are written by the
            GlowCardGrid wrapper in the Projects panel. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(260px circle at calc(var(--pointer-x, -10) * 50% + 50%) calc(var(--pointer-y, -10) * 50% + 50%), color-mix(in oklab, var(--foreground) 7%, transparent), transparent 70%)",
          }}
        />

        <IconTile className="mx-4">{project.icon ?? <BoxIcon />}</IconTile>

        <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-4">
          <div className="flex-1">
            <h3 className="mb-1 leading-snug font-medium text-balance">
              <CollapsibleTrigger className="text-left">
                <span className="absolute inset-0" aria-hidden />
                <ProjectTitle
                  title={project.title}
                  effect={project.titleEffect}
                />
              </CollapsibleTrigger>
            </h3>

            {period && (
              <dl className="text-sm text-muted-foreground">
                <dt className="sr-only">Period</dt>
                <dd className="flex items-center gap-0.5">
                  <span>{period.start}</span>
                  {!isSinglePeriod && (
                    <>
                      <span className="font-mono">—</span>
                      {isOngoing ? (
                        <InfinityIcon
                          className="size-4.5 translate-y-[0.5px]"
                          aria-label="Present"
                        />
                      ) : (
                        <span>{period.end}</span>
                      )}
                    </>
                  )}
                </dd>
              </dl>
            )}
          </div>

          {showStars && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    className="relative flex shrink-0 items-center gap-1 text-sm text-muted-foreground after:absolute after:-inset-1.5 hover:text-foreground"
                    href={addQueryParams(
                      `https://github.com/${repo}`,
                      UTM_PARAMS
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    <StarIcon className="size-3.5" />
                    <span className="tabular-nums">
                      {formatCompactNumber(stargazersCount)}
                    </span>
                    <span className="sr-only">GitHub stars</span>
                  </a>
                }
              />
              <TooltipContent className="tabular-nums">
                {formatNumber(stargazersCount)} stars on GitHub
              </TooltipContent>
            </Tooltip>
          )}

          {project.link && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                    href={addQueryParams(project.link, UTM_PARAMS)}
                    target="_blank"
                    rel="noopener"
                    aria-label="Open project"
                  >
                    <LinkIcon className="pointer-events-none size-4" />
                  </a>
                }
              />
              <TooltipContent>
                <p>Open project</p>
              </TooltipContent>
            </Tooltip>
          )}

          <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
            <CollapsibleChevronsUpDownIcon duration={0.15} />
          </div>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-line p-4">
          {project.description && (
            <div className="typeset typeset-description">
              <Markdown>{project.description}</Markdown>
            </div>
          )}

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
