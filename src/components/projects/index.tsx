import { projects } from "@/theme/projects";
import React from "react";
import Image from "next/image";
import { useProjectStore } from "@/store/project";

export default function ProjectsBackground() {
  const currentProject = useProjectStore((state) => state.project);

  return projects.map((project, index) => (
    <div
      key={index}
      className="fixed top-0 left-0 w-[60vw] opacity-00 h-full transition-opacity duration-500"
      style={{ opacity: currentProject === index ? 1 : 0 }}
    >
      <Image
        src={"/images/projects/" + project.image}
        alt={project.title}
        layout="fill"
        className="object-cover"
      />
      <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-l from-neutral-900 to-transparent"></div>
    </div>
  ));
}
