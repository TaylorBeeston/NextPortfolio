import React, { FC } from 'react';
import StatsTableRow from 'components/skills/StatsTableRow';
import { SkillStats } from 'types/skills';

type StatsTableProps = {
  stats: SkillStats;
};

const StatsTable: FC<StatsTableProps> = ({
  stats: { years, used, likes, dislikes },
}) => (
  <aside className="flex flex-col items-center text-gray-800 dark:text-gray-200">
    <StatsTableRow title="Years of Experience" value={years} />
    <StatsTableRow title="Used for" value={used} />
    <StatsTableRow title="Likes" value={likes} />
    <StatsTableRow title="Dislikes" value={dislikes} />
  </aside>
);

export default StatsTable;
