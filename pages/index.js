import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        Your Opinion. <span className="text-neon">Your Game.</span> Your Stage.
      </h1>
      <p className="text-lg text-gray-300 mb-8 max-w-xl">
        Join thousands of gamers shaping the conversation.
      </p>
      <Link href="/submit">
        <button className="bg-neon text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition">
          Share Your Take
        </button>
      </Link>
    </main>
  );
}