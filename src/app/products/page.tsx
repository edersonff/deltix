"use client";

import Header from "@/components/header";
import LocomotiveProvider from "@/providers/locomotive";
import Image from "next/image";
import React from "react";

// public/images/illustrations/montains/bg.svg public/images/illustrations/montains/clouds.svg public/images/illustrations/montains/mountain-1.svg public/images/illustrations/montains/mountain-2.svg public/images/illustrations/montains/mountain-3.svg public/images/illustrations/montains/mountain-4.svg public/images/illustrations/montains/mountain-5.svg public/images/illustrations/montains/sun.svg

export default function Products() {
  return (
    <LocomotiveProvider>
      <main className="">
        <section data-scroll-section className="h-screen relative">
          <Header style="white" />

          <Image
            src="/images/illustrations/montains/bg.svg"
            alt="Background montains Illustration"
            layout="fill"
            objectFit="cover"
            className="absolute -z-50"
          />

          <Image
            src="/images/illustrations/montains/clouds.svg"
            alt="Clouds Illustration"
            width={1920}
            height={1080 / 2}
            className="absolute -z-50 top-0 left-0"
            data-scroll
            data-scroll-speed="1"
            data-scroll-position="top"
          />

          <Image
            src="/images/illustrations/montains/mountain-1.svg"
            alt="Mountain Illustration"
            width={1920}
            height={1080 / 3}
            className="absolute -z-10 bottom-0 left-0"
            data-scroll
            data-scroll-speed="10"
            data-scroll-position="top"
          />

          <Image
            src="/images/illustrations/montains/mountain-2.svg"
            alt="Mountain Illustration"
            width={1920}
            height={1080 / 3}
            className="absolute -z-[11] bottom-0 left-0"
            data-scroll
            data-scroll-speed="8"
            data-scroll-position="top"
          />

          <Image
            src="/images/illustrations/montains/mountain-3.svg"
            alt="Mountain Illustration"
            width={1920}
            height={1080 / 3}
            className="absolute -z-[12] bottom-0 right-0"
            data-scroll
            data-scroll-speed="6"
            data-scroll-position="top"
          />

          <Image
            src="/images/illustrations/montains/mountain-4.svg"
            alt="Mountain Illustration"
            width={1920}
            height={1080 / 3}
            className="absolute -z-[13] bottom-0 right-0"
            data-scroll
            data-scroll-speed="2"
            data-scroll-position="top"
          />

          <Image
            src="/images/illustrations/montains/mountain-5.svg"
            alt="Mountain Illustration"
            width={1920}
            height={1080 / 3}
            className="absolute -z-[14] bottom-0 right-0"
            data-scroll
            data-scroll-speed="1"
            data-scroll-position="top"
          />

          <Image
            src="/images/illustrations/montains/sun.svg"
            alt="Sun Illustration"
            width={500}
            height={500}
            className="absolute -z-[15] -top-[10%] right-[10%]"
            data-scroll
            data-scroll-speed="1"
            data-scroll-position="top"
          />
        </section>
        <section className="h-screen"></section>
      </main>
    </LocomotiveProvider>
  );
}
