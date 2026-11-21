import { env } from "@/lib/env";

export const site = {
  name: "Next Essential",
  description:
    "An Essential template to start a Next.js application with all the essentials included.",
  url: env.NEXT_PUBLIC_SITE_URL,
} as const;
