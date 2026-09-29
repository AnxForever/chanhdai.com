import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Anx",
  lastName: "",
  displayName: "Anx",
  username: "AnxForever",
  bio: "前端设计与 AI 编程。记录日常，折腾想法，也收藏一些舍不得关掉的网页。",
  // Rendered as plain text, not markdown — keep these free of link syntax.
  flipSentences: [
    "前端设计与 AI 编程。",
    "在写 StyleKit。",
    "记录日常，折腾想法。",
  ],
  // 来自 GitHub 公开资料；不想公开的话删掉这一行即可。
  address: "西安，中国",
  // 邮箱是 base64 编码的，避免被爬虫直接抓走。
  emailB64: "YW54Zm9yZXZlckBxcS5jb20=",
  // phoneNumberB64 / jobTitle 暂未公开 —— 留空即可，
  // 对应的 overview 条目会自动跳过，不会渲染空行。
  website: "https://anxforever.cn/",
  jobs: [],
  about: `- 我是 Anx，在西安科技大学读书。做前端设计，也做 AI 编程。
- 在维护 [StyleKit](https://github.com/AnxForever/stylekit)（[线上](https://www.stylekit.top)）—— 面向 AI 生成网页的开源视觉风格库，148 套精选风格。也写 [Anx Journal](https://anxforever.cn/)，一个自己搭的博客平台。
- 平时写 AI 工具（Codex、Claude Code、MCP）、前端设计基础和求职准备这几类东西，喜欢折腾论文阅读器、终端、设计系统。
`,
  avatar: "/images/anx-avatar.jpg",
  avatarSketch: "/images/anx-avatar.jpg",
  ogImage:
    "/og/simple?title=Anx&description=%E5%89%8D%E7%AB%AF%E8%AE%BE%E8%AE%A1%E4%B8%8E%20AI%20%E7%BC%96%E7%A8%8B%E3%80%82",
  keywords: ["anx", "anxforever", "stylekit", "anx journal"],
  timeZone: "Asia/Shanghai",
  dateCreated: "2026-09-26",
}
