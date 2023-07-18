import React, { FC } from 'react';
import Image from 'next/image';
import Slide from 'components/Slide';
import AboutMeImage from 'assets/AboutMe.jpg';

const AboutMe: FC = () => (
  <Slide
    title="About Me"
    link="about-me"
    extraStyles="min-h-0 sm:min-h-screen pb-4"
  >
    <article className="container justify-center flex-grow min-h-0 sm:min-h-4/5-screen grid grid-cols-1 sm:grid-cols-2">
      <Image
        src={AboutMeImage}
        alt="Me and my family"
        className="relative hidden object-cover object-top w-full h-full rounded-l shadow-inner sm:block"
      />
      <section className="p-4 bg-white rounded-r sm:bg-blue-100 max-w-text dark:bg-gray-800">
        <p className="mb-6 text-xl font-light leading-snug tracking-wide text-gray-800 dark:text-gray-200">
          I am a software engineer, full-stack web developer, and VP of
          Engineering. As a child, I spent my summers in front of a computer. I
          started programming by writing TI-BASIC programs on my calculator to
          help me "cheat" on my high school physics tests. Commanding electrons
          to move the way I want to by writing in arcane languages is my
          identity. I have programmed in a wide range of languages, both
          compiled and interpreted, using many different paradigms and
          methodologies.
        </p>
        <p className="mb-2 text-xl font-light leading-snug tracking-wide text-gray-800 dark:text-gray-200">
          I have an amazing wife, four baby boys, and one little girl! All of my
          kids are under 5 😅.
        </p>
      </section>
    </article>
  </Slide>
);

export default AboutMe;
