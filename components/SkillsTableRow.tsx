import React, { FC } from 'react';
import Link from 'next/link';
import Icon from 'components/Icon';
import { SkillCategory } from 'types/skills';

const SkillsTableRow: FC<SkillCategory> = ({ title, skills }) => (
  <section className="bg-blue-100 rounded shadow-inner dark:bg-gray-600 bg-opacity-75">
    <h1 className="flex text-3xl font-light text-center text-gray-900 dark:text-gray-100 flex-center">
      {title}
    </h1>
    <div className="flex flex-wrap items-center p-2 mb-2 bg-texture justify-evenly">
      {skills.map(({ id, name, icon }) => (
        <Link
          className="p-2 m-2 bg-blue-200 border rounded cursor-pointer dark:bg-gray-700 bg-opacity-75 backdrop-blur-2 shadow-sm hover:border-green-300 hover:bg-gray-100 dark-hover:bg-gray-600 transition duration-75"
          key={id}
          href="skills/[id]"
          as={`skills/${id}`}
        >
          <figure className="flex-col flex-center">
            <Icon name={icon} />
            <figcaption className="font-light text-center text-yellow-800 dark:text-white">
              {name}
            </figcaption>
          </figure>
        </Link>
      ))}
    </div>
  </section>
);

export default SkillsTableRow;
