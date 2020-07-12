import React, { FC } from 'react';
import { TechStack } from 'types/projects';
import NewTabLink from 'components/utilities/NewTabLink';

type TechStackProps = {
  stack: TechStack;
};

const TechStackCard: FC<TechStackProps> = ({ stack }) => (
  <div className="container flex-col p-4 bg-blue-200 border border-white dark:bg-gray-700 bg-texture dark:border-gray-700 flex-center">
    <h3 className="text-xl text-gray-900 dark:text-gray-100">Tech Stack</h3>
    <div className="flex-wrap flex-center">
      {stack.map(({ name, url }) => (
        <NewTabLink
          key={name}
          href={url}
          className="relative z-20 px-4 py-2 m-1 font-light text-gray-800 underline bg-white border border-white rounded dark:border-gray-700 dark:text-gray-200 dark:bg-gray-800 hover:bg-indigo-200 dark-hover:bg-indigo-800 transition duration-150 hover:no-underline"
        >
          {name}
        </NewTabLink>
      ))}
    </div>
  </div>
);

export default TechStackCard;
