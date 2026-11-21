# Architecture

Next Essential is a single Next.js app organised by feature.

```text
app/  ->  features/  ->  components/ , lib/ , providers/
```

Imports only point down the arrow. `app/` routes stay thin: they compose features and own metadata, loading and error states.

## Features

`src/features/<name>/` is one product area. It exposes a public API through `index.ts`; other code imports from `@/features/<name>` only, never from inside the folder.

| File                            | Purpose                                                            |
| ------------------------------- | ------------------------------------------------------------------ |
| `schemas.ts`                    | zod schemas. The single source of the feature's types (`z.infer`). |
| `api/`                          | typed calls to your backend, parse responses with the schemas.     |
| `components/`, `hooks/`, `lib/` | add when the feature needs them.                                   |

Create one with `pnpm gen:feature <name>`.

## Server and client

Server components by default. Use `"use client"` only for state, effects or browser APIs, and keep those components small and leaf-like.

## UI primitives

`src/components/ui` holds small primitives built on [Base UI](https://base-ui.com) (`@base-ui/react`), styled with Tailwind v4 tokens from `src/styles/root-layout.css` and `cva` variants. Add a primitive by wrapping the matching Base UI part and exporting its variants.

## Theme

`next-themes` toggles the `dark` class on `<html>`. Colours are CSS variables in `root-layout.css`; change them there, not in components.
