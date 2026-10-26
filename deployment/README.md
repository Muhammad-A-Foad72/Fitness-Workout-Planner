# Environment setup

Use a current Node.js LTS release with npm.

From the repository root:

```sh
npm ci
npm run build
```

During static HTML development, run `npm run dev` to rebuild CSS when source
files change. This is a CSS watcher, not a web server; it allocates no local port.
Open authored HTML files directly in a browser. No backend, environment secrets,
database, or deployment infrastructure is needed for Phase 2.

Generated CSS is excluded from Git. Rebuild before previewing or publishing;
include `frontend/assets/css/tailwind.css` in the published static files.
