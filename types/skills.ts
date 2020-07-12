export type Quote = {
  quote: string;
  author?: string;
};

export type SkillStats = {
  years: number | string;
  used: string;
  likes: string;
  dislikes: string;
};

export type Skill = {
  id: string;
  name: string;
  icon: string;
  quote: Quote;
  description: string;
  stats: SkillStats;
  gist?: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type CategorizedSkills = SkillCategory[];
