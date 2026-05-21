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
      {/* Top nav */}
      <header className="border-b border-zinc-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
            <span aria-hidden className="text-2xl">
              🪐
            </span>
            Planet AI
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#models" className="hover:text-zinc-100">
              Models
            </a>
            <a href="#docs" className="hover:text-zinc-100">
              Docs
            </a>
            <a href="#pricing" className="hover:text-zinc-100">
              Pricing
            </a>
            <a href="#enterprise" className="hover:text-zinc-100">
              Enterprise
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://planet-ai-staging.fly.dev/"
              className="text-sm text-zinc-400 hover:text-zinc-100"
            >
              Sign in
            </a>
            <a
              href="https://planet-ai-staging.fly.dev/"
              className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-black hover:bg-white"
            >
              Get API Key
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
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
              <a
                href="#models"
                className="rounded-md border border-zinc-700 px-6 py-3 text-base font-medium text-zinc-200 hover:border-zinc-500"
              >
                Explore Models
              </a>
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
        <section id="docs" className="mx-auto max-w-6xl px-6 py-20">
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
        <section id="models" className="mx-auto max-w-6xl px-6 py-20">
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
        </section>

        {/* Pricing teaser */}
        <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-black p-10 md:p-16">
            <h2 className="text-3xl font-semibold tracking-tight">
              Pay provider list price. Get up to 7% back monthly.
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              No surcharge on top of OpenAI / Anthropic / Google list prices.
              Cross volume thresholds and Planet AI credits your account
              automatically the next month — 3% Bronze through 7% Platinum.
            </p>
            <table className="mt-10 w-full max-w-2xl text-sm">
              <thead className="text-zinc-500">
                <tr>
                  <th className="text-left font-medium pb-3">Tier</th>
                  <th className="text-left font-medium pb-3">Last-month spend</th>
                  <th className="text-left font-medium pb-3">Auto credit</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                {[
                  ["Bronze", "$1,000+", "3%"],
                  ["Silver", "$5,000+", "4%"],
                  ["Gold", "$10,000+", "5%"],
                  ["Platinum", "$20,000+", "7%"],
                ].map(([tier, spend, credit]) => (
                  <tr key={tier} className="border-t border-zinc-800">
                    <td className="py-3">{tier}</td>
                    <td className="py-3">{spend}</td>
                    <td className="py-3 text-indigo-400">{credit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Enterprise teaser */}
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
      </main>

      {/* Footer */}
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
                <a href="#models" className="hover:text-zinc-300">
                  Models
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-zinc-300">
                  Quick Start
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-zinc-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#enterprise" className="hover:text-zinc-300">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-zinc-200 font-medium">Resources</div>
            <ul className="mt-3 space-y-2 text-zinc-500">
              <li>
                <a
                  href="https://planet-ai-staging.fly.dev/"
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
            <span>© 2026 Planet AI · AGPL-3.0 · fork of Calcium-Ion/new-api</span>
            <span>all systems operational</span>
          </div>
        </div>
      </footer>
    </>
  );
}
