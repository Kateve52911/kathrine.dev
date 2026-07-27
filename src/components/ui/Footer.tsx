/*'use client'
import { usePathname } from 'next/navigation'*/

import Link from "next/link";
import { Mail } from 'lucide-react'
import Image from "next/image";

export default function Footer() {
    return (
        <div className={`flex flex-col items-center p-5`}>
            <div className={`flex gap-8 p-4`}>
                <Link href="https://github.com/Kateve52911">Github</Link>
                <Link href="https://www.linkedin.com/in/kathrine-mellem-evensen-6855b612b/" className={`flex gap-2`}> <Image    src="/icons/InBug-Black.png"
                                                                                                       width={25}
                                                                                                       height={23}
                                                                                                       alt="Black LinkedIn logo"/> LinkedIn</Link>
                <Link href="mailto:kathrine.evensen@proton.me" className={`flex gap-2`}><Mail />Email</Link>
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} Kathrine Mellem Evensen. All rights reserved.</p>
            </div>
        </div>
    )
}