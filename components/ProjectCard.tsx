import React, { FC } from 'react';
import GithubCorner from 'react-github-corner';
import { Project } from 'types/projects';
import { useDarkMode } from 'contexts/DarkModeContext';
import NewTabLink from 'components/utilities/NewTabLink';
import TechStackCard from 'components/projects/TechStackCard';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: FC<ProjectCardProps> = ({
  project: { title, description, url, github, stack },
}) => {
  const { isDarkMode } = useDarkMode();
  return (
    <article className="container relative z-10 flex-col px-16 py-2 my-4 bg-white rounded bg-opacity-50 dark:bg-gray-600 backdrop-blur-3 flex-center">
      <NewTabLink
        className="container flex-col px-16 py-2 my-4 bg-white rounded bg-opacity-50 dark:bg-gray-700 backdrop-blur-3 transition-shadow duration-300 hover:shadow-2xl flex-center"
        href={url}
      >
        <h2 className="text-4xl text-center text-black underline dark:text-white">
          {title}
        </h2>
        <span className="p-4 font-light text-center text-gray-900 dark:text-gray-100">
          {description}
        </span>
      </NewTabLink>
      <TechStackCard stack={stack} />
      <GithubCorner
        bannerColor={isDarkMode ? '#000000AA' : '#FFFFFFAA'}
        className="z-10"
        octoColor={isDarkMode ? '#FFFFFFAA' : '#000000AA'}
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel={`Github link for ${title}`}
      />
    </article>
  );
};

export default ProjectCard;
