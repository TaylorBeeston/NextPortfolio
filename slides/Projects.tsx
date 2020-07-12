import React, { FC } from 'react';
import Slide from 'components/Slide';
import ProjectsTable from 'components/ProjectsTable';
import Clouds from 'components/Clouds';

const Projects: FC = () => (
  <Slide title="Projects" link="projects" sky>
    <ProjectsTable />
    <Clouds />
  </Slide>
);

export default Projects;
