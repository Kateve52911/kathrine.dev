export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['JavaScript/TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks',
    items: [
      'Bootstrap',
      'Tailwind',
      'React',
      'Next.js',
      'TanStack Router',
      'Vite',
      'Playwright',
      'Vitest',
      'Express',
      'Node.js',
    ],
  },
  {
    category: 'Libraries',
    items: ['shadcn', 'Lucide', 'Zod', 'Zustand'],
  },
  {
    category: 'Technologies',
    items: ['Figma', 'WordPress', 'Swagger/OpenAPI', 'MySQL', 'JWT', 'bcrypt'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub Actions'],
  },
  {
    category: 'Key Competencies',
    items: ['CI/CD', 'TDD', 'Agile/SCRUM', 'User-based development'],
  },
];
