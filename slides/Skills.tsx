import React, { FC } from 'react';
import Slide from 'components/Slide';
import SkillsTable from 'components/SkillsTable';

const Skills: FC = () => (
  <Slide title="Skills" link="skills">
    <SkillsTable />
  </Slide>
);

export default Skills;
