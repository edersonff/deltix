"use client";

import { useLocomotiveStore } from "@/store/locomotive";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function LocomotiveProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const setLocomotive = useLocomotiveStore((state) => state.setLocomotive);

  const pathname = usePathname();
  const containerRef = useRef(null);

  useEffect(() => {
    async function startupLocomotive() {
      if (!containerRef.current) {
        return;
      }
      const Locomotive = (await import("locomotive-scroll")).default;

      const locoScroll = new Locomotive({
        el: containerRef.current,
        smooth: true,
        getDirection: true,
        tablet: {
          breakpoint: 1024,
          smooth: true,
        },
        smartphone: {
          smooth: true,
        },
      });

      locoScroll.on("scroll", ScrollTrigger.update);

      setLocomotive(locoScroll);
    }

    startupLocomotive();
  }, [containerRef]);

  return (
    <
      // options={{
      //   smooth: true,
      // }}
      // location={pathname}
      // onLocationChange={(scroll: any) =>
      //   scroll.scrollTo(0, { duration: 0, disableLerp: true })
      // }
      // onUpdate={(scroll: any) => {
      //   console.log(1);
      // }}
      // containerRef={containerRef}
    >
      <div data-scroll-container id="scroll-container" ref={containerRef}>
        {children}
      </div>
    </>
  );
}
