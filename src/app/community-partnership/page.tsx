import { site } from '@/lib/site-config';

export default function CommunityPartnershipPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-stone-900">Community Partnership</h1>
      <p className="mt-6 text-stone-600 leading-relaxed">
        Olympic Compute Group commits {site.annualCommunityInvestment} annually to{' '}
        {site.location} in direct community investment for the operating life of the{' '}
        {site.campusName}. The programs below are designed in consultation with island stakeholders
        and structured to be administered by, and accountable to, the community itself. We
        acknowledge the ancestral and treaty-protected lands of the Suquamish people, and we are in
        early consultation with the Tribe regarding cultural and shoreline considerations.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-stone-900">
          Battle Point Forest Steward Endowment
        </h2>
        <p className="mt-4 text-stone-600 leading-relaxed">
          A perpetual endowment funding canopy restoration, native understory replanting, and trail
          stewardship across the surrounding parcel. The endowment is administered by a community
          board that includes Bainbridge Parks staff, a Suquamish Tribe–nominated seat, a
          community-nominated seat selected through a public application process, and one Olympic
          Compute Group representative. Annual stewardship reports are published publicly. The
          endowment principal is structured so that distributions continue at full real value for
          the operating life of the campus and beyond.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-stone-900">
          Sound-to-Server STEM Scholarship
        </h2>
        <p className="mt-4 text-stone-600 leading-relaxed">
          Four-year full-tuition scholarships for graduating Bainbridge High School seniors
          pursuing computer science, electrical engineering, or marine systems studies at any
          accredited Washington institution. Recipients are selected by an independent panel that
          includes Bainbridge educators and local STEM professionals. The program is sized to extend
          through the operating life of the campus and is indexed to in-state tuition rates so that
          the award keeps pace with the cost of education.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-stone-900">Replacement Soccer Field Program</h2>
        <p className="mt-4 text-stone-600 leading-relaxed">
          Two regulation-grade replacement fields, delivered in partnership with Bainbridge Parks at
          no cost to the City. Siting will be confirmed in collaboration with Parks during the
          public comment process. The replacement program is funded through campus construction and
          is structured to deliver fields ready for play prior to the displacement of existing
          recreational use.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-stone-900">Civic and Cultural Partnerships</h2>
        <p className="mt-4 text-stone-600 leading-relaxed">
          A dedicated annual partnership budget supports island institutions including the Bainbridge
          Island Museum of Art, IslandWood, the Bainbridge Public Library, and the year-round
          farmers market, with allocations refreshed annually in consultation with each organization.
          The intent is straightforward: the institutions that already define this community do the
          defining. We provide steady, predictable support.
        </p>
      </section>
    </article>
  );
}
