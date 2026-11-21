"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-medium tracking-tight">
        Something went wrong
      </h1>
      <Button onClick={reset}>Try again</Button>
    </main>
  );
}
