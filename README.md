# luqas — Portfolio

Statisches Astro-Portfolio (DE) mit Home, About, Projekte und Kontakt.

## Stack

- Astro 5 + TypeScript (strict)
- Plain CSS (kein Tailwind)
- `@astrojs/sitemap` + `public/robots.txt`
- Default language: `de`

## Lokal starten

```bash
cd /workspace/portfolio
npm install
npm run dev
```

Dann öffnen: http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

Output landet in `dist/`.

## Routen

| Pfad        | Datei                     |
|-------------|---------------------------|
| `/`         | `src/pages/index.astro`   |
| `/about`    | `src/pages/about.astro`   |
| `/projects` | `src/pages/projects.astro`|
| `/contact`  | `src/pages/contact.astro` |

Shared layout: `src/layouts/BaseLayout.astro`

## Hinweise

- SEO-Titel/Metas sind gesetzt; OG/JSON-LD sind bewusste Stubs für einen späteren UI-Pass.
- Mailto-Adresse ist Platzhalter (`hello@example.com`).
- `site` in `astro.config.mjs` auf die finale Domain setzen (aktuell GitHub-Pages-Stub).
