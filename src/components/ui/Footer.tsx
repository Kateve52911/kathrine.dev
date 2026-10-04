/*'use client'
import { usePathname } from 'next/navigation'*/

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="flex flex-col items-center p-5 my-5">
      <div className="flex gap-8 p-4">
        <Link href="https://github.com/Kateve52911" className="flex gap-2">
          <Image
            src="/icons/github.svg"
            width={25}
            height={25}
            alt="Black LinkedIn logo"
          />
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/kathrine-mellem-evensen-6855b612b/"
          className="flex gap-2"
        >
          <Image
            src="/icons/InBug-Black.png"
            width={25}
            height={25}
            alt="Black LinkedIn logo"
          />
          LinkedIn
        </Link>
      </div>
      <div>
        <p>
          &copy; {new Date().getFullYear()} Kathrine Mellem Evensen. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
