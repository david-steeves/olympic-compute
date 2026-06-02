import { site } from '@/lib/site-config';

const stats = [
  { value: String(site.operationsJobs) + ' family-wage operations roles', label: 'Phase 1 permanent jobs' },
  { value: site.constructionJobs + ' construction jobs', label: 'Across Phases 1 and 2' },
  { value: '~' + site.annualLocalProcurement + ' annual local procurement', label: 'Target' },
];

export function JobsEconomySection() {
  return (
    <section id="jobs-economy" className="border-b border-stone-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-stone-900">Jobs &amp; Economy</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="border border-stone-200 rounded-xl p-6 text-center">
              <p className="text-xl font-semibold text-stone-900">{stat.value}</p>
              <p className="mt-1 text-sm text-stone-500">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-stone-600 leading-relaxed max-w-3xl">
          Phase 1 will create{' '}
          <strong className="text-stone-900">
            {site.operationsJobs} family-wage operations roles
          </strong>
          , with hiring priority extended to qualified Kitsap County residents through a
          partnership-based apprenticeship pathway. Construction will employ more than 800 trades
          workers across both phases, sourced through Washington-based union halls. A
          local-procurement commitment of approximately {site.annualLocalProcurement} per year is
          structured to direct goods, services, and food contracts to Bainbridge and Kitsap County
          vendors, including the year-round farmers market and small island producers.
        </p>
      </div>
    </section>
  );
}
