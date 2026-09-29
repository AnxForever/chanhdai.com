# Development

本地开发与部署说明。内容怎么改见 [README.md](README.md#内容维护)。

## 环境要求

- **Node.js** —— 版本见 [.nvmrc](.nvmrc)（`nvm use` 即可）
- **pnpm** —— 包管理器
- **Git**

## 起步

```bash
git clone https://github.com/AnxForever/anx-portfolio.git
cd anx-portfolio
pnpm install
cp .env.example .env.local
pnpm dev
```

打开 <http://localhost:3000>。

`.env.local` 里至少要有一个 `NEXT_PUBLIC_APP_URL`，其余变量都是可选的 —— 不填就不启用对应功能，页面不会报错。想先看看热力图，把 `NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL` 一起填上（`.env.example` 里已有默认值）。

### 换一个本地域名（可选）

默认走 `http://localhost:3000`。如果想让本地也跑在 `https://<名字>.localhost` 上 —— 好处是生成的绝对链接和线上一致 —— 需要装一个本地的 HTTPS 反代工具（例如 [portless](https://port1355.dev)），把 [portless.json](portless.json) 里的 `name` 和 `next.config.ts` 里 `allowedDevOrigins` 的域名改成同一个，然后让 `NEXT_PUBLIC_APP_URL` 指向它：

```bash
npm install -g portless
```

## 生产构建

```bash
pnpm build
NODE_ENV=production pnpm start
```

部署目标是 **Vercel**。项目用了服务端能力（动态 OG 图、`.md` 内容协商重写、vCard、RSS），纯静态托管跑不了，所以不要走 GitHub Pages 那类只发静态文件的方案。

上线前记得两处域名要对齐：

- Vercel 项目设置里的 `NEXT_PUBLIC_APP_URL`
- `src/config/site.ts` 里的 `SITE_DOMAIN`（正文绝对链接、JSON-LD、sitemap、OG 图都用它）

## 推代码之前

CI 每次 push 和 PR 都会跑这些，本地先过一遍：

```bash
pnpm lint
pnpm format:check
pnpm build
pnpm check-types
pnpm test:run
```

`pnpm build` 必须排在 `pnpm check-types` 前面：`tsc --noEmit` 依赖 Next 在构建时生成到 `.next/types/**` 的 `PageProps` 全局类型，全新检出的仓库里没有 `.next/`，先跑类型检查会报 `Cannot find name 'PageProps'`。

## 项目结构

| 目录 | 用途 |
| --- | --- |
| `src/app/` | App Router 页面、布局、路由处理器 |
| `src/components/` | 全站共用的 UI 组件 |
| `src/features/` | 按功能划分的模块：`portfolio`、`doc`、`blog`、`bookmark`、`craft`、`sponsor` |
| `src/registry/` | 从上游带来的组件库源码，站点 UI 的实际实现层（**不是**可发布的 registry，见下） |
| `src/config/` | 站点配置（`site.ts`）、JSON-LD |
| `src/hooks/`、`src/lib/`、`src/utils/` | hooks、库、工具函数 |
| `src/styles/` | 全局 CSS 与排版样式 |

关键文件：`components.json`（shadcn 配置）、`src/features/portfolio/data/`（个人信息与项目等内容）、`.env.example`（环境变量模板）。

### 关于 `src/registry/`

上游项目是一个 shadcn registry（可以 `npx shadcn add` 安装的组件库）。这个 fork **已经拆掉了发布层** —— 文档站、blocks 浏览页、预览器、`registry:build` 构建脚本和相关生成物全部移除。

剩下的 `src/registry/components|hooks|lib` 只是站点自己在用的组件（热力图、翻转文字、代码块、页脚动画等），没有引用的那一批也已经清掉了。目录名算是历史包袱，要搬去 `src/components/` 属于纯改名。
