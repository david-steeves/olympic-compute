// src/lib/site-config.ts
export const site = {
  company: 'Olympic Compute Group',
  shortName: 'OCG',
  tagline: "A new home for the Pacific Northwest's AI future.",
  campusName: 'Battle Point Campus',
  location: 'Bainbridge Island, Washington',
  url: 'https://olympic-compute.vercel.app',
  contactEmail: 'community.liaison.ocg@gmail.com',
  hqCity: 'Seattle, WA',
  publicCommentStart: 'June 15, 2026',
  publicCommentEnd: 'August 30, 2026',
  phase1Operational: 'Q3 2027',
  campusSqFt: '~412,000',
  campusAcres: '72',
  annualCommunityInvestment: '$2.4M',
  operationsJobs: 47,
  constructionJobs: '800+',
  annualLocalProcurement: '$14M',
  nav: [
    { label: 'Campus', href: '/#site-overview' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Community', href: '/community-partnership' },
    { label: 'Press', href: '/press' },
  ],
} as const;

export type SiteConfig = typeof site;
