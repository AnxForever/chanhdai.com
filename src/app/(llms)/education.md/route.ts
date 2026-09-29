import { EDUCATION } from "@/features/portfolio/data/education"

const content = `# Education

${EDUCATION.map((item) => {
  const heading =
    [item.degree, item.fieldOfStudy].filter(Boolean).join(", ") || item.school
  const school = heading === item.school ? "" : ` | ${item.school}`
  const skills = item.skills?.length
    ? `\n\nSkills: ${item.skills.join(", ")}`
    : ""
  const description = item.description ? `\n\n${item.description.trim()}` : ""
  const duration = item.period
    ? `\n\nDuration: ${item.period.start} - ${item.period.end || "Present"}`
    : ""
  return `## ${heading}${school}${duration}${skills}${description}`
}).join("\n\n")}
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
