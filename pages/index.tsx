import Head from 'next/head';
import type { FC } from 'react';
import DarkModeToggle from 'components/DarkModeToggle';

type Metric = {
  value: string;
  label: string;
  detail: string;
};

type Service = {
  title: string;
  description: string;
  bullets: string[];
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  links: Array<{ label: string; href: string }>;
};

type ExperienceItem = {
  title: string;
  period: string;
  body: string;
};

const metrics: Metric[] = [
  {
    value: '5.5+ yrs',
    label: 'Professional experience',
    detail: 'Hands-on shipping products, platforms, and developer tooling.',
  },
  {
    value: '4–6 devs',
    label: 'Technical leadership',
    detail: 'Player-coach leadership while staying close to implementation and operations.',
  },
  {
    value: '<5 sec',
    label: 'Performance tuning',
    detail: 'Reduced a 3+ minute query to under 5 seconds in a production graph-backed system.',
  },
  {
    value: '75%',
    label: 'CI/deploy improvement',
    detail: 'Cut deployment time dramatically by improving tooling, build flows, and release paths.',
  },
];

const services: Service[] = [
  {
    title: 'Engineering Leadership at LearnCard',
    description:
      'VP of Engineering at the Learning Economy Foundation since 2022 (on the team since 2020), leading a player-coach team while staying hands-on in the code.',
    bullets: [
      'Own engineering across the open-source LearnCard monorepo and products',
      'TypeScript/Node services, React frontends, and Rust-based SSI/DID tooling',
      'Mentoring engineers and keeping delivery fast and reliable',
    ],
  },
  {
    title: 'Systems + Graphics',
    description:
      'I enjoy work close to the metal and the pixels, across compiled and interpreted languages.',
    bullets: [
      'Rust and C++ for performance-sensitive code',
      'Shader programming and real-time graphics',
      'TypeScript/Node and Ruby for product and tooling work',
    ],
  },
  {
    title: 'AI/ML',
    description:
      'Hands-on AI/ML work, from training-data feedback to running models locally.',
    bullets: [
      'RLHF and model evaluation work',
      'Computer vision and local AI video generation',
      'Agent-orchestrated building: coordinating AI agents to plan, write, and verify software',
    ],
  },
];

const projects: Project[] = [
  {
    title: 'LearnCard',
    description:
      'Open-source lifelong learning passport platform where I lead hands-on engineering across a large monorepo and the systems that power LearnCard products.',
    stack: [
      'TypeScript',
      'Node',
      'Redis',
      'MongoDB',
      'Neo4j',
      'AWS Lambda',
      'Rust',
      'CI/CD',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/learningeconomy/LearnCard' },
      { label: 'Docs', href: 'https://docs.learncard.com' },
    ],
  },
  {
    title: 'Orch3stra',
    description:
      'A self-hosted AI filmmaking studio that turns a story and cast into a rendered short film using locally run video models through WanGP. A browser editor covers story, references, voices, coverage planning, a timeline and a finishing room, while a Node.js server and a headless Python worker drive renders with live progress, ETA estimates and recovery from failed or cancelled jobs.',
    stack: ['Node.js', 'JavaScript', 'Python', 'WanGP', 'FFmpeg', 'Playwright', 'LLM planning'],
    // GitHub link hidden until the repo is public. On release, add:
    // { label: 'GitHub', href: 'https://github.com/TaylorBeeston/orch3stra' }
    links: [],
  },
  {
    title: 'Rust SSI / DIDKit Work',
    description:
      'Hands-on work with Rust-based decentralized identity tooling through my ssi and didkit forks, integrated as submodules in the LearnCard ecosystem.',
    stack: ['Rust', 'SSI', 'WASM', 'Developer tooling'],
    links: [
      { label: 'ssi fork', href: 'https://github.com/TaylorBeeston/ssi' },
      { label: 'didkit fork', href: 'https://github.com/TaylorBeeston/didkit' },
    ],
  },
];

const experience: ExperienceItem[] = [
  {
    title: 'VP of Engineering · Learning Economy Foundation',
    period: 'Mar 2022 — Present',
    body:
      'Leading engineering while staying hands-on in the codebase: shipping product, improving developer experience, mentoring engineers, and keeping LearnCard systems moving smoothly.',
  },
  {
    title: 'Software Engineer · Learning Economy Foundation',
    period: 'Aug 2020 — Mar 2022',
    body:
      'Built across frontend, backend, infrastructure, performance, and developer tooling, then grew into broader technical ownership and leadership.',
  },
];

const stack = [
  'TypeScript',
  'Node.js',
  'React',
  'Rust',
  'C++',
  'Ruby',
  'Shaders',
  'AI/ML',
  'RLHF',
  'Computer vision',
  'Local AI video generation',
  'Agent orchestration',
  'Redis',
  'MongoDB',
  'Neo4j',
  'AWS Lambda',
  'Open source',
];

const externalLinkProps = {
  rel: 'noreferrer noopener',
  target: '_blank',
};

const HomePage: FC = () => (
  <>
    <Head>
      <title>Taylor Beeston | VP of Engineering at LearnCard</title>
      <meta
        name="description"
        content="Taylor Beeston is VP of Engineering at the Learning Economy Foundation (LearnCard), building in TypeScript/Node, Rust, C++, Ruby and shaders, with AI/ML work spanning RLHF, computer vision, local AI video generation and agent-orchestrated software."
      />
    </Head>

    <DarkModeToggle />

    <main className="site-shell">
      <nav className="top-nav">
        <a href="#focus">Focus</a>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">VP of Engineering · LearnCard · TypeScript, Rust, C++, AI/ML</p>
          <h1>I lead engineering and build across the stack, from shaders to AI.</h1>
          <p className="hero-lead">
            I&apos;m Taylor Beeston — VP of Engineering at the Learning Economy Foundation, where I&apos;ve worked on LearnCard since 2020. I write TypeScript/Node, Rust, C++, Ruby and shaders, and I work on AI/ML: RLHF, computer vision, local AI video generation, and building software with orchestrated AI agents.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:beeston.taylor@gmail.com">
              Contact Taylor
            </a>
            <a className="button button-secondary" href="/resume/TaylorBeeston.pdf">
              Download resume
            </a>
          </div>
          <div className="social-strip" aria-label="Profile links">
            <a href="https://github.com/TaylorBeeston" {...externalLinkProps}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/taylor-beeston" {...externalLinkProps}>
              LinkedIn
            </a>
            <a href="https://docs.learncard.com" {...externalLinkProps}>
              LearnCard docs
            </a>
            <a href="https://dev.to/taylorbeeston" {...externalLinkProps}>
              Dev.to
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <img
            src="/images/avatar.jpeg"
            alt="Stylized avatar of Taylor Beeston"
            className="hero-avatar"
          />
          <div className="hero-card-body">
            <p className="hero-card-kicker">Currently</p>
            <h2>VP of Engineering, Learning Economy Foundation</h2>
            <p>
              Leading LearnCard engineering since 2022, and building AI/ML and graphics projects on the side.
            </p>
          </div>
        </aside>
      </section>

      <section className="metrics-grid" aria-label="Key metrics">
        {metrics.map((item) => (
          <article className="metric-card" key={item.label}>
            <p className="metric-value">{item.value}</p>
            <h2>{item.label}</h2>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="content-section" id="focus">
        <div className="section-heading">
          <p className="eyebrow">Focus</p>
          <h2>What I work on.</h2>
          <p>
            Engineering leadership at LearnCard, systems and graphics programming, and hands-on AI/ML.
          </p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article className="info-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Things I&apos;ve built.</h2>
        </div>
        <div className="stacked-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} {...externalLinkProps}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <p>{project.description}</p>
              <div className="badge-row">
                {project.stack.map((item) => (
                  <span className="badge" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section timeline-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Leadership without stepping away from implementation.</h2>
        </div>
        <div className="timeline-list">
          {experience.map((item) => (
            <article className="timeline-item" key={item.title}>
              <p className="timeline-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="impact-panel">
          <h3>Selected impact</h3>
          <ul>
            <li>Promoted to VP of Engineering after growing into technical leadership while remaining hands-on.</li>
            <li>
              Helped migrate away from a Meteor monolith toward more modular frontend and backend architecture.
            </li>
            <li>
              Reduced CI deployment time by roughly 75% and improved local build speed with better tooling.
            </li>
            <li>
              Cut a 3+ minute production query to under 5 seconds and improved initial load performance from ~15 seconds to a few hundred milliseconds.
            </li>
            <li>
              Built a custom translations microservice that reduced recurring cost from $500+ per month to effectively negligible spend.
            </li>
            <li>
              Maintained clear technical documentation, reusable packages, and async collaboration patterns across a distributed team.
            </li>
          </ul>
        </div>
      </section>

      <section className="content-section two-column" id="about">
        <article className="info-card info-card-large">
          <p className="eyebrow">About me</p>
          <h2>I like making real things work.</h2>
          <p>
            I&apos;ve programmed since writing TI-BASIC on my calculator in high school. Today I lead
            engineering at LearnCard while staying hands-on in the code.
          </p>
          <p>
            Outside of that I spend my time on Rust, C++ and shader work, and on AI/ML: RLHF,
            computer vision, local AI video generation, and agent-orchestrated building.
          </p>
          <p>
            I am based in Lake Stevens, Washington, and work remotely.
          </p>
        </article>

        <article className="info-card info-card-large">
          <p className="eyebrow">Toolkit</p>
          <h2>Technical strengths</h2>
          <div className="badge-row">
            {stack.map((item) => (
              <span className="badge" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="availability-card">
            <h3>Current side project</h3>
            <p>
              Orch3stra, a self-hosted AI filmmaking studio built on local video models.
            </p>
          </div>
        </article>
      </section>

      <section className="content-section cta-section" id="contact">
        <p className="eyebrow">Get in touch</p>
        <h2>Want to talk shop?</h2>
        <p>
          Happy to chat about LearnCard, Rust, graphics, or local AI tooling.
        </p>
        <div className="hero-actions hero-actions-center">
          <a className="button button-primary" href="mailto:beeston.taylor@gmail.com">
            beeston.taylor@gmail.com
          </a>
          <a className="button button-secondary" href="https://www.linkedin.com/in/taylor-beeston" {...externalLinkProps}>
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </main>
  </>
);

export default HomePage;
