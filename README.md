# What will you build next?

A small Webflow Cloud app for a Webflow University activity. Participants pick a
project direction, meet a placeholder "build companion," and submit their choice —
which is stored server-side in a Webflow Cloud SQLite (D1) database and shown back
as updated totals that persist after a refresh.

This is a **technical prototype**. Character art is a styled placeholder; final
names, copy, and illustrations are still in development.

## Stack

- [Astro](https://astro.build) (server output) + `@astrojs/cloudflare` adapter
- Webflow Cloud SQLite (Cloudflare D1) via a `wrangler.json` binding
- No client framework, no auth, no external APIs

## Project structure

- `src/config/choices.ts` — the four project directions and their companions
- `src/config/activity-theme.ts` — the only two settings meant to be edited directly (accent color, reveal effect)
- `src/lib/db.ts` — query logic (aggregate totals, insert a response)
- `src/pages/api/results.ts` / `submit.ts` — the two server endpoints
- `src/pages/index.astro` — the whole UI
- `migrations/0001_init.sql` — schema + 24 seeded sample responses

## Local development

```bash
npm install
npm run cf-typegen        # generates Cloudflare env types
npm run db:migrate:local  # applies the schema + seed data to a local D1 file
npm run dev
```

Then open the local dev URL and try a submission — the count and "most popular"
result should update, and refreshing the page should keep your choice.

## Deploying

This app is meant to be deployed through the Webflow Cloud dashboard as a
**standalone app** (no existing Webflow site required): import this repository,
choose the branch, name the app, and deploy. Webflow Cloud provisions the D1
database automatically from the `wrangler.json` binding and runs the migration
(including the seed data) on the first deploy.

Full learner-facing deployment and troubleshooting steps will be added once the
first live deploy has been verified end-to-end.

## Status

Technical prototype — not yet deployed or tested against a live Webflow Cloud
environment. Do not treat as the final learner template yet.
