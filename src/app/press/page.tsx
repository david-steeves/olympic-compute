import { site } from '@/lib/site-config';

export default function PressPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-stone-900">
        Olympic Compute Group Announces Battle Point Campus on Bainbridge Island
      </h1>
      <p className="mt-4 text-sm text-stone-500 font-medium">
        BAINBRIDGE ISLAND, Wash. — June 2, 2026
      </p>

      <div className="mt-8 space-y-5 text-stone-600 leading-relaxed">
        <p>
          Olympic Compute Group (&ldquo;OCG&rdquo;), a Pacific Northwest infrastructure company
          headquartered in Seattle, today announced the selection of {site.location} as the site of
          its inaugural AI compute campus. The approximately {site.campusSqFt}-square-foot{' '}
          {site.campusName} will occupy a {site.campusAcres}-acre parcel on the western side of the
          island, with Phase 1 operations targeted for the third quarter of 2027.
        </p>

        <p>
          The campus has been designed against a Living Building Challenge–aligned framework, with
          closed-loop seawater cooling drawn from Eagle Harbor, 100% carbon-free electricity sourced
          from the Bonneville Power Administration grid from day one of operations, and an
          embodied-carbon target 40% below the 2024 industry baseline. Comparable in scale to
          Microsoft&apos;s Quincy data center campus in central Washington, the {site.campusName} is
          engineered for a substantially lower lifetime carbon footprint.
        </p>

        <p>
          Phase 1 will create {site.operationsJobs} family-wage operations roles, with hiring
          priority extended to qualified Kitsap County residents. Construction across Phases 1 and 2
          is expected to employ more than 800 trades workers, sourced through Washington-based union
          halls. The campus carries an annual local procurement target of approximately{' '}
          {site.annualLocalProcurement}, directed to Bainbridge and Kitsap County vendors.
        </p>

        <p>
          Olympic Compute Group has committed {site.annualCommunityInvestment} annually to direct
          community investment for the operating life of the campus. Programs include the Battle
          Point Forest Steward Endowment, the Sound-to-Server STEM Scholarship for graduating
          Bainbridge High School seniors, and a Replacement Soccer Field Program delivered in
          partnership with Bainbridge Parks. The company has initiated early consultation with the
          Suquamish Tribe regarding cultural and shoreline considerations.
        </p>

        <p>
          A formal public comment period opens {site.publicCommentStart}, and closes{' '}
          {site.publicCommentEnd}. Open-house sessions will be scheduled at venues across the island
          during the comment window. Written comments may be submitted to the Community Liaison at{' '}
          <a
            href={`mailto:${site.contactEmail}`}
            className="text-stone-900 underline underline-offset-2 hover:text-stone-700"
          >
            {site.contactEmail}
          </a>{' '}
          at any time.
        </p>

        <blockquote className="border-l-4 border-stone-300 pl-6 my-8 italic text-stone-700">
          &ldquo;Bainbridge Island sits at a rare intersection of low-carbon energy, deep regional
          fiber, and a civic culture that thinks in generations. We are honored to advance the{' '}
          {site.campusName} in partnership with the community that calls this island home.&rdquo;
          <footer className="mt-2 not-italic text-sm text-stone-500">
            — {site.company} spokesperson
          </footer>
        </blockquote>

        <p>
          Olympic Compute Group is a Pacific Northwest infrastructure company building responsible
          compute infrastructure across the region. The {site.campusName} is the company&apos;s first
          announced facility. Additional information is available at{' '}
          <a
            href={site.url}
            className="text-stone-900 underline underline-offset-2 hover:text-stone-700"
          >
            {site.url}
          </a>
          .
        </p>
      </div>

      <div className="mt-12 border-t border-stone-200 pt-8">
        <a
          href="/press-kit.pdf"
          className="inline-flex items-center gap-2 text-stone-900 underline underline-offset-2 hover:text-stone-700 font-medium"
        >
          Download the Battle Point Campus fact sheet (PDF)
        </a>
      </div>
    </article>
  );
}
