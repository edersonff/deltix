import { projects } from "@/theme/projects";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import LocomotiveScroll from "locomotive-scroll";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const { scroll } = useLocomotiveScroll();

  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(
      () => {
        if (!container.current || !trigger.current) {
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trigger.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
            pin: true,
          },
        });

        tl.to(container.current, {
          x: () => -(container.current?.clientWidth || 0) * projects.length,
        });
      },
      { immediateRender: true }
    );

    return () => ctx.revert();
  }, []);

  return (
    <div className="content flex-center flex-1" ref={trigger}>
      <div ref={container} className="flex ">
        {projects.map((project, index) => (
          <>
            <div key={index} className="flex-center flex-col w-[50vw]">
              <div className="relative w-full h-[300px]"></div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>

            <div key={index} className="flex-center flex-col w-[50vw]">
              <div className="relative w-full h-[300px]"></div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
