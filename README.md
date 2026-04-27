# Taylor Beeston Portfolio

Personal portfolio and resume site, currently tailored toward platform engineering, production systems, and infrastructure-adjacent roles.

## Current focus

This branch positions Taylor for platform/infrastructure-adjacent engineering roles:

- Linux/cloud systems
- Distributed-system problem solving
- Storage operations interest and Ceph ramp path
- Automation and scripting
- Metrics/observability mindset
- Performance tuning
- Technical documentation and remote collaboration

## Key files

- `pages/index.tsx` — portfolio landing page copy
- `styles/index.css` — site styling
- `public/resume/index.html` — editable resume source
- `public/resume/TaylorBeeston.pdf` — generated resume PDF

## Local development

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build

```bash
npm run build
npm run start -- --hostname 0.0.0.0 -p 3000
```

## Regenerate resume PDF

```bash
chromium --headless --disable-gpu --no-sandbox \
  --print-to-pdf=public/resume/TaylorBeeston.pdf \
  file://$PWD/public/resume/index.html
```

## Notes

This is an older Next.js project. Builds may emit an ESLint configuration warning due to dependency/tooling age. `next-pwa` may regenerate `public/sw.js` and `public/workbox-*.js` during production builds.
