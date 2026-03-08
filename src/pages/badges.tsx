import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import styles from './badges.module.css';
import badgesData from '../data/badges.json';

type BadgeEvidence = {
  title: string | null;
  description: string | null;
  url: string | null;
};

type BadgeIssuer = {
  name: string | null;
  url: string | null;
};

type Badge = {
  id: string;
  name: string | null;
  description: string | null;
  issuedAt: string | null;
  expiresAt: string | null;
  badgeUrl: string | null;
  imageUrl: string | null;
  issuer?: BadgeIssuer;
  skills?: string[];
  evidence?: BadgeEvidence[];
};

type BadgeDataset = {
  source?: string;
  profile?: string;
  fetchedAt?: string;
  count?: number;
  badges: Badge[];
};

const dataset = (badgesData as BadgeDataset) ?? {badges: []};
const badges = Array.isArray(dataset.badges) ? dataset.badges : [];

const sortedBadges = [...badges].sort((a, b) => {
  const aDate = a.issuedAt ? new Date(a.issuedAt).getTime() : 0;
  const bDate = b.issuedAt ? new Date(b.issuedAt).getTime() : 0;
  return bDate - aDate;
});

const uniqueSkills = Array.from(
  new Set(sortedBadges.flatMap((badge) => badge.skills ?? []).filter(Boolean)),
);

const issuers = Array.from(new Set(sortedBadges.map((badge) => badge.issuer?.name).filter(Boolean)));

const stats = [
  {label: 'Verified achievements', value: dataset.count ?? sortedBadges.length},
  {label: 'Issuing organizations', value: issuers.length},
  {label: 'Skills mapped', value: uniqueSkills.length},
];

const showcasedSkills = uniqueSkills.slice(0, 20);

const formatDate = (value?: string | null) => {
  if (!value) {
    return null;
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  return date.toLocaleDateString('en-US', {month: 'short', year: 'numeric'});
};

function BadgeCard({badge}: {badge: Badge}) {
  const issuedDate = formatDate(badge.issuedAt);
  const skills = badge.skills ?? [];

  return (
    <article className={styles.badgeCard}>
      {issuedDate && <span className={styles.badgeDate}>{issuedDate}</span>}
      <div className={styles.badgeTop}>
        <div className={styles.badgeIcon}>
          {badge.imageUrl ? (
            <img src={badge.imageUrl} alt={`${badge.name ?? 'Credential'} badge`} loading="lazy" />
          ) : (
            <span aria-hidden="true">{badge.name?.charAt(0) ?? '?'}</span>
          )}
        </div>
        <div>
          {badge.issuer?.name && <p className={styles.badgeIssuer}>{badge.issuer.name}</p>}
          <h3 className={styles.badgeTitleText}>{badge.name ?? 'Unnamed badge'}</h3>
        </div>
      </div>
      {badge.description && <p className={styles.badgeDescription}>{badge.description}</p>}
      {skills.length > 0 && (
        <div>
          <p className={styles.badgeTagsLabel}>Skills covered</p>
          <div className={styles.badgeSkills}>
            {skills.map((skill) => (
              <span key={`${badge.id}-${skill}`} className={styles.badgeSkill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className={styles.badgeFooter}>
        <span>Verified via Credly</span>
        {badge.badgeUrl && (
          <a className={styles.badgeLink} href={badge.badgeUrl} target="_blank" rel="noopener noreferrer">
            View credential →
          </a>
        )}
      </div>
    </article>
  );
}

export default function BadgesPage(): JSX.Element {
  const fetchedAt = dataset.fetchedAt ? new Date(dataset.fetchedAt) : null;
  const lastUpdated = fetchedAt && !Number.isNaN(fetchedAt.getTime()) ? fetchedAt.toLocaleString() : null;

  return (
    <Layout title="Credly badges" description="A living catalog of Idrish's verified credentials and certifications.">
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={clsx('container', styles.heroGrid)}>
            <div className={styles.heroHighlight}>
              <p className="badge-page__eyebrow">Credly verified</p>
              <h1>Badges, certifications, and ongoing learning.</h1>
              <p>
                Every badge here is automatically synced from my public Credly profile. Use it as a quick reference for the
                domains I have formal training in—from AI and leadership to front-end engineering and developer experience.
              </p>
              <div className={styles.heroMeta}>
                {dataset.profile && (
                  <span>
                    Profile:{' '}
                    <a href={`https://www.credly.com/users/${dataset.profile}`} target="_blank" rel="noopener noreferrer">
                      {dataset.profile}
                    </a>
                  </span>
                )}
                {dataset.source && (
                  <span>
                    Source:{' '}
                    <a href={dataset.source} target="_blank" rel="noopener noreferrer">
                      badges.json
                    </a>
                  </span>
                )}
                {lastUpdated && <span>Last synced: {lastUpdated}</span>}
              </div>
              <div className={styles.statsGrid}>
                {stats.map((stat) => (
                  <div key={stat.label} className={styles.statCard}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.skillPanel}>
              <h2>Skill clusters highlighted</h2>
              <p>
                Tags are generated directly from each badge. They provide a quick overview of the domains reinforced through
                recent coursework and certifications.
              </p>
              <div className={styles.skillCloud}>
                {showcasedSkills.length > 0 ? (
                  showcasedSkills.map((skill) => (
                    <span key={skill} className={styles.skillChip}>
                      {skill}
                    </span>
                  ))
                ) : (
                  <span>No skills detected yet.</span>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.badgeSection}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span>Credential catalog</span>
              <h2>Credly badges & certifications</h2>
              <p>Sorted by issue date so the most recent learning shows up first.</p>
            </div>

            {sortedBadges.length > 0 ? (
              <div className={styles.badgeGrid}>
                {sortedBadges.map((badge) => (
                  <BadgeCard key={badge.id} badge={badge} />
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <p>
                  No badges found. Run <code>npm run fetch:badges</code> to sync the latest data from Credly.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
