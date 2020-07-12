export type Technology = {
  name: string;
  url: string;
};

export type TechStack = Technology[];

export type Project = {
  title: string;
  description: string;
  url: string;
  github: string;
  stack: TechStack;
};
