import React, { FC } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect/dist/react';
import NewTabLink from 'components/utilities/NewTabLink';
import Slide from 'components/Slide';
import Clouds from 'components/Clouds';
import SocialMediaLinks from 'components/SocialMediaLinks';
import Me from 'assets/Me.jpg';

const TITLES = [
  'VP of Engineering',
  'Full-stack web dev',
  'Open-source contributor',
  'TypeScript Enthusiast',
  'Rust Evangelist',
  'Front-End Engineer',
  'IT Specialist',
  'Dad',
  'Back-End Engineer',
];

const Splash: FC = () => (
  <Slide link="top" sky top={false}>
    <figure className="absolute z-10 w-full sm:w-1/2">
      <Image
        src={Me}
        className="w-48 h-48 mb-8 ml-2 rounded-full shadow-inner"
        alt="Me"
      />
      <figcaption className="px-8 py-4 rounded-lg backdrop-blur-3">
        <h1 className="text-4xl subpixel-antialiased font-medium tracking-wide text-black dark:text-white">
          Taylor Beeston{' '}
        </h1>
        <h2 className="text-2xl font-light text-gray-800 dark:text-gray-300">
          <Typewriter
            options={{
              strings: TITLES,
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <SocialMediaLinks />
        <NewTabLink
          className="w-24 p-2 mt-4 text-xl text-gray-200 bg-gray-900 rounded dark:text-gray-800 dark:bg-gray-100 flex-center"
          href="/resume/TaylorBeeston.pdf"
        >
          Resume
        </NewTabLink>
      </figcaption>
    </figure>
    <Clouds id="splash-clouds" />
  </Slide>
);

export default Splash;
