'use client';

import React from 'react';
import Image from 'next/image';

const MainPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-900 dark:to-gray-800 text-slate-900 dark:text-white px-6 relative">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <Image
            src="/images/profile_pic.JPG"
            alt="Profile"
            width={220}
            height={220}
            className="rounded-full shadow-lg border-4 border-white object-cover"
            priority
          />
        </div>

        <div className="text-center md:text-left space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-teal-500 dark:text-teal-300">Lissa Mae P. Degamo</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300">
            Software Engineer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            Description here
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-teal-500 hover:bg-teal-400 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 dark:hover:bg-gray-300 dark:hover:text-black transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
