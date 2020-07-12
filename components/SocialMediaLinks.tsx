import React, { FC } from 'react';
import { useDarkMode } from 'contexts/DarkModeContext';
import NewTabLink from 'components/utilities/NewTabLink';
import Icon from 'components/Icon';

const SocialMediaLinks: FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      className={`flex items-center ${
        isDarkMode ? 'text-gray-100' : 'text-gray-900'
      }`}
    >
      <NewTabLink href="https://github.com/TaylorBeeston">
        <Icon className="w-8 h-8 mr-2" name="github" />
      </NewTabLink>
      <NewTabLink href="https://www.linkedin.com/in/taylor-beeston">
        <Icon className="w-8 h-8 mt-px mr-2" name="linkedin" />
      </NewTabLink>
      <NewTabLink href="https://dev.to/taylorbeeston">
        <Icon className="w-8 h-8 mr-2" name="dev" />
      </NewTabLink>
      <NewTabLink href="mailto:beeston.taylor@gmail.com">
        <Icon className="w-8 h-8 mt-px mr-2" name="email" />
      </NewTabLink>
    </section>
  );
};

export default SocialMediaLinks;
