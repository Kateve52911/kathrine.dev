'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex p-4 content-end items-end justify-between bg-bg fixed top-0 left-0 right-0 z-50">
      <div>
        <Link href="/" className="font-logo text-3xl">
          Kathrine.dev
        </Link>
      </div>
      <div className="flex content-end gap-4">
        <Link href="#projects">Projects</Link>
        <Link href="#about">About</Link>
        <Link href="#timeline">CV</Link>
      </div>
    </div>
  );
}
