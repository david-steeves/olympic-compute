// src/app/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Olympic Compute Group — Battle Point Campus';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 80,
          backgroundColor: '#1a2a22',
          backgroundImage:
            'linear-gradient(135deg, #1a2a22 0%, #2a4a3a 50%, #4a6a55 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 24, opacity: 0.7, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Olympic Compute Group
        </div>
        <div style={{ fontSize: 72, fontWeight: 600, marginTop: 16, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          A new home for the Pacific Northwest's AI future.
        </div>
        <div style={{ fontSize: 28, opacity: 0.8, marginTop: 24 }}>
          Battle Point Campus · Bainbridge Island, WA
        </div>
      </div>
    ),
    size,
  );
}
