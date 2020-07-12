import { useState, useEffect } from 'react';

const useDarkMode = (): boolean => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  useEffect(() => {
    const prefersDarkMode = () =>
      window?.matchMedia('(prefers-color-scheme: dark)')?.matches;

    const isNightTime = () => {
      const currentHour = new Date().getHours();
      return currentHour >= 18 || currentHour < 6;
    };

    if (prefersDarkMode() || isNightTime()) {
      setIsDarkMode(true);
      document.documentElement.classList.add('mode-dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('mode-dark');
    }
  }, []);

  return isDarkMode;
};

export default useDarkMode;
