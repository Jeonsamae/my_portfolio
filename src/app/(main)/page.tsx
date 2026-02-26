'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
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
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiDownload,
  FiArrowDown,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Reusable Section Wrapper ─────────────────────────────────────────────────

function SectionWrapper({
  id,
  children,
  className = '',
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        className="py-24 px-6 max-w-7xl mx-auto"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={stagger}
      >
        {children}
      </motion.div>
    </section>
  );
}

// ─── Section Title ────────────────────────────────────────────────────────────

function SectionTitle({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-16">
      <motion.span
        variants={fadeUp}
        className="inline-block text-xs font-bold tracking-widest text-pink-500 dark:text-pink-400 uppercase mb-3"
      >
        {label}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-gray-500 dark:text-white/40 text-lg max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={fadeUp}
        className="mt-5 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-500"
      />
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const skills = [
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

const projects = [
  {
    title: 'AI-Powered RAG System',
    description:
      'An intelligent retrieval-augmented generation system that enhances LLM responses with domain-specific knowledge using vector embeddings.',
    tech: ['Next.js', 'Python', 'PostgreSQL', 'AI/RAG'],
    gradient: 'from-pink-500/20 to-rose-500/20',
    accentColor: 'text-pink-500',
    github: '#',
    link: '#',
  },
  {
    title: 'Full-Stack E-Commerce',
    description:
      'A modern e-commerce platform with real-time inventory management, payment processing, and an intuitive admin dashboard.',
    tech: ['Next.js', 'Django', 'TypeScript', 'Redux'],
    gradient: 'from-fuchsia-500/20 to-pink-500/20',
    accentColor: 'text-fuchsia-500',
    github: '#',
    link: '#',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative project management tool with real-time updates, role-based access, and rich analytics dashboards.',
    tech: ['Next.js', 'Django', 'PostgreSQL', 'TypeScript'],
    gradient: 'from-rose-500/20 to-fuchsia-500/20',
    accentColor: 'text-rose-500',
    github: '#',
    link: '#',
  },
];

// ─── Projects Carousel ────────────────────────────────────────────────────────

function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === current) return;
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
    },
    [current]
  );

  const prev = () => goTo((current - 1 + projects.length) % projects.length);
  const next = () => goTo((current + 1) % projects.length);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? '55%' : '-55%', opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-55%' : '55%', opacity: 0, scale: 0.96 }),
  };

  const project = projects[current];

  return (
    <div>
      {/* Card */}
      <div className="relative overflow-hidden rounded-3xl">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="group flex flex-col lg:flex-row rounded-3xl overflow-hidden bg-white border border-gray-200 dark:bg-white/[0.03] dark:border-white/10 shadow-sm dark:shadow-none min-h-[420px]">

              {/* Visual panel */}
              <div className={`lg:w-5/12 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden min-h-[220px] lg:min-h-0`}>
                <span className="text-[clamp(6rem,14vw,11rem)] font-black text-gray-900/[0.06] dark:text-white/[0.05] select-none leading-none">
                  {String(current + 1).padStart(2, '0')}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5 backdrop-blur-sm">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/30 text-white text-sm font-medium transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <FiGithub size={16} /> View Code
                  </a>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-pink-50 transition-all duration-200"
                    aria-label="Live demo"
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>

              {/* Content panel */}
              <div className="flex-1 flex flex-col p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <span className={`text-xs font-bold tracking-widest uppercase ${project.accentColor}`}>
                    Featured Project
                  </span>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
                  <span className="text-xs text-gray-400 dark:text-white/25 font-mono tabular-nums">
                    {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-500 dark:text-white/50 leading-relaxed flex-1 mb-8 text-base lg:text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs font-mono bg-gray-100 border border-gray-200 text-gray-500 dark:bg-white/5 dark:border-white/10 dark:text-white/40 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/15 text-gray-600 dark:text-white/60 hover:border-pink-400 dark:hover:border-pink-500/40 hover:text-pink-600 dark:hover:text-pink-400 text-sm font-medium transition-all duration-200"
                  >
                    <FiGithub size={14} /> GitHub
                  </a>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105 transition-all duration-300"
                  >
                    <FiExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation bar */}
      <div className="flex items-center justify-between mt-8">
        {/* Pill dots */}
        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 h-1.5 bg-gradient-to-r from-pink-500 to-fuchsia-500'
                  : 'w-1.5 h-1.5 bg-gray-300 dark:bg-white/20 hover:bg-pink-400 dark:hover:bg-pink-400'
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            className="p-3 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/50 hover:border-pink-400 dark:hover:border-pink-500/40 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-200"
          >
            <FiChevronLeft size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-200"
          >
            <FiChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-[#080508] min-h-screen overflow-x-hidden transition-colors duration-300">

      {/* ════════════════════════════════════════ HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 right-0 w-[900px] h-[900px] bg-pink-400/8 dark:bg-pink-500/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -left-20 w-[700px] h-[700px] bg-fuchsia-400/8 dark:bg-fuchsia-500/8 rounded-full blur-[120px]" />
          {/* Light mode grid */}
          <div
            className="absolute inset-0 opacity-[0.04] dark:hidden"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          {/* Dark mode grid */}
          <div
            className="absolute inset-0 opacity-[0.025] hidden dark:block"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            {/* Left: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex-1 min-w-0 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-600 dark:text-pink-400 text-sm font-medium mb-8"
              >
                <span className="w-1.5 h-1.5 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse" />
                Open to opportunities
              </motion.div>

              {/* Name */}
              <motion.div variants={fadeUp} className="mb-6">
                <p className="text-xs font-mono text-gray-400 dark:text-white/25 tracking-[0.25em] uppercase mb-3">
                  Hi there, I&apos;m
                </p>
                <h1 className="text-[clamp(3.5rem,10vw,6.5rem)] font-black leading-[0.88] tracking-tight text-gray-900 dark:text-white">
                  LISSA
                  <br />
                  <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent">
                    MAE.
                  </span>
                </h1>
              </motion.div>

              {/* Role */}
              <motion.p
                variants={fadeUp}
                className="text-base lg:text-lg text-gray-500 dark:text-white/50 font-medium mb-5"
              >
                Software Engineer&nbsp;
                <span className="text-gray-300 dark:text-white/20">·</span>&nbsp;
                Full-Stack Developer&nbsp;
                <span className="text-gray-300 dark:text-white/20">·</span>&nbsp;
                UI/UX Designer
              </motion.p>

              {/* Bio */}
              <motion.p
                variants={fadeUp}
                className="text-gray-500 dark:text-white/40 text-base lg:text-lg max-w-lg leading-relaxed mb-10 mx-auto lg:mx-0"
              >
                I build scalable web applications with modern technologies.
                Passionate about clean code, great UX, and AI-powered solutions.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
              >
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-sm font-semibold hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300"
                >
                  <FiDownload size={15} />
                  Download CV
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-300 dark:border-white/15 text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:border-pink-300 dark:hover:border-pink-500/30 text-sm font-semibold transition-all duration-300 hover:scale-105"
                >
                  Let&apos;s Talk
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 justify-center lg:justify-start"
              >
                <span className="text-[10px] font-mono text-gray-400 dark:text-white/25 tracking-widest uppercase">
                  Find me on
                </span>
                <div className="w-10 h-px bg-gray-200 dark:bg-white/10" />
                {[
                  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
                  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: FiMail, href: 'mailto:youremail@example.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/50 hover:border-pink-400 dark:hover:border-pink-500/40 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Image card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
              className="relative flex-shrink-0 w-72 sm:w-80 lg:w-[420px]"
            >
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-400/25 to-fuchsia-500/25 rounded-3xl blur-3xl" />

              {/* Gradient-border card */}
              <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-pink-500/70 via-fuchsia-500/40 to-transparent">
                <div className="relative rounded-[22px] overflow-hidden bg-gray-200 dark:bg-[#120912]">
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src="/images/profile_pic - Edited.png"
                      alt="Lissa Mae P. Degamo"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Bottom name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-white font-bold text-sm leading-snug">
                        Lissa Mae P. Degamo
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">Software Engineer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating chip: Available */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#1c0f1c] border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-black/50 whitespace-nowrap"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-gray-900 dark:text-white">Available for Work</span>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() =>
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 dark:text-white/25 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200 cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <FiArrowDown size={14} />
          </motion.div>
        </motion.button>
      </section>

      {/* ════════════════════════════════════════ ABOUT */}
      <SectionWrapper id="about">
        <SectionTitle
          label="Who I Am"
          title="About Me"
          subtitle="A passionate developer building meaningful digital experiences"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">

          {/* Bio card — spans 2 cols × 2 rows */}
          <motion.div
            variants={fadeUp}
            className="col-span-2 lg:row-span-2 p-8 rounded-3xl bg-white border border-gray-200 dark:bg-white/5 dark:border-white/10 shadow-sm dark:shadow-none flex flex-col gap-5"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg leading-none">✦</span>
            </div>
            <p className="text-gray-600 dark:text-white/60 text-base lg:text-lg leading-relaxed">
              I&apos;m{' '}
              <span className="text-gray-900 dark:text-white font-semibold">
                Lissa Mae P. Degamo
              </span>
              , a Software Engineer with expertise in full-stack web development. I
              specialize in building modern, performant web applications using
              cutting-edge technologies.
            </p>
            <p className="text-gray-600 dark:text-white/60 text-base lg:text-lg leading-relaxed">
              From designing intuitive user interfaces to architecting robust backend
              systems, I bring ideas to life with clean code and thoughtful engineering.
              Especially excited about the intersection of AI and web development.
            </p>
            <div className="flex gap-3 mt-auto pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-pink-300 dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:text-white dark:hover:border-pink-500/30 text-sm transition-all duration-200"
              >
                <FiGithub size={14} /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-pink-300 dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:text-white dark:hover:border-pink-500/30 text-sm transition-all duration-200"
              >
                <FiLinkedin size={14} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Stat: Years */}
          <motion.div
            variants={fadeUp}
            className="p-6 rounded-3xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 dark:border-pink-500/15 flex flex-col justify-between"
          >
            <div className="text-4xl font-black text-gray-900 dark:text-white">3+</div>
            <div className="text-sm text-gray-500 dark:text-white/50 mt-2">Years Experience</div>
          </motion.div>

          {/* Stat: Projects */}
          <motion.div
            variants={fadeUp}
            className="p-6 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 border border-fuchsia-500/20 dark:border-fuchsia-500/15 flex flex-col justify-between"
          >
            <div className="text-4xl font-black text-gray-900 dark:text-white">20+</div>
            <div className="text-sm text-gray-500 dark:text-white/50 mt-2">Projects Completed</div>
          </motion.div>

          {/* Status: Available */}
          <motion.div
            variants={fadeUp}
            className="p-6 rounded-3xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 dark:border-rose-500/15 flex items-center gap-4"
          >
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
            <div>
              <div className="text-sm font-bold text-gray-900 dark:text-white">Available</div>
              <div className="text-xs text-gray-500 dark:text-white/40 mt-0.5">for opportunities</div>
            </div>
          </motion.div>

          {/* Stat: Commitment */}
          <motion.div
            variants={fadeUp}
            className="p-6 rounded-3xl bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 border border-pink-500/20 dark:border-pink-500/15 flex flex-col justify-between"
          >
            <div className="text-4xl font-black text-gray-900 dark:text-white">100%</div>
            <div className="text-sm text-gray-500 dark:text-white/50 mt-2">Commitment</div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ════════════════════════════════════════ SKILLS */}
      <SectionWrapper
        id="skills"
        className="border-y border-gray-200 dark:border-white/5"
      >
        <SectionTitle
          label="What I Know"
          title="Tech Stack"
          subtitle="Technologies I use to build great products"
        />

        {/* Marquee row 1 */}
        <div className="relative overflow-hidden mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gray-50 dark:from-[#080508] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gray-50 dark:from-[#080508] to-transparent pointer-events-none" />
          <div className="flex animate-marquee gap-4">
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center gap-2.5 px-6 py-5 rounded-2xl bg-white border border-gray-200 dark:bg-white/5 dark:border-white/10 w-32 hover:border-pink-300 dark:hover:border-pink-500/30 hover:shadow-md dark:hover:shadow-none transition-all duration-200 group"
              >
                <skill.icon
                  size={30}
                  style={{ color: skill.color }}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                <span className="text-xs text-gray-600 dark:text-white/60 font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee row 2 (reversed) */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gray-50 dark:from-[#080508] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gray-50 dark:from-[#080508] to-transparent pointer-events-none" />
          <div className="flex animate-marquee-reverse gap-4">
            {[...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center gap-2.5 px-6 py-5 rounded-2xl bg-white border border-gray-200 dark:bg-white/5 dark:border-white/10 w-32 hover:border-pink-300 dark:hover:border-pink-500/30 hover:shadow-md dark:hover:shadow-none transition-all duration-200 group"
              >
                <skill.icon
                  size={30}
                  style={{ color: skill.color }}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                <span className="text-xs text-gray-600 dark:text-white/60 font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ════════════════════════════════════════ PROJECTS */}
      <SectionWrapper id="projects">
        <SectionTitle
          label="My Work"
          title="Featured Projects"
          subtitle="A selection of projects I've built — update these with your real work!"
        />

        <motion.div variants={fadeUp}>
          <ProjectsCarousel />
        </motion.div>
      </SectionWrapper>

      {/* ════════════════════════════════════════ CONTACT */}
      <SectionWrapper
        id="contact"
        className="border-t border-gray-200 dark:border-white/5"
      >
        <motion.div variants={fadeUp} className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden">
          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-fuchsia-500/8 to-rose-500/10 dark:from-pink-500/15 dark:via-fuchsia-500/12 dark:to-rose-500/15 border border-pink-500/20 dark:border-pink-500/15 rounded-3xl" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-fuchsia-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative p-12 text-center">
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-bold tracking-widest text-pink-500 dark:text-pink-400 uppercase mb-4"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Let&apos;s Work Together
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-500 dark:text-white/50 text-lg mb-10 leading-relaxed max-w-lg mx-auto"
            >
              I&apos;m currently open to new opportunities. Whether you have a project in
              mind, a question, or just want to say hi — my inbox is always open!
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="mailto:youremail@example.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300"
            >
              <FiMail size={20} />
              Say Hello
            </motion.a>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center gap-4 mt-10"
            >
              {[
                { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:youremail@example.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 border border-gray-200 text-gray-600 hover:text-pink-600 hover:border-pink-300 dark:bg-white/5 dark:border-white/10 dark:text-white/50 dark:hover:text-pink-400 dark:hover:border-pink-500/30 text-sm transition-all duration-200 backdrop-blur-sm"
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* ════════════════════════════════════════ FOOTER */}
      <footer className="border-t border-gray-200 dark:border-white/5 py-8 text-center text-gray-400 dark:text-white/20 text-sm">
        <p>
          © {new Date().getFullYear()} Lissa Mae P. Degamo. Built with Next.js &amp;
          Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
