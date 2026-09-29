import { format } from "date-fns"
import { remarkHeading } from "fumadocs-core/mdx-plugins/remark-heading"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkMdx from "remark-mdx"

import type { Doc } from "@/features/doc/types/document"

const processor = remark().use(remarkMdx).use(remarkGfm).use(remarkHeading)

/**
 * MDX comments render as nothing on the page, but this output is plain text,
 * so they would arrive as literal `{/* ... *\/}` noise. Drop them and collapse
 * the blank lines they leave behind.
 */
function stripMdxComments(markdown: string) {
  return markdown
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

/** Plain-markdown rendition of a doc, served at `<slug>.md`. */
export async function getLLMText(doc: Doc) {
  const processed = await processor.process({
    value: doc.content,
  })

  return `# ${doc.metadata.title}

${doc.metadata.description}

${stripMdxComments(String(processed.value))}

Last updated on ${format(new Date(doc.metadata.updatedAt), "MMMM d, yyyy")}`
}
