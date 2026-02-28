import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Front-End Leadership',
    description: (
      <>
        Leading the development of high-performance, scalable web applications using Angular, React, and TypeScript. I drive UI/UX excellence and ensure best practices in accessibility and responsive design.
      </>
    ),
    Svg: () => (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="tech1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7c3aed" />
            <stop offset="1" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <rect x="8" y="16" width="48" height="32" rx="8" fill="url(#tech1)" />
        <rect x="16" y="24" width="32" height="16" rx="4" fill="#fff" />
        <circle cx="32" cy="32" r="4" fill="url(#tech1)" />
      </svg>
    ),
  },
  {
    title: 'Full-Stack Expertise',
    description: (
      <>
        Architecting and implementing robust backend solutions with Node.js, Express, and cloud platforms. I integrate APIs, manage databases, and deliver end-to-end features with reliability and security.
      </>
    ),
    Svg: () => (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="tech2" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4f46e5" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect x="12" y="16" width="40" height="32" rx="8" fill="url(#tech2)" />
        <rect x="20" y="24" width="24" height="16" rx="4" fill="#fff" />
        <rect x="28" y="32" width="8" height="8" rx="2" fill="url(#tech2)" />
      </svg>
    ),
  },
  {
    title: 'AI & Continuous Learning',
    description: (
      <>
        Exploring AI, machine learning, and automation to stay ahead in tech. I actively pursue certifications, contribute to open source, and mentor developers to foster growth and innovation.
      </>
    ),
    Svg: () => (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="tech3" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7c3aed" />
            <stop offset="1" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <ellipse cx="32" cy="32" rx="20" ry="12" fill="url(#tech3)" />
        <circle cx="32" cy="32" r="6" fill="#fff" />
        <rect x="30" y="24" width="4" height="16" rx="2" fill="url(#tech3)" />
      </svg>
    ),
  },
];

function Feature({ title, description, Svg }: { title: string; description: JSX.Element; Svg: React.FC }) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureArt}><Svg /></div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <h2 className={styles.featuresHeading}>Professional Highlights</h2>
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
