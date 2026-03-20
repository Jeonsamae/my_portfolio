'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { fadeUp } from '@/lib/animations';
import { SectionWrapper, SectionTitle } from '@/components/ui/SectionWrapper';
import { projects } from '@/data/portfolio';

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
                <div className="relative w-full h-full">
                  {project.image ? (
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  ) : (
                    <span className="text-[clamp(6rem,14vw,11rem)] font-black text-gray-900/[0.06] dark:text-white/[0.05] select-none leading-none">
                      {String(current + 1).padStart(2, '0')}
                    </span>
                  )}
                </div>
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

export default function ProjectsSection() {
  return (
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
  );
}
