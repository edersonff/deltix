import { projects } from "@/theme/projects";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import LocomotiveScroll from "locomotive-scroll";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocomotiveStore } from "@/store/locomotive";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ProjectsSection() {
  const locomotive = useLocomotiveStore((state) => state.locomotive);
  const [currentProject, setCurrentProject] = useState(0);

  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollContainer = locomotive?.el;

    if (!scrollContainer || !locomotive) {
      return;
    }

    ScrollTrigger.scrollerProxy(scrollContainer, {
      scrollTop(value) {
        const val = arguments.length
          ? locomotive.scrollTo(value || 0, { duration: 0, disableLerp: true })
          : locomotive.scroll.instance.scroll.y;

        return val as number;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },

      pinType: scrollContainer.style.transform ? "transform" : "fixed",
    });

    const pin = gsap.to(container.current, {
      x: -window.innerWidth,
      ease: "none",
      scrollTrigger: {
        scroller: scrollContainer,
        trigger: trigger.current,
        start: "top top",
        scrub: true,
        end: () => `+=${container.current?.offsetWidth}`,
        pin: true,
      },
    });

    ScrollTrigger.addEventListener("refresh", () => {
      locomotive.update();
    });

    ScrollTrigger.refresh();
  }, [locomotive]);

  return (
    <div
      className={
        "content flex-center flex-1 h-[calc(50vh*" + projects.length + ")]"
      }
      ref={trigger}
    >
      <div>
        <div ref={container} className="flex ">
          {projects.map((project, index) => (
            <div key={index} className="flex-center flex-col w-[50vw]">
              <div className="relative w-full h-[300px]"></div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
