import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "stylekit",
    title: "stylekit",
    link: "https://github.com/AnxForever/stylekit",
    skills: ["TypeScript", "Design Tokens", "MCP", "Agent Skill", "CLI"],
    isExpanded: true,
    description: `面向 AI 生成网页的开源视觉风格库：148 套精选风格，每套带设计令牌与提示词。

- 配套 [stylekit-mcp](https://github.com/AnxForever/stylekit-mcp) 提供 MCP 服务端，把风格库接进对话式设计流程。
- 配套 [stylekit-skill](https://github.com/AnxForever/stylekit-skill) 作为 Agent Skill，支持 MCP、Agent Skill 与 npm CLI 三种用法。`,
  },
  {
    id: "anx-journal",
    title: "Anx Journal",
    link: "https://anxforever.cn/",
    skills: ["Next.js", "React", "Tailwind CSS", "GitHub App", "Cloudflare"],
    description: `个人博客平台，文章存在 GitHub 仓库里，通过 GitHub App 在线写作与发布。

- 首页是可拖拽重排的卡片网格，文章按日期与分类归档，现有 49 篇。
- 内置 Markdown 编辑器、评论、点赞与留言板；Marked + Shiki + KaTeX 渲染，支持代码高亮与数学公式。
- 可部署到 Vercel 或 Cloudflare Workers。`,
  },
  {
    id: "paperden",
    title: "paperden · 论文书房",
    link: "https://github.com/AnxForever/paperden",
    skills: ["React", "TypeScript", "FastAPI", "pdf.js", "KaTeX"],
    description: `选中论文里任意一句追问，讨论锚定出处，正文永不变长。

- 面向 AI 技术自学者的材料学习工作台，围绕真实论文或代码展开阅读和讨论。
- 支持对选中的原句局部追问、回看出处，并呈现 PDF 与数学公式。
- 本地优先：前端 React、TypeScript、pdf.js 与 KaTeX，后端 FastAPI、SQLite 与 BM25。

项目仍在重构与验证，真实模型回答质量与学习效果有待进一步验证。`,
  },
  {
    id: "ai-canvas",
    title: "AI 画布",
    skills: ["React", "TypeScript", "Zustand", "FastAPI", "Canvas"],
    description: `从文字需求开始，在画布里整理、调整素材，让脑海中的想法逐渐成形。

- 围绕文创设计的图像生成与画布编辑项目：输入设计需求生成整图，再在画布中调整素材。
- 包含 PNG、PDF、PSD 导出流程。
- 图像生成使用 Ark Seedream，前端 React、TypeScript 与 Zustand，后端 FastAPI 与 SQLite。

目前只有项目介绍，暂无公开体验地址。`,
  },
  {
    id: "yamlresume",
    title: "yamlresume",
    link: "https://github.com/AnxForever/yamlresume",
    skills: ["TypeScript", "YAML", "LLM"],
    description: `基于 YAMLResume 的简历定制 agent：每一条生成的表述都能回溯到候选人自己的材料。`,
  },
  {
    id: "desktop-ui-design-extract",
    title: "desktop-ui-design-extract",
    link: "https://github.com/AnxForever/desktop-ui-design-extract",
    skills: ["JavaScript", "Design System"],
    description: `去品牌化的桌面应用 UI 设计系统参考：令牌表、组件规格、动效系统与原生外壳参数。`,
  },
  {
    id: "schwarzschild-blackhole",
    title: "schwarzschild-blackhole",
    link: "https://github.com/AnxForever/schwarzschild-blackhole",
    skills: ["JavaScript", "WebGL", "Physics"],
    description: `实时的史瓦西黑洞：逐像素积分零测地线，在浏览器里直接算出来。`,
  },
]
