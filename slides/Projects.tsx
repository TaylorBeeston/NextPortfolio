import React, { FC } from 'react';
import Slide from 'components/Slide';
import ProjectsTable from 'components/ProjectsTable';

const Projects: FC = () => (
  <Slide title="Projects" link="projects" sky>
    <ProjectsTable />
  </Slide>
);

export default Projects;
