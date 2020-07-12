import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Gist from 'react-gist';
import { Skill } from 'types/skills';
import { SKILLS } from 'constants/skills';
import Footer from 'slides/Footer';
import Header from 'slides/Header';
import DarkModeToggle from 'components/DarkModeToggle';
import Slide from 'components/Slide';
import SkillParticles from 'components/SkillParticles';
import Waves from 'components/Waves';
import Bubbles from 'components/Bubbles';
import Icon from 'components/Icon';
import SkillQuote from 'components/skills/SkillQuote';
import StatsTable from 'components/skills/StatsTable';

type SkillPageProps = {
  skill: Skill;
};

const SkillPage: FC<SkillPageProps> = ({
  skill: { name, icon, quote, description, stats, gist },
}) => (
  <>
    <Header links={[{ display: 'Back to home', location: '/' }]} />
    <DarkModeToggle />
    <Slide sky top={false}>
      <div className="relative z-10 flex flex-col items-center w-full">
        <figure className="flex flex-col items-center p-4 mt-4 bg-gray-100 rounded shadow dark:bg-gray-900 bg-opacity-50 backdrop-blur-3 md:flex-row">
          <Icon className="w-24 h-24 mr-4" name={icon} />
          <figcaption className="text-6xl tracking-wide text-black dark:text-white">
            {name}
          </figcaption>
        </figure>
        <main className="flex flex-col items-center w-full mt-2 bg-gray-100 border dark:bg-gray-900 md:w-5/6 bg-opacity-25 backdrop-blur-3">
          <SkillQuote quote={quote} />
          <article className="justify-center mb-4 grid grid-cols-1 md:grid-cols-2">
            {stats && <StatsTable stats={stats} />}
            <p className="px-4 pt-4 m-2 text-lg tracking-wide text-gray-800 border-t border-l-0 border-gray-500 max-w-text dark:text-gray-200 md:border-t-0 md:border-l">
              {description}
            </p>
          </article>
          {gist && (
            <section className="w-full p-4 mt-4 border-t border-gray-500 md:w-5/6">
              <Gist id={gist} />
            </section>
          )}
        </main>
      </div>
      <SkillParticles icon={icon} />
      <Bubbles />
      <Waves bottom />
    </Slide>
    <Footer />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(SKILLS).map((skill) => ({ params: { id: skill } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;
  const skill = SKILLS[id as string];

  return { props: { skill } };
};

export default SkillPage;
