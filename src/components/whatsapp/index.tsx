"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";

export default function WhatsappBtn({
  href = "https://wa.me/5547996556538",
  children,
}: {
  href?: string;
  onClick?: () => void;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Link
      target="_blank"
      aria-label="Contatar Whatsapp"
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed bottom-7 right-7 z-50 flex"
    >
      <motion.div
        initial={{ bottom: -100 }}
        animate={{ bottom: scrolled ? 7 : -100 }}
        className={
          "flex items-center justify-center w-16 h-16 rounded-full duration-300 bg-[#25d366] relative text-3xl active:scale-95 shadow-xl " +
          (hover ? "scale-110" : "")
        }
      >
        <div
          className="absolute w-full h-full top-0 left-0 overflow-hidden bg-[#25d366] flex-center -z-10 scale-80 rounded-full transition-all animate-ping duration"
          style={{
            animationDuration: "1.5s",
            opacity: hover ? 0.1 : 0,
          }}
        />

        <RiWhatsappFill className="text-white text-4xl small:text-4xl outline-1 outline-black" />
      </motion.div>
    </Link>
  );
}
