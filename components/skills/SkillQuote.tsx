import React, { FC } from 'react';
import { Quote } from 'types/skills';

type SkillQuoteProps = {
  quote: Quote;
};

const SkillQuote: FC<SkillQuoteProps> = ({ quote: { quote, author } }) => (
  <blockquote className="px-4 py-2 m-2 border-b border-gray-500">
    <p className="text-4xl italic text-center text-gray-900 dark:text-gray-100">{`"${quote}"`}</p>
    {author && (
      <footer className="text-2xl text-right text-gray-800 dark:text-gray-200">{`- ${author}`}</footer>
    )}
  </blockquote>
);

export default SkillQuote;
