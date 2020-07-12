import { Project, TechStack, Technology } from 'types/projects';

export const TECHNOLOGIES: { [name: string]: Technology } = {
  ruby: { name: 'Ruby', url: 'https://ruby-lang.org/en/' },
  javascript: {
    name: 'Javascript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  typescript: { name: 'TypeScript', url: 'https://typescriptlang.org' },
  webpack: { name: 'Webpack', url: 'https://webpack.js.org' },
  handlebars: { name: 'Handlebars', url: 'https://handlebarsjs.com' },
  sass: { name: 'SASS/SCSS', url: 'https://sass-lang.com' },
  tailwind: { name: 'TailwindCSS', url: 'https://tailwindcss.com' },
  react: { name: 'React', url: 'https://reactjs.org' },
  node: { name: 'Node.js', url: 'https://nodejs.org' },
  express: { name: 'Express', url: 'https://expressjs.com' },
  s3: { name: 'Amazon S3', url: 'https://https://aws.amazon.com/s3/' },
  postgres: { name: 'PostgreSQL', url: 'https://postgresql.org' },
  mongo: { name: 'MongoDB', url: 'https://mongodb.com' },
  redis: { name: 'Redis', url: 'https://redis.io' },
  rails: { name: 'Ruby on Rails', url: 'https://rubyonrails.org' },
  next: { name: 'Next.js', url: 'https://nextjs.org' },
};

export const TECH_STACKS: { [name: string]: TechStack } = {
  mern: [
    TECHNOLOGIES.mongo,
    TECHNOLOGIES.express,
    TECHNOLOGIES.react,
    TECHNOLOGIES.node,
    TECHNOLOGIES.javascript,
  ],
  rails: [TECHNOLOGIES.ruby, TECHNOLOGIES.rails],
  next: [TECHNOLOGIES.next, TECHNOLOGIES.javascript, TECHNOLOGIES.react],
};

export const PROJECTS: Project[] = [
  {
    title: 'The Beeston Kids (Photo Gallery)',
    description: `The Beeston Kids is a simple photo sharing app I made to share photos of my 
      children with my family`,
    url: 'https://www.thebeestonkids.com',
    github: 'https://github.com/TaylorBeeston/PhotoGallery',
    stack: [
      ...TECH_STACKS.mern,
      TECHNOLOGIES.tailwind,
      TECHNOLOGIES.redis,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.s3,
      TECHNOLOGIES.sass,
    ],
  },
  {
    title: 'Portfolio Website',
    description: 'The site you are currently on!',
    url: '',
    github: 'https://github.com/TaylorBeeston/NextPortfolio',
    stack: [
      ...TECH_STACKS.next,
      TECHNOLOGIES.tailwind,
      TECHNOLOGIES.typescript,
    ],
  },
  {
    title: 'Old Portfolio Website',
    description: `This is my old portfolio website that I built by creating my own mini frontend 
      framework`,
    url: 'https://taylorbeeston.github.io',
    github: 'https://github.com/TaylorBeeston/TaylorBeeston.github.io',
    stack: [
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.webpack,
      TECHNOLOGIES.handlebars,
      TECHNOLOGIES.sass,
    ],
  },
  {
    title: 'Booksmarts',
    description: 'A web app to help keep track of books',
    url: 'https://booksmarts.herokuapp.com',
    github: 'https://github.com/TaylorBeeston/booksmarts',
    stack: [...TECH_STACKS.rails, TECHNOLOGIES.postgres, TECHNOLOGIES.s3],
  },
  {
    title: "Ashley's Brother (Music Website)",
    description: 'A web app to host music by yours truly',
    url: 'http://ashleysbrother.com',
    github: 'https://github.com/TaylorBeeston/MusicSite',
    stack: [
      ...TECH_STACKS.rails,
      TECHNOLOGIES.postgres,
      TECHNOLOGIES.s3,
      TECHNOLOGIES.sass,
    ],
  },
];
