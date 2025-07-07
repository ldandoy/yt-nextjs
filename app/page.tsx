import Link from "next/link";

export default function Home() {
  return (
    <div className="w-7xl mx-auto">
      <h1 className="text-2xl">Bonjour le monde !</h1>
      <Link href="/about">A propos</Link>
    </div>
  );
}
