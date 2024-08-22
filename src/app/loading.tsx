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

  return (
    <video
      autoPlay
      onEnded={() => {
        setLoading(false);
      }}
      muted
      playsInline
      className="fixed-full z-[9999999] object-cover transition-all pointer-events-none"
      style={{
        opacity: loading ? 1 : 0,
      }}
      src="/videos/logo.webm"
    />
  );
}
