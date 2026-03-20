'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiBriefcase,
  FiAward,
  FiCalendar,
  FiX,
  FiExternalLink,
} from 'react-icons/fi';
import { fadeUp } from '@/lib/animations';
import { SectionWrapper, SectionTitle } from '@/components/ui/SectionWrapper';
import { experiences, trainings } from '@/data/portfolio';

function CertModal({
  cert,
  onClose,
}: {
  cert: { title: string; image: string | null };
  onClose: () => void;
}) {
  const isPdf = cert.image?.endsWith('.pdf');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className={`relative w-full bg-white dark:bg-[#1a0a1a] rounded-3xl overflow-hidden shadow-2xl ${isPdf ? 'max-w-3xl' : 'max-w-2xl'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-white/10">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-500/15 to-fuchsia-500/15 border border-pink-500/20 flex items-center justify-center flex-shrink-0 text-pink-500">
              <FiAward size={15} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug line-clamp-1">
              {cert.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 ml-3">
            {cert.image && (
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/50 hover:border-pink-400 dark:hover:border-pink-500/40 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-200"
              >
                <FiExternalLink size={12} /> Open
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 dark:text-white/40 transition-colors"
            >
              <FiX size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={isPdf ? 'p-0' : 'p-6'}>
          {cert.image ? (
            isPdf ? (
              <iframe
                src={cert.image}
                title={cert.title}
                className="w-full rounded-b-3xl"
                style={{ height: '75vh', border: 'none' }}
              />
            ) : (
              <Image
                src={cert.image}
                alt={cert.title}
                width={600}
                height={420}
                className="rounded-xl w-full object-contain"
              />
            )
          ) : (
            <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                <FiAward size={28} />
              </div>
              <p className="text-gray-500 dark:text-white/50 text-sm">
                Certificate coming soon
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AboutSection() {
  const [certModal, setCertModal] = useState<{ title: string; image: string | null } | null>(null);

  return (
    <>
      <SectionWrapper id="about">
        <SectionTitle
          label="Who I Am"
          title="About Me"
          subtitle="A passionate developer building meaningful digital experiences"
        />

        <div className="flex flex-col gap-5">

          {/* Top row: Bio + Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* Bio card */}
            <motion.div
              variants={fadeUp}
              className="p-8 rounded-3xl bg-white border border-gray-200 dark:bg-white/5 dark:border-white/10 shadow-sm dark:shadow-none flex flex-col gap-5"
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
              <div className="flex gap-3 mt-auto pt-2 flex-wrap">
                <a
                  href="https://github.com/Jeonsamae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-pink-300 dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:text-white dark:hover:border-pink-500/30 text-sm transition-all duration-200"
                >
                  <FiGithub size={14} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/lissa-mae-degamo-573749386/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-pink-300 dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:text-white dark:hover:border-pink-500/30 text-sm transition-all duration-200"
                >
                  <FiLinkedin size={14} /> LinkedIn
                </a>
                <a
                  href="mailto:lissamaedegamo@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-pink-300 dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:text-white dark:hover:border-pink-500/30 text-sm transition-all duration-200"
                >
                  <FiMail size={14} /> Email
                </a>
              </div>
            </motion.div>

            {/* Experience card */}
            <motion.div
              variants={fadeUp}
              className="p-8 rounded-3xl bg-white border border-gray-200 dark:bg-white/5 dark:border-white/10 shadow-sm dark:shadow-none flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <FiBriefcase size={18} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Experience</h3>
              </div>

              <div className="flex flex-col gap-5">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative flex gap-4">
                    {i < experiences.length - 1 && (
                      <div className="absolute left-[15px] top-8 bottom-[-20px] w-px bg-gray-100 dark:bg-white/[0.08]" />
                    )}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500/15 to-fuchsia-500/15 border border-pink-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-pink-500" />
                    </div>
                    <div className="flex-1 min-w-0 pb-1">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <p className="font-bold text-gray-900 dark:text-white text-sm">{exp.role}</p>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 flex-shrink-0">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-white/50 mt-0.5 leading-snug">{exp.company}</p>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <FiCalendar size={10} className="text-gray-400 dark:text-white/30 flex-shrink-0" />
                        <span className="text-[11px] text-gray-400 dark:text-white/30">{exp.period}</span>
                        <span className="text-[11px] text-gray-300 dark:text-white/15">·</span>
                        <span className="text-[11px] text-gray-400 dark:text-white/30">{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              variants={fadeUp}
              className="p-6 rounded-3xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 dark:border-pink-500/15 flex flex-col justify-between"
            >
              <div className="text-4xl font-black text-gray-900 dark:text-white">1+</div>
              <div className="text-sm text-gray-500 dark:text-white/50 mt-2">Years Experience</div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="p-6 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 border border-fuchsia-500/20 dark:border-fuchsia-500/15 flex flex-col justify-between"
            >
              <div className="text-4xl font-black text-gray-900 dark:text-white">10+</div>
              <div className="text-sm text-gray-500 dark:text-white/50 mt-2">Projects Completed</div>
            </motion.div>

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

            <motion.div
              variants={fadeUp}
              className="p-6 rounded-3xl bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 border border-pink-500/20 dark:border-pink-500/15 flex flex-col justify-between"
            >
              <div className="text-4xl font-black text-gray-900 dark:text-white">100%</div>
              <div className="text-sm text-gray-500 dark:text-white/50 mt-2">Commitment</div>
            </motion.div>
          </div>

          {/* Trainings & Certifications */}
          <motion.div
            variants={fadeUp}
            className="p-8 rounded-3xl bg-white border border-gray-200 dark:bg-white/5 dark:border-white/10 shadow-sm dark:shadow-none"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <FiAward size={18} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Trainings &amp; Certifications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trainings.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setCertModal({ title: t.title, image: t.certImage })}
                  className="group text-left p-5 rounded-2xl bg-gray-50 border border-gray-200 dark:bg-white/[0.03] dark:border-white/[0.08] hover:border-pink-300 dark:hover:border-pink-500/30 hover:shadow-md dark:hover:shadow-none transition-all duration-200 flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0 text-pink-500 group-hover:scale-110 transition-transform duration-200">
                      <FiAward size={16} />
                    </div>
                    <span className="text-[10px] font-bold tracking-wide text-pink-500 dark:text-pink-400 uppercase px-2 py-1 rounded-full bg-pink-500/10 border border-pink-500/15 flex-shrink-0">
                      {t.year}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug mb-1.5">
                      {t.title}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-white/35 leading-relaxed">
                      {t.organizer}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 mt-auto pt-1 text-pink-500 dark:text-pink-400">
                    <FiExternalLink size={11} />
                    <span className="text-xs font-medium">View Certificate</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

        </div>
      </SectionWrapper>

      <AnimatePresence>
        {certModal && (
          <CertModal cert={certModal} onClose={() => setCertModal(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
