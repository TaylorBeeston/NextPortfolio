import React, { FC } from 'react';

type StatsTableRowProps = {
  title: string;
  value: number | string;
};

const StatsTableRow: FC<StatsTableRowProps> = ({ title, value }) => (
  <section className="flex-col w-5/6 px-2 mt-2 border border-gray-500 rounded flex-center">
    <h4 className="w-3/4 text-xl text-center border-b border-gray-400">
      {title}
    </h4>
    <h5 className="text-lg text-center text-gray-700 dark:text-gray-300">
      {value}
    </h5>
  </section>
);

export default StatsTableRow;
