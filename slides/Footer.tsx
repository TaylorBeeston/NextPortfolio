import React, { FC } from 'react';
import Waves from 'components/Waves';

type FooterProps = {
  sky?: boolean;
};

const Footer: FC<FooterProps> = ({ sky = false }) => (
  <footer
    className={`relative z-10 pt-32 pb-2 pl-4 ${sky ? 'bg-sky' : 'bg-cloud'}`}
  >
    {sky && <Waves />}
    <p className="text-gray-800 dark:text-gray-200">
      Made with <span className="text-red-500">❤</span> in Washington State
    </p>
  </footer>
);

export default Footer;
