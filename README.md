# RepWise — Fitness & Workout Planner

SW 302 — User Interface Development, Fall 2026.

RepWise is a frontend web application for planning workout routines, logging
completed exercises, and tracking physical activity over time. This repository
currently holds the **Phase 2 static prototype**: HTML5 pages styled with a
locally installed Tailwind CSS v4 build (no CDN, no JavaScript, no backend).

## Team

| Member | Role |
| ------ | ---- |
| _To be completed_ | Representative |
| _To be completed_ | |
| _To be completed_ | |
| _To be completed_ | |

## Repository structure

```text
docs/                       Course brief and submitted documentation
  wireframes/desktop/       Desktop wireframes
  wireframes/mobile/        Mobile wireframes
  mockups/desktop/          Desktop mockups
  mockups/mobile/           Mobile mockups
  reports/                  Reports and other submissions
frontend/
  pages/                    Static HTML pages (open these in a browser)
  snippets/                 Shared layout fragments (app shell, public header/menu/footer)
  src/styles/input.css      Tailwind entry: theme tokens, dark mode, component classes
  assets/css/               Generated Tailwind CSS (not committed)
  assets/icons/             SVG icons
  assets/favicon.svg        Site icon
backend/                    Reserved for mock data / API integration (Phase 4)
tests/                      Test cases and manual test evidence
deployment/                 Environment and deployment instructions
```

## Pages

| Page | File | Course requirement |
| ---- | ---- | ------------------ |
| Landing | `frontend/pages/index.html` | Landing / Home |
| Log in | `frontend/pages/login.html` | Authentication |
| Register | `frontend/pages/register.html` | Authentication |
| Dashboard | `frontend/pages/dashboard.html` | Dashboard with charts |
| Exercise library | `frontend/pages/exercises.html` | List / Overview |
| Exercise details | `frontend/pages/exercise.html` | Detail |
| Routine builder | `frontend/pages/routine-builder.html` | Form |
| Active workout | `frontend/pages/workout.html` | Extra page |
| Profile & settings | `frontend/pages/profile.html` | Extra page |
| Design system | `frontend/pages/design-system.html` | Supporting reference (tokens and components) |

Every page has desktop and mobile layouts. Dark mode follows the device setting.

## Theme

The **Volt Rush** look: near-black and volt green, Kanit italic headings, Inter
body text. Colours, radii and fonts are defined once as design tokens in
`frontend/src/styles/input.css` and used through Tailwind utilities
(`bg-primary`, `text-ink-muted`, …) and shared component classes
(`btn`, `card`, `field`, `badge`, …). Avoid hard-coded hex colours in pages.

## Setup and running

Prerequisite: a current Node.js LTS release with npm. From the repository root:

```sh
npm ci
npm run dev
```

`npm run dev` watches the HTML and CSS sources and rebuilds
`frontend/assets/css/tailwind.css`; it does not start a web server. Open any
file in `frontend/pages/` in a browser (or use VS Code's Live Server).

For a one-off minified build:

```sh
npm run build
```

The generated CSS is not committed, so run a build after cloning.

**Backend / mock data:** none in Phase 2. See [backend/README.md](backend/README.md).

## Accessibility checklist

Before submitting, check each page with Lighthouse, the axe DevTools extension,
and a keyboard-only walk-through, at both mobile and desktop widths.

## Documents

- [Course project brief](docs/SW302_Course%20ProjectFall2026.docx.pdf)
- [Environment setup](deployment/README.md)
- [Backend scope](backend/README.md)
- [Testing scope](tests/README.md)
