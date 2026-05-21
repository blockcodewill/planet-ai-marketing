import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Planet AI — LLM API Gateway · 100+ models, one API",
    template: "%s · Planet AI",
  },
  description:
    "Unified LLM API gateway. Access OpenAI, Anthropic, Google, DeepSeek, Qwen, Kimi, Moonshot, Zhipu and 100+ models through one OpenAI-compatible endpoint and one API key. Zero markup.",
  metadataBase: new URL("https://www.withplanetai.cn"),
  openGraph: {
    title: "Planet AI — 100+ models, one API",
    description:
      "Unified LLM gateway · OpenAI/Anthropic/Gemini compatible · zero platform fee",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const NAV = [
  { href: "/models", label: "Models" },
  { href: "/docs", label: "Docs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#enterprise", label: "Enterprise" },
];

function SiteHeader() {
  return (
    <header className="border-b border-zinc-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg tracking-tight"
        >
          <span aria-hidden className="text-2xl">
            🪐
          </span>
          Planet AI
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-zinc-100">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://api.withplanetai.cn/"
            className="text-sm text-zinc-400 hover:text-zinc-100"
          >
            Sign in
          </a>
          <a
            href="https://api.withplanetai.cn/"
            className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-black hover:bg-white"
          >
            Get API Key
          </a>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span aria-hidden>🪐</span> Planet AI
          </div>
          <p className="mt-3 text-zinc-500">
            LLM API gateway built on{" "}
            <a
              href="https://github.com/Calcium-Ion/new-api"
              className="underline hover:text-zinc-300"
            >
              new-api
            </a>{" "}
            · AGPL-3.0.
          </p>
        </div>
        <div>
          <div className="text-zinc-200 font-medium">Product</div>
          <ul className="mt-3 space-y-2 text-zinc-500">
            <li>
              <Link href="/models" className="hover:text-zinc-300">
                Models
              </Link>
            </li>
            <li>
              <Link href="/docs" className="hover:text-zinc-300">
                Quick Start
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-zinc-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/#enterprise" className="hover:text-zinc-300">
                Enterprise
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-zinc-200 font-medium">Resources</div>
          <ul className="mt-3 space-y-2 text-zinc-500">
            <li>
              <a
                href="https://api.withplanetai.cn/"
                className="hover:text-zinc-300"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="https://github.com/blockcodewill/planet-ai"
                className="hover:text-zinc-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="/llms.txt" className="hover:text-zinc-300">
                llms.txt
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-zinc-200 font-medium">Legal</div>
          <ul className="mt-3 space-y-2 text-zinc-500">
            <li>
              <a href="/terms" className="hover:text-zinc-300">
                Terms
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-zinc-300">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-zinc-500 flex flex-wrap items-center justify-between gap-3">
          <span>
            © 2026 Planet AI · AGPL-3.0 · fork of Calcium-Ion/new-api
          </span>
          <span>all systems operational</span>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-100">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
