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

declare module 'react-tsparticles' {
  import { ComponentClass } from 'react';
  import { Container } from 'tsparticles/dist/Core/Container';
  import type { IOptions } from 'tsparticles/dist/Options/Interfaces/IOptions';
  import type { RecursivePartial } from 'tsparticles/dist/Types/RecursivePartial';
  import { IPolygonMaskOptions } from 'tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin';
  import { IAbsorberOptions } from 'tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin';
  import { IEmitterOptions } from 'tsparticles/dist/Plugins/Emitters/EmittersPlugin';

  export type IParticlesParams = RecursivePartial<
    IOptions & IPolygonMaskOptions & IAbsorberOptions & IEmitterOptions
  >;

  export * from 'tsparticles/dist/Enums';

  export interface ParticlesProps {
    id?: string;
    width?: string;
    height?: string;
    params?: IParticlesParams;
    options?: IParticlesParams;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style?: any;
    className?: string;
    canvasClassName?: string;
    container?: React.RefObject<Container>;
  }

  type Particles = ComponentClass<ParticlesProps>;

  declare const Particles: Particles;

  export default Particles;
}
