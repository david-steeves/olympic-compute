import { Button } from '@/components/ui/button';
import { site } from '@/lib/site-config';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[70vh] flex items-center"
      style={{ background: 'linear-gradient(135deg, #1a2a22 0%, #2a4a3a 100%)' }}
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight max-w-4xl">
          A new home for the Pacific Northwest&apos;s AI future.
        </h1>
        <p className="mt-6 text-lg text-white/70 max-w-2xl">
          Now under environmental review — the {site.campusName}, {site.location}.
        </p>
        <div className="mt-10">
          <Button
            render={<a href="#community-partnership" />}
            className="h-12 px-8 text-base"
          >
            Read our community brief
          </Button>
        </div>
      </div>
    </section>
  );
}
