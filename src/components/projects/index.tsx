import { projects } from "@/theme/projects";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useProjectStore } from "@/store/project";

export default function ProjectsBackground() {
  const currentProject = useProjectStore((state) => state.project);

  return projects.map((project, index) => (
    <motion.div
      key={index}
      className="fixed top-0 left-0 w-[60vw] opacity-50 h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: currentProject === index ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={"/images/projects/" + project.image}
        alt={project.title}
        layout="fill"
        className="object-cover"
      />
      <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-l from-neutral-900 to-transparent"></div>
    </motion.div>
  ));
}
