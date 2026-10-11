export type Technology = {
  name: string;
  url: string;
};

export type TechStack = Technology[];

export type Project = {
  title: string;
  description: string;
  /** Live site / docs URL. Omit if there is no public demo. */
  url?: string;
  github: string;
  /** Set false to hide the GitHub link (e.g. repo not public yet). Defaults to true. */
  githubPublic?: boolean;
  stack: TechStack;
};
