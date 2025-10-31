import Link from "next/link";

export default function MyAppBar() {
  return ( 
    <header className="flex justify-between items-center bg-slate-800 text-white px-6 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="text-xl font-bold">MyApp</div>
      <nav className="flex gap-6">
        <Link href="/" className="hover:text-cyan-400">Home</Link>
        <Link href="/blog" className="hover:text-cyan-400">blog</Link>
        <Link href="https://youtu.be/dQw4w9WgXcQ?si=vbGFqL4jApiqHyrE" className="hover:text-cyan-400">Contact</Link>
        <Link href="/box" className="hover:text-cyan-400">logout</Link>
      </nav>
    </header>
  );
}
