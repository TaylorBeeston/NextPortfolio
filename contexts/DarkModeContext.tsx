import React, { useState, useEffect, FC } from 'react';
import createCtx from 'helpers/context.helpers';

export const [useDarkMode, Provider] = createCtx<{
  isDarkMode: boolean;
  toggleDarkMode(): void;
}>();

export const DarkModeContextProvider: FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>();

  useEffect(() => {
    const isToggleSet = toggle !== undefined;
    const prefersDarkMode = window?.matchMedia('(prefers-color-scheme: dark)')
      ?.matches;

    const isNightTime =
      new Date().getHours() >= 18 || new Date().getHours() < 6;

    const setDarkMode = (value: boolean) => {
      setIsDarkMode(value);
      if (value) document.documentElement.classList.add('mode-dark');
      else document.documentElement.classList.remove('mode-dark');
    };

    setDarkMode(isToggleSet ? !!toggle : prefersDarkMode || isNightTime);
  }, [toggle]);

  const toggleDarkMode = () => {
    setToggle((oldToggle) => !oldToggle);
  };

  return <Provider value={{ isDarkMode, toggleDarkMode }}>{children}</Provider>;
};
