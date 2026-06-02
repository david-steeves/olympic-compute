// src/components/logo.tsx
import { site } from '@/lib/site-config';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label={site.company}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 26 L12 10 L16 18 L20 6 L28 26 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="font-semibold tracking-tight">{site.company}</span>
    </div>
  );
}
