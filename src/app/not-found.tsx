import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-medium tracking-tight">Page not found</h1>
      <Link href="/" className="underline underline-offset-4">
        Go home
      </Link>
    </main>
  );
}
