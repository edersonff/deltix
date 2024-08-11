"use client";

import Noise from "@/components/noise";
import { useLoadingStore } from "@/store/loading";
import { transition } from "@/theme/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Loading({ isComponent }: { isComponent: boolean }) {
  const [loading, setLoading] = useLoadingStore((state) => [
    state.loading,
    state.setLoading,
  ]);
  useEffect(() => {
    if (isComponent) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [isComponent]);

  return (
    <Noise
      image="static-loading"
      className="fixed-full z-[999999] flex-center small:px-6  from-primary to-secondary overflow-hidden transition-opacity duration-1000 delay-1000 "
      style={{
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? "auto" : "none",
      }}
    >
      <Image
        src="/deltix/logo-white-2.svg"
        alt="Deltix Logo"
        width={211}
        height={68}
        priority
      />
      <motion.div
        initial={{
          backgroundPosition: "500% 500%",
          x: "0%",
          y: "0%",
        }}
        animate={{
          backgroundPosition: "0% 0",
          x: "-100%",
          y: "-100%",
        }}
        transition={{
          duration: 5,
        }}
        className="absolute w-[250%] h-[250%] -z-10 bg-gradient-to-br from-primary to-secondary"
      >
        <div className="w-full h-full mix-blend-multiply">
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(to right bottom, blue,blue,blue, transparent), url("https://grainy-gradients.vercel.app/noise.svg");`,
              filter: "contrast(170%) brightness(1000%)",
            }}
          />
        </div>
      </motion.div>
    </Noise>
  );
}
