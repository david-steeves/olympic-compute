import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { site } from '@/lib/site-config';

const programs = [
  {
    title: 'Battle Point Forest Steward Endowment',
    body: 'A perpetual endowment funding canopy restoration, native understory, and trail stewardship on the surrounding parcel, administered by a board including Bainbridge Parks and a community-nominated seat.',
  },
  {
    title: 'Sound-to-Server STEM Scholarship',
    body: 'Four-year full-tuition awards for graduating Bainbridge High School seniors pursuing computer science, electrical engineering, or marine systems fields at any accredited Washington institution.',
  },
  {
    title: 'Replacement Soccer Field Program',
    body: 'Two regulation-grade replacement fields delivered in partnership with Bainbridge Parks, with location to be confirmed during the public comment process.',
  },
];

export function CommunityPartnershipSection() {
  return (
    <section id="community-partnership" className="border-b border-stone-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-stone-900">Community Partnership</h2>
        <p className="mt-6 text-stone-600 leading-relaxed max-w-3xl">
          Olympic Compute Group commits{' '}
          <strong className="text-stone-900">{site.annualCommunityInvestment} annually</strong> to{' '}
          {site.location} in direct community investment for the operating life of the campus. These
          programs are designed in consultation with island stakeholders and indexed to inflation
          through Phase 2. We acknowledge the ancestral and treaty-protected lands of the Suquamish
          people and are engaged in early consultation with the Tribe regarding cultural and
          shoreline considerations.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.title}>
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 leading-relaxed">{program.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
