import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaDiscord, FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="overflow-hidden py-[5%] flex-center relative bg-fixed bg-[length:100%] bg-no-repeat bg-center big:hover:bg-[length:104%] small:bg-cover transition-all duration-1000">
        <Image
          width={1920}
          height={1080}
          src="/images/stock/footer.jpg"
          alt="Footer"
          data-scroll
          data-scroll-speed="-1"
          data-scroll-position="bottom"
          className="absolute inset-0 w-full h-[50vh] top-0 object-cover group-hover:scale-[1.05]"
        />
        <Link href="#sobre" className="cursor-pointer group">
          <div className="absolute-full bg-primary/90 group-hover:bg-primary/70 transition-all " />
          <div className="py-[5%] flex-center flex-col relative z-30">
            <h3 className="font-play text-2xl mb-6">We build software</h3>
            <button className="px-7 py-3 text-sm border border-white relative overflow-hidden">
              HIRE US
              <div className="absolute bg-white right-0 top-0 h-full w-0 flex-center transition-all ease-in-out duration-500 group-hover:w-full overflow-hidden">
                <span className="text-primary whitespace-nowrap break-before-avoid font-semibold px-4">
                  HIRE US
                </span>
              </div>
            </button>
          </div>
        </Link>
      </div>
      <footer className="content-container bg-gradient-to-b from-black/0 to-black text-white small:pb-10">
        <h2 className="hidden">Footer</h2>
        <div className="mx-auto w-full content px-24 p-4 py-10 pt-16 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 small:mb-10">
              <Link href="#" className="flex items-start gap-main flex-col">
                <Image
                  src="/deltix/logo.svg"
                  alt="Logo"
                  width={150}
                  height={75}
                />
                <p className="text-[10px] leading-[200%] text-gray-600 max-w-main-3">
                  Deltix, Inc. is headquartered in Natick, MA, United States.
                  Founded in 2005, and with 65 staff
                </p>
              </Link>
            </div>

            <div className="flex gap-main">
              <div className="min-w-main-2">
                <div className="mb-6">
                  <h3 className="mb-3 text-sm font-bold text-neutral-200">
                    Products
                  </h3>
                  <ul className="text-neutral-100 flex flex-col gap-1.5">
                    {["Web", "App", "Software", "Eccomerce"].map((item) => (
                      <li key={item}>
                        <Link
                          href={`#${item.toLowerCase()}`}
                          className="hover:underline text-sm !text-neutral-100"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="mb-3 text-sm font-bold text-neutral-200">
                    Services
                  </h3>
                  <ul className="text-neutral-100 flex flex-col gap-1.5">
                    {["Design", "Development"].map((item) => (
                      <li key={item}>
                        <Link
                          href={`#${item.toLowerCase()}`}
                          className="hover:underline text-sm !text-neutral-100"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="min-w-main-2">
                <div className="mb-6">
                  <h3 className="mb-3 text-sm font-bold text-neutral-200">
                    Products
                  </h3>
                  <ul className="text-neutral-100 flex flex-col gap-1.5">
                    {["Web", "App", "Software", "Eccomerce"].map((item) => (
                      <li key={item}>
                        <Link
                          href={`#${item.toLowerCase()}`}
                          className="hover:underline text-sm !text-neutral-100"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="mb-3 text-sm font-bold text-neutral-200">
                    Services
                  </h3>
                  <ul className="text-neutral-100 flex flex-col gap-1.5">
                    {["Design", "Development"].map((item) => (
                      <li key={item}>
                        <Link
                          href={`#${item.toLowerCase()}`}
                          className="hover:underline text-sm !text-neutral-100"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h4 className="font-bold text-sm mb-1">Get in Touch</h4>

                <div className="flex items-center">
                  {[
                    {
                      icon: (
                        <div className="p-[2px] pr-[3px] pt-[3px] rounded-full border">
                          <FaTelegramPlane className="text-xs" />
                        </div>
                      ),
                      href: "#",
                    },
                    {
                      icon: <CiLinkedin className="text-2xl" />,
                      href: "#",
                    },
                    {
                      icon: (
                        <div className="p-0.5 rounded-full border">
                          <FaDiscord className="text-sm" />
                        </div>
                      ),
                      href: "#",
                    },
                    {
                      icon: <VscGithub className="text-[19px]" />,
                      href: "#",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      className="text-neutral-100 hover:text-white hover:border-white hover:bg-primary/20 transition-all rounded-full p-1.5"
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>

              <h3 className="font-bold text-sm mb-3">Subscribe</h3>
              <div className="flex gap-2.5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-2.5 py-2 border rounded-full border-neutral-700 text-neutral-800 text-xs"
                />
                <button className="px-4 py-2 text-xs font-bold rounded-full bg-primary text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <hr className="my-6 border-neutral-700 sm:mx-auto  lg:my-8" />
          <p className="text-xs text-center">
            © {year !== 2024 ? year + "-" : null}
            {year}{" "}
            <Link href="/" className="text-neutral-200 hover:underline text-sm">
              Deltix, All right reserved.
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
