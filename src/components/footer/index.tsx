import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, useAnimate, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { textAnim, transition } from "@/theme/animation";
import Marker from "../marker";

export default function Footer() {
  const [isAnimating, setIsAnimating] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  const year = new Date().getFullYear();

  useEffect(() => {
    async function animate() {
      setIsAnimating(true);
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setIsAnimating(false);

      await new Promise((resolve) => setTimeout(resolve, 4000));
      await animate();
    }

    animate();
  }, []);

  return (
    <>
      <section
        className="overflow-hidden relative bg-fixed bg-[length:100%] bg-no-repeat bg-center big:hover:bg-[length:104%] small:bg-cover transition-all duration-1000"
        style={{
          backgroundImage: "url(/images/banners/team.png)",
        }}
      >
        <Link href="#sobre" className="cursor-pointer group">
          <motion.div
            initial="hidden"
            animate={isAnimating ? "visible" : "hidden"}
            ref={parentRef}
            className="absolute mix-blend-overlay -top-[10%] -left-[10%] flex justify-between z-10"
          >
            {Array.from({ length: 10 }).map((_, iCol) => (
              <div
                key={iCol}
                className={"flex flex-col " + (iCol >= 5 ? "small:hidden" : "")}
              >
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className={
                      "overflow-hidden " + (i >= 10 ? "big:hidden" : "")
                    }
                  >
                    <motion.div
                      key={i}
                      variants={textAnim}
                      transition={{
                        ...transition,
                        delay: 0.1 * i + 0.1 * iCol,
                      }}
                    >
                      <Image
                        src="/images/seti/logo-white.svg"
                        alt="Logo Seti"
                        width={200}
                        height={200}
                        className="opacity-20"
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
          <div className="absolute-full bg-primary/80 group-hover:bg-primary/70 transition-all mix-blend-multiply" />
          <div className="content relative z-10 flex-center py-24">
            <div className="text-white max-w-main-9 px-10 py-10 text-center">
              <h2 className="text-5xl font-ibm-plex-serif font-bold">
                SOMOS A <Marker className="text-white">SETI</Marker> TECNOLOGIA
              </h2>
              <p className="mt-10 leading-7 text-sm">
                Somos uma desenvolvedora de software com 20 anos de mercado,
                mais de 100 colaboradores diretos e indiretos e, mais de 1500
                clientes de diversos portes e segmentos, presente em todo
                território nacional com soluções que estão entre as mais
                completas e robustas do mercado.
              </p>
            </div>
          </div>
        </Link>
      </section>
      <footer className="content-container bg-dark bg-slate-950/90 text-white small:pb-10">
        <h2 className="hidden">Footer</h2>
        <div className="mx-auto w-full content p-4 py-10 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 small:mb-10">
              <Link href="#" className="flex items-start gap-2 flex-col">
                <Image
                  src="/images/seti/logo.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                />
                <p className="font-semibold text-neutral-200">Seti TI</p>
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
          <hr className="my-6 border-neutral-200 sm:mx-auto  lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-xs">
              © {year !== 2024 ? year + "-" : null}
              {year}{" "}
              <Link
                href="/"
                className="text-neutral-200 hover:underline text-sm"
              >
                Ederson Franzen Fagundes
              </Link>
            </p>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <SocialFooterItem
                type="instagram"
                href="https://instagram.com/edersonfff"
              />
              <SocialFooterItem
                type="facebook"
                href="https://facebook.com/ederson.edi"
              />
              <SocialFooterItem
                type="whatsapp"
                href="https://wa.me/47996556538"
              />
              <SocialFooterItem
                type="linkedin"
                href="https://linkedin.com/in/ederson-franzen-fagundes"
              />
            </div>
          </div>
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
