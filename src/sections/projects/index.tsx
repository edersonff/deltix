import { projects } from "@/theme/projects";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const { scroll } = useLocomotiveScroll();
  return (
    <div className="content flex-center flex-1">
      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-center flex-col w-1/2"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed={10 * (index + 1)}
          >
            <div className="relative w-full h-[300px]"></div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
