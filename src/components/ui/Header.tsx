'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()
    return (
        <div className="flex p2 content-end items-end justify-between">
            <div>

                <Link href="/" className="font-logo text-3xl">Kathrine.dev</Link>
            </div>
            <div className="flex content-end gap-4">
                <Link href="/about" className={` ${pathname === '/about'? 'font-bold' : 'hover:border-b-2 border-plum'}`}>About</Link>
                <Link href="/projects" className={` ${pathname === '/projects'? 'font-bold' : 'hover:border-b-2 border-plum'}`}>Projects</Link>
                <Link href="/contact" className={` ${pathname === '/contact'? 'font-bold' : 'hover:border-b-2 border-plum'}`}>Contact</Link>
            </div>

        </div>
    )
}