import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs · Quick Start",
  description:
    "3-minute Planet AI quickstart for OpenAI, Anthropic, and Google Gemini SDKs. Covers streaming, function calling, vision, model id namespace, error handling.",
};

const PY_OPENAI = `from openai import OpenAI

client = OpenAI(
    base_url="https://api.planet.ai/v1",
    api_key="sk-pl-...",          # your Planet AI key
)

resp = client.chat.completions.create(
    model="anthropic/claude-sonnet-4.6",   # any provider/model id
    messages=[{"role": "user", "content": "Hello"}],
)
print(resp.choices[0].message.content)`;

const JS_OPENAI = `import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.planet.ai/v1",
  apiKey: process.env.PLANET_AI_KEY,
});

const resp = await client.chat.completions.create({
  model: "openai/gpt-5.4",
  messages: [{ role: "user", content: "Hello" }],
});
console.log(resp.choices[0].message.content);`;

const PY_ANTHROPIC = `import anthropic

client = anthropic.Anthropic(
    base_url="https://api.planet.ai/anthropic/v1",
    api_key="sk-pl-...",
)

resp = client.messages.create(
    model="anthropic/claude-opus-4.7",
    max_tokens=512,
    messages=[{"role": "user", "content": "Hello"}],
)
print(resp.content[0].text)`;

const PY_GEMINI = `from google import genai

client = genai.Client(
    api_key="sk-pl-...",
    http_options={
        "base_url": "https://api.planet.ai/gemini",
    },
)

resp = client.models.generate_content(
    model="google/gemini-3.5-flash",
    contents="Hello",
)
print(resp.text)`;

const STREAM = `# OpenAI Python SDK, stream=True
stream = client.chat.completions.create(
    model="anthropic/claude-haiku-4-5",
    messages=[{"role": "user", "content": "Stream three numbers"}],
    stream=True,
)
for chunk in stream:
    delta = chunk.choices[0].delta.content or ""
    print(delta, end="", flush=True)`;

const TOOL = `tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Get current weather for a city",
        "parameters": {
            "type": "object",
            "properties": {"city": {"type": "string"}},
            "required": ["city"],
        },
    },
}]

resp = client.chat.completions.create(
    model="openai/gpt-5.4",
    tools=tools,
    tool_choice="auto",
    messages=[{"role": "user", "content": "Weather in Tokyo?"}],
)
tool_call = resp.choices[0].message.tool_calls[0]
print(tool_call.function.name, tool_call.function.arguments)`;

function CodeCard({
  filename,
  code,
}: {
  filename: string;
  code: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-1">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <span className="ml-3 text-xs text-zinc-500 font-mono">
          {filename}
        </span>
      </div>
      <pre className="overflow-x-auto p-5 text-sm font-mono leading-relaxed text-zinc-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-24">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Hero */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-400">
          Docs · Quickstart
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
          3 minutes. One line of code.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
          Planet AI speaks OpenAI, Anthropic, and Gemini protocols natively.
          Pick your favorite SDK, change one URL, get 100+ models.
        </p>
      </div>

      {/* Endpoints table */}
      <Section eyebrow="Endpoints" title="Three protocols, one key">
        <div className="overflow-x-auto rounded-xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead className="bg-zinc-950 text-zinc-500">
              <tr>
                <th className="text-left font-medium px-4 py-3">Protocol</th>
                <th className="text-left font-medium px-4 py-3">Base URL</th>
                <th className="text-left font-medium px-4 py-3">Auth header</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs">
              <tr className="border-t border-zinc-900">
                <td className="px-4 py-3 text-zinc-200">OpenAI-compatible</td>
                <td className="px-4 py-3 text-zinc-100">
                  https://api.planet.ai/v1
                </td>
                <td className="px-4 py-3 text-zinc-400">
                  Authorization: Bearer sk-pl-...
                </td>
              </tr>
              <tr className="border-t border-zinc-900">
                <td className="px-4 py-3 text-zinc-200">Anthropic native</td>
                <td className="px-4 py-3 text-zinc-100">
                  https://api.planet.ai/anthropic/v1
                </td>
                <td className="px-4 py-3 text-zinc-400">
                  x-api-key: sk-pl-...
                </td>
              </tr>
              <tr className="border-t border-zinc-900">
                <td className="px-4 py-3 text-zinc-200">Gemini native</td>
                <td className="px-4 py-3 text-zinc-100">
                  https://api.planet.ai/gemini/v1beta
                </td>
                <td className="px-4 py-3 text-zinc-400">
                  x-goog-api-key: sk-pl-...
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          You can use any one protocol to call any upstream model — e.g. call{" "}
          <code className="font-mono">anthropic/claude-sonnet-4.6</code> through
          the OpenAI endpoint. Planet AI translates protocols transparently.
        </p>
      </Section>

      {/* Model id namespace */}
      <Section eyebrow="Naming" title="provider/model — the only naming rule">
        <p className="text-zinc-400 leading-relaxed">
          Every model is referenced as{" "}
          <code className="font-mono">provider/model-id</code>:
        </p>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm font-mono text-zinc-300">
          {[
            "openai/gpt-5.4",
            "anthropic/claude-sonnet-4.6",
            "google/gemini-3.5-flash",
            "deepseek/deepseek-v4-pro",
            "qwen/qwen-3.6-flash",
            "moonshot/kimi-k2.6",
            "zhipu/glm-4-flash",
            "xai/grok-4.20",
            "mistral/mistral-large-3",
          ].map((m) => (
            <code
              key={m}
              className="rounded border border-zinc-800 bg-zinc-950 px-3 py-2"
            >
              {m}
            </code>
          ))}
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Full list at <Link href="/models" className="text-indigo-400 hover:text-indigo-300">/models</Link>.
        </p>
      </Section>

      {/* OpenAI quickstart */}
      <Section
        id="openai"
        eyebrow="OpenAI-compatible (recommended)"
        title="Change base_url. Done."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <CodeCard filename="quickstart.py" code={PY_OPENAI} />
          <CodeCard filename="quickstart.ts" code={JS_OPENAI} />
        </div>
      </Section>

      {/* Anthropic */}
      <Section
        id="anthropic"
        eyebrow="Anthropic native"
        title="Use the Claude SDK as-is."
      >
        <CodeCard filename="anthropic.py" code={PY_ANTHROPIC} />
        <p className="mt-4 text-sm text-zinc-500">
          The same <code className="font-mono">anthropic/claude-*</code> models
          are also reachable via the OpenAI-compatible endpoint above. Use
          whichever fits your stack.
        </p>
      </Section>

      {/* Gemini */}
      <Section
        id="gemini"
        eyebrow="Gemini native"
        title="Use the Google GenAI SDK."
      >
        <CodeCard filename="gemini.py" code={PY_GEMINI} />
        <p className="mt-4 text-sm text-zinc-500">
          The Gemini native entry currently translates from{" "}
          <code className="font-mono">google/*</code> models only. For
          non-Google models, prefer the OpenAI-compatible endpoint.
        </p>
      </Section>

      {/* Streaming */}
      <Section
        id="streaming"
        eyebrow="Capabilities"
        title="Streaming"
      >
        <CodeCard filename="stream.py" code={STREAM} />
        <p className="mt-4 text-sm text-zinc-500">
          SSE chunks arrive in OpenAI delta format regardless of upstream
          protocol. Planet AI translates Claude / Gemini event streams into
          OpenAI deltas transparently.
        </p>
      </Section>

      {/* Function calling */}
      <Section id="tools" eyebrow="Capabilities" title="Function calling">
        <CodeCard filename="tools.py" code={TOOL} />
        <p className="mt-4 text-sm text-zinc-500">
          Tool / function schemas translate between OpenAI{" "}
          <code className="font-mono">tools</code>, Anthropic{" "}
          <code className="font-mono">tools</code>, and Gemini{" "}
          <code className="font-mono">function_declarations</code>{" "}
          automatically.
        </p>
      </Section>

      {/* Errors */}
      <Section eyebrow="Errors" title="HTTP status codes">
        <div className="overflow-x-auto rounded-xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead className="bg-zinc-950 text-zinc-500">
              <tr>
                <th className="text-left font-medium px-4 py-3">Status</th>
                <th className="text-left font-medium px-4 py-3">Meaning</th>
                <th className="text-left font-medium px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["401", "Invalid API key", "Rotate via dashboard"],
                ["402", "Insufficient balance", "Top up account"],
                ["403", "Model not allowed for this key", "Check key permissions"],
                ["429", "Rate limit", "Back off; raise tier or quota"],
                ["500/502/503", "Upstream provider error", "Auto-retried; will failover"],
                ["524", "Stream timeout", "Lower max_tokens or retry"],
              ].map(([s, m, a]) => (
                <tr key={s} className="border-t border-zinc-900">
                  <td className="px-4 py-3 font-mono text-zinc-100">{s}</td>
                  <td className="px-4 py-3 text-zinc-300">{m}</td>
                  <td className="px-4 py-3 text-zinc-500">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Privacy */}
      <Section eyebrow="Privacy" title="Zero content retention by default">
        <p className="text-zinc-400 leading-relaxed">
          Planet AI does not store request bodies, response bodies, prompts,
          or generated content for routine traffic. Logs retain metadata only
          (request id, model, tokens, latency, status). You can opt in
          per-key to forward full traces to your own Langfuse / Datadog
          instance.
        </p>
      </Section>

      {/* CTA */}
      <Section eyebrow="Get started" title="Grab a key">
        <div className="flex flex-wrap gap-3">
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
            Browse models
          </Link>
          <Link
            href="/pricing"
            className="rounded-md border border-zinc-700 px-6 py-3 text-base font-medium text-zinc-200 hover:border-zinc-500"
          >
            See pricing
          </Link>
        </div>
      </Section>
    </div>
  );
}
