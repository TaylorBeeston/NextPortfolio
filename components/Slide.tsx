import React, { FC } from 'react';
import Waves from 'components/Waves';

type SlideProps = {
  title?: string;
  extraStyles?: string;
  link?: string;
  sky?: boolean;
  top?: boolean;
  bottom?: boolean;
};

const Slide: FC<SlideProps> = ({
  children,
  title,
  extraStyles = '',
  link,
  sky = false,
  top = true,
  bottom = true,
}) => {
  return (
    <section
      className={`relative z-10 flex flex-col items-center w-full min-h-screen ${extraStyles} ${
        sky ? 'py-32 bg-sky' : 'bg-cloud'
      }`}
      id={title ? undefined : link}
    >
      {sky && top && <Waves />}
      {title && (
        <h1
          id={link}
          className="z-10 my-4 text-5xl font-medium tracking-wide text-black dark:text-white"
        >
          {title}
        </h1>
      )}
      {children}
      {sky && bottom && <Waves bottom />}
    </section>
  );
};

export default Slide;
