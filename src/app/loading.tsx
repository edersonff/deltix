"use client";

import { useLoadingStore } from "@/store/loading";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function Loading({ isComponent }: { isComponent?: boolean }) {
  const [loading, setLoading] = useLoadingStore((state) => [
    state.loading,
    state.setLoading,
  ]);

  if (!loading) {
    return <Transition isComponent={isComponent} />;
  }

  return (
    <>
      <video
        onEnded={() => {
          setLoading(false);
        }}
        autoPlay
        muted
        playsInline
        className="fixed-full z-[9999999] object-cover transition-all pointer-events-none opacity-0"
        style={{
          opacity: loading ? 1 : 0,
        }}
        src="/videos/logo.webm"
      />

      <Image
        src="/videos/logo.webp"
        className="fixed-full pointer-events-none z-[9999998] object-cover first-frame"
        alt="Logo Loading"
        width={1920}
        height={1080}
      />
    </>
  );
}

export function Transition({ isComponent }: { isComponent?: boolean }) {
  const firstRenderRef = useRef(true);
  const [transition, setTransition] = useLoadingStore((state) => [
    state.transition,
    state.setTransition,
  ]);

  if (firstRenderRef.current && !isComponent) {
    firstRenderRef.current = false;

    setTransition(true);
  }

  if (firstRenderRef.current && isComponent) {
    firstRenderRef.current = false;

    setTimeout(() => {
      setTransition(false);
    }, 1000);
  }

  return (
    <div
      className="fixed-full flex-center pointer-events-none z-[9999998] bg-[#2c3552] opacity-100 transition-opacity duration-1000"
      style={{
        opacity: transition ? 1 : 0,
      }}
    >
      <Image
        src="/videos/loader.gif"
        width={100}
        height={100}
        className="object-cover w-[400px] h-[400px]"
        alt="Logo Loading"
      />
    </div>
  );
}
