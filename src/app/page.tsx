import Link from "next/link";

const PROVIDERS = [
  "OpenAI",
  "Anthropic",
  "Gemini",
  "DeepSeek",
  "Qwen",
  "Kimi",
  "Doubao",
  "ZhipuGLM",
  "Mistral",
];

const METRICS: { label: string; value: string }[] = [
  { value: "100+", label: "Top Models" },
  { value: "99.9%", label: "Uptime" },
  { value: "~300ms", label: "Latency" },
  { value: "0%", label: "Platform Fee" },
];

const CODE_SAMPLE = `from openai import OpenAI

client = OpenAI(
    base_url="https://api.planet.ai/v1",
    api_key="sk-pl-...",
)

resp = client.chat.completions.create(
    model="anthropic/claude-sonnet-4.6",
    messages=[{"role": "user", "content": "Hello from Planet AI"}],
)
print(resp.choices[0].message.content)`;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-0 -top-40 -z-10 opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, #4f46e5 0%, transparent 60%)",
            height: 600,
          }}
        />
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-400">
            LLM Gateway · OpenAI-compatible
          </p>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight">
            100+ models.
            <br />
            <span className="text-indigo-400">One API.</span> Zero markup.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
            One key, OpenAI-compatible. Reach OpenAI, Anthropic, Google,
            DeepSeek, Qwen, Moonshot, Zhipu and more through a single
            endpoint. Billed at provider list price — no platform fee.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="https://planet-ai-staging.fly.dev/"
              className="rounded-md bg-indigo-500 px-6 py-3 text-base font-medium text-white hover:bg-indigo-400"
            >
              Get API Key
            </a>
            <Link
              href="/models"
              className="rounded-md border border-zinc-700 px-6 py-3 text-base font-medium text-zinc-200 hover:border-zinc-500"
            >
              Explore Models
            </Link>
          </div>
        </div>

        {/* Metric strip */}
        <div className="mx-auto max-w-6xl px-6">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center justify-center bg-black px-6 py-8"
              >
                <dt className="text-sm text-zinc-500">{m.label}</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Code sample */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              3 minutes from your OpenAI SDK.
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Already using <code className="font-mono">openai</code>?
              Change one line — <code className="font-mono">base_url</code> —
              and pick any of 100+ models by{" "}
              <code className="font-mono">provider/model</code> name.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-300">
              <li>· Same SDK · Streaming · Function calling · Vision</li>
              <li>· OpenAI / Anthropic / Gemini native protocols supported</li>
              <li>· Per-key budgets · Real-time usage dashboard</li>
              <li>· Zero content retention (opt-in observability)</li>
            </ul>
            <Link
              href="/docs"
              className="mt-6 inline-block text-sm text-indigo-400 hover:text-indigo-300"
            >
              Read the docs →
            </Link>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-1">
            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-zinc-500 font-mono">
                quickstart.py
              </span>
            </div>
            <pre className="overflow-x-auto p-5 text-sm font-mono leading-relaxed text-zinc-200">
              <code>{CODE_SAMPLE}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            One key. Every major model provider.
          </h2>
          <p className="mt-4 text-zinc-400">
            Curated, latency-optimized, automatically failover when an
            upstream blinks.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-3 md:grid-cols-5 gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800">
          {PROVIDERS.map((p) => (
            <li
              key={p}
              className="flex items-center justify-center bg-black px-6 py-8 text-zinc-300"
            >
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link
            href="/models"
            className="text-sm text-indigo-400 hover:text-indigo-300"
          >
            See full model directory →
          </Link>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-black p-10 md:p-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Pay provider list price. Get up to 7% back monthly.
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            No surcharge on top of OpenAI / Anthropic / Google list prices.
            Cross volume thresholds and Planet AI credits your account
            automatically the next month — 3% Bronze through 7% Platinum.
          </p>
          <Link
            href="/pricing"
            className="mt-6 inline-block text-sm text-indigo-400 hover:text-indigo-300"
          >
            See pricing →
          </Link>
        </div>
      </section>

      {/* Enterprise */}
      <section id="enterprise" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Built for individuals. Ready for enterprise.
            </h2>
            <p className="mt-4 text-zinc-400">
              Multi-region, 99.99% SLA, SSO, zero content retention by
              default, custom routing strategies, dedicated capacity, and
              LLM observability bridges (Langfuse / Datadog).
            </p>
          </div>
          <div className="flex items-end md:items-center md:justify-end">
            <a
              href="mailto:hello@planet.ai"
              className="rounded-md border border-zinc-700 px-6 py-3 text-base font-medium text-zinc-200 hover:border-zinc-500"
            >
              Talk to sales →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
