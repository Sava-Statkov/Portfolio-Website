# Sava Statkov Portfolio

Premium static-export portfolio built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- `next-themes` for dark/light mode

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The site uses `output: "export"`, so the static build is emitted to `out/`.

## Static hosting

### GitHub Pages

For a project page such as `https://username.github.io/repository-name/`, build with the repository name as the base path:

```bash
NEXT_PUBLIC_BASE_PATH=/repository-name npm run build
```

Publish the generated `out/` directory to GitHub Pages.

If you use a custom domain or user page root, leave `NEXT_PUBLIC_BASE_PATH` unset.

### Vercel

- Framework preset: `Next.js`
- Build command: `npm run build`
- Output directory: `out`

### Netlify

- Build command: `npm run build`
- Publish directory: `out`

## Content updates

All portfolio content is centralized in [data/portfolio.ts](data/portfolio.ts).

Replace the placeholder CV at [public/sava-statkov-cv.pdf](public/sava-statkov-cv.pdf) and update the social links, projects, publications, and experience entries to match your final profile.

npm.cmd run dev
piano-recording.mp3