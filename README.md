# Next Essential

A Next.js starter with the essentials already set up: feature-first structure, Base UI components, validated env, tests, lint, format, CI and an agent guide.

## Stack

- Next.js 16 (App Router) and React 19
- TypeScript (strict) and Tailwind CSS v4
- [Base UI](https://base-ui.com) primitives, shadcn-style
- zod for env and data schemas
- vitest and Testing Library
- oxlint (type-aware) and oxfmt
- pnpm, husky, GitHub Actions, Docker

## Run

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open <http://localhost:3000>.

## Scripts

```bash
pnpm typecheck       # tsc --noEmit
pnpm lint            # oxlint, type-aware
pnpm format:check    # oxfmt check
pnpm test            # vitest
pnpm build           # production build
pnpm gen:feature x   # scaffold src/features/x
pnpm run ci          # the gate CI runs (non-mutating)
pnpm build:prepare   # fix lint/format, then the full gate
```

## Structure

```text
src/
  app/          routes, layouts, error and not-found pages
  features/     one folder per product area (public API in index.ts)
  components/   shared UI; components/ui = Base UI primitives
  providers/    app-wide providers
  hooks/ lib/   shared hooks, env, site config, helpers
  styles/       Tailwind v4 theme tokens
tests/          vitest setup
docs/           architecture, configuration, tooling
```

## Working with AI agents

`AGENTS.md` is the guide agents follow (`CLAUDE.md` points to it). `.claude/` has permissions, a formatter hook, a reviewer agent and skills for common tasks.

## License

MIT. See [LICENSE](LICENSE).
