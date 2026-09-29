import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Anx",
  lastName: "",
  displayName: "Anx",
  username: "AnxForever",
  bio: "AI Agent 与前端设计。记录折腾过程中的想法，也收藏一些舍不得关掉的网页。",
  // Rendered as plain text, not markdown — keep these free of link syntax.
  flipSentences: [
    "AI Agent 与前端设计。",
    "在维护 StyleKit。",
    "记录日常，折腾想法。",
  ],
  jobTitle: "全栈工程师 · AI Native",
  // 来自 GitHub 公开资料；不想公开的话删掉这一行即可。
  address: "西安，中国",
  // 邮箱是 base64 编码的，避免被爬虫直接抓走。
  emailB64: "YW54Zm9yZXZlckBxcS5jb20=",
  // phoneNumberB64 暂未公开 —— 留空即可，对应的 overview 条目会自动跳过。
  jobs: [],
  about: `- 我是包安心（Anx），西安科技大学数据科学与大数据技术专业 2026 届本科，方向是 AI Agent 与 AI 应用。
- 独立推进并维护 [StyleKit](https://stylekit.top) —— 面向 AI 编码工具的开源设计风格库：148 种风格、6 个只读 MCP 工具，已发布 MCP / CLI / Core 三个 npm 包。开发中大量借助 AI 编码工具。
- 也在做证据可追溯的多阶段 LLM 工作流（Career Agent），以及中文 AI 生成文本检测（本科毕设，模型发布在 [Hugging Face](https://huggingface.co/AnxForever/chinese-ai-detector-bert)）。
- 平时写 AI 工具、前端设计基础和求职准备这几类东西。
`,
  avatar: "/images/anx-avatar.jpg",
  avatarSketch: "/images/anx-avatar.jpg",
  ogImage:
    "/og/simple?title=Anx&description=AI%20Agent%20%E4%B8%8E%E5%89%8D%E7%AB%AF%E8%AE%BE%E8%AE%A1%E3%80%82",
  keywords: ["anx", "anxforever", "包安心", "stylekit", "ai agent", "前端设计"],
  timeZone: "Asia/Shanghai",
  dateCreated: "2026-09-26",
}
