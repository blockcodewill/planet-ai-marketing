import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Planet AI — LLM API Gateway · 100+ models, one API",
  description:
    "Unified LLM API gateway. Access OpenAI, Anthropic, Google, DeepSeek, Qwen, Kimi, Moonshot, Zhipu and 100+ models through one OpenAI-compatible endpoint and one API key. Zero markup.",
  metadataBase: new URL("https://planet.ai"),
  openGraph: {
    title: "Planet AI — 100+ models, one API",
    description:
      "Unified LLM gateway · OpenAI/Anthropic/Gemini compatible · zero platform fee",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

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
        {children}
      </body>
    </html>
  );
}
