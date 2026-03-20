'use client';

import { SectionWrapper, SectionTitle } from '@/components/ui/SectionWrapper';
import { skills } from '@/data/portfolio';

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="border-y border-gray-200 dark:border-white/5">
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
  );
}
