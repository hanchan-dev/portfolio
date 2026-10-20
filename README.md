# Portfolio — Handika Chandra Pratama

Personal portfolio built with React 19, Vite, Tailwind CSS v4, Framer Motion, and AOS.
Live: https://hanchan-dev.github.io/portfolio

## Scripts

```bash
npm install
npm run dev      # dev server
npm run lint
npm run build
npm run deploy   # build + publish dist/ to GitHub Pages
```

## Structure

```
public/cv/              CV files: {en|id|jp}-cv-handika-chandra-pratama.pdf
src/
  assets/icons/         small icons (socials, skills, flags)
  assets/images/        photos & screenshots (webp)
  data/                 content: socials, skills, languages, projects, achievements, cv
  hooks/                useDarkMode, useActiveSection (navbar scroll-spy)
  components/
    layout/             Navbar, Footer
    sections/           Hero, About, Skills, Languages, Projects, Achievements, Contacts
    ui/                 Section, SectionHeading, IconCardGrid, CvDownloadButton
```

## Updating content

- **Projects / achievements / skills**: edit the arrays in `src/data/`.
- **New CV language**: put the PDF in `public/cv/` (e.g. `id-cv-handika-chandra-pratama.pdf`),
  then set `available: true` for that language in `src/data/cv.js`.
- **Images**: prefer `.webp`, max ~1000px wide for cards and ~160px for icons.
