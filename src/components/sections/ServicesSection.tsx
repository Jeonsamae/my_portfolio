'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { SectionWrapper, SectionTitle } from '@/components/ui/SectionWrapper';
import { services } from '@/data/portfolio';

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" className="border-t border-gray-200 dark:border-white/5">
      <SectionTitle
        label="What I Do"
        title="Services Offered"
        subtitle="From idea to deployment — I handle it all"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            custom={i}
            className={`p-7 rounded-3xl bg-gradient-to-br ${service.gradient} border ${service.border} dark:border-white/10 group hover:shadow-lg dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300`}
          >
            <div
              className={`w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center mb-5 ${service.iconColor} group-hover:scale-110 transition-transform duration-200`}
            >
              <service.icon size={22} />
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
            <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
