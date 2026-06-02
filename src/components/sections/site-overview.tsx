import Image from 'next/image';
import { site } from '@/lib/site-config';

const stats = [
  { value: site.campusSqFt + ' sq ft', label: 'Total footprint' },
  { value: site.campusAcres + '-acre campus', label: 'Parcel size' },
  { value: 'Phase 1 operational ' + site.phase1Operational, label: 'Target date' },
];

export function SiteOverviewSection() {
  return (
    <section id="site-overview" className="border-b border-stone-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-stone-900 mb-10">Site Overview</h2>
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-stone-600 leading-relaxed">
              The {site.campusName} is a single, integrated AI compute facility designed to serve
              next-generation model training and high-density inference for North American customers.
              The master plan preserves the surrounding forest canopy, restores the western edge as a
              publicly accessible stewardship corridor, and consolidates all back-of-house systems —
              cooling annex, substation, security — to the southern parcel boundary to minimize
              visual intrusion from the Salish Sea side.
            </p>
          </div>
          <div>
            <Image
              src="/site-plan.svg"
              alt="Battle Point Campus master plan"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="border border-stone-200 rounded-xl p-6 text-center">
              <p className="text-2xl font-semibold text-stone-900">{stat.value}</p>
              <p className="mt-1 text-sm text-stone-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
