import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="m-10 scroll-mt-20">
      <h2 className="text-4xl p-2 flex justify-center">About me:</h2>
      <div className="flex flex-col md:flex-row gap-6 items-start my-8">
        <Image
          src="/images/Kathrine.jpeg"
          alt="A woman with sunglasses smiling at the camera with a fjord inn the background"
          className="w-3xs rounded"
        />
        <div className="space-y-4">
          <p>
            I`&apos`m Kathrine, a frontend developer who spent six years
            teaching young children before falling for building things on the
            web. Teaching taught me to explain complex things simply, stay calm,
            plan carefully, and always think about the people on the other end,
            which is exactly why I care so much about accessibility and
            intuitive design.
          </p>
          <p>
            My degrees in Classics and History gave me a habit of careful
            research and an eye for detail. I`&apos`m currently studying
            Frontend Development at Noroff, graduating in March 2027. I build
            projects with React, Next.js, Tanstack, TypeScript and Vite, and
            I`&apos`ve added testing with Vitest and Playwright.
          </p>
          <p>
            Away from the keyboard, you`&apos`ll find me knitting, hiking, or
            making coffee (I used to be a barista, so I`&apos`m picky).
          </p>
          <p>
            I`&apos`m open to junior frontend roles and internships from 2027.
          </p>
        </div>
      </div>
    </section>
  );
}
