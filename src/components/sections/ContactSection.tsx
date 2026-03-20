'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import { fadeUp } from '@/lib/animations';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import ContactModal from '@/components/sections/ContactModal';

export default function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SectionWrapper id="contact" className="border-t border-gray-200 dark:border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — heading + CTA */}
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-bold tracking-widest text-pink-500 dark:text-pink-400 uppercase mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Let&apos;s Build<br />
              <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>
            <p className="text-gray-500 dark:text-white/50 text-lg leading-relaxed mb-10">
              Open to new opportunities, collaborations, and freelance projects.
              Drop me a message and let&apos;s create something amazing together.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold text-base hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300"
            >
              <FiMail size={18} />
              Send a Message
            </button>
          </motion.div>

          {/* Right — contact method cards */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            {[
              {
                icon: FiMail,
                label: 'Email',
                value: 'lissamaedegamo@gmail.com',
                href: 'mailto:lissamaedegamo@gmail.com',
                desc: 'Best way to reach me',
              },
              {
                icon: FiGithub,
                label: 'GitHub',
                value: 'github.com/Jeonsamae',
                href: 'https://github.com/Jeonsamae',
                desc: 'Check out my code',
              },
              {
                icon: FiLinkedin,
                label: 'LinkedIn',
                value: 'linkedin.com/in/lissa-mae-degamo',
                href: 'https://www.linkedin.com/in/lissa-mae-degamo-573749386/',
                desc: 'Connect professionally',
              },
            ].map(({ icon: Icon, label, value, href, desc }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-200 dark:bg-white/[0.03] dark:border-white/10 hover:border-pink-300 dark:hover:border-pink-500/30 hover:shadow-md dark:hover:shadow-none transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0 text-pink-500 group-hover:scale-110 transition-transform duration-200">
                  <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-gray-400 dark:text-white/30 font-medium mb-0.5">{desc}</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{label}</div>
                  <div className="text-xs text-gray-400 dark:text-white/40 truncate">{value}</div>
                </div>
                <FiExternalLink size={16} className="text-gray-300 dark:text-white/20 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors flex-shrink-0" />
              </a>
            ))}

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20 dark:border-green-500/15">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Available for Work</div>
                <div className="text-xs text-gray-500 dark:text-white/40 mt-0.5">Open to full-time, part-time &amp; freelance</div>
              </div>
            </div>
          </motion.div>

        </div>
      </SectionWrapper>

      <AnimatePresence>
        {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
