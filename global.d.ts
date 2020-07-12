declare module 'typewriter-effect/dist/react' {
  import { FC } from 'react';

  export interface Options {
    strings?: string[];
    cursor?: string;
    delay?: 'natural' | number;
    deleteSpeed?: 'natural' | number;
    loop?: boolean;
    autoStart?: boolean;
    devMode?: boolean;
    wrapperClassName?: string;
    cursorClassName?: string;
  }

  const Typewriter: FC<{ options: Options }>;
  export default Typewriter;
}

declare module 'react-github-corner' {
  import { FC, CSSProperties, AnchorHTMLAttributes } from 'react';

  interface GithubCornerProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    size?: number | string;
    direction?: string;
    octoColor?: string;
    bannerColor?: string;
    ariaLabel?: string;
    className?: string;
    svgStyle?: CSSProperties;
  }

  const GithubCorner: FC<GithubCornerProps>;
  export default GithubCorner;
}
