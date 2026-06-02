import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { site } from '@/lib/site-config';

const faqs = [
  {
    q: 'Is Battle Point Park going away?',
    a: 'The active recreational uses of the parcel are being relocated, not removed. The Replacement Soccer Field Program will deliver two regulation-grade fields in partnership with Bainbridge Parks, with siting confirmed during the public comment process.',
  },
  {
    q: 'How much water will the campus use?',
    a: 'The Battle Point Campus uses a closed-loop seawater cooling system that returns water to Eagle Harbor within one degree Celsius of intake. Freshwater draw on the island aquifer is approximately 92% lower than a comparable inland campus.',
  },
  {
    q: 'Will this increase ferry traffic?',
    a: 'Net-neutral after Phase 1, following the launch of our employee shuttle program. Construction-period crossings will be staged off-peak in coordination with Washington State Ferries.',
  },
  {
    q: 'What does this do to property values?',
    a: 'Independent analyses of the Microsoft Quincy and adjacent regional campuses indicate a modest positive long-term impact within the surrounding residential market. We are commissioning a localized study during the comment period.',
  },
  {
    q: 'Who is Olympic Compute Group?',
    a: 'Olympic Compute Group is a Pacific Northwest infrastructure company headquartered in Seattle. The Battle Point Campus is our first announced facility.',
  },
  {
    q: 'Will I be able to see the building from the water?',
    a: 'No. The master plan preserves the existing tree line along the Salish Sea side. Mechanical penthouse equipment is screened to remain below the surrounding canopy height.',
  },
  {
    q: 'What about the deer?',
    a: 'The perimeter is engineered with wildlife-permeable corridors at the north and east edges, designed in consultation with state wildlife biologists. Existing deer migration routes through the parcel are preserved.',
  },
  {
    q: 'How do I submit a comment?',
    a: `Email the Community Liaison at ${site.contactEmail} at any time, or attend an open-house session during the ${site.publicCommentStart} – ${site.publicCommentEnd} comment window.`,
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="border-b border-stone-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-stone-900">Frequently Asked Questions</h2>
        <div className="mt-10 max-w-3xl">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={index}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
