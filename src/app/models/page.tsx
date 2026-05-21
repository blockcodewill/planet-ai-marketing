import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Models",
  description:
    "100+ models from OpenAI, Anthropic, Google, DeepSeek, Qwen, Moonshot, Zhipu, Mistral, xAI and more — accessed through one Planet AI key.",
};

type Modality = "text" | "vision" | "audio" | "video" | "function" | "thinking";

type ModelRow = {
  id: string;
  provider: string;
  ctx: string;
  modalities: Modality[];
  inUsd: number; // $ / 1M input tokens
  outUsd: number; // $ / 1M output tokens
  badge?: "new" | "popular" | "fastest" | "cheap";
};

const ROWS: ModelRow[] = [
  // OpenAI
  { id: "openai/gpt-5.5", provider: "OpenAI", ctx: "1M", modalities: ["text", "vision", "function", "thinking"], inUsd: 5, outUsd: 30, badge: "new" },
  { id: "openai/gpt-5.4", provider: "OpenAI", ctx: "1M", modalities: ["text", "vision", "function"], inUsd: 2.5, outUsd: 15, badge: "popular" },
  { id: "openai/gpt-5.4-mini", provider: "OpenAI", ctx: "1M", modalities: ["text", "vision", "function"], inUsd: 0.5, outUsd: 2, badge: "cheap" },
  { id: "openai/gpt-5.3-codex", provider: "OpenAI", ctx: "256K", modalities: ["text", "function"], inUsd: 3, outUsd: 12 },
  // Anthropic
  { id: "anthropic/claude-opus-4.7", provider: "Anthropic", ctx: "1M", modalities: ["text", "vision", "function", "thinking"], inUsd: 5, outUsd: 25, badge: "new" },
  { id: "anthropic/claude-sonnet-4.6", provider: "Anthropic", ctx: "1M", modalities: ["text", "vision", "function", "thinking"], inUsd: 3, outUsd: 15, badge: "popular" },
  { id: "anthropic/claude-haiku-4-5", provider: "Anthropic", ctx: "200K", modalities: ["text", "vision", "function"], inUsd: 0.8, outUsd: 4, badge: "fastest" },
  // Google
  { id: "google/gemini-3.5-flash", provider: "Google", ctx: "1M", modalities: ["text", "vision", "audio", "video", "function"], inUsd: 1.5, outUsd: 9 },
  { id: "google/gemini-3.1-pro", provider: "Google", ctx: "2M", modalities: ["text", "vision", "audio", "video", "function", "thinking"], inUsd: 3.5, outUsd: 18 },
  { id: "google/gemini-3.1-flash-lite", provider: "Google", ctx: "1M", modalities: ["text", "vision", "audio", "video"], inUsd: 0.25, outUsd: 1.5, badge: "cheap" },
  // DeepSeek
  { id: "deepseek/deepseek-v4-pro", provider: "DeepSeek", ctx: "1M", modalities: ["text", "function", "thinking"], inUsd: 1.74, outUsd: 3.48 },
  { id: "deepseek/deepseek-v4-flash", provider: "DeepSeek", ctx: "1M", modalities: ["text", "function"], inUsd: 0.14, outUsd: 0.28, badge: "cheap" },
  { id: "deepseek/deepseek-reasoner", provider: "DeepSeek", ctx: "256K", modalities: ["text", "thinking"], inUsd: 0.55, outUsd: 2.19 },
  // Alibaba Qwen
  { id: "qwen/qwen-3.6-max", provider: "Alibaba", ctx: "1M", modalities: ["text", "vision", "function"], inUsd: 2, outUsd: 10 },
  { id: "qwen/qwen-3.6-flash", provider: "Alibaba", ctx: "1M", modalities: ["text", "vision", "video"], inUsd: 0.25, outUsd: 1.5, badge: "cheap" },
  // MoonshotAI
  { id: "moonshot/kimi-k2.6", provider: "MoonshotAI", ctx: "262K", modalities: ["text", "vision", "function"], inUsd: 0.95, outUsd: 4 },
  { id: "moonshot/kimi-latest", provider: "MoonshotAI", ctx: "200K", modalities: ["text", "vision"], inUsd: 0.6, outUsd: 2.4 },
  // Zhipu GLM
  { id: "zhipu/glm-5.1", provider: "Zhipu", ctx: "200K", modalities: ["text", "function"], inUsd: 1.4, outUsd: 4.4 },
  { id: "zhipu/glm-4-flash", provider: "Zhipu", ctx: "128K", modalities: ["text", "function"], inUsd: 0, outUsd: 0, badge: "cheap" },
  // ByteDance Doubao
  { id: "doubao/doubao-2.5-pro", provider: "ByteDance", ctx: "256K", modalities: ["text", "vision", "function"], inUsd: 0.7, outUsd: 2.5 },
  // xAI
  { id: "xai/grok-4.20", provider: "xAI", ctx: "2M", modalities: ["text", "vision", "function"], inUsd: 4, outUsd: 12, badge: "new" },
  // Mistral
  { id: "mistral/mistral-large-3", provider: "Mistral", ctx: "256K", modalities: ["text", "function"], inUsd: 2, outUsd: 6 },
];

const MOD_LABEL: Record<Modality, string> = {
  text: "T",
  vision: "V",
  audio: "A",
  video: "Vid",
  function: "Fn",
  thinking: "Think",
};

const BADGE_STYLE: Record<NonNullable<ModelRow["badge"]>, string> = {
  new: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  popular: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  fastest: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  cheap: "bg-zinc-700/40 text-zinc-300 border-zinc-600",
};

const BY_PROVIDER = ROWS.reduce<Record<string, ModelRow[]>>((acc, r) => {
  (acc[r.provider] ??= []).push(r);
  return acc;
}, {});

function fmtPrice(v: number) {
  if (v === 0) return "Free";
  if (v < 1) return `$${v}`;
  return `$${v}`;
}

export default function ModelsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-400">
          Models · {ROWS.length} of 100+
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
          Pick a model. Keep your SDK.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
          Pricing shown is what providers charge — Planet AI passes it through
          with zero markup. Volume rebates 3–7% on top. Cached input tokens
          billed at provider list (typically 0.1×).
        </p>
      </div>

      {/* Legend */}
      <div className="mt-12 flex flex-wrap items-center gap-4 text-xs text-zinc-500">
        <span className="font-medium text-zinc-400">Modalities:</span>
        {(Object.entries(MOD_LABEL) as [Modality, string][]).map(([k, v]) => (
          <span key={k} className="flex items-center gap-1.5">
            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-zinc-700 px-1.5 font-mono text-zinc-300">
              {v}
            </span>
            {k}
          </span>
        ))}
      </div>

      {/* Tables grouped by provider */}
      <div className="mt-8 space-y-12">
        {Object.entries(BY_PROVIDER).map(([provider, models]) => (
          <section key={provider}>
            <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
              {provider}{" "}
              <span className="ml-2 text-sm font-normal text-zinc-500">
                {models.length} models
              </span>
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead className="bg-zinc-950 text-zinc-500">
                  <tr>
                    <th className="text-left font-medium px-4 py-3">Model</th>
                    <th className="text-left font-medium px-4 py-3">Context</th>
                    <th className="text-left font-medium px-4 py-3">
                      Modalities
                    </th>
                    <th className="text-right font-medium px-4 py-3">
                      Input <span className="text-xs">/1M</span>
                    </th>
                    <th className="text-right font-medium px-4 py-3">
                      Output <span className="text-xs">/1M</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((m) => (
                    <tr
                      key={m.id}
                      className="border-t border-zinc-900 hover:bg-zinc-950/50"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <code className="font-mono text-zinc-100">
                            {m.id}
                          </code>
                          {m.badge && (
                            <span
                              className={`inline-flex h-5 items-center rounded border px-2 text-xs ${
                                BADGE_STYLE[m.badge]
                              }`}
                            >
                              {m.badge}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-zinc-400">{m.ctx}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1.5">
                          {m.modalities.map((mod) => (
                            <span
                              key={mod}
                              className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-zinc-700 px-1.5 font-mono text-xs text-zinc-300"
                            >
                              {MOD_LABEL[mod]}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-100">
                        {fmtPrice(m.inUsd)}
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-100">
                        {fmtPrice(m.outUsd)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 rounded-2xl border border-zinc-800 bg-zinc-950 p-10 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Got a model you need that&rsquo;s not listed?
        </h2>
        <p className="mt-3 text-zinc-400">
          Open an issue on{" "}
          <a
            href="https://github.com/blockcodewill/planet-ai/issues"
            className="text-indigo-400 hover:text-indigo-300"
          >
            GitHub
          </a>{" "}
          or write us at{" "}
          <a
            href="mailto:hello@withplanetai.cn"
            className="text-indigo-400 hover:text-indigo-300"
          >
            hello@withplanetai.cn
          </a>
          .
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a
            href="https://api.withplanetai.cn/"
            className="rounded-md bg-indigo-500 px-6 py-3 text-base font-medium text-white hover:bg-indigo-400"
          >
            Get API Key
          </a>
          <Link
            href="/docs"
            className="rounded-md border border-zinc-700 px-6 py-3 text-base font-medium text-zinc-200 hover:border-zinc-500"
          >
            Read the docs
          </Link>
        </div>
      </div>
    </div>
  );
}
