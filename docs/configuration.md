# Configuration

All environment variables are read in `src/lib/env.ts` and validated with zod.

- Server-only values go in the `server` schema; browser-visible values (prefixed `NEXT_PUBLIC_`) go in `client`.
- Every variable also appears in `.env.example` with a short comment.
- Set `SKIP_ENV_VALIDATION=true` to build without real values (CI, Docker build).

Copy `.env.example` to `.env.local` for local work. Never commit real values.

`src/lib/site.ts` holds the site name, description and URL used by metadata, `robots.ts` and `sitemap.ts`. Change them first when you start a project.
