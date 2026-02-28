import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  updated_at: string;
};

const stats = [
  { label: 'Projects delivered', value: '230+' },
  { label: 'Years crafting UX', value: '15+' },
  { label: 'Avg. team rating', value: '4.8/5' },
];

const serviceLines = [
  {
    title: 'Product Engineering',
    desc: 'Designing and shipping modern web apps with Angular + React, TypeScript, and design systems that scale.',
    badge: 'Build',
  },
  {
    title: 'Architecture & Advisory',
    desc: 'Guiding teams through complex migrations, performance audits, and cloud-native transformation.',
    badge: 'Scale',
  },
  {
    title: 'Mentorship & Enablement',
    desc: 'Leveling up engineers with playbooks, workshops, and hands-on pairing to accelerate delivery.',
    badge: 'Mentor',
  },
];

const blogHighlights = [
  {
    title: 'Angular Design Patterns and Best Practices',
    date: 'May 13, 2025',
    excerpt: 'A curated tour of architectural moves that keep enterprise Angular apps nimble.',
    url: '/blog/angular-design-patterns',
  },
  {
    title: 'My Proudest PR Yet',
    date: 'Apr 15, 2024',
    excerpt: 'Lessons from shepherding a high-stakes refactor across teams and time zones.',
    url: '/blog/my-proudest-pr-yet',
  },
  {
    title: 'AI for Tech Professionals',
    date: 'Mar 14, 2025',
    excerpt: 'Pragmatic ways to weave AI copilots and automation into daily engineering workflows.',
    url: '/blog/ai-for-tech-professionals',
  },
];

const skillCloud = [
  'Angular',
  'React',
  'TypeScript',
  'Node.js',
  'GraphQL',
  'REST APIs',
  'Design Systems',
  'Testing Strategy',
  'Web Performance',
  'Cloud Functions',
  'Docker',
  'CI/CD',
  'AI Assistants',
  'Prompt Engineering',
  'Mentorship',
  'Product Strategy',
];

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <span className={styles.heroKicker}>Portfolio · Idrish Laxmidhar</span>
          <h1>
            Hey! I craft <span>modern web experiences</span> that scale with your roadmap.
          </h1>
          <p>
            Senior software engineer specialising in front-end platforms, design systems, and AI-assisted workflows. I turn
            bold product ideas into resilient experiences for teams across fintech, SaaS, and devtools.
          </p>
          <div className={styles.heroCtas}>
            <a className={styles.primaryCta} href="mailto:idrishlaxmidhar@gmail.com" rel="noreferrer">
              Start a project
            </a>
            <a className={styles.secondaryCta} href="/docs/intro">
              View playbooks
            </a>
          </div>
          <div className={styles.heroStats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.heroPanel} aria-label="Skill cloud">
          <div className={styles.panelTitle}>Full-stack & AI toolkit</div>
          <p className={styles.panelSubtitle}>A snapshot of the technologies and disciplines I bring into every engagement.</p>
          <div className={styles.tagCloud}>
            {skillCloud.map((skill) => (
              <span key={skill} className={styles.skillChip}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.heroBackdrop} aria-hidden="true" />
    </header>
  );
}

export default function Home(): JSX.Element {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isRepoLoading, setRepoLoading] = useState(true);
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    fetch('https://api.github.com/users/codingbbq/repos?sort=updated&per_page=4')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      })
      .catch(() => setRepos([]))
      .finally(() => setRepoLoading(false));
  }, []);

  const repoShowcase = useMemo(() => {
    if (!repos || repos.length === 0) {
      return [];
    }
    return repos.slice(0, 3);
  }, [repos]);

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Full-stack engineering partner for modern web teams">
      <HomepageHeader />
      <main className={styles.mainContent}>
        <section className={styles.servicesSection}>
          <div className={clsx('container', styles.sectionShell)}>
            <div className={styles.sectionHeading}>
              <span>What I can provide</span>
              <h2>Hands-on partnership across build, scale, and enablement.</h2>
            </div>
            <div className={styles.servicesGrid}>
              {serviceLines.map((service) => (
                <div key={service.title} className={styles.serviceCard}>
                  <div className={styles.serviceBadge}>{service.badge}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <div className={clsx('container', styles.sectionShell, styles.valuesShell)}>
            <div className={styles.valuesColumn}>
              <p className={styles.sectionEyebrow}>Dedicated to your customers</p>
              <h2>Product thinking + engineering rigor.</h2>
              <p>
                From ideation to post-launch tuning, I pair technical excellence with empathy for end users. That means crisp
                interfaces, predictable pipelines, and documentation crews can rely on.
              </p>
              <div className={styles.valuesList}>
                <div>
                  <strong>Design systems & accessibility</strong>
                  <span>Inclusive components, themeable tokens, and pragmatic guidelines.</span>
                </div>
                <div>
                  <strong>Delivery with confidence</strong>
                  <span>CI/CD coaching, observability, and release playbooks that travel well.</span>
                </div>
                <div>
                  <strong>Team enablement</strong>
                  <span>Workshops, pairing sessions, and async resources to unlock every contributor.</span>
                </div>
              </div>
            </div>
            <div className={styles.valuesVisual}>
              <div className={styles.valuesTiles}>
                <div className={styles.tileLarge}>UX Strategy</div>
                <div className={styles.tileSmall}>DX Tooling</div>
                <div className={styles.tileSmall}>AI + Automation</div>
                <div className={styles.tileLarge}>Performance SLOs</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.projectsSection}>
          <div className={clsx('container', styles.sectionShell)}>
            <div className={styles.sectionHeading}>
              <span>Case studies & recent repos</span>
              <h2>Pragmatic experiments that made it to production.</h2>
            </div>
            <div className={styles.repoGrid}>
              {isRepoLoading ? (
                <div className={styles.repoSkeleton}>Fetching highlights...</div>
              ) : repoShowcase.length > 0 ? (
                repoShowcase.map((repo) => (
                  <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.repoCard}>
                    <div className={styles.repoMeta}>
                      <span>{repo.language || 'TypeScript'}</span>
                      <time>{new Date(repo.updated_at).toLocaleDateString()}</time>
                    </div>
                    <h3>{repo.name}</h3>
                    <p>{repo.description || 'A fresh experiment from my GitHub lab.'}</p>
                    <span className={styles.repoLink}>Open repo →</span>
                  </a>
                ))
              ) : (
                <p className={styles.repoFallback}>GitHub is shy right now. Ping me for a tailored walkthrough.</p>
              )}
            </div>
          </div>
        </section>

        <section className={styles.blogSection}>
          <div className={clsx('container', styles.sectionShell)}>
            <div className={styles.sectionHeading}>
              <span>Latest from the blog</span>
              <h2>Notes, playbooks, and thought experiments.</h2>
            </div>
            <div className={styles.blogGrid}>
              {blogHighlights.map((post) => (
                <a key={post.url} href={post.url} className={styles.blogCard}>
                  <span className={styles.blogDate}>{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className={styles.blogLink}>Read article →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={clsx('container', styles.ctaShell)}>
            <div>
              <p className={styles.sectionEyebrow}>Experience a modern approach to product leadership</p>
              <h2>Let’s co-create something users brag about.</h2>
              <p>
                Share a brief, roadmap, or problem statement and I’ll reply within two business days with next steps and a
                lightweight plan.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a className={styles.primaryCta} href="mailto:idrishlaxmidhar@gmail.com">
                Book an intro call
              </a>
              <a className={styles.secondaryCta} href="https://github.com/codingbbq" target="_blank" rel="noopener noreferrer">
                Explore GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
