'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import { fadeUp, stagger } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 right-0 w-[900px] h-[900px] bg-pink-400/8 dark:bg-pink-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 -left-20 w-[700px] h-[700px] bg-fuchsia-400/8 dark:bg-fuchsia-500/8 rounded-full blur-[120px]" />
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
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-600 dark:text-pink-400 text-sm font-medium mb-8"
            >
              <span className="w-1.5 h-1.5 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse" />
              Open to opportunities
            </motion.div>

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

            <motion.p
              variants={fadeUp}
              className="text-gray-500 dark:text-white/40 text-base lg:text-lg max-w-lg leading-relaxed mb-10 mx-auto lg:mx-0"
            >
              I build scalable web applications with modern technologies.
              Passionate about clean code, great UX, and AI-powered solutions.
            </motion.p>

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

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <span className="text-[10px] font-mono text-gray-400 dark:text-white/25 tracking-widest uppercase">
                Find me on
              </span>
              <div className="w-10 h-px bg-gray-200 dark:bg-white/10" />
              {[
                { icon: FiGithub, href: 'https://github.com/Jeonsamae', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/lissa-mae-degamo-573749386/', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:lissamaedegamo@gmail.com', label: 'Email' },
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
            <div className="absolute -inset-4 bg-gradient-to-br from-pink-400/25 to-fuchsia-500/25 rounded-3xl blur-3xl" />
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
                  <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-white font-bold text-sm leading-snug">Lissa Mae P. Degamo</p>
                    <p className="text-white/50 text-xs mt-0.5">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
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
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 dark:text-white/25 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200 cursor-pointer"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FiArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}
