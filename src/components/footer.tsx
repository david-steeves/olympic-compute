// src/components/footer.tsx
import { Logo } from './logo';
import { site } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200 bg-stone-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <Logo className="text-stone-900" />
          <p className="mt-3 text-sm text-stone-500">
            Building responsible compute infrastructure across the Pacific Northwest.
          </p>
        </div>
        <div className="text-sm text-stone-600">
          <p className="font-medium text-stone-900">Headquarters</p>
          <p className="mt-2">{site.hqCity}</p>
          <p className="mt-1">
            <a href={`mailto:${site.contactEmail}`} className="hover:text-stone-900">
              {site.contactEmail}
            </a>
          </p>
        </div>
        <div className="text-sm text-stone-600">
          <p className="font-medium text-stone-900">Battle Point Campus</p>
          <p className="mt-2">Public comment open</p>
          <p>{site.publicCommentStart} – {site.publicCommentEnd}</p>
        </div>
      </div>
      <div className="border-t border-stone-200 py-4 text-center text-xs text-stone-500">
        <p>© 2026 {site.company}, LLC. All rights reserved.</p>
        <p className="mt-1">Engineered from the Salish Sea.</p>
      </div>
    </footer>
  );
}
