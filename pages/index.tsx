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
    value: '20 hrs/wk',
    label: 'Available for side consulting',
    detail: 'Remote-first, async-friendly, and comfortable jumping on calls when useful.',
  },
  {
    value: '4–6 devs',
    label: 'Team leadership',
    detail: 'Player-coach leadership while staying deep in the code.',
  },
  {
    value: '<5 sec',
    label: 'Performance wins',
    detail: 'Took a 3+ minute query down to under 5 seconds.',
  },
];

const services: Service[] = [
  {
    title: 'Fractional Startup Engineer',
    description:
      'For startups that need a senior hands-on engineer to ship product without committing to a full-time hire.',
    bullets: [
      'React/TypeScript features and UI polish',
      'Node APIs, backend glue, and integrations',
      'Bug backlog cleanup and product stabilization',
    ],
  },
  {
    title: 'AI Prototype Sprint',
    description:
      'I build practical AI features that go beyond demos and get into a usable product state quickly.',
    bullets: [
      'Agent workflows and automation loops',
      'Chat interfaces, copilots, and internal tools',
      'Fast MVPs, eval-minded iteration, and deployment',
    ],
  },
  {
    title: 'Deploy & Stabilize Sprint',
    description:
      'When the app mostly works but production, CI/CD, or environment rough edges keep slowing the team down.',
    bullets: [
      'AWS Lambda and deployment cleanup',
      'Redis, caching, and environment debugging',
      'Developer experience, build speed, and release reliability',
    ],
  },
];

const projects: Project[] = [
  {
    title: 'LearnCard',
    description:
      'Open-source lifelong learning passport platform. I have led major development efforts across the monorepo and the systems that power LearnCard products.',
    stack: [
      'Vite',
      'React',
      'TypeScript',
      'Node',
      'Neo4j',
      'MongoDB',
      'Redis',
      'AWS Lambda',
      'Rust',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/learningeconomy/LearnCard' },
      { label: 'Docs', href: 'https://docs.learncard.com' },
    ],
  },
  {
    title: 'SSI / DIDKit Rust Work',
    description:
      'Hands-on work with Rust-based decentralized identity tooling through my ssi and didkit forks, integrated as submodules in the LearnCard ecosystem.',
    stack: ['Rust', 'SSI', 'WASM', 'Developer Tooling'],
    links: [
      { label: 'ssi fork', href: 'https://github.com/TaylorBeeston/ssi' },
      { label: 'didkit fork', href: 'https://github.com/TaylorBeeston/didkit' },
    ],
  },
  {
    title: 'AI Workflow Prototyping',
    description:
      'Built agent loops and AI-powered workflows that actually work in practice — with a bias toward useful automation, clear product behavior, and fast iteration instead of demo-only prototypes.',
    stack: ['LLM workflows', 'Agent loops', 'Automation', 'Product prototyping'],
    links: [
      { label: 'GitHub', href: 'https://github.com/TaylorBeeston' },
      { label: 'Contact me', href: 'mailto:beeston.taylor@gmail.com' },
    ],
  }
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
  'React',
  'Vite',
  'TypeScript',
  'Node.js',
  'Rust',
  'AWS Lambda',
  'Redis',
  'MongoDB',
  'Neo4j',
  'CI/CD',
  'Monorepos',
  'AI agent loops',
  'Open source',
];

const externalLinkProps = {
  rel: 'noreferrer noopener',
  target: '_blank',
};

const HomePage: FC = () => (
  <>
    <Head>
      <title>Taylor Beeston | Fractional Startup Engineer</title>
      <meta
        name="description"
        content="Taylor Beeston is a VP of Engineering and fractional startup engineer focused on React/TypeScript product work, AI prototypes, and production-ready systems."
      />
    </Head>

    <DarkModeToggle />

    <main className="site-shell">
      <nav className="top-nav">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Remote fractional engineering · async-friendly · product-focused</p>
          <h1>I help startups ship product fast.</h1>
          <p className="hero-lead">
            I&apos;m Taylor Beeston — a hands-on VP of Engineering and startup engineer who
            builds React/TypeScript products, prototypes AI features, and smooths out the
            backend and deployment work needed to get software running well in production.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:beeston.taylor@gmail.com">
              Start a conversation
            </a>
            <a className="button button-secondary" href="/resume/index.html">
              View resume
            </a>
          </div>
          <div className="social-strip" aria-label="Profile links">
            <a href="https://github.com/TaylorBeeston" {...externalLinkProps}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/taylor-beeston" {...externalLinkProps}>
              LinkedIn
            </a>
            <a href="https://dev.to/taylorbeeston" {...externalLinkProps}>
              Dev.to
            </a>
            <a href="https://docs.learncard.com" {...externalLinkProps}>
              LearnCard docs
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
            <h2>Fractional Startup Engineer</h2>
            <p>
              Great for startups that need 5–20 hours/week of senior engineering help to
              ship features, prototype AI, or clean up production headaches.
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

      <section className="content-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">How I can help</p>
          <h2>Services built for startup teams that need momentum.</h2>
          <p>
            I do my best work with small teams that need someone practical, fast, and
            comfortable owning the last mile between idea and deployed product.
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
          <h2>Proof that I like making real things work.</h2>
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
            <li>Promoted to VP of Engineering after growing into technical leadership.</li>
            <li>
              Led a migration away from a Meteor monolith and helped modernize frontend,
              backend, and build workflows.
            </li>
            <li>
              Reduced CI deployment time by roughly 75% and dramatically improved local build
              speed with better tooling.
            </li>
            <li>
              Cut a 3+ minute query to under 5 seconds and improved initial load performance
              from ~15 seconds to a few hundred milliseconds.
            </li>
            <li>
              Built a custom translations microservice that reduced recurring cost from $500+
              per month to effectively negligible spend.
            </li>
          </ul>
        </div>
      </section>

      <section className="content-section two-column" id="about">
        <article className="info-card info-card-large">
          <p className="eyebrow">About me</p>
          <h2>I like getting things up, running, and deployed.</h2>
          <p>
            I&apos;m strongest when a team has momentum to recover: a product backlog to burn
            down, an AI idea that needs to become real software, or infrastructure and build
            issues that are slowing everybody down.
          </p>
          <p>
            My toolkit spans React, Vite, TypeScript, Node, Redis, MongoDB, Neo4j, AWS
            Lambda, and Rust. I enjoy building visible product work, especially when there&apos;s
            a frontier-tech angle and a clear path to shipping.
          </p>
          <p>
            I&apos;m based in Washington, work remotely, and prefer async-heavy engagements with
            lightweight calls when they help unblock execution.
          </p>
        </article>

        <article className="info-card info-card-large">
          <p className="eyebrow">Tech + domain fit</p>
          <h2>Stack I work in regularly</h2>
          <div className="badge-row">
            {stack.map((item) => (
              <span className="badge" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="availability-card">
            <h3>Ideal engagement</h3>
            <p>
              5–20 hours/week, remote, startup-friendly, and scoped around shipping features,
              AI prototypes, or stabilizing product and deployment workflows.
            </p>
          </div>
        </article>
      </section>

      <section className="content-section cta-section" id="contact">
        <p className="eyebrow">Open for side consulting</p>
        <h2>Looking for your first fast-moving extra set of senior hands?</h2>
        <p>
          If you need product shipped, AI functionality prototyped, or a rough deployment
          situation made sane, send me a note. I&apos;m aiming for focused remote engagements that
          turn into visible progress quickly.
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
