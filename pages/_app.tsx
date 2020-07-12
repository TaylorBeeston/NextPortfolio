import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { DarkModeContextProvider } from 'contexts/DarkModeContext';
import 'styles/index.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <DarkModeContextProvider>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </DarkModeContextProvider>
);

export default App;
