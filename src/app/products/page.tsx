"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Product from "@/components/product";
import LocomotiveProvider from "@/providers/locomotive";
import { products } from "@/theme/products";
import Image from "next/image";
import React from "react";

export default function Products() {
  return (
    <LocomotiveProvider>
      <main className="bg-[#1e1f3a]">
        <section
          data-scroll-section
          className="h-screen small:h-[50vh] relative"
        >
          <Header style="white" />
          <div className="absolute text-white/50 -z-40 top-[20%] flex-center w-full">
            <div className="content w-full">
              <h2 className="font-source-code-pro backdrop-blur-lg">
                <span className="text-4xl">Our</span>
                <span className="text-9xl small:text-6xl font-black">
                  Products
                </span>
              </h2>
            </div>
          </div>

          <Image
            src="/images/illustrations/montains/bg.svg"
            alt="Background montains Illustration"
            layout="fill"
            className="absolute -z-50 object-cover"
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

          <div
            className="absolute -z-10 top-0 left-0"
            data-scroll
            data-scroll-speed="15"
            data-scroll-position="top"
          >
            <div className="h-screen flex items-end">
              <Image
                src="/images/illustrations/montains/mountain-1.svg"
                alt="Mountain Illustration"
                width={1920}
                height={1080 / 3}
              />
            </div>
            <div className="min-h-[200svh] w-full bg-[#1e1f3a]"></div>
          </div>

          <Image
            src="/images/illustrations/montains/mountain-2.svg"
            alt="Mountain Illustration"
            width={1920}
            height={1080 / 3}
            className="absolute -z-[11] bottom-0 left-0"
            data-scroll
            data-scroll-speed="10"
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
            data-scroll-speed="3"
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

        <section data-scroll-section className="relative z-50">
          <div data-scroll data-scroll-speed="10" data-scroll-position="top">
            {products.map((product, index) => (
              <Product key={index} {...product} />
            ))}
          </div>
        </section>
      </main>

      <section data-scroll-section className="relative z-50">
        <Footer />
      </section>
    </LocomotiveProvider>
  );
}
