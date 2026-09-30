import type { Metadata } from "next"

import { X_HANDLE } from "@/config/site"
import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import { Markdown } from "@/components/markdown"
import {
  PageHeading,
  PageHeadingDescription,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"

const title = "Now"
const description = "我现在在做什么。"

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/now",
  },
  openGraph: {
    url: "/now",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [ogImage],
  },
}

// 更新这个页面时，同步改这里的日子。
const LAST_UPDATED = "2026-09-30"

const content = `## 正在做

- **StyleKit** —— 维护中。148 种风格、6 个只读 MCP 工具，MCP / CLI / Core 三个 npm 包持续迭代。
- **Career Agent** —— 证据可追溯的多阶段 LLM 工作流：岗位描述加候选人材料，产出有依据的定制简历。
- **毕业设计** —— 中文 AI 生成文本检测与边界定位，模型和数据集已发布在 [Hugging Face](https://huggingface.co/AnxForever/chinese-ai-detector-bert)，正在收尾。
- **求职准备** —— 2026 届，边整理项目边把要讲清楚的东西写成博客。

## 最近

- 2026-09-26，这个网站上线了，第一篇手记也发了。
`

export default function NowPage() {
  return (
    <>
      <JsonLdScript
        data={jsonLdBreadcrumbList([
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Now",
            href: "/now",
          },
        ])}
      />

      <div>
        <PageHeading>
          <PageHeadingTagline>Now</PageHeadingTagline>
          <PageHeadingTitle>现在在做什么。</PageHeadingTitle>
          <PageHeadingDescription>
            更新于 {LAST_UPDATED}
            。这个页面记录我当前的状态，想法会过时，以这里为准。
          </PageHeadingDescription>
        </PageHeading>

        <div className="h-4" />

        <div className="screen-line-bottom h-px" />

        <div className="typeset typeset-description mx-auto max-w-3xl px-4 py-8">
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </>
  )
}
