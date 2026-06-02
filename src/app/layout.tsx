import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://olympic-compute.vercel.app'),
  title: 'Olympic Compute Group — Battle Point Campus',
  description:
    'Olympic Compute Group is developing a next-generation AI compute campus at Battle Point Park on Bainbridge Island, Washington.',
  openGraph: {
    title: 'Olympic Compute Group — Battle Point Campus',
    description:
      'Now under environmental review: a next-generation AI compute campus on Bainbridge Island, Washington.',
    type: 'website',
    siteName: 'Olympic Compute Group',
    url: 'https://olympic-compute.vercel.app',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olympic Compute Group — Battle Point Campus',
    description:
      'Now under environmental review: a next-generation AI compute campus on Bainbridge Island.',
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
      <body className="min-h-full flex flex-col">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
