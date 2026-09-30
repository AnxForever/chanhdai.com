import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Anx",
  lastName: "",
  displayName: "Anx",
  username: "AnxForever",
  bio: "折腾 AI 应用和前端设计，把过程和想明白的事记在这里。",
  // Rendered as plain text, not markdown — keep these free of link syntax.
  flipSentences: [
    "折腾 AI 应用和前端设计。",
    "维护着开源项目 StyleKit。",
    "记录日常，也记录折腾。",
    "慢慢写，慢慢填满这里。",
  ],
  jobTitle: "全栈工程师",
  // 来自 GitHub 公开资料；不想公开的话删掉这一行即可。
  address: "西安，中国",
  // 邮箱是 base64 编码的，避免被爬虫直接抓走。
  emailB64: "YW54Zm9yZXZlckBxcS5jb20=",
  // phoneNumberB64 暂未公开 —— 留空即可，对应的 overview 条目会自动跳过。
  jobs: [],
  about: `- 我是 Anx，在西安读数据科学与大数据技术，2026 年毕业，平时折腾 AI 应用和前端设计。
- 主要在维护 [StyleKit](https://stylekit.top) —— 一个面向 AI 编码工具的开源设计风格库，现在有 148 种风格、6 个只读 MCP 工具，发了 MCP / CLI / Core 三个 npm 包。开发它本身也大量用 AI 编码工具，算是一边造一边试。
- 手头还在做两件事：证据可追溯的多阶段 LLM 工作流（Career Agent），和中文 AI 生成文本检测（本科毕设，模型放在 [Hugging Face](https://huggingface.co/AnxForever/chinese-ai-detector-bert)）。
- 这里主要写 AI 工具、前端设计基础和求职准备，想到什么写什么。
`,
  avatar: "/images/anx-avatar.webp",
  avatarSketch: "/images/anx-avatar.webp",
  ogImage:
    "/og/simple?title=Anx&description=%E6%8A%98%E8%85%BE%20AI%20%E5%BA%94%E7%94%A8%E5%92%8C%E5%89%8D%E7%AB%AF%E8%AE%BE%E8%AE%A1%EF%BC%8C%E6%8A%8A%E8%BF%87%E7%A8%8B%E5%92%8C%E6%83%B3%E6%98%8E%E7%99%BD%E7%9A%84%E4%BA%8B%E8%AE%B0%E5%9C%A8%E8%BF%99%E9%87%8C%E3%80%82",
  keywords: [
    "anx",
    "anxforever",
    "stylekit",
    "ai agent",
    "ai 应用",
    "前端设计",
    "个人网站",
  ],
  timeZone: "Asia/Shanghai",
  dateCreated: "2026-09-26",
}
