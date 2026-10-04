import { TimelineEntry } from '@/schemas/timelineEntry';

export interface CombinedTimelineEntry extends TimelineEntry {
  type: 'experience' | 'education';
}

export const professionalJourney: CombinedTimelineEntry[] = [
  {
    type: 'experience',
    title: 'Teacher',
    organisation: 'Rasta Skole',
    dateRange: 'April 2023 – Present',
    bullets: [
      'Planning and delivering instruction at team and grade level, using OneNote as the primary tool.',
      'Use of digital learning tools in reading instruction, including AskiRaski and iMal.',
      'Systematic relational and environment-building work to foster wellbeing and a positive class culture.',
    ],
  },
  {
    type: 'education',
    title: 'Front-End Development',
    organisation: 'Noroff Education',
    dateRange: 'March 2023 – Present',
    description:
      'Studies in front-end development focused on planning and executing web projects. Built websites for, among others, a research museum, a game store, and a social media platform.',
  },
  {
    type: 'education',
    title: 'Competence for Quality – Mathematics, Grades 1–7',
    organisation: 'Oslo Metropolitan',
    dateRange: 'August 2021 – June 2022',
    description:
      "Further education in mathematics for primary school teachers. The program provided in-depth knowledge of mathematics didactics and insight into students' mathematical thinking and problem-solving strategies.",
  },
  {
    type: 'experience',
    title: 'Teacher',
    organisation: 'Hovinhøgda Skole',
    dateRange: 'August 2019 – April 2023',
    bullets: [
      'Special-needs follow-up for students with individual education plans (IEPs), both academically and socially.',
      'Independent planning and delivery of instruction, including reading courses, math courses, and literacy training.',
      'Conducting assessment tests, development conversations, and parent-teacher meetings.',
      'Active work on class environment and student wellbeing.',
    ],
  },
  {
    type: 'education',
    title: '60 Credits in English',
    organisation: 'Volda University College',
    dateRange: 'August 2019 – June 2021',
    description:
      'One-year program in English covering grammar and lexicology, phonetics, varieties of English, as well as literature, history, and society from various periods.',
  },
  {
    type: 'education',
    title: 'Postgraduate Certificate in Education (PPU), Social Studies',
    organisation: 'Inland Norway University of Applied Sciences',
    dateRange: 'August 2018 – June 2019',
    description:
      'Teacher training program covering pedagogy and subject didactics. Includes 12 weeks of supervised teaching practice across lower and upper secondary school.',
  },
  {
    type: 'experience',
    title: 'Teacher',
    organisation: 'Volla Skole',
    dateRange: 'November 2016 – June 2019',
    bullets: [
      "Delivering lessons according to the teacher's plan, as well as developing own lesson plans when needed.",
      'Responsibility for small and large groups of children in the after-school program, facilitating free play and creative activities.',
      'Shared responsibility for organizing swimming activities across groups.',
    ],
  },
  {
    type: 'education',
    title: 'MA Classics and Ancient History',
    organisation: 'The University of Manchester',
    dateRange: 'September 2015 – September 2016',
    description:
      "Master's degree specializing in classical and ancient history, including studies in Ancient Greek. A 15,000-word dissertation built strong skills in source criticism, academic argumentation, and independent research.",
  },
  {
    type: 'education',
    title: 'BA (Hons) History',
    organisation: 'Manchester Metropolitan University',
    dateRange: 'September 2012 – June 2015',
    description:
      "Bachelor's degree in history with a focus on source-critical analysis, academic writing, and communication. Regular group projects and discussions strengthened collaboration and communication skills.",
  },
  {
    type: 'experience',
    title: 'Teacher',
    organisation: 'Volla Skole',
    dateRange: 'September 2010 – June 2012',
    bullets: [
      'Homework help for students in grades 5–7, two fixed days per week.',
      'Substitute duties as needed.',
    ],
  },
];
