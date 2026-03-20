'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/animations';

export function SectionWrapper({
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

export function SectionTitle({
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
