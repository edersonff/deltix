import { useLocomotiveStore } from "@/store/locomotive";
import { useScrollerProxy } from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { HTMLAttributes, RefObject, useMemo, useRef } from "react";

export default function CommitsSections() {
  const commitsRef = useRef<HTMLDivElement[]>([]);
  const [scrollerProxy, locomotive] = useScrollerProxy();

  const months = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (
      !locomotive ||
      !scrollerProxy ||
      !locomotive.el ||
      commitsRef.current?.filter(Boolean).length !== 72 * 7
    ) {
      return;
    }

    const scrollContainer = locomotive.el;

    scrollerProxy();

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

    const monthsAnimation = gsap.to(months.current, {
      maskSize: "500% 100%",
      maskImage:
        "linear-gradient(to right, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
      ease: "none",
      scrollTrigger: {
        scroller: scrollContainer,
        trigger: trigger.current,
        start: "top top",
        scrub: true,
        end: () => "+=" + container.current?.offsetWidth,
      },
    });

    const anims: gsap.core.Tween[] = [];

    for (const block of commitsRef.current) {
      const w = block.offsetWidth;
      const x = block.offsetLeft;

      const windowH = window.innerHeight;

      const anim = gsap.to(block, {
        translateY: () => 0,
        ease: "none",
        scrollTrigger: {
          scroller: scrollContainer,
          trigger: block,
          start: "top top",
          end: () => `+=${windowH}`,
          scrub: true,
        },
      });

      anims.push(anim);
    }

    ScrollTrigger.addEventListener("refresh", () => {
      // locomotive.update();
    });

    ScrollTrigger.refresh();

    return () => {
      pin.kill();
      monthsAnimation.kill();
      anims.forEach((anim) => anim.kill());
    };
  }, [locomotive, locomotive, commitsRef]);

  return (
    <div ref={trigger} className="relative w-full overflow-hidden">
      <div ref={container} className="min-h-screen relative min-w-[200vw]">
        <div
          className="absolute-full -z-50 bg-gradient-radial from-black via-neutral-950 to-black flex items-center justify-center"
          style={{
            background: "url(/images/frames/dots.svg)",
            backgroundRepeat: "repeat-x",
            backgroundSize: "1200px 1200px",
          }}
        />

        <div
          className="w-full absolute pl-[92px] top-[5%] left-0"
          ref={months}
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
            maskSize: "100% 100%",
          }}
        >
          <div className="w-full flex justify-between gap-[10%]">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((month) => (
              <p
                key={month}
                className="vertical text-2xl font-bold text-clip bg-gradient-to-b from-neutral-500 to-neutral-800/0"
              >
                {month}
              </p>
            ))}
          </div>
        </div>

        <div className="absolute w-full h-full pl-[87px] flex items-center gap-1.5">
          {[...Array(72)].map((_, i) => (
            <BlockColumn key={i} innerRef={commitsRef} />
          ))}
        </div>
      </div>
    </div>
  );
}

type Colors = "green" | "green-light" | "green-dark" | "neutral";

function Block({
  color,
  className,
  innerRef,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  color: Colors;
  innerRef?: (el: HTMLDivElement) => void;
}) {
  const bgStyle = useMemo(() => {
    switch (color) {
      case "green":
        return "from-green-500/50 to-green-800/50";
      case "green-light":
        return "from-green-300/50 to-green-600/50";
      case "green-dark":
        return "from-green-700/50 to-green-900/50";
      case "neutral":
        return "from-neutral-500/50 to-neutral-800/50";
    }
  }, [color]);

  return (
    <div
      ref={innerRef}
      {...props}
      className={`w-9 h-9 rounded-lg bg-gradient-to-b ${bgStyle} backdrop-blur-xl ${className}`}
    />
  );
}

const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const colors: (Colors | null)[] = [
  "neutral",
  "green",
  "green-light",
  "green-dark",
  "neutral",
];

function BlockColumn({ innerRef }: { innerRef: RefObject<HTMLDivElement[]> }) {
  const columnRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col gap-1.5" ref={columnRef}>
      {[
        getRandom(0, 4),
        getRandom(0, 4),
        getRandom(0, 4),
        getRandom(0, 4),
        getRandom(0, 4),
        getRandom(0, 4),
        getRandom(0, 4),
      ].map((color, i) => {
        const col = colors[color];

        if (col === null) {
          return (
            <div
              key={Math.random()}
              className="w-9 h-9 rounded-lg bg-gradient-to-b from-neutral-500/50 to-neutral-800/50 backdrop-blur-xl"
            />
          );
        }

        return (
          <Block
            key={i}
            innerRef={(el) => {
              if (el && !innerRef.current?.includes(el)) {
                innerRef.current?.push(el);
              }
            }}
            style={{
              transform:
                "translateY(-100vh) translateY(" +
                (7 - i) * 9 +
                "px) translateY(" +
                Number(columnRef.current?.offsetLeft) * 0.35 +
                "px)",
            }}
            color={col}
          />
        );
      })}
    </div>
  );
}
