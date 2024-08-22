"use client";

import Header from "@/components/header";
import LocomotiveProvider from "@/providers/locomotive";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

export default function JoinUs() {
  return (
    <LocomotiveProvider>
      <main className="">
        <div className="fixed-full -z-50 bg-white"></div>
        <section className="min-h-[92vh] relative" data-scroll-section>
          <div className="absolute -z-10 h-full w-[50%] bg-gradient-to-r from-black to-black/0" />
          <div className="absolute -z-10 h-[22%] w-full bg-gradient-to-b from-black to-black/0" />
          <div className="absolute-full bg-primary/50 mix-blend-soft-light -z-10" />

          <Header style="white" />

          <div className="absolute w-full mt-[10%]">
            <div className="content">
              <div className="max-w-main-6">
                <h1
                  id="test"
                  className="text-8xl small:text-6xl mb-3 font-source-code-pro font-extrabold text-white/80"
                >
                  Carrers
                </h1>
                <p className="text-neutral-400 text-sm small:text-[10px] leading-[200%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
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
        </section>
        <section data-scroll-section className="relative w-full">
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            className="flex opacity-50"
          >
            <h2
              className="text-[200px] small:text-[150px] whitespace-nowrap font-source-code-pro leading-[100%] text-stroke font-extrabold uppercase text-black/5"
              style={{
                WebkitTextStroke: "2px #000",
              }}
            >
              Softwares apps websites design
            </h2>
          </div>
          {/* <div className="absolute top-0 left-0 w-full h-full flex  flex-col justify-between overflow-hidden opacity-50">
          </div> */}
        </section>
        <section className="py-[15%]" data-scroll-section>
          <div className="flex gap-main items-center small:flex-col content text-secondary">
            <div className="flex-1 relative flex gap-7 items-center">
              <div className="absolute z-20  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="border border-primary p-4">
                  <div className="bg-primary px-6 pr-1 py-5 flex-center ">
                    <h2 className="font-bold text-6xl text-right">
                      <CountUp enableScrollSpy end={20} duration={5} />+
                    </h2>
                    <p className="font-light">Years Of experience</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <Image
                  src="/images/stock/welcome-1.jpg"
                  alt="Welcome to Deltix Solutions 1"
                  width={500}
                  height={500}
                  priority
                  data-scroll
                  data-scroll-speed="-2"
                />
              </div>
              <div className="flex flex-col gap-7">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/stock/welcome-2.jpg"
                    alt="Welcome to Deltix Solutions 2"
                    width={500}
                    height={500}
                    priority
                    data-scroll
                    data-scroll-speed="-2"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/stock/welcome-3.jpg"
                    alt="Welcome to Deltix Solutions 3"
                    width={500}
                    height={500}
                    priority
                    data-scroll
                    data-scroll-speed="-2"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 text-sm small:text-xs">
              <p className="text-2xl small:text-lg font-semibold mb-3">
                Welcome To <span className="text-primary">Deltix</span>{" "}
                Solutions
              </p>
              <h3 className="text-[40px] small:text-2xl leading-[100%] font-bold font-play mb-4">
                Bringing People Together Through{" "}
                <span className="text-primary">The Power Of Technology</span>
              </h3>
              <p className="font-medium text-neutral-600 leading-[200%]  mb-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut{" "}
              </p>

              <div className="flex justify-between gap-x-main mb-5">
                <div className="flex-1">
                  <h4 className="font-extrabold text-[42px] small:text-3xl mb-2">
                    <CountUp end={500} duration={5} />M
                    <span className="text-primary">+</span>
                  </h4>
                  <p className="text-neutral-600 max-w-2/3 mb-4 leading-[200%]">
                    Downloads, or 6% of the world’s population.
                  </p>
                  <hr className="border-primary w-[45%]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-extrabold text-[42px] small:text-3xl mb-2">
                    <CountUp end={2} duration={5} />M
                    <span className="text-primary">+</span>
                  </h4>
                  <p className="text-neutral-600 max-w-2/3 mb-4 leading-[200%]">
                    Our softwares have over 20 million unique daily users.
                  </p>
                  <hr className="border-primary w-[45%]" />
                </div>
              </div>

              <div className="flex justify-between gap-x-main">
                <div className="flex-1">
                  <h4 className="font-extrabold text-[42px] small:text-3xl mb-2">
                    <CountUp end={52} duration={5} />
                    <span className="text-primary">+</span>
                  </h4>
                  <p className="text-neutral-600 max-w-2/3 mb-4 leading-[200%]">
                    Experts collaborating to blow your mind in one place.
                  </p>
                  <hr className="border-primary w-[45%]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-extrabold text-[42px] small:text-3xl mb-2">
                    <CountUp end={2} duration={5} />K
                    <span className="text-primary">+</span>
                  </h4>
                  <p className="text-neutral-600 max-w-2/3 mb-4 leading-[200%]">
                    Our softwares have over 4K unique daily users.
                  </p>
                  <hr className="border-primary w-[45%]" />
                </div>
              </div>

              <div className="w-full mt-12">
                <Link
                  href="#"
                  role="button"
                  className="max-w-main-3 bg-primary text-secondary text-center px-6 py-3 relative group rounded-md"
                >
                  Explore Our Softwares
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section data-scroll-section>
          <div className="min-h-[80vh] flex small:flex-col">
            <div className="relative overflow-hidden flex-1 min-h-96">
              <Image
                src="/images/stock/about-1.jpg"
                alt="About Deltix Solutions 1"
                layout="fill"
                objectFit="cover"
                data-scroll
                data-scroll-speed="-4"
              />
            </div>
            <div className="flex-1 flex-center big:text-center text-secondary">
              <div className="px-[5%] small:py-[15%]">
                <p className="text-2xl small:text-lg font-semibold mb-3">
                  <span className="text-primary">Deltix</span> Solutions
                </p>
                <h3 className="text-[40px] small:text-2xl leading-[100%] font-bold font-play mb-6">
                  Bringing People Together Through{" "}
                  <span className="text-primary">The Power Of Technology</span>
                </h3>
                <p className="font-medium text-neutral-600 leading-[200%] text-sm small:text-xs mb-7 mx-auto big:max-w-[70%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="min-h-[80vh] flex flex-row-reverse small:flex-col">
            <div className="relative overflow-hidden flex-1 min-h-96">
              <Image
                src="/images/stock/about-2.jpg"
                alt="About Deltix Solutions 1"
                layout="fill"
                objectFit="cover"
                data-scroll
                data-scroll-speed="-4"
              />
            </div>
            <div className="flex-1 flex-center big:text-center text-secondary">
              <div className="px-[5%] small:py-[15%]">
                <p className="text-2xl small:text-lg font-semibold mb-3">
                  <span className="text-[#C7802E]">Deltix</span> Solutions
                </p>
                <h3 className="text-[40px] small:text-2xl font-bold font-play mb-6">
                  Bringing People Together Through{" "}
                  <span className="text-[#C7802E]">
                    The Power Of Technology
                  </span>
                </h3>
                <p className="font-medium text-neutral-600 leading-[200%] text-sm small:text-xs mb-7 mx-auto big:max-w-[70%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="min-h-[80vh] flex small:flex-col">
            <div className="relative overflow-hidden flex-1 min-h-96">
              <Image
                src="/images/stock/about-3.jpg"
                alt="About Deltix Solutions 3"
                layout="fill"
                objectFit="cover"
                data-scroll
                data-scroll-speed="-4"
              />
            </div>
            <div className="flex-1 flex-center big:text-center text-secondary">
              <div className="px-[5%] small:py-[15%]">
                <p className="text-2xl small:text-lg font-semibold mb-3">
                  <span className="text-[#FFDB63]">Deltix</span> Solutions
                </p>
                <h3 className="text-[40px] small:text-2xl font-bold font-play mb-6">
                  Bringing People Together Through{" "}
                  <span className="text-[#FFDB63]">
                    The Power Of Technology
                  </span>
                </h3>
                <p className="font-medium text-neutral-600 leading-[200%] text-sm small:text-xs mb-7 mx-auto big:max-w-[70%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section data-scroll-section className="bg-stone-50 py-14">
          <h2 className="text-secondary font-bold text-center mb-16">
            Position We Hire For
          </h2>
          <div className="content">
            <div className="flex flex-wrap justify-center gap-5">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="flex-[calc(33.3333%-1rem)] max-w-[50%] min-h-36 p-4 bg-white text-neutral-400 border border-gray-200 "
                >
                  <div className="flex flex-col items-start h-full justify-between">
                    <div>
                      <Image
                        src="/deltix/logo.svg"
                        alt="Deltix Solutions"
                        width={100}
                        height={100}
                        priority
                        className="mb-2.5"
                      />
                      <h3 className="font-light">Web Software Engineer</h3>
                    </div>

                    <Link
                      href="#"
                      className="text-[10px] font-bold hover:text-primary"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </LocomotiveProvider>
  );
}
