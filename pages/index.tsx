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
    label: 'Engineering in production',
    detail: 'Hands-on ownership across product systems, platform services, and developer tooling.',
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
    title: 'Linux + Cloud Operations Fit',
    description:
      'I do my best work close to production: reliable infrastructure, Linux systems, cloud primitives, automation, and practical operations.',
    bullets: [
      'Comfortable on Linux-based systems and remote-first operational workflows',
      'Experience with cloud-hosted products, APIs, caching, queues, and production debugging',
      'Strong bias toward clear runbooks, documentation, and cross-functional communication',
    ],
  },
  {
    title: 'Distributed Systems + Performance',
    description:
      'My strongest accomplishments are in making complex systems faster, more stable, and easier for teams to operate.',
    bullets: [
      'Reduced a 3+ minute query to under 5 seconds',
      'Improved initial load performance from ~15 seconds to a few hundred milliseconds',
      'Helped move a Meteor monolith toward more modular frontend and backend architecture',
    ],
  },
  {
    title: 'Automation + Reliability Mindset',
    description:
      'I like improving operational systems over time, not just keeping them alive. That matches how I approach engineering work.',
    bullets: [
      'Built internal services and tooling that reduced recurring cost and manual work',
      'Improved monorepo workflows, CI/CD speed, and day-to-day developer experience',
      'Interested in going deeper on storage observability, Linux internals, and cloud infrastructure operations',
    ],
  },
];

const projects: Project[] = [
  {
    title: 'LearnCard Production Platform',
    description:
      'Open-source lifelong learning passport platform where I lead hands-on engineering across a large monorepo and the production systems that power LearnCard products.',
    stack: [
      'Linux workflows',
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
    title: 'Performance + Platform Modernization',
    description:
      'Drove practical reliability and performance wins: faster deploys, faster local builds, major query improvements, and reduced recurring infrastructure spend.',
    stack: ['Distributed systems', 'Performance tuning', 'CI/CD', 'Internal tooling'],
    links: [
      { label: 'GitHub', href: 'https://github.com/TaylorBeeston' },
      { label: 'Resume', href: '/resume/index.html' },
    ],
  },
  {
    title: 'Rust SSI / DIDKit Work',
    description:
      'Hands-on work with Rust-based decentralized identity tooling through my ssi and didkit forks, integrated as submodules in the LearnCard ecosystem.',
    stack: ['Rust', 'WASM', 'Systems learning', 'Developer tooling'],
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
      'Lead engineering while staying hands-on: production debugging, platform improvements, developer tooling, performance work, mentoring engineers, and keeping systems moving reliably.',
  },
  {
    title: 'Software Engineer · Learning Economy Foundation',
    period: 'Aug 2020 — Mar 2022',
    body:
      'Built across frontend, backend, infrastructure-adjacent services, CI/CD, performance, and internal tooling before growing into broader technical ownership.',
  },
];

const stack = [
  'Linux',
  'Distributed systems',
  'Cloud hosting concepts',
  'Object/block storage concepts',
  'Performance tuning',
  'Observability mindset',
  'Python/Bash scripting',
  'TypeScript',
  'Node.js',
  'Rust',
  'Redis',
  'MongoDB',
  'Neo4j',
  'AWS Lambda',
  'CI/CD',
  'Technical documentation',
];

const externalLinkProps = {
  rel: 'noreferrer noopener',
  target: '_blank',
};

const HomePage: FC = () => (
  <>
    <Head>
      <title>Taylor Beeston | Platform Engineering Leader</title>
      <meta
        name="description"
        content="Taylor Beeston is an engineering leader with experience in cloud-adjacent systems, distributed systems, automation, performance, CI/CD, developer tooling, and production reliability."
      />
    </Head>

    <DarkModeToggle />

    <main className="site-shell">
      <nav className="top-nav">
        <a href="#fit">Platform fit</a>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Platform-minded engineering leader · Linux/cloud systems · remote-first</p>
          <h1>I make production systems faster, steadier, and easier to operate.</h1>
          <p className="hero-lead">
            I&apos;m Taylor Beeston — a hands-on engineering leader who likes the operational side of software: production debugging, distributed-system problem solving, automation, performance tuning, and clear technical ownership in a fast-moving open-source platform.
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
            <p className="hero-card-kicker">Best fit</p>
            <h2>Platform engineering + production systems</h2>
            <p>
              I am strongest where software meets operations: Linux workflows, cloud-hosted systems, automation, observability, performance, documentation, and reliable delivery.
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

      <section className="content-section" id="fit">
        <div className="section-heading">
          <p className="eyebrow">Platform fit</p>
          <h2>Why my background maps to platform and infrastructure work.</h2>
          <p>
            My strongest experience is in the habits platform teams need: stability, scalability, performance, automation, metrics-minded debugging, documentation, and cross-functional technical ownership.
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
          <h2>Relevant proof: production ownership, not demo projects.</h2>
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
          <h2>I like the operational side of engineering.</h2>
          <p>
            I enjoy the work that keeps a platform usable: debugging production issues, making
            slow paths fast, improving deployment reliability, writing down what the team learns,
            and building automation so the same problem does not keep coming back.
          </p>
          <p>
            I am especially interested in infrastructure work that is close to the systems layer while still being software-defined: Linux, storage concepts, networking, virtualization, Kubernetes, metrics, alerting, and cloud operations.
          </p>
          <p>
            I am based in Lake Stevens, Washington, work well remotely, and can collaborate across
            engineering, operations, and product stakeholders without needing heavy supervision.
          </p>
        </article>

        <article className="info-card info-card-large">
          <p className="eyebrow">Tech + domain fit</p>
          <h2>Technical strengths</h2>
          <div className="badge-row">
            {stack.map((item) => (
              <span className="badge" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="availability-card">
            <h3>Current learning focus</h3>
            <p>
              Deepening hands-on knowledge of storage operations, Linux storage internals, infrastructure observability, and cloud platform reliability.
            </p>
          </div>
        </article>
      </section>

      <section className="content-section cta-section" id="contact">
        <p className="eyebrow">Open to the right full-time role</p>
        <h2>Looking for a platform-minded engineer who can learn fast and own outcomes?</h2>
        <p>
          I bring production engineering judgment, performance instincts, documentation habits,
          and a strong desire to go deeper in cloud infrastructure and platform operations.
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
