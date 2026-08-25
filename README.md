# jiricrispeyn.com

A small, static résumé site. No build step, no framework, no dependencies —
just HTML, CSS, and a few lines of vanilla JS for the light/dark theme toggle.

## Structure

```
index.html                 Page markup and content
assets/css/style.css       Styles (light + dark theme via CSS variables)
assets/js/theme.js         Theme toggle + persistence (localStorage)
assets/img/                Avatar, favicon, touch icon, OG image
assets/jiri-crispeyn-resume.pdf   Downloadable résumé
robots.txt, sitemap.xml, site.webmanifest
```

## Preview locally

Paths are root-relative, so open it through a local server rather than the
`file://` protocol:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Updating content

All résumé content lives directly in `index.html`. There's no CMS or data
file — edit the markup in the `Experience`, `Skills`, and `Education`
sections directly.

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages) —
just point it at the repo root, no build command needed.
