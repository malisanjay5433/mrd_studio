# Raajlakshmi

Editorial ceramics portfolio — [Next.js](https://nextjs.org/) (App Router), [Tailwind CSS](https://tailwindcss.com/), [Contentlayer](https://www.contentlayer.dev/), optional [Upstash Redis](https://upstash.com/) for pageview counts. Deploy anywhere that runs Node (e.g. [Vercel](https://vercel.com/)).

## Running locally

```sh
git clone https://github.com/malisanjay5433/mrd_studio.git
cd mrd_studio
pnpm install
```

Optional: copy `.env.example` to `.env` and add Upstash credentials if you want Redis-backed pageviews.

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```sh
pnpm build
pnpm start
```

## Scripts

- `pnpm dev` — development server  
- `pnpm build` — production build (includes Contentlayer)  
- `pnpm fmt` — Rome lint + format  
