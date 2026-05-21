# planet-ai-marketing

Marketing site for **Planet AI** — an LLM API gateway (fork of [Calcium-Ion/new-api](https://github.com/Calcium-Ion/new-api), AGPL-3.0).

Backend repo: [blockcodewill/planet-ai](https://github.com/blockcodewill/planet-ai).
Staging app: [planet-ai-staging.fly.dev](https://planet-ai-staging.fly.dev/).

## Stack

- Next.js 16 App Router
- Tailwind 4
- TypeScript
- Deployed to Vercel

## Local dev

```bash
bun install
bun run dev          # http://localhost:3002 (configured in package.json)
```

## Build

```bash
bun run build && bun run start
```

## Deploy

GitHub repo is connected to Vercel; every push to `main` deploys to production. Preview deploys for branches and PRs.
