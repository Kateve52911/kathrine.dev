# Kathrine.dev

My personal portfolio site — a single-page site built to showcase my background, skills, and projects as I transition from teaching into frontend development.

**Live site:** [kathrine.dev](https://kathrine-dev.vercel.app) <!-- update with actual URL -->

## About

This portfolio brings together my CV, skills, and project work in one continuously scrolling page, with a fixed header for quick navigation between sections. The CV section is presented as a vertical, alternating timeline covering both my teaching experience and my education.

## Features

- **Fixed header navigation:** jumps to each section on the page via anchor links, rather than separate routes
- **Alternating vertical timeline:** displays work experience and education chronologically, with distinct styling per entry type
- **Categorized skills section:** languages, frameworks, libraries, tools, and key competencies, grouped and displayed as a responsive grid
- **Projects section:** cards linking out to live demos and GitHub repositories
- Built fully typed with TypeScript, with reusable, data-driven components

## Tech Stack

- **Languages:** JavaScript/TypeScript, HTML, CSS
- **Frameworks:** Next.js, React, Tailwind CSS
- **Libraries:** shadcn/ui, Lucide
- **Tools:** Git, GitHub Actions, Figma
- **Code quality:** ESLint, Prettier

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: header, footer, fonts
│   ├── page.tsx            # Homepage — assembles all sections
│   └── globals.css
├── components/
│   ├── sections/            # About, Skills, Projects section wrappers
│   ├── timeline/             # Timeline, TimelineRow, TimelineCard
│   ├── projects/             # ProjectCard, ProjectList
│   └── ui/                   # shadcn primitives, Header, Footer, Hero
├── data/
│   ├── professionalJourney.ts  # Experience + education timeline data
│   ├── skills.ts                # Categorized skills data
│   └── projects.ts
├── schemas/                  # Shared TypeScript types
└── lib/
    └── utils.ts
```

## Getting Started

### Requirements

- Node.js (version 18 or higher)
- npm

### Install

```bash
git clone https://github.com/Kateve52911/kathrine.dev.git
cd kathrine.dev
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
