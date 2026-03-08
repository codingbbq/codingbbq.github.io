#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('node:fs/promises');
const path = require('node:path');

const PROFILE_SLUG = process.env.CREDLY_PROFILE || 'idrish-laxmidhar';
const SOURCE_URL = `https://www.credly.com/users/${PROFILE_SLUG}/badges.json`;
const OUTPUT_PATH = path.resolve(__dirname, '../src/data/badges.json');

async function fetchJson(url) {
  if (typeof fetch !== 'function') {
    throw new Error('Global fetch API is not available in this Node version. Please use Node 18+.');
  }

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'credly-badge-scraper',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);
  }

  return response.json();
}

function normalizeBadge(badge) {
  const template = badge.badge_template || {};
  const issuerEntity =
    template.issuer?.entities?.find((entity) => entity.primary)?.entity ||
    badge.issuer?.entities?.find((entity) => entity.primary)?.entity ||
    {};

  return {
    id: badge.id,
    name: template.name || null,
    description: template.description || null,
    issuedAt: badge.issued_at_date || badge.issued_at || null,
    expiresAt: badge.expires_at_date || badge.expires_at || null,
    badgeUrl: template.url || null,
    imageUrl: template.image_url || badge.image_url || null,
    issuer: {
      name: issuerEntity.name || null,
      url: issuerEntity.vanity_url || issuerEntity.url || null,
    },
    skills:
      (template.skills || badge.skills || [])
        .map((skill) => skill?.name)
        .filter(Boolean) || [],
    evidence: (badge.evidence || []).map((item) => ({
      title: item.title || null,
      description: item.description || null,
      url: item.url || null,
    })),
  };
}

async function main() {
  try {
    console.log(`Fetching Credly badges from ${SOURCE_URL} ...`);
    const json = await fetchJson(SOURCE_URL);
    const rawBadges = json?.data || [];

    if (!Array.isArray(rawBadges) || rawBadges.length === 0) {
      console.warn('No badges were returned.');
    }

    const badges = rawBadges.map(normalizeBadge);
    const payload = {
      source: SOURCE_URL,
      profile: PROFILE_SLUG,
      fetchedAt: new Date().toISOString(),
      count: badges.length,
      badges,
    };

    await fs.mkdir(path.dirname(OUTPUT_PATH), {recursive: true});
    await fs.writeFile(OUTPUT_PATH, JSON.stringify(payload, null, 2), 'utf-8');

    console.log(`Saved ${badges.length} badges to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Failed to fetch Credly badges:', error);
    process.exitCode = 1;
  }
}

main();
