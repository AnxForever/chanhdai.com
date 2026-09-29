import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "stylekit",
    title: "StyleKit",
    link: "https://stylekit.top",
    skills: ["TypeScript", "Next.js", "React", "MCP", "Node.js"],
    isExpanded: true,
    description: `面向 AI 编码工具的开源设计风格库：把设计风格抽象成它们能直接消费的结构化约束。

- 148 种风格与 60 个动画整理为设计 tokens、组件配方与可机读约束；已发布 MCP / CLI / Core 三个 npm 包。
- MCP Server 提供风格查询、设计 tokens 和 \`stylekit_lint_code\` 等 6 个只读工具。\`stylekit_lint_code\` 用确定性规则检查生成代码的风格违规项并返回修复建议 —— 规则通过不等于视觉或无障碍质量合格。
- 仓库离线评测记录 60 条中英查询：BM25 / 向量 / RRF 方案 Recall@1 为 96.7%，基线 35.0%。该实验检索尚未接入网站或 MCP 的风格搜索。

项目由我独立推进，开发中大量借助 AI 编码工具生成和修改代码。`,
  },
  {
    id: "career-agent",
    title: "Career Agent",
    link: "https://github.com/AnxForever/yamlresume",
    skills: ["TypeScript", "LLM Agent", "SQLite", "Zod"],
    description: `面向「岗位描述 + 候选人材料 → 有证据依据的定制简历」的多阶段 LLM 工作流。

- 阶段由代码预先决定，不是靠模型自由规划：材料归一化 → 岗位分析 → 确定性需求匹配 → 证据约束的草稿生成 → 事实与 Schema 校验 → 渲染。
- 每条事实绑定稳定的 evidence ID，输出经校验才进入渲染，避免模型凭空补写经历。
- 含结构化输出校验与 Repair、离线 EvalCase，以及 SQLite Run Store / outbox / lease。

排版引擎（CLI、模板、LaTeX 流水线）来自上游 [YAMLResume](https://github.com/yamlresume/yamlresume)，本项目是其上的工作流、API、工作台与评测部分。项目仍在开发验证阶段。`,
  },
  {
    id: "chinese-ai-detector",
    title: "中文 AI 生成文本检测",
    link: "https://huggingface.co/AnxForever/chinese-ai-detector-bert",
    skills: ["Python", "BERT", "PyTorch", "Hugging Face"],
    description: `本科毕业设计：基于 BERT 微调的中文 AI 生成文本检测与边界定位，模型与数据集已发布在 Hugging Face。

- 对数据来源、重复文本和长文误判做了分组分析。

评估结果是离线实验，不代表新模型或真实业务场景的准确率。`,
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
