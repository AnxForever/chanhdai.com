# AI agent guidelines for Anx's personal site

Next.js 16 (App Router) personal website: portfolio, blog, bookmarks, and a small MDX content layer.

**Stack**: TypeScript, React 19, Tailwind CSS v4, shadcn/ui, MDX, Motion, Vitest, pnpm, Vercel

## Project structure

| Directory                              | Purpose                                                                      |
| -------------------------------------- | ---------------------------------------------------------------------------- |
| `src/app/`                             | App Router pages, layouts, route handlers                                     |
| `src/components/`                      | Shared UI components                                                          |
| `src/features/`                        | Feature modules: `portfolio`, `doc`, `blog`, `bookmark`, `craft`, `sponsor`   |
| `src/registry/`                        | Component library inherited from upstream; the site's own UI is built on it   |
| `src/config/`                          | Site (`site.ts`), JSON-LD                                                     |
| `src/hooks/`, `src/lib/`, `src/utils/` | Hooks, libraries, utilities                                                   |
| `src/styles/`                          | Global CSS and typography                                                     |

**Key files**: `components.json` (shadcn config), `src/features/portfolio/data/` (profile, projects and other content), `src/config/site.ts` (`SITE_DOMAIN`, nav, license), `.env.example` (env vars)

## `src/registry/` is not a registry

Upstream was a publishable shadcn registry. This fork removed the publishing surface — the docs site, block browser, previewer, `registry:build` script and every generated artifact (`registry.json`, `registry-stats.json`, `__index__.tsx`, `public/r/*`) are gone.

What remains under `src/registry/components|hooks|lib` is a plain local component library that the site's own UI imports; everything nothing imported has been pruned. The folder name is a historical leftover — moving it under `src/components/` would be a pure rename.

## Content system

Content lives in `src/features/doc/content/` as MDX, grouped by subfolder. The subfolder name is the category (there is currently only `blog/`), so a file's location determines how it is listed.

- **Data layer**: `src/features/doc/data/documents.ts` (`getAllDocs`, `getDocBySlug`, `getDocsByCategory`, `getBlogPosts`)
- **Blog UI**: `src/features/blog/` (rendering only, imports data from `features/doc`)

Data-driven sections live in `src/features/*/data.*`. Every list renders nothing when empty and every optional field (dates, links) is skipped rather than filled with a placeholder — **never invent a date or URL to make a section look fuller**.

## Coding guidelines

- TypeScript strict mode; explicit types when necessary
- kebab-case file naming
- Descriptive names; comments only for "why", not "what"
- No emojis in code, comments, or commit messages
- Tailwind CSS v4 syntax; support dark/light modes
- Follow SOLID principles
- Headings in sentence-case (capitalize only the first word and proper nouns), applies to Markdown/MDX docs and prose

## Commands

```bash
pnpm dev                # Dev server
pnpm build              # Production build
pnpm start              # Serve the production build
pnpm test               # Vitest (watch)
pnpm test:run           # Vitest (single run)
pnpm lint               # ESLint
pnpm lint:fix           # ESLint with --fix
pnpm format:write       # Prettier
pnpm check-types        # Type checking (tsc --noEmit)
```

`pnpm build` must run before `pnpm check-types`: `tsc --noEmit` needs the `PageProps` global that Next generates into `.next/types/**` during a build.

### Local dev URL

The dev server runs at `http://localhost:3000`, and `.env.local` sets `NEXT_PUBLIC_APP_URL` to match so generated absolute URLs line up. `next.config.ts` also allows `anx.localhost`, so a custom HTTPS dev origin works if you run something like portless in front of it. Use whichever the `.env.local` in the checkout points at — never a bare port other than the configured one.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
