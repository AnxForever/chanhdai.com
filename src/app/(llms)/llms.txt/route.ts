import { SITE_INFO } from "@/config/site"
import { getBlogPosts } from "@/features/doc/data/documents"

const allPosts = getBlogPosts()

const content = `# ${SITE_INFO.name}

> ${SITE_INFO.description}

- [About](${SITE_INFO.url}/about.md): A quick intro, plus how to get in touch.
- [Experience](${SITE_INFO.url}/experience.md): Roles and career highlights.
- [Education](${SITE_INFO.url}/education.md): Schools, fields of study, and what was built along the way.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects.
- [Recognition](${SITE_INFO.url}/recognition.md): Awards, certifications, and registered trademarks and copyrights.
- [Craft](${SITE_INFO.url}/craft.md): Interface and interaction demos, newest first.
- [Blog](${SITE_INFO.url}/blog.md): Every blog post, newest first, with publish dates.
- [Bookmarks](${SITE_INFO.url}/bookmarks.md): Recommended articles, courses, books, references, and tools.


## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.md): ${item.metadata.description}`).join("\n")}
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
