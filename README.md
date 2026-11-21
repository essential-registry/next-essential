# Next Essential

[![CI](https://github.com/essential-registry/next-essential/actions/workflows/ci.yml/badge.svg)](https://github.com/essential-registry/next-essential/actions/workflows/ci.yml) ![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)

A Next.js 16 starter for production apps: feature-first structure, accessible Base UI components, validated environment, tests, lint, format, Docker, CI and an agent guide.

Part of [Essential](https://github.com/essential-registry): starter templates with the tooling, structure, docs and AI-agent guide already in place.

## What you get

- **Next.js 16** App Router, React 19, strict TypeScript, Tailwind CSS v4
- **Feature-first structure:** `src/features/<name>` with a public `index.ts` and zod schemas as the source of types; `pnpm gen:feature` scaffolds one
- **Base UI** primitives in shadcn style (`src/components/ui`) with `cva` variants
- **Validated env** (`src/lib/env.ts`, zod) and central site config for metadata, `robots` and `sitemap`
- **Light and dark theme** with `next-themes`; `error` and `not-found` pages included
- **vitest** and Testing Library, **oxlint** (type-aware, warnings denied) and **oxfmt**
- **Husky** pre-commit hook, **GitHub Actions** CI, standalone **Dockerfile**
- **Docs and AGENTS.md** for people and coding agents

## Requirements

- [Node.js](https://nodejs.org) 22 or newer
- [pnpm](https://pnpm.io) 12 (`corepack enable` picks the right version from `package.json`)

## Quick start

Click **Use this template** on GitHub (or run `gh repo create my-project --template essential-registry/next-essential`), then:

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open <http://localhost:3000>.

## Commands

| Command                                           | What it does                                   |
| ------------------------------------------------- | ---------------------------------------------- |
| `pnpm dev`                                        | Start the dev server (Turbopack)               |
| `pnpm build` / `pnpm start`                       | Production build / serve it                    |
| `pnpm typecheck`                                  | `tsc --noEmit`                                 |
| `pnpm lint` / `pnpm lint:fix`                     | oxlint, type-aware, warnings denied / auto-fix |
| `pnpm format` / `pnpm format:check`               | oxfmt write / check                            |
| `pnpm test` / `pnpm test:watch` / `pnpm coverage` | vitest                                         |
| `pnpm gen:feature <name>`                         | Scaffold `src/features/<name>`                 |
| `pnpm run ci`                                     | The non-mutating gate CI runs                  |
| `pnpm build:prepare`                              | Fix lint and format, then run the full gate    |

## Project structure

```text
src/
  app/          routes, layouts, error and not-found pages, robots, sitemap
  features/     one folder per product area (index.ts = public API, schemas.ts)
  components/   shared UI; components/ui = Base UI primitives
  providers/    app-wide providers (theme)
  hooks/        shared hooks
  lib/          env.ts (validated env), site.ts, utils.ts, fonts.ts
  styles/       root-layout.css (Tailwind v4 theme tokens)
tests/          vitest setup
docs/           architecture, configuration, tooling
scripts/        gen-feature.mjs
```

## Architecture

Dependencies point down only: `app` -> `features` -> `components` / `lib` / `providers`. Routes stay thin and compose features; a feature is imported only through its `index.ts`. Server components are the default; `"use client"` is added only where state or browser APIs are needed.

Full details: [`docs/architecture.md`](docs/architecture.md).

## Documentation

- [`docs/architecture.md`](docs/architecture.md): layers, folders and how the pieces fit
- [`docs/configuration.md`](docs/configuration.md): environment variables and site settings
- [`docs/tooling.md`](docs/tooling.md): every command, tool and the quality gate

## Quality gate and CI

`pnpm run ci` runs typecheck, lint, format check, tests and the production build. GitHub Actions runs exactly that on every push and pull request, and the Husky pre-commit hook runs the fast checks (typecheck, lint, format check). `pnpm build:prepare` does the same but fixes lint and formatting first.

## Working with AI agents

[`AGENTS.md`](AGENTS.md) is the guide coding agents follow: commands, layout, conventions and a "never" list (`CLAUDE.md` points to it). `.claude/` adds safe permissions, a formatter hook, a read-only reviewer agent and task skills. Commits always use your own git identity; the guide tells agents not to add attribution lines and not to commit unless asked.

## Make it yours

1. Edit `src/lib/site.ts` (name, description) and `.env.example` (public URL).
2. Replace the home page in `src/app/page.tsx`, add your first feature with `pnpm gen:feature`.
3. Change colours in `src/styles/root-layout.css`.
4. Rename the package in `package.json`.

## License

MIT. See [LICENSE](LICENSE).
