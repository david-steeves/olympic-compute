import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Olympic Compute Group — Battle Point Campus',
  description:
    'Olympic Compute Group is developing a next-generation AI compute campus at Battle Point Park on Bainbridge Island, Washington.',
  openGraph: {
    title: 'Olympic Compute Group — Battle Point Campus',
    description:
      'Now under environmental review: a next-generation AI compute campus on Bainbridge Island, Washington.',
    type: 'website',
    siteName: 'Olympic Compute Group',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
