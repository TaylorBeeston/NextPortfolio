import React, { FC, AnchorHTMLAttributes } from 'react';

const NewTabLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

export default NewTabLink;
