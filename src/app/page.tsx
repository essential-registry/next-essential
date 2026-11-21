import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main
      className={"relative flex h-screen flex-col items-center justify-center"}
    >
      <h1 className={"text-7xl font-medium tracking-tighter"}>
        Next Essential
      </h1>
      <p className={"my-6 text-center text-base"}>
        An Essential Template to get started with Next.js application with
        essential.
      </p>
      <ThemeToggle />
    </main>
  );
}
