import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';

type IconProps = {
  name: string;
  className?: string;
};

const Icon: FC<IconProps> = ({ name, className = 'w-16 h-16' }) => (
  <ReactSVG className={className} src={`/icons/${name}.svg`} />
);

export default Icon;
