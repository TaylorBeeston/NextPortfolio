import React, { FC } from 'react';
import { useDarkMode } from 'contexts/DarkModeContext';

const DarkModeToggle: FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return isDarkMode ? (
    <button type="button" onClick={toggleDarkMode} className="moon" />
  ) : (
    <button type="button" onClick={toggleDarkMode} className="sun" />
  );
};

export default DarkModeToggle;
