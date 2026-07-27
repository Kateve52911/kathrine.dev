/*'use client'
import { usePathname } from 'next/navigation'*/

import Link from "next/link";

export default function Footer() {
    return (
        <div className={`flex justify-center items-center p-5`}>
            <div>
                <Link href="https://github.com/Kateve52911">Github</Link>
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} Kathrine Mellem Evensen. All rights reserved.</p>
            </div>
        </div>
    )
}