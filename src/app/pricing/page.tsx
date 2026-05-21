import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Provider list price · zero platform fee · automatic monthly rebates from 3% (Bronze) to 7% (Platinum) · per-key budgets · invoice on request.",
};

const TIERS: { tier: string; spend: string; credit: string; perks: string[] }[] = [
  {
    tier: "Bronze",
    spend: "$1,000+",
    credit: "3%",
    perks: ["Auto-applied credit", "Email support"],
  },
  {
    tier: "Silver",
    spend: "$5,000+",
    credit: "4%",
    perks: ["+ Priority queue", "+ Slack channel"],
  },
  {
    tier: "Gold",
    spend: "$10,000+",
    credit: "5%",
    perks: ["+ Dedicated CSM", "+ Quarterly review"],
  },
  {
    tier: "Platinum",
    spend: "$20,000+",
    credit: "7%",
    perks: ["+ Custom routing", "+ Reserved capacity"],
  },
];

const FEATURES: { name: string; free: string; paid: string }[] = [
  { name: "Models", free: "100+, all", paid: "100+, all" },
  { name: "OpenAI / Anthropic / Gemini protocol", free: "✓", paid: "✓" },
  { name: "Streaming · Function calling · Vision", free: "✓", paid: "✓" },
  { name: "Per-key budgets (daily / weekly / monthly)", free: "✓", paid: "✓" },
  { name: "Real-time usage dashboard", free: "✓", paid: "✓" },
  { name: "Free tier credit", free: "$3 sign-up", paid: "$3 sign-up" },
  { name: "Platform markup", free: "0%", paid: "0%" },
  { name: "Volume rebates", free: "—", paid: "3 → 7%" },
  { name: "Email support response", free: "best effort", paid: "<24h" },
  { name: "Dedicated CSM", free: "—", paid: "Gold+" },
  { name: "Custom routing strategies", free: "—", paid: "Platinum / Enterprise" },
  { name: "99.99% SLA · multi-region failover", free: "—", paid: "Enterprise" },
  { name: "SSO / SAML · audit log", free: "—", paid: "Enterprise" },
  { name: "Zero content retention by default", free: "✓", paid: "✓" },
  { name: "Observability hooks (Langfuse / Datadog)", free: "Coming", paid: "Coming" },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "How is \"zero platform fee\" possible?",
    a: "Planet AI bills you at the provider's public list price — same dollar amount you'd pay OpenAI / Anthropic / Google directly. We earn from volume rebates we receive from upstream providers and from optional enterprise services (SLA, observability, support).",
  },
  {
    q: "When are monthly rebates credited?",
    a: "On the 10th of each month for the previous month's spend, automatically. No application needed. Credit is added to your Planet AI account balance (not paid out as cash).",
  },
  {
    q: "What counts toward tier thresholds?",
    a: "Any spend across any model/channel, in USD, billed to your account during the previous calendar month. Refunds are subtracted before tier calculation.",
  },
  {
    q: "Do you charge for cached tokens differently?",
    a: "Cached input tokens follow the provider's own discount (typically 0.1× for read, 1.25× for cache creation, e.g. Anthropic). Planet AI does not add markup on top of those rates.",
  },
  {
    q: "Can I get an invoice?",
    a: "Yes. Stripe and Creem (our payment processors) issue invoices for every charge. For enterprise contracts, we issue our own invoices through Stripe Billing.",
  },
  {
    q: "Refunds?",
    a: "Yes, with caveats. Unused balance is refundable within 30 days of the most recent top-up, minus payment processor fees. Already-consumed tokens are not refundable — see Terms for details.",
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Hero */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-400">
          Pricing
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
          Provider list price.
          <br />
          <span className="text-indigo-400">Zero markup.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
          You pay exactly what OpenAI / Anthropic / Google list publicly — and
          get up to 7% back as monthly credit once you cross volume tiers.
          No platform fee, no per-seat charge, no setup cost.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
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
            See model prices
          </Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">
          Sign-up bonus: $3 free credit on your first top-up.
        </p>
      </div>

      {/* Tiers */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Volume rebates
          </h2>
          <p className="mt-3 text-zinc-400">
            Auto-applied on the 10th of each month for the previous month&rsquo;s
            spend.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TIERS.map((t) => (
            <div
              key={t.tier}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold tracking-tight">
                  {t.tier}
                </h3>
                <span className="text-2xl font-bold text-indigo-400">
                  {t.credit}
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-500">
                {t.spend} / month
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-zinc-300">
                {t.perks.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Feature table */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            What you get
          </h2>
          <p className="mt-3 text-zinc-400">
            Same product for individuals and enterprise. Enterprise unlocks
            SLA, SSO, dedicated capacity.
          </p>
        </div>
        <div className="mt-10 overflow-x-auto rounded-xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead className="bg-zinc-950 text-zinc-500">
              <tr>
                <th className="text-left font-medium px-4 py-3">Feature</th>
                <th className="text-left font-medium px-4 py-3">
                  Free + Pay-as-you-go
                </th>
                <th className="text-left font-medium px-4 py-3">
                  Bronze+ / Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((f) => (
                <tr key={f.name} className="border-t border-zinc-900">
                  <td className="px-4 py-3 text-zinc-200">{f.name}</td>
                  <td className="px-4 py-3 text-zinc-400">{f.free}</td>
                  <td className="px-4 py-3 text-zinc-100">{f.paid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
          {FAQ.map((f) => (
            <div key={f.q}>
              <h3 className="text-base font-semibold text-zinc-100">{f.q}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-black p-10 md:p-16 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          Start with $3 free.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-zinc-400">
          No credit card. Pay-as-you-go once you exhaust the bonus. Cancel
          and clean up keys any time.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a
            href="https://planet-ai-staging.fly.dev/"
            className="rounded-md bg-indigo-500 px-6 py-3 text-base font-medium text-white hover:bg-indigo-400"
          >
            Get API Key
          </a>
          <a
            href="mailto:hello@planet.ai"
            className="rounded-md border border-zinc-700 px-6 py-3 text-base font-medium text-zinc-200 hover:border-zinc-500"
          >
            Talk to sales
          </a>
        </div>
      </section>
    </div>
  );
}
