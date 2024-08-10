"use client";

import Image from "next/image";
import Loading from "./loading";
import Link from "next/link";
import { pages } from "@/theme/navigation";
import { social } from "@/theme/social";
import Noise from "@/components/noise";
import { motion } from "framer-motion";
import { categories } from "@/theme/categories";
import LottieReact from "@/components/lottie";
import Category from "@/components/Category";
import Draggable from "react-draggable"; // The default
import { transition } from "@/theme/animation";
import Laptop from "@/components/Laptop";
import ProjectsSection from "@/sections/projects";
import LocomotiveProvider from "@/providers/locomotive";

export default function Home() {
  return (
    <LocomotiveProvider>
      <Loading isComponent={true} />
      <main data-scroll-container>
        <Noise
          data-scroll-section
          image="static-hero"
          className="min-h-screen bg-gradient-to-b from-neutral-800 to-neutral-950"
        >
          <header className="w-full py-10">
            <div className="content flex items-center justify-between">
              <Link href="/">
                <Image
                  src="/deltix/logo-blue.svg"
                  alt="Deltix Logo"
                  width={150}
                  height={30}
                  priority
                />
              </Link>

              <nav className="flex items-center">
                {pages.map(({ href, label }, index) => (
                  <Link
                    key={index}
                    href={href}
                    className="bg-gradient-to-b from-white to-neutral-500 hover:to-primary text-clip font-play font-bold uppercase text-sm text-center px-5 py-3 relative group"
                  >
                    <div className="unselectable undraggable absolute top-1/2 -translate-y-1/2 left-0 scale-y-0 translate-x-2 group-hover:x-[-scale-y-100,translate-x-0,delay-0] delay-100 transition-transform duration-300 ease-in-out">
                      <Image
                        src="/images/icons/selector.svg"
                        alt="Arrow"
                        width={10}
                        height={10}
                        priority
                        className=""
                      />
                    </div>
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center">
                {social.map(({ href, icon, label, size }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank"
                    className="p-2.5 hover:opacity-75"
                  >
                    <Image
                      src={`/images/social/${icon}`}
                      alt={label}
                      width={size}
                      height={size}
                      priority
                    />
                  </Link>
                ))}
              </div>
            </div>
          </header>

          <section className="mt-[6%] mb-[2%]">
            <div className="content flex items-center small:flex-col">
              <div className="flex-1">
                <h2 className="font-source-code-pro text-8xl font-extrabold uppercase mb-5 text-neutral-900">
                  <span className="bg-gradient-to-b from-white to-neutral-500 text-clip">
                    WE MAKE
                  </span>
                  <Image
                    src="/images/icons/crown.svg"
                    alt="Crown"
                    width={90}
                    height={90}
                    priority
                    className="unselectable undraggable inline-block ml-4 -mt-4"
                  />
                  <br />
                  <span className="text-glass text-clip-stroke">Softwares</span>
                  <Image
                    src="/images/icons/exclaimation.svg"
                    alt="Exclaimation"
                    width={90}
                    height={90}
                    priority
                    className="unselectable undraggable inline-block ml-0 -mt-4"
                  />
                </h2>
                <p className="text-xs font-medium text-neutral-400 leading-[250%] max-w-main-5 relative z-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </p>
                <div className="flex gap-main mt-28 relative z-10">
                  <Link
                    href="#"
                    role="button"
                    className="flex-3 max-w-main-3 bg-gradient-to-b from-primary to-secondary text-white font-bold uppercase text-sm text-center px-5 py-3 relative group rounded-full"
                  >
                    Let&apos;s Code
                  </Link>
                  <Link
                    href="#"
                    role="button"
                    className="flex-2 max-w-main-2 text-glass text-stone-900 font-bold uppercase text-sm text-center px-5 py-3 relative group rounded-full"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
              <Laptop />
            </div>
          </section>

          <div className="absolute bottom-[5%] w-full overflow-hidden">
            <div className="content flex flex-wrap justify-between">
              {categories.map((category, index) => (
                <Category key={index} {...category} />
              ))}
            </div>
          </div>
        </Noise>

        <Noise
          data-scroll-section
          image="static-hero"
          className="min-h-screen flex bg-neutral-950"
        >
          <div className="content relative flex-center flex-1">
            <div
              data-scroll
              data-scroll-speed="4"
              className="flex-center relative -z-10"
            >
              <Image
                src="/images/texts/projects.svg"
                alt="Projects"
                width={700}
                height={300}
                priority
                className="unselectable undraggable inline-block relative z-0 "
              />
              <div className="absolute min-w-[380px] h-[1px] -z-20 bg-transparent shadow-[0px_0px_600px_100px_rgb(7,214,242,0.75)] mix-blend-color-dodge" />
            </div>

            <Draggable>
              <div
                data-scroll
                data-scroll-speed="1"
                className="absolute top-10 left-20 z-10 bg-black/40 backdrop-blur-xl rounded-xl"
              >
                <Image
                  src="/images/terminals/terminal-2.svg"
                  alt="Terminal"
                  width={350}
                  height={152}
                  priority
                  className="opacity-40 unselectable undraggable"
                />
                {/* prettier-ignore */}
                <pre className="absolute top-[20%] left-1 z-10 text-[10px] font-source-code-pro leading-none font-extrabold text-primary">
        
        {"\n"} _   _      _ _         _    _            _     _ _ 
        {"\n"}| | | |    | | |       | |  | |          | |   | | |
        {"\n"}| |_| | ___| | | ___   | |  | | ___  _ __| | __| | |
        {"\n"}|  _  |/ _ \ | |/ _ \  | |/\| |/ _ \| &apos;__| |/ _` | |
        {"\n"}| | | |  __/ | | &#40;_&#41; | \  /\  / &#40;_&#41; | |  | | &#40;_| |_|
        {"\n"}\_| |_/\___|_|_|\___/   \/  \/ \___/|_|  |_|\__,_&#40;_&#41;
        </pre>
              </div>
            </Draggable>

            <Draggable>
              <div
                data-scroll
                data-scroll-speed="2"
                className="absolute z-20 top-[15%] left-[25%] bg-black/40 backdrop-blur-xl rounded-xl"
              >
                <Image
                  src="/images/terminals/terminal-1.svg"
                  alt="Terminal"
                  width={350}
                  height={152}
                  priority
                  className="opacity-40 unselectable undraggable"
                />
                <p className="absolute top-[30%] left-1 z-10 leading-[150%] text-sm font-source-code-pro w-full pr-5 text-primary">
                  A vibrant testing ground to experiment with ideas, encouraging
                  creativity and risk-taking.
                </p>
              </div>
            </Draggable>

            <Draggable>
              <div
                data-scroll
                data-scroll-speed="1"
                className="absolute bottom-[10%] left-10 z-30 bg-black/40 backdrop-blur-xl rounded-xl"
              >
                <Image
                  src="/images/terminals/terminal-3.svg"
                  alt="Terminal"
                  width={500}
                  height={253}
                  priority
                  className="opacity-40 unselectable undraggable"
                />
                <div className="absolute top-[20%] left-1 z-10 text-primary text-[10px]">
                  {/* prettier-ignore */}
                  <pre className="leading-none font-extrabold">
        
        {"\n"} /$$$$$$$  /$$$$$$$$ /$$      /$$             /$$     /$$      
        {"\n"}| $$__  $$|__  $$__/| $$$    /$$$            | $$    | $$      
        {"\n"}| $$  \ $$   | $$   | $$$$  /$$$$  /$$$$$$  /$$$$$$  | $$$$$$$ 
        {"\n"}| $$$$$$$/   | $$   | $$ $$/$$ $$ |____  $$|_  $$_/  | $$__  $$
        {"\n"}| $$__  $$   | $$   | $$  $$$| $$  /$$$$$$$  | $$    | $$  \ $$
        {"\n"}| $$  \ $$   | $$   | $$\  $ | $$ /$$__  $$  | $$ /$$| $$  | $$
        {"\n"}| $$  | $$   | $$   | $$ \/  | $$|  $$$$$$$  |  $$$$/| $$  | $$
        {"\n"}|__/  |__/   |__/   |__/     |__/ \_______/   \___/  |__/  |__/
        </pre>
                  <p className="leading-[150%] text-sm font-source-code-pro w-full mt-4 pr-4">
                    Do math, machine learning, math optimization in real-time.
                    feed Products join about
                  </p>
                </div>
              </div>
            </Draggable>

            <Draggable>
              <div
                data-scroll
                data-scroll-speed="2"
                className="absolute z-20 bottom-[15%] right-[0%] bg-black/40 backdrop-blur-xl rounded-xl"
              >
                <Image
                  src="/images/terminals/terminal-1.svg"
                  alt="Terminal"
                  width={350}
                  height={152}
                  priority
                  className="opacity-40 unselectable undraggable"
                />
                <p className="absolute top-[30%] left-1 z-10 leading-[150%] text-sm font-source-code-pro w-full pr-5 text-primary">
                  A place to share inspiration, conduct research, build
                  prototypes, and launch successful products.
                </p>
              </div>
            </Draggable>
          </div>
        </Noise>

        <div
          data-scroll-section
          data-scroll-direction="horizontal"
          className="min-h-screen flex bg-neutral-950"
        >
          <ProjectsSection />
        </div>
      </main>
    </LocomotiveProvider>
  );
}
