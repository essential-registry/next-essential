# Next Essential: guide for AI agents

Next.js 16 + React 19 + TypeScript 7 + Tailwind v4 starter. Feature-first folders, Base UI components (shadcn style), zod-validated env, vitest, oxlint and oxfmt.

## Commands

```bash
pnpm install
pnpm dev                 # http://localhost:3000
pnpm typecheck           # tsc --noEmit
pnpm lint                # oxlint (type-aware)
pnpm format:check        # oxfmt --check
pnpm test                # vitest run
pnpm build               # next build
pnpm gen:feature <name>  # scaffold src/features/<name>
pnpm build:prepare       # fix, format, typecheck, test, build
```

The gate is `pnpm run ci (non-mutating) / pnpm run build:prepare (fixes first)`. CI runs the same thing, so a change that passes locally passes in CI.

## Layout

```text
src/
  app/         routes, layouts, error/not-found, robots, sitemap (thin: compose features)
  features/    <domain>/  index.ts (public API), schemas.ts (zod = source of types), api/, components/, hooks/, lib/
  components/  shared UI; components/ui = Base UI primitives (button, ...)
  providers/   app-wide providers (theme)
  hooks/       shared hooks
  lib/         env.ts (validated env), site.ts, utils.ts, fonts.ts
  styles/      root-layout.css (Tailwind v4 theme tokens)
tests/         vitest setup
docs/          guides
```

## Conventions

- Layers point down only: `app` -> `features` -> `components`/`lib`/`providers`. A feature never imports another feature's internals, only its `index.ts`.
- Server components by default. Add `"use client"` only where state or browser APIs are needed.
- Read env only through `src/lib/env.ts`. Add new variables to the zod schema and `.env.example`.
- Types come from zod schemas (`z.infer`). No `any`.
- UI primitives use Base UI (`@base-ui/react`) styled with Tailwind and `cva`.
- Files are kebab-case, components PascalCase, tests sit next to the code as `*.test.ts(x)`.

## Rules (all Essential templates)

- **Git:** commits and pushes use the user's own git identity. Never set a Claude identity and never add `Co-Authored-By` or "Generated with" lines. Do not commit unless asked.
- Never read or print `.env` files or secrets. Every setting has an entry in `.env.example`.
- Conventional commits (`feat(scope): ...`). Feature branch, then pull request.
- Business numbers (limits, durations, thresholds) are configuration, never constants in code.
- If a rule is missing, stop and ask. Do not invent one.
- Run the gate before saying "done".

## Never

- Edit `pnpm-lock.yaml` by hand.
- Disable lint rules or `ignoreBuildErrors` to make the gate pass.
- Read or print `.env` values.

## Read next

- `docs/architecture.md`, `docs/configuration.md`, `docs/tooling.md`
