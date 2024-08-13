import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

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
          data-scroll-position="bottom                                       "
          className="absolute inset-0 w-full h-[50vh] top-0 object-cover"
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
      <footer className="content-container bg-gradient-to-b from-neutral-900 to-black text-white small:pb-10">
        <h2 className="hidden">Footer</h2>
        <div className="mx-auto w-full content px-24 p-4 py-10 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 small:mb-10">
              <Link href="#" className="flex items-start gap-2 flex-col">
                <Image
                  src="/images/deltix/logo.svg"
                  alt="Logo"
                  width={75}
                  height={75}
                />
                <p className="font-semibold text-neutral-200">
                  Deltix Software
                </p>
              </Link>
            </div>
            <div className="grid small:-order-1 grid-cols-2 gap-14">
              <div>
                <h3 className="mb-7 small:mb-4 text-sm font-semibold text-neutral-200 uppercase ">
                  Links Úteis
                </h3>
                <ul className="text-neutral-100  font-medium">
                  <li>
                    <Link
                      href="#sobre"
                      className="hover:underline text-sm !text-neutral-100"
                    >
                      Sobre
                    </Link>
                  </li>
                  <li className="my-5">
                    <Link
                      href="#servicos"
                      className="hover:underline text-sm !text-neutral-100"
                    >
                      Serviços
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contato"
                      className="hover:underline text-sm !text-neutral-100"
                    >
                      Contato
                    </Link>
                  </li>
                  <li className="mt-5">
                    <Link
                      href="#social"
                      className="hover:underline text-sm !text-neutral-100"
                    >
                      Social
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-7 small:mb-4 text-sm font-semibold text-neutral-200 uppercase ">
                  Nossas Redes
                </h3>
                <ul className="font-medium">
                  <li>
                    <Link
                      href="https://instagram.com/edersonfff"
                      target="_blank"
                      className="hover:underline text-sm !text-neutral-100"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li className="my-5">
                    <Link
                      href="https://github.com/edersonff"
                      target="_blank"
                      className="hover:underline text-sm !text-neutral-100"
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://wa.me/47996556538"
                      target="_blank"
                      className="hover:underline text-sm !text-neutral-100"
                    >
                      Whatsapp
                    </Link>
                  </li>
                  <li className="mt-5">
                    <Link
                      href="https://linkedin.com/in/ederson-franzen-fagundes"
                      target="_blank"
                      className="hover:underline text-sm !text-neutral-100"
                    >
                      Linkedin
                    </Link>
                  </li>
                </ul>
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

export function SocialFooterItem({
  type,
  href,
}: {
  type: "facebook" | "twitter" | "instagram" | "linkedin" | "whatsapp";
  href: string;
}) {
  const Icon = useMemo(() => {
    const icons = {
      facebook: <FaFacebook />,
      twitter: <BsTwitter />,
      instagram: <BsInstagram />,
      linkedin: <FaLinkedinIn />,
      whatsapp: <FaWhatsapp />,
    };
    return icons[type];
  }, [type]);

  return (
    <Link
      target="_blank"
      href={href}
      className="text-neutral-100 hover:text-neutral-200  ms-5"
    >
      {Icon}
      <span className="sr-only">{type} page</span>
    </Link>
  );
}
