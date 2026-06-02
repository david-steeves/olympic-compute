import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const tiles = [
  {
    title: 'Fiber-rich Puget Sound corridor',
    body: 'The Battle Point Campus connects to the trans-Pacific fiber backbone running beneath Puget Sound, delivering single-digit-millisecond paths to Seattle, Portland, and onward to Asia-Pacific peering points.',
  },
  {
    title: 'Abundant low-carbon hydropower',
    body: 'Power is sourced from the Bonneville Power Administration grid, one of the cleanest electricity mixes in North America. Phase 1 operations will run on 100% carbon-free energy from the day they switch on.',
  },
  {
    title: 'A community that values long-horizon thinking',
    body: 'From Bloedel Reserve to IslandWood, Bainbridge has spent decades practicing stewardship as a civic discipline. Our investment posture — measured in decades, not quarters — is shaped to match.',
  },
];

export function WhyBainbridgeSection() {
  return (
    <section id="why-bainbridge" className="border-b border-stone-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-stone-900 text-center">Why Bainbridge?</h2>
        <p className="mt-6 text-stone-600 text-center max-w-3xl mx-auto leading-relaxed">
          Every Olympic Compute Group campus begins with a place. Bainbridge Island sits at a rare
          intersection of low-carbon energy, deep regional fiber, and a civic culture that thinks in
          generations. We are honored to advance a campus here in partnership with the community that
          calls this island home.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {tiles.map((tile) => (
            <Card key={tile.title}>
              <CardHeader>
                <CardTitle>{tile.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 leading-relaxed">{tile.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
