import { site } from '@/lib/site-config';

export default function SustainabilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-stone-900">
        Sustainability at the {site.campusName}
      </h1>
      <p className="mt-6 text-stone-600 leading-relaxed">
        The most sustainable kilowatt-hour is the one designed correctly the first time. Every
        system at the {site.campusName} — water, carbon, materials, light, sound — is sized,
        sourced, and commissioned to a single standard: that the campus leaves the island measurably
        better than it found it. The pages that follow describe how.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-stone-900">Water</h2>
        <div className="mt-4 space-y-4 text-stone-600 leading-relaxed">
          <p>
            The {site.campusName} is cooled by a fully closed-loop seawater exchange drawn from
            Eagle Harbor. Cold-side intake passes through a redundant filtration array, exchanges
            heat through a sealed titanium plate system, and returns to the Sound within one degree
            Celsius of intake temperature. No evaporative loss. No discharge of process chemicals.
            The intake and outfall structures are sited and engineered in active coordination with
            state and federal sediment-management protocols, and all construction-phase shoreline
            work is bonded to a long-tail monitoring program extending fifteen years beyond
            commissioning.
          </p>
          <p>
            The result, measured against a comparably sized inland AI campus, is a roughly 92%
            reduction in freshwater draw and the elimination of cooling-tower plume. The island&apos;s
            aquifer is untouched. The Sound itself, we believe, is the largest piece of cooling
            infrastructure ever engineered into a Pacific Northwest data center — and one of the
            most carefully governed.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-stone-900">Carbon</h2>
        <div className="mt-4 space-y-4 text-stone-600 leading-relaxed">
          <p>
            Phase 1 operations will run on 100% carbon-free electricity sourced through the
            Bonneville Power Administration&apos;s predominantly hydroelectric mix, one of the cleanest
            grid resources in North America. We do not rely on unbundled renewable energy credits to
            make that claim; the campus draws from the regional grid that already runs clean.
          </p>
          <p>
            Embodied carbon — the carbon released to manufacture and build the campus itself — is
            targeted 40% below the 2024 industry baseline. Concrete mixes are specified with high
            supplementary cementitious materials content. Structural steel is sourced from
            electric-arc furnaces running on renewable power. The result is a campus comparable in
            computational scale to Microsoft&apos;s Quincy facility, with a substantially lower lifetime
            carbon footprint.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-stone-900">Place</h2>
        <div className="mt-4 space-y-4 text-stone-600 leading-relaxed">
          <p>
            A data center is a building, but it is also a neighbor. The {site.campusName} is
            designed as one. The forest canopy on the surrounding parcel is preserved and placed
            under perpetual stewardship through the Battle Point Forest Steward Endowment. The
            shoreline buffer is restored with native understory. Exterior lighting is dark-sky
            compliant and downcast. Mechanical equipment is acoustically shrouded to a
            property-line sound contour quieter than the prevailing wind through the Doug firs.
          </p>
          <p>
            We measure place the way the island does — in birds counted, in trails maintained, in
            mornings spent at the farmers market — and we have committed to publishing those
            measurements annually, alongside the kilowatt-hours.
          </p>
        </div>
      </section>
    </article>
  );
}
