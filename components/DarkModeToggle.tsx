import React, { FC } from 'react';
import { useDarkMode } from 'contexts/DarkModeContext';

const DarkModeToggle: FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return isDarkMode ? (
    <button
      aria-label="Switch to Light Mode"
      type="button"
      onClick={toggleDarkMode}
      className="moon"
    />
  ) : (
    <button
      aria-label="Switch to Dark Mode"
      type="button"
      onClick={toggleDarkMode}
      className="sun"
    />
  );
};

export default DarkModeToggle;
