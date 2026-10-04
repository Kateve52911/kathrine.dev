import type { Metadata } from 'next';
import './globals.css';
import { Inter, Playfair_Display, Figtree } from 'next/font/google';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

import { cn } from '@/lib/utils';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Kathrine.dev',
  description: 'My personal website',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        playfair.variable,
        'font-sans',
        figtree.variable
      )}
    >
      <body>
        <div className="flex flex-col min-h-screen w-screen px-6 py-6">
          <Header />
          <div className={`px-10 flex-1`}>
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
