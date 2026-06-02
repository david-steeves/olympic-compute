import { HeroSection } from '@/components/sections/hero';
import { WhyBainbridgeSection } from '@/components/sections/why-bainbridge';
import { SiteOverviewSection } from '@/components/sections/site-overview';
import { SustainabilitySection } from '@/components/sections/sustainability';
import { CommunityPartnershipSection } from '@/components/sections/community-partnership';
import { JobsEconomySection } from '@/components/sections/jobs-economy';
import { TimelineSection } from '@/components/sections/timeline';
import { FaqSection } from '@/components/sections/faq';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyBainbridgeSection />
      <SiteOverviewSection />
      <SustainabilitySection />
      <CommunityPartnershipSection />
      <JobsEconomySection />
      <TimelineSection />
      <FaqSection />
    </>
  );
}
