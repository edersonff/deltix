import { useLocomotiveStore } from "@/store/locomotive";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";

export default function GraphSection() {
  const locomotive = useLocomotiveStore((state) => state.locomotive);

  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollContainer = locomotive?.el;

    if (!scrollContainer || !locomotive) {
      return;
    }

    console.log(container.current?.offsetWidth);

    const pin = gsap.to(container.current, {
      translateX: () => -Number(container.current?.offsetWidth),
      ease: "none",
      scrollTrigger: {
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
  }, []);
  return (
    <div ref={trigger}>
      <div ref={container}>
        <div className="absolute-full -z-50 bg-gradient-radial from-neutral-900 via-neutral-950 to-neutral-900 w-full h-screen flex items-center justify-center relative">
          <Image
            src="/images/frames/squares.svg"
            alt="Squares Frame"
            layout="fill"
            priority
            className="unselectable undraggable"
          />
        </div>

        <div className="absolute top-[5%] left-[5%]">
          <div className="absolute-full stroke-8-primary rounded-full z-10" />

          <div className="h-[200px] w-[200px] p-4 border-[8px] border-white/30 backdrop-blur-lg rounded-full overflow-hidden">
            <div className="w-full h-full p-4 border-[8px] border-white/30 backdrop-blur-lg rounded-full">
              <div className="absolute-full stroke-8-primary rounded-full z-10" />

              <div className="w-full h-full border-[8px] border-white/30 backdrop-blur-lg rounded-full">
                <div className="absolute-full stroke-8-primary rounded-full z-10" />
              </div>
            </div>
          </div>
        </div>

        <div className="z-10 min-w-[2200px]">
          <div className="bg-primary absolute w-[200px] h-2 transform -translate-y-1/2 bottom-[100px] left-0 origin-left -rotate-[25deg]" />
          <div className="bg-primary absolute w-[100px] h-2 transform -translate-y-1/2 bottom-[185px] left-[178px] origin-left rotate-[30deg]" />
          <div className="bg-primary absolute w-[50px] h-2 transform -translate-y-1/2 bottom-[135px] left-[260px] origin-left -rotate-[30deg]" />
          <div className="bg-primary absolute w-[180px] h-2 transform -translate-y-1/2 bottom-[160px] left-[300px] origin-left rotate-[30deg]" />
          <div className="bg-primary absolute w-[400px] h-2 transform -translate-y-1/2 bottom-[70px] left-[453px] origin-left -rotate-[30deg]" />
          <div className="bg-primary absolute w-[100px] h-2 transform -translate-y-1/2 bottom-[270px] left-[795px] origin-left rotate-[30deg]" />
          <div className="bg-primary absolute w-[200px] h-2 transform -translate-y-1/2 bottom-[220px] left-[878px] origin-left -rotate-[30deg]" />
          <div className="bg-primary absolute w-[300px] h-2 transform -translate-y-1/2 bottom-[320px] left-[1048px] origin-left rotate-[30deg]" />
          <div className="bg-primary absolute w-[200px] h-2 transform -translate-y-1/2 bottom-[170px] left-[1305px] origin-left -rotate-[30deg]" />
          <div className="bg-primary absolute w-[100px] h-2 transform -translate-y-1/2 bottom-[270px] left-[1475px] origin-left rotate-[30deg]" />
          <div className="bg-primary absolute w-[700px] h-2 transform -translate-y-1/2 bottom-[220px] left-[1558px] origin-left -rotate-[30deg]" />
        </div>

        <div className="absolute z-50 left-0 bottom-0 flex items-end">
          {Array.from({ length: 126 }).map((_, index) => (
            <div
              key={index}
              className="w-7 bg-gradient-to-b from-primary via-neutral-900 to-neutral-950"
              style={{
                height: `${Math.floor(Math.random() * 200) + 50}px`,
                opacity: Math.floor(Math.random() * 10) / 50 + 0.05,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
