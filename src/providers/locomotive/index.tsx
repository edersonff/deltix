"use client";

import "locomotive-scroll/dist/locomotive-scroll.css";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { LocomotiveScrollProvider as RLSProvider } from "react-locomotive-scroll";

export default function LocomotiveProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const containerRef = useRef(null);

  return (
    <RLSProvider
      options={{
        smooth: true,

        // ... all available Locomotive Scroll instance options
      }}
      location={pathname}
      onLocationChange={(scroll: any) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
      containerRef={containerRef}
    >
      <div id="scroll-container" data-scroll-container ref={containerRef}>
        {children}
      </div>
    </RLSProvider>
  );
}
