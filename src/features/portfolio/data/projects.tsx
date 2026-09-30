import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "stylekit",
    repo: "AnxForever/stylekit",
    title: "StyleKit",
    link: "https://stylekit.top",
    skills: ["TypeScript", "Next.js", "React", "MCP", "Node.js"],
    isExpanded: true,
    titleEffect: "shimmer",
    description: `面向 AI 编码工具的开源设计风格库：把设计风格抽象成它们能直接消费的结构化约束。

- 148 种风格与 60 个动画整理为设计 tokens、组件配方与可机读约束；已发布 MCP / CLI / Core 三个 npm 包，另有给 Agent 用的 Skill。
- MCP Server 提供风格查询、设计 tokens 和 \`stylekit_lint_code\` 等 6 个只读工具。\`stylekit_lint_code\` 用确定性规则检查生成代码的风格违规项并返回修复建议 —— 规则通过不等于视觉或无障碍质量合格。
- 仓库离线评测记录 60 条中英查询：BM25 / 向量 / RRF 方案 Recall@1 为 96.7%，基线 35.0%。该实验检索尚未接入网站或 MCP 的风格搜索。
- 在线浏览与文档在 [stylekit.top](https://stylekit.top)，源码在 [GitHub](https://github.com/AnxForever/stylekit)。

项目由我独立推进，开发中大量借助 AI 编码工具生成和修改代码。`,
  },
  {
    id: "career-agent",
    repo: "AnxForever/yamlresume",
    title: "Career Agent",
    link: "https://github.com/AnxForever/yamlresume",
    skills: ["TypeScript", "LLM Agent", "SQLite", "Zod"],
    description: `面向「岗位描述 + 候选人材料 → 有证据依据的定制简历」的多阶段 LLM 工作流。

- 要解决的问题：模型写出的简历条目很流畅，但**流畅而错误**的条目，在面试官追问之前和正确条目看起来一模一样。所以每条模型结论都按「待验证的假设」处理，必须能指回源材料。
- 阶段由代码预先决定，不是靠模型自由规划：材料归一化 → 岗位分析 → 确定性需求匹配 → 证据约束的草稿生成 → 事实与 Schema 校验 → 渲染。
- 每条事实绑定稳定的 evidence ID，输出经校验才进入渲染，避免模型凭空补写经历。
- 含结构化输出校验与 Repair、离线 EvalCase，以及 SQLite Run Store / outbox / lease；API 侧提供 Run、产物与 human-in-the-loop 提问，前端是 Codex 风格工作台（阶段、证据与产物并置）与浏览器内的 YAML 编辑器。

排版引擎（CLI、模板、LaTeX 流水线）来自上游 [YAMLResume](https://github.com/yamlresume/yamlresume)，本项目是其上的工作流、API、工作台与评测部分。仍在开发验证阶段，源码在 [GitHub](https://github.com/AnxForever/yamlresume)。`,
  },
  {
    id: "chinese-ai-detector",
    title: "中文 AI 生成文本检测",
    link: "https://huggingface.co/AnxForever/chinese-ai-detector-bert",
    skills: ["Python", "BERT", "PyTorch", "Hugging Face"],
    description: `本科毕业设计：基于 BERT 微调的中文 AI 生成文本检测（篇章级二分类），模型与数据集都发布在 Hugging Face。

- 基座 \`bert-base-chinese\`：训练样本 63,113 条、验证 7,452 条，标签为「人类撰写 / AI 生成」两类；训练数据里专门补充了长文边界修复样本与正式语料样本。
- 验证集 Accuracy 98.75%、F1 98.83%；另在两个独立集合上评估（545 条与 910 条，F1 分别为 98.32% / 95.79%），三集平均准确率 98.56%。
- 按来源分组看差异：新闻类接近满分，维基与正式语料略低 —— 对数据来源、重复文本和长文误判做了专门的错误分析。
- 模型卡给出了推理的最小用法，包含温度校准（T=0.8165），避免直接取 softmax 高估置信度。

边界定位是实验性扩展（由独立的 span 模型提供），不是默认推断路径。以上均为离线实验结果，不代表新模型或真实业务场景的准确率。

模型：[chinese-ai-detector-bert](https://huggingface.co/AnxForever/chinese-ai-detector-bert) · 数据集：[chinese-ai-detection-dataset](https://huggingface.co/datasets/AnxForever/chinese-ai-detection-dataset)`,
  },
  {
    id: "paperden",
    repo: "AnxForever/paperden",
    title: "paperden · 论文书房",
    link: "https://github.com/AnxForever/paperden",
    skills: ["React", "TypeScript", "FastAPI", "pdf.js", "KaTeX"],
    description: `选中论文里任意一句追问，讨论锚定出处，正文永不变长。

- 打开一个装论文的文件夹，论文上架子。读论文时卡住的地方往往只占一句话：在聊天窗口里另起一段对话会丢上下文，把解释直接塞进正文又会让正文越读越长。这里把循环反过来 —— 问题留在原处，答案单独存，正文保持原样。
- 每个知识点的讨论单独保存、锚定出处、按书隔离，随时可以重开；界面是「纸与墨」的语言。
- 本地优先：前端 React、TypeScript、pdf.js 与 KaTeX，后端 FastAPI、SQLite 与 BM25。

项目仍在重构与验证，真实模型回答质量与学习效果有待进一步验证。源码在 [GitHub](https://github.com/AnxForever/paperden)。`,
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
    repo: "AnxForever/desktop-ui-design-extract",
    title: "desktop-ui-design-extract",
    link: "https://github.com/AnxForever/desktop-ui-design-extract",
    skills: ["JavaScript", "Design System"],
    description: `去品牌化的桌面应用 UI 设计系统参考：从真实安装包与运行目录中提取，整理成令牌表、组件规格、动效系统与原生外壳参数。

- 全量整理 491 个 CSS 变量：颜色、字体、圆角、阴影与动效曲线，并单独分出主界面的 light / dark 主题变量与图标清单。
- 拆出两层架构：安装器是原生 Win32（依赖 gdiplus / win32），主界面是 CEF 渲染的 Web 应用，含离线页面与辅助前端。
- 同时存档安装器资源（自绘布局 XML 与 PNG 素材）与主界面构建产物，作为桌面应用设计的对照样本。

源码在 [GitHub](https://github.com/AnxForever/desktop-ui-design-extract)。`,
  },
  {
    id: "schwarzschild-blackhole",
    repo: "AnxForever/schwarzschild-blackhole",
    title: "schwarzschild-blackhole",
    link: "https://github.com/AnxForever/schwarzschild-blackhole",
    skills: ["JavaScript", "WebGL", "Physics"],
    description: `实时的史瓦西黑洞：逐像素积分零测地线，在浏览器里直接算出来。

- 画面里没有一笔是画上去的：引力透镜、光子环、黑洞阴影、吸积盘的单侧亮度差，全都是积分结果。
- 每个像素从静态观察者反向发射一条光线，用 RK4 积分测地线方程（每步四次力计算），除固定步长外不引入近似；把广义相对论项系数设为零，所有光线立刻变直。
- 光线在三种事件上终止：落入视界（阴影）、穿过吸积盘平面（采样后继续）、逃逸到远处（采样背景）。
- JavaScript + WebGL 实现，浏览器里实时运行。

源码在 [GitHub](https://github.com/AnxForever/schwarzschild-blackhole)。`,
  },
]
