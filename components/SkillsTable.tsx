import React, { FC } from 'react';
import { CATEGORIZED_SKILLS } from 'constants/skills';
import SkillsTableRow from 'components/SkillsTableRow';

const SkillsTable: FC = () => (
  <section className="container items-stretch justify-center flex-grow">
    {CATEGORIZED_SKILLS.map(({ title, skills }) => (
      <SkillsTableRow key={title} title={title} skills={skills} />
    ))}
  </section>
);

export default SkillsTable;
