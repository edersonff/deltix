"use client";

import { categoryLotties, projects } from "@/theme/projects";
import React, { useCallback, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Category } from "@/theme/categories";
import { useProjectStore } from "@/store/project";
import Link from "next/link";
import Image from "next/image";
import GlitchBtn from "@/components/button";
import { FiExternalLink } from "react-icons/fi";
import { useScrollerProxy } from "@/utils/gsap";
import { FaChevronRight } from "react-icons/fa6";

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useProjectStore((state) => [
    state.project,
    state.setProject,
  ]);

  const [scrollerProxy, locomotive] = useScrollerProxy();

  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!scrollerProxy || !locomotive) {
      return;
    }

    const scrollContainer = locomotive.el;

    function updateProject() {
      const width = container.current?.offsetWidth || 1;
      const xTranslate = -Number(
        container.current?.style?.transform?.split("(")[1]?.split("px")[0]
      );

      const scrollProject = Math.round(xTranslate / (width / projects.length));

      if (xTranslate === 0) {
        return setCurrentProject(-1);
      }

      if (scrollProject !== currentProject) {
        if (scrollProject <= 0) {
          setCurrentProject(0);
        } else {
          setCurrentProject(scrollProject);
        }
      }
    }

    scrollerProxy();

    const pin = gsap.to(container.current, {
      translateX: () => -Number(container.current?.offsetWidth),
      ease: "none",
      scrollTrigger: {
        onUpdate: () => {
          updateProject();
        },
        scroller: scrollContainer,
        trigger: trigger.current,
        start: "top top",
        scrub: true,
        end: () => "+=" + container.current?.offsetWidth,
        pin: container.current,
      },
    });

    // ScrollTrigger.addEventListener("refresh", () => {
    //   locomotive.update();
    // });

    ScrollTrigger.refresh();

    return () => {
      pin.kill();
    };
  }, [locomotive]);

  const getLastStyle = useCallback((index: number) => {
    if (index === projects.length - 1) {
      return "";
    }

    return "mr-10";
  }, []);

  return (
    <div className="pl-[calc(16.6665%-1rem)]" ref={trigger}>
      <div ref={container} className="flex py-[15vh]">
        {projects.map((project, index) => (
          <div className={"" + getLastStyle(index)} key={index}>
            <div
              key={index}
              className="flex flex-col justify-between w-[50vw] small:w-[100vw] max-w-[700px] min-h-[60vh] text-white/80 px-[5%] py-[6%] relative"
            >
              <div
                className="absolute-full -z-10 box-glass rounded-xl transition-opacity duration-300"
                style={{
                  opacity: index === currentProject ? 1 : 0.25,
                }}
              />
              <div
                className="absolute-full -z-20 rounded-xl bg-black/30 backdrop-blur-2xl transition-all duration-300"
                style={{
                  background:
                    index === currentProject
                      ? "rgba(0, 0, 0, 0.3)"
                      : "rgba(0, 0, 0, 0.1)",
                }}
              />

              <div
                style={{
                  opacity: index === currentProject ? 1 : 0.25,
                }}
                className="transition-opacity duration-300"
              >
                <Link href="#" className="flex gap-4">
                  <h3 className="text-5xl uppercase font-bold mb-4 group">
                    {project.title}
                    <FaChevronRight className="inline group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
                  </h3>
                </Link>
                <div className="flex gap-5 mb-10">
                  {project.categories.map((category, index) => (
                    <ProjectCategory key={index} category={category} />
                  ))}
                </div>
                <p className="text-sm leading-[200%]">
                  {project.description} Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Nulla laboriosam voluptates, sapiente natus
                  beatae temporibus molestias corporis sequi corrupti cumque
                  reprehenderit eaque repellat enim quo nemo pariatur nihil
                  optio molestiae.
                </p>
              </div>
              <div
                style={{
                  opacity: index === currentProject ? 1 : 0.25,
                }}
                className="transition-opacity duration-300 flex justify-between"
              >
                <Link href="#" className="flex-center gap-4">
                  <Image
                    src={"/images/projects/" + project.author.avatar}
                    alt={project.author.name}
                    width={50}
                    height={50}
                    className="rounded-full w-10 h-10 object-cover"
                  />
                  <span className="text-sm font-semibold">
                    {project.author.name}
                  </span>
                </Link>
                <GlitchBtn>
                  <Link
                    href="#"
                    role="button"
                    className="flex-3 flex-center gap-2 overflow-hidden max-w-main-3 bg-primary/70 text-white/70 font-bold text-sm small:text-xs text-center px-5 py-3 relative group rounded-full"
                  >
                    Read more
                    <FiExternalLink className="text-xl" />
                  </Link>
                </GlitchBtn>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCategory({ category }: { category: Category }) {
  return (
    <Link
      href={"#" + category.replace(" ", "-").toLowerCase()}
      className="flex-center px-3 py-1.5 gap-2.5 stroke-glass bg-black/0 hover:bg-black/30 transition-all min-w-main-1"
    >
      <Image
        src={"/images/icons/" + categoryLotties[category] + ".svg"}
        alt={category}
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <span className="text-[10px] font-extrabold uppercase">{category}</span>
    </Link>
  );
}
