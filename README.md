# rober

Personal website — backend engineering, articles and projects.
Built with Next.js (App Router), React, TypeScript, MDX and plain CSS.

## Routes

| Route | Content |
| --- | --- |
| `/` | Intro, what I'm doing now, recent spotify track, featured projects |
| `/blog` | List of articles from `posts/` |
| `/blog/[slug]` | Article rendered from MDX with Prism highlighting |
| `/projects` | Projects from `lib/projects.ts` |
| `/books` | Reading list from `lib/books.ts` |

## Getting started

Requires [Bun](https://bun.sh) (recommended) or Node.js.

```bash
bun install
bun dev
```

Open http://localhost:3000.

### Environment

The music widget reads a Last.fm recent-tracks URL from `URL`:

```
URL="https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&format=json&limit=1&user=<user>&api_key=<key>"
```

Put it in `.env` for local development, and in the Vercel project's environment variables for production.

If it is missing or the request fails, `/api/recent-song` returns `null` and the widget is hidden.

## Deploying

Deployed on Vercel. Import the repository in the Vercel dashboard — the defaults work (`bun install`, `bun run build`). Add the `URL` environment variable in the project settings.

Or deploy from the CLI:

```bash
bunx vercel
bunx vercel --prod
```

## Adding content

- **Posts** — add `posts/<slug>.mdx`; it shows up on `/blog` automatically. Required frontmatter: `title`, `topic`, `imgUrl`, `publishedAt`.
- **Projects** — edit `lib/projects.ts`.
- **Books** — edit `lib/books.ts` and put covers in `public/books/`.

## Scripts

`bun dev` · `bun build` · `bun start` · `bun lint`

## Structure

`app/` routes, API and styles · `components/` UI · `lib/` data and helpers · `posts/` MDX articles · `public/` images and static assets.
