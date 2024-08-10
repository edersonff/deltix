"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis data-scroll-section root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}
