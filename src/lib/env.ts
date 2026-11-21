import { z } from "zod";

/**
 * The one place environment variables are read and validated.
 * Server-only values go in `server`, browser-visible ones (NEXT_PUBLIC_*) in `client`.
 * Set SKIP_ENV_VALIDATION=true in CI to build without real values.
 */
const server = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

const client = z.object({
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
});

const skip = process.env.SKIP_ENV_VALIDATION === "true";

// With SKIP_ENV_VALIDATION the schema defaults are used instead of the real values.
const parse = <T extends z.ZodType>(schema: T, input: unknown): z.infer<T> =>
  schema.parse(skip ? {} : input);

export const env = {
  ...parse(server, { NODE_ENV: process.env.NODE_ENV }),
  ...parse(client, {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  }),
};
