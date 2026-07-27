import type { Metadata } from 'next';
import './globals.css';
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";


export const metadata: Metadata = {
    title: 'Kathrine.dev',
    description: 'My personal website',
};


const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
        <body>
        <div className="flex flex-col h-screen w-screen">
            <Header />
            <main>{children}</main>
            <Footer /></div>
        </body>
        </html>
    );
}