"use client";

import Header from "@/components/header";
import Image from "next/image";
import React from "react";

export default function JoinUs() {
  return (
    <main data-scroll-container className="">
      <section className="min-h-[92vh] relative">
        <div className="absolute -z-10 h-full w-[50%] bg-gradient-to-r from-black to-black/0" />
        <div className="absolute -z-10 h-[22%] w-full bg-gradient-to-b from-black to-black/0" />
        <div className="absolute-full bg-primary/50 mix-blend-soft-light -z-10" />

        <Header style="white" />

        <div className="absolute w-full mt-[10%]">
          <div className="content">
            <div className="max-w-main-6">
              <h1 className="text-8xl mb-3 font-source-code-pro font-extrabold text-white/80">
                Carrers
              </h1>
              <p className="text-neutral-400 text-sm leading-[200%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut
              </p>
            </div>
          </div>
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute-full object-cover -z-20 object-[0px,-30] "
          src="/videos/join-us.mp4"
        />
        <div className="absolute bottom-0 w-full">
          <Image
            src="/images/illustrations/fade.svg"
            alt="Fade"
            width={1920}
            height={30}
            priority
            className="unselectable undraggable"
          />
        </div>
      </section>
    </main>
  );
}
