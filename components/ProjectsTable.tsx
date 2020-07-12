import React, { FC } from 'react';
import { PROJECTS } from 'constants/projects';
import ProjectCard from 'components/ProjectCard';

const ProjectsTable: FC = () => (
  <section className="container items-stretch justify-center flex-grow">
    {PROJECTS.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </section>
);

export default ProjectsTable;
