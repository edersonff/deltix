import { useLocomotiveStore } from "@/store/locomotive";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { HTMLAttributes, RefObject, useMemo, useRef } from "react";

export default function CommitsSections() {
  const locomotive = useLocomotiveStore((state) => state.locomotive);

  const months = useRef<HTMLDivElement>(null);

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

      pinType: "transform",
    });

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

    ScrollTrigger.addEventListener("refresh", () => {
      locomotive.update();
    });

    ScrollTrigger.refresh();

    return () => {
      pin.kill();
    };
  }, [locomotive, locomotive]);

  return (
    <div ref={trigger} className="relative w-full">
      <div ref={container} className="min-h-screen relative w-full">
        <Image
          src="/images/frames/dots.svg"
          alt="Dots Frame"
          layout="fill"
          priority
          className="unselectable undraggable"
        />

        <div
          className="w-full absolute top-[5%] left-0"
          ref={months}
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
            maskSize: "100% 100%",
          }}
        >
          <div className="content w-full flex gap-[10%]">
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

        <div className="absolute flex gap-4">
          <div className="flex flex-col gap-4">
            <Block color="green" container={container} />
            <Block color="green-dark" container={container} />
            <Block color="neutral" container={container} />
            <Block color="green" container={container} />
            <Block color="green-light" container={container} />
            <Block color="neutral" container={container} />
            <Block color="green-dark" container={container} />
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-500/50 to-green-800/50 backdrop-blur-xl" />
          <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-300/50 to-green-600/50 backdrop-blur-xl" />
          <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-neutral-500/50 to-neutral-800/50 backdrop-blur-xl" />
          <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-500/50 to-green-800/50 backdrop-blur-xl" />
          <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-300/50 to-green-600/50 backdrop-blur-xl" />

          <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-500/50 to-green-800/50 backdrop-blur-xl" />
          <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-300/50 to-green-600/50 backdrop-blur-xl" />
          <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-neutral-500/50 to-neutral-800/50 backdrop-blur-xl" />
          <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-500/50 to-green-800/50 backdrop-blur-xl" />
          <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-300/50 to-green-600/50 backdrop-blur-xl" />
        </div>
      </div>
    </div>
  );
}

function Block({
  color,
  className,
  container,
}: HTMLAttributes<HTMLDivElement> & {
  color: "green" | "green-light" | "green-dark" | "neutral";
  container: RefObject<HTMLDivElement>;
}) {
  const ref = useRef<HTMLDivElement>(null);

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

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`w-10 h-10 rounded-lg bg-gradient-to-b ${bgStyle} backdrop-blur-xl ${className}`}
    />
  );
}
