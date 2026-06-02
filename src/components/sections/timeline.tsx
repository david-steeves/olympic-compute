import { site } from '@/lib/site-config';

export function TimelineSection() {
  return (
    <section id="timeline" className="border-b border-stone-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-stone-900">Timeline &amp; Engagement</h2>
        <p className="mt-6 text-stone-600 leading-relaxed max-w-3xl">
          The {site.campusName} is currently advancing through state and local environmental review.
          A formal public comment period opens{' '}
          <strong className="text-stone-900">{site.publicCommentStart}</strong> and closes{' '}
          <strong className="text-stone-900">{site.publicCommentEnd}</strong>. Open-house sessions
          will be scheduled at venues across the island during the comment window, with details
          posted to this page as they are confirmed. Written comments may be submitted to the
          Community Liaison at any time.
        </p>
        <div className="mt-10 border border-stone-200 rounded-xl p-8 max-w-xl bg-stone-50">
          <p className="text-sm font-medium text-stone-500 uppercase tracking-wider">
            Public Comment Window
          </p>
          <p className="mt-2 text-2xl font-semibold text-stone-900">
            {site.publicCommentStart} – {site.publicCommentEnd}
          </p>
          <p className="mt-3 text-stone-600 text-sm">
            Written comments may be submitted to{' '}
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-stone-900 underline underline-offset-2 hover:text-stone-700"
            >
              {site.contactEmail}
            </a>{' '}
            at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
