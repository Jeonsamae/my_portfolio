import {
  SiNextdotjs,
  SiDjango,
  SiTypescript,
  SiRedux,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiDocker,
} from 'react-icons/si';
import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiLayers,
  FiZap,
  FiCode,
} from 'react-icons/fi';

export const skills = [
  { icon: SiReact, name: 'React', color: '#61DAFB', category: 'Frontend' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#000000', darkColor: '#ffffff', category: 'Frontend' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', category: 'Frontend' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#38BDF8', category: 'Frontend' },
  { icon: SiRedux, name: 'Redux', color: '#A78BFA', category: 'Frontend' },
  { icon: SiDjango, name: 'Django', color: '#44B78B', category: 'Backend' },
  { icon: SiPython, name: 'Python', color: '#FFD43B', category: 'Backend' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#699eca', category: 'Database' },
  { icon: SiGit, name: 'Git', color: '#F05032', category: 'Tools' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED', category: 'Tools' },
];

export const services = [
  {
    icon: FiMonitor,
    title: 'Frontend Development',
    description: 'Building responsive, pixel-perfect UIs with React, Next.js, and Tailwind CSS.',
    gradient: 'from-pink-500/10 to-rose-500/10',
    border: 'border-pink-500/20',
    iconColor: 'text-pink-500',
  },
  {
    icon: FiServer,
    title: 'Backend Development',
    description: 'Designing robust REST APIs and server-side systems with Django and Python.',
    gradient: 'from-fuchsia-500/10 to-purple-500/10',
    border: 'border-fuchsia-500/20',
    iconColor: 'text-fuchsia-500',
  },
  {
    icon: FiDatabase,
    title: 'Database Design',
    description: 'Architecting scalable, efficient database schemas with PostgreSQL and Prisma.',
    gradient: 'from-violet-500/10 to-indigo-500/10',
    border: 'border-violet-500/20',
    iconColor: 'text-violet-500',
  },
  {
    icon: FiLayers,
    title: 'Full-Stack Integration',
    description: 'End-to-end web application development that connects every layer seamlessly.',
    gradient: 'from-rose-500/10 to-pink-500/10',
    border: 'border-rose-500/20',
    iconColor: 'text-rose-500',
  },
  {
    icon: FiCode,
    title: 'UI/UX Design',
    description: 'Crafting intuitive, beautiful interfaces that deliver delightful user experiences.',
    gradient: 'from-pink-500/10 to-fuchsia-500/10',
    border: 'border-pink-500/20',
    iconColor: 'text-pink-500',
  },
  {
    icon: FiZap,
    title: 'Performance Optimization',
    description: 'Fine-tuning web apps for speed, scalability, and SEO best practices.',
    gradient: 'from-amber-500/10 to-orange-500/10',
    border: 'border-amber-500/20',
    iconColor: 'text-amber-500',
  },
];

export const projects = [
  {
    title: 'EmpowerLawPH – Legal Research Platform',
    description:
      'A full-stack legal research platform built with Next.js and Django, designed to streamline access to Philippine case law, statutes, and rules. Features advanced search, structured legal content rendering, and a modern Tailwind-powered UI for efficient legal research workflows.',
    tech: ['Next.js', 'Django', 'Python', 'Tailwind CSS'],
    gradient: 'from-pink-500/20 to-rose-500/20',
    accentColor: 'text-pink-500',
    image: '/images/empowerlawph.png',
    github: '#',
    link: 'https://staging02.innodata.com/empowerlawph/home',
  },
  {
    title: 'Hapi Humanist – Client Website',
    description:
      'A live production website developed for Hapi Humanist using WordPress and PHP, deployed on GoDaddy hosting. Designed and customized to support advocacy campaigns, organizational updates, and public engagement with a scalable MySQL-backed content management system.',
    tech: ['WordPress', 'PHP', 'MySQL', 'GoDaddy Hosting'],
    gradient: 'from-purple-500/20 to-indigo-500/20',
    accentColor: 'text-purple-500',
    image: '/images/hapi.jpg',
    github: '#',
    link: 'https://hapihumanist.org/',
  },
  {
    title: 'PeraLog - Budget Management App',
    description:
      'A full-stack personal finance management system with secure authentication, JWT-based sessions, and PostgreSQL database integration. Users can track income, expenses, and manage budgets with a clean and responsive UI deployed on Vercel.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL (Neon)', 'JWT'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accentColor: 'text-emerald-500',
    image: '/images/logo_peralog.png',
    github: 'https://github.com/Jeonsamae/budget-app',
    link: 'https://peralog-lissadev.vercel.app',
  },
  {
    title: 'Car Rental App',
    description:
      'A modern car rental web application that allows users to browse available vehicles, make reservations, and manage bookings. Features an intuitive search and filter system, booking management, and a clean responsive UI.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    gradient: 'from-sky-500/20 to-blue-500/20',
    accentColor: 'text-sky-500',
    image: '/images/car-rental-pic.png',
    github: 'https://github.com/Jeonsamae/car-rental-app',
    link: 'https://car-rental-app-lissa-dev.vercel.app/',
  },
];

export const experiences = [
  {
    role: 'Intern',
    company: 'Innodata Knowledge Services, Inc.',
    type: 'Internship',
    period: 'Feb 2025 – Jul 2025',
    duration: '6 mos',
  },
  {
    role: 'Web Developer',
    company: 'Humanist Alliance Philippines, International',
    type: 'Part-time',
    period: 'Jul 2025 – Dec 2025',
    duration: '6 mos',
  },
  {
    role: 'Software Engineer',
    company: 'Innodata Knowledge Services, Inc.',
    type: 'Full-time',
    period: 'Aug 2025 – Present',
    duration: '7 mos',
  },
];

export const trainings = [
  {
    title: 'Basic Web Development Workshop',
    year: '2023',
    organizer: 'Coding Bootcamp in partnership with Google Developer Students Clubs — Cebu Technological University',
    certImage: '/documents/Lissa Mae P. Degamo ZUITT Free Coding Bootcamp (October 21) - Certificate of Participation.pdf',
  },
  {
    title: 'AI Workshop: Creating Agents with Copilot Studio and the Azure AI Foundry Agent Service',
    year: 'Oct 6–7, 2025',
    organizer: 'Microsoft / Azure AI Foundry',
    certImage: '/documents/AI Workshops Certificate - Degamo.pdf',
  },
];
