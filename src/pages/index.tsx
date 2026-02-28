import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import { useEffect, useState } from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroIntro}>Hey, I'm Idrish <span className={styles.wave}>👋</span></div>
        <h1 className={styles.heroMainTitle}>
          <span className={styles.accent}>Full</span>stack<br />
          <span className={styles.heroMainTitleLine}>Developer</span>
        </h1>
        <p className={styles.heroSubtitle}>
          I help you build beautiful, scalable web applications your users will love.
        </p>
        <div className={styles.heroCard}>
          <div className={styles.heroRow}>
            <div className={styles.heroColBio}>
              <p className={styles.heroBio}>
                Senior Software Engineer with 15+ years of experience in front-end and full-stack development. Expert in Angular, React, and modern web technologies, delivering scalable and maintainable solutions. Passionate about technology, continuous learning, mentoring, and contributing to the developer community. Currently expanding expertise in AI and advanced software architecture.
              </p>
            </div>
            <div className={styles.heroColSkills}>
              <div className={styles.skillsTitle}>Technical Skills</div>
              <div className={styles.skillsTags}>
                <span className={styles.skillTag}>Angular</span>
                <span className={styles.skillTag}>React</span>
                <span className={styles.skillTag}>TypeScript</span>
                <span className={styles.skillTag}>JavaScript</span>
                <span className={styles.skillTag}>Node.js</span>
                <span className={styles.skillTag}>HTML5</span>
                <span className={styles.skillTag}>CSS3</span>
                <span className={styles.skillTag}>AI/ML</span>
                <span className={styles.skillTag}>Cloud</span>
                <span className={styles.skillTag}>Mentoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const [repos, setRepos] = useState([]);
  const [certs] = useState([
    {
      title: 'Udemy: Angular - The Complete Guide',
      url: 'https://www.udemy.com/certificate/UC-ANGULAR-COMPLETE/',
      provider: 'Udemy',
    },
    {
      title: 'Udemy: React - The Complete Guide',
      url: 'https://www.udemy.com/certificate/UC-REACT-COMPLETE/',
      provider: 'Udemy',
    },
    {
      title: 'O’Reilly: AI Fundamentals',
      url: 'https://learning.oreilly.com/certificates/ai-fundamentals/',
      provider: 'O’Reilly',
    },
  ]);

  useEffect(() => {
    fetch('https://api.github.com/users/codingbbq/repos?sort=updated&per_page=4')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      });
  }, []);

  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A frontEnd developer's musings">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.showcaseSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Featured GitHub Repositories</h2>
            <div className={styles.repoGrid}>
              {repos && repos.length > 0 ? (
                repos.map((repo: any) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.repoCard}
                  >
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                    <span className={styles.repoLang}>{repo.language}</span>
                  </a>
                ))
              ) : (
                <p>Loading repositories...</p>
              )}
            </div>
          </div>
        </section>
        <section className={styles.showcaseSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Certifications</h2>
            <div className={styles.certGrid}>
              {certs.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certCard}
                >
                  <h3>{cert.title}</h3>
                  <span className={styles.certProvider}>{cert.provider}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
