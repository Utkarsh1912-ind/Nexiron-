import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <Link href="/">
          <span className="text-2xl font-bold">
            Nex<span className="text-neon">iron</span>
          </span>
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/reviews">Reviews</Link>
          <Link href="/submit">Submit</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-gray-800 px-6 py-8 text-center text-gray-400 text-sm">
        <p>© 2026 Nexiron — Where Gamers Speak Their Truth.</p>
        <div className="flex justify-center gap-4 mt-3">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </footer>
    </div>
  );
}