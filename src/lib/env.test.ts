import { describe, expect, it } from "vitest";

import { env } from "@/lib/env";

describe("env", () => {
  it("falls back to the default site url", () => {
    expect(env.NEXT_PUBLIC_SITE_URL).toContain("http");
  });
});
