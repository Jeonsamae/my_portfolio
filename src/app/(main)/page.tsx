'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
        className="inline-block text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3"
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
        className="mt-5 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-teal-400 to-purple-500"
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
    gradient: 'from-teal-500/20 to-cyan-500/20',
    hoverBorder: 'hover:border-teal-500/40',
    github: '#',
    link: '#',
  },
  {
    title: 'Full-Stack E-Commerce',
    description:
      'A modern e-commerce platform with real-time inventory management, payment processing, and an intuitive admin dashboard.',
    tech: ['Next.js', 'Django', 'TypeScript', 'Redux'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    hoverBorder: 'hover:border-purple-500/40',
    github: '#',
    link: '#',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative project management tool with real-time updates, role-based access, and rich analytics dashboards.',
    tech: ['Next.js', 'Django', 'PostgreSQL', 'TypeScript'],
    gradient: 'from-blue-500/20 to-indigo-500/20',
    hoverBorder: 'hover:border-blue-500/40',
    github: '#',
    link: '#',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-[#050505] min-h-screen overflow-x-hidden transition-colors duration-300">

      {/* ════════════════════════════════════════ HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-teal-400/10 dark:bg-teal-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-500/15 rounded-full blur-3xl" />
          <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-cyan-400/8 dark:bg-cyan-500/10 rounded-full blur-3xl" />
          {/* Light mode grid */}
          <div
            className="absolute inset-0 opacity-[0.05] dark:hidden"
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">

          {/* Left: Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-sm font-medium mb-8"
            >
              <span className="w-1.5 h-1.5 bg-teal-500 dark:bg-teal-400 rounded-full animate-pulse" />
              Open to opportunities
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-white"
            >
              Hi, I&apos;m{' '}
              <br className="lg:hidden" />
              <span className="bg-gradient-to-r from-teal-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Lissa Mae
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg lg:text-xl text-gray-500 dark:text-white/50 font-medium mb-6"
            >
              Software Engineer&nbsp;
              <span className="text-gray-300 dark:text-white/20">·</span>&nbsp;
              Full-Stack Developer&nbsp;
              <span className="text-gray-300 dark:text-white/20">·</span>&nbsp;
              UI/UX Designer
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-500 dark:text-white/40 text-base lg:text-lg max-w-lg mb-10 leading-relaxed"
            >
              I build scalable web applications with modern technologies.
              Passionate about clean code, great UX, and AI-powered solutions.
            </motion.p>

            {/* Tech tags */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10"
            >
              {['Next.js', 'Django', 'TypeScript', 'Redux', 'PostgreSQL', 'AI/RAG'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-gray-200/80 border border-gray-300 text-gray-600 dark:bg-white/5 dark:border-white/10 dark:text-white/50 hover:border-teal-500/50 hover:text-teal-600 dark:hover:text-teal-400 rounded-md transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold hover:shadow-xl hover:shadow-teal-500/25 hover:scale-105 transition-all duration-300"
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
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-300 dark:border-white/15 text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-white/30 text-sm font-semibold transition-all duration-300 hover:scale-105"
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            <div
              className="absolute -inset-6 rounded-full border border-teal-500/20 animate-spin"
              style={{ animationDuration: '12s' }}
            />
            <div
              className="absolute -inset-12 rounded-full border border-purple-500/10 animate-spin"
              style={{ animationDuration: '20s', animationDirection: 'reverse' }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/20 to-purple-500/20 blur-2xl" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-64 h-64 lg:w-80 lg:h-80"
            >
              <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-white/10">
                <Image
                  src="/images/profile_pic.JPG"
                  alt="Lissa Mae P. Degamo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() =>
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 dark:text-white/25 hover:text-gray-600 dark:hover:text-white/50 transition-colors duration-200 cursor-pointer"
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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio */}
          <motion.div variants={fadeUp} className="space-y-5">
            <p className="text-gray-600 dark:text-white/60 text-lg leading-relaxed">
              I&apos;m{' '}
              <span className="text-gray-900 dark:text-white font-semibold">
                Lissa Mae P. Degamo
              </span>
              , a Software Engineer with expertise in full-stack web development. I
              specialize in building modern, performant web applications using
              cutting-edge technologies.
            </p>
            <p className="text-gray-600 dark:text-white/60 text-lg leading-relaxed">
              From designing intuitive user interfaces to architecting robust backend
              systems, I bring ideas to life with clean code and thoughtful engineering.
              I&apos;m especially excited about the intersection of AI and web development.
            </p>
            <p className="text-gray-600 dark:text-white/60 text-lg leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring the latest in tech,
              contributing to open-source, or refining my UI/UX design skills.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:text-white dark:hover:border-white/20 text-sm transition-all duration-200"
              >
                <FiGithub size={15} /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:text-white dark:hover:border-white/20 text-sm transition-all duration-200"
              >
                <FiLinkedin size={15} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            {[
              {
                number: '3+',
                label: 'Years Experience',
                from: 'from-teal-500/20',
                to: 'to-cyan-500/20',
                border: 'border-teal-500/20',
              },
              {
                number: '20+',
                label: 'Projects Completed',
                from: 'from-purple-500/20',
                to: 'to-pink-500/20',
                border: 'border-purple-500/20',
              },
              {
                number: '10+',
                label: 'Technologies',
                from: 'from-blue-500/20',
                to: 'to-indigo-500/20',
                border: 'border-blue-500/20',
              },
              {
                number: '100%',
                label: 'Commitment',
                from: 'from-amber-500/20',
                to: 'to-orange-500/20',
                border: 'border-amber-500/20',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`p-6 rounded-2xl bg-gradient-to-br ${stat.from} ${stat.to} border ${stat.border}`}
              >
                <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 dark:text-white/50">{stat.label}</div>
              </div>
            ))}
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

        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.06, y: -4 }}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-white/[0.08] transition-all duration-300 cursor-default shadow-sm dark:shadow-none"
            >
              <skill.icon
                size={36}
                style={{ color: skill.color }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 dark:text-white/60 dark:group-hover:text-white/90 font-medium transition-colors duration-200">
                {skill.name}
              </span>
              <span className="text-[10px] text-gray-400 dark:text-white/25 tracking-wide uppercase">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ════════════════════════════════════════ PROJECTS */}
      <SectionWrapper id="projects">
        <SectionTitle
          label="My Work"
          title="Featured Projects"
          subtitle="A selection of projects I've built — update these with your real work!"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8 }}
              className={`group flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200 ${project.hoverBorder} dark:bg-white/5 dark:border-white/10 transition-all duration-500 shadow-sm dark:shadow-none`}
            >
              {/* Card header */}
              <div
                className={`h-44 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}
              >
                <span className="text-7xl font-black text-gray-200 dark:text-white/10 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <FiGithub size={18} />
                  </a>
                  <a
                    href={project.link}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200"
                    aria-label="Live demo"
                  >
                    <FiExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono bg-gray-100 border border-gray-200 text-gray-500 dark:bg-white/5 dark:border-white/10 dark:text-white/40 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ════════════════════════════════════════ CONTACT */}
      <SectionWrapper
        id="contact"
        className="border-t border-gray-200 dark:border-white/5"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3"
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
            className="text-gray-500 dark:text-white/40 text-lg mb-10 leading-relaxed"
          >
            I&apos;m currently open to new opportunities. Whether you have a project in
            mind, a question, or just want to say hi — my inbox is always open!
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="mailto:youremail@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-teal-500/25 hover:scale-105 transition-all duration-300"
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
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 dark:bg-white/5 dark:border-white/10 dark:text-white/50 dark:hover:text-white dark:hover:border-white/25 text-sm transition-all duration-200"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </motion.div>
        </div>
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
