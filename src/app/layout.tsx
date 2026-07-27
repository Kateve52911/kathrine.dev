import type { Metadata } from 'next';
import './globals.css';
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Kathrine.dev',
    description: 'My personal website',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body>
      <header>
          <nav>
              <Link href="/">Home</Link> | <Link href="/projects">Projects</Link>
          </nav>
      </header>
      <main>{children}</main></body>
      </html>
  )
}