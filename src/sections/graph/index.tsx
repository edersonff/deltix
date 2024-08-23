import { useLocomotiveStore } from "@/store/locomotive";
import { useScrollerProxy } from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { HTMLProps, RefObject, useMemo, useRef } from "react";
import { BiSolidUpArrow } from "react-icons/bi";

export default function GraphSection() {
  const [scrollerProxy, locomotive] = useScrollerProxy();

  const charts = useRef<HTMLDivElement[]>([]);

  const donuts = useRef<HTMLDivElement>(null);

  const donut1 = useRef<HTMLDivElement>(null);
  const donut2 = useRef<HTMLDivElement>(null);
  const donut3 = useRef<HTMLDivElement>(null);

  const graph1 = useRef<HTMLDivElement>(null);
  const graph2 = useRef<HTMLDivElement>(null);
  const graph3 = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!scrollerProxy || !locomotive || charts.current.length !== 126) {
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

    const donut1Animation = gsap.to(donut1.current, {
      rotation: () => -720,
      ease: "none",
      scrollTrigger: {
        scroller: scrollContainer,
        trigger: trigger.current,
        start: "top top",
        scrub: true,
        end: () => "+=" + container.current?.offsetWidth,
      },
    });

    const donut2Animation = gsap.to(donut2.current, {
      rotation: -540,
      ease: "none",
      scrollTrigger: {
        scroller: scrollContainer,
        trigger: trigger.current,
        start: "top top",
        scrub: true,
        end: () => "+=" + container.current?.offsetWidth,
      },
    });

    const donut3Animation = gsap.to(donut3.current, {
      rotation: -360,
      ease: "none",
      scrollTrigger: {
        scroller: scrollContainer,
        trigger: trigger.current,
        start: "top top",
        scrub: true,
        end: () => "+=" + container.current?.offsetWidth,
      },
    });

    const donutsAnimation = gsap.to(donuts.current, {
      translateX: () => Number(container.current?.offsetWidth),
      ease: "none",
      scrollTrigger: {
        scroller: scrollContainer,
        trigger: trigger.current,
        start: "top top",
        scrub: true,
        end: () => "+=" + container.current?.offsetWidth,
      },
    });

    const graph1Animation = gsap.to(graph1.current, {
      maskSize: "500% 100%",
      maskImage:
        "linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%)",
      ease: "none",
      scrollTrigger: {
        scroller: scrollContainer,
        trigger: trigger.current,
        start: "top top",
        scrub: true,
        end: () => "+=" + container.current?.offsetWidth,
      },
    });

    const graph2Animation = gsap.to(graph2.current, {
      maskSize: "500% 100%",
      maskImage:
        "linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
      ease: "none",
      scrollTrigger: {
        scroller: scrollContainer,
        trigger: trigger.current,
        start: "top top",
        scrub: true,
        end: () => "+=" + container.current?.offsetWidth,
      },
    });

    const graph3Animation = gsap.to(graph3.current, {
      maskSize: "500% 100%",
      maskImage:
        "linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 55%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
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
    const intervals: NodeJS.Timeout[] = [];

    const toHeight = (el: HTMLElement) =>
      gsap.quickTo(el, "height", { duration: 0.6, ease: "power3" });
    const toOpacity = (el: HTMLElement) =>
      gsap.quickTo(el, "opacity", { duration: 0.6, ease: "power3" });

    for (const chart of charts.current) {
      const toHeightChart = toHeight(chart);
      const toOpacityChart = toOpacity(chart);

      const interval = setInterval(() => {
        toHeightChart(Math.floor(Math.random() * 200) + 50);
        toOpacityChart(Math.floor(Math.random() * 10) / 50 + 0.05);
      }, 1000);

      intervals.push(interval);
      // anims.push(anim);
    }

    ScrollTrigger.addEventListener("refresh", () => {
      // locomotive.update();
    });

    ScrollTrigger.refresh();

    return () => {
      pin.kill();
      donut1Animation.kill();
      donut2Animation.kill();
      donut3Animation.kill();
      donutsAnimation.kill();
      graph1Animation.kill();
      graph2Animation.kill();
      graph3Animation.kill();
      anims.forEach((anim) => anim.kill());
    };
  }, [locomotive, scrollerProxy, charts]);

  return (
    <div ref={trigger} className="relative">
      <div
        ref={container}
        className="min-h-screen min-w-[150%] relative w-full"
      >
        <div ref={donuts} className="absolute z-50 top-[150px] left-[180px]">
          <div className="absolute-center">
            <div
              ref={donut1}
              className="absolute-full stroke-8-primary rounded-full z-10"
            />

            <div className="h-[200px] w-[200px] p-4 stroke-8-glass backdrop-blur-lg rounded-full"></div>
          </div>

          <div className="absolute-center">
            <div
              ref={donut2}
              className="absolute-full stroke-8-primary rounded-full z-10"
            />

            <div className="h-[152px] w-[152px] p-4 stroke-8-glass backdrop-blur-lg rounded-full"></div>
          </div>

          <div className="absolute-center">
            <div
              ref={donut3}
              className="absolute-full stroke-8-primary rounded-full z-10"
            />

            <div className="h-[104px] w-[104px] p-4 stroke-8-glass backdrop-blur-lg rounded-full"></div>
          </div>
        </div>
        {/* <div className="w-full h-full p-4 border-[8px] border-white/30 backdrop-blur-lg rounded-full">
              <div
                ref={donut2}
                className="absolute-full stroke-8-primary rounded-full z-10"
              />

              <div className="w-full h-full border-[8px] border-white/30 backdrop-blur-lg rounded-full">
                <div
                  ref={donut3}
                  className="absolute-full stroke-8-primary rounded-full z-10"
                />
              </div>
            </div> */}

        <div
          className="absolute-full -z-50 bg-gradient-radial from-black via-neutral-950 to-black flex items-center justify-center"
          style={{
            background: "url(/images/frames/squares.svg)",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        />

        {/* <div className="absolute top-0 left-0 w-[50vh] h-screen bg-gradient-to-r from-primary/0 to-primary"></div> */}
        <div
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 0%)",
            maskSize: "200% 100%",
          }}
          ref={graph1}
          className="absolute-full bottom-[10%] left-0 z-10"
        >
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

        <div
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 0%)",
            maskSize: "200% 100%",
          }}
          ref={graph2}
          className="absolute-full bottom-[10%] left-0 z-10"
        >
          <div className="bg-primary/80 absolute w-[200px] h-[1px] transform -translate-y-1/2 bottom-[250px] left-0 origin-left rotate-[25deg] box-graph box-graph--30" />
          <div className="bg-primary/80 absolute w-[300px] h-[1px] transform -translate-y-1/2 bottom-[165px] left-[182px] origin-left -rotate-[30deg] box-graph box-graph-30" />
          <div className="bg-primary/80 absolute w-[200px] h-[1px] transform -translate-y-1/2 bottom-[316px] left-[442px] origin-left rotate-[30deg] box-graph box-graph--30" />
          <div className="bg-primary/80 absolute w-[150px] h-[1px] transform -translate-y-1/2 bottom-[216px] left-[615px] origin-left -rotate-[30deg] box-graph box-graph-30" />
          <div className="bg-primary/80 absolute w-[400px] h-[1px] transform -translate-y-1/2 bottom-[290px] left-[745px] origin-left rotate-[30deg] box-graph box-graph--30" />
          <div className="bg-primary/80 absolute w-[230px] h-[1px] transform -translate-y-1/2 bottom-[90px] left-[1092px] origin-left -rotate-[30deg] box-graph box-graph-30" />
          <div className="bg-primary/80 absolute w-[100px] h-[1px] transform -translate-y-1/2 bottom-[205px] left-[1292px] origin-left rotate-[30deg] box-graph box-graph--30" />
          <div className="bg-primary/80 absolute w-[300px] h-[1px] transform -translate-y-1/2 bottom-[155px] left-[1378px] origin-left -rotate-[30deg] box-graph box-graph-30" />
          <div className="bg-primary/80 absolute w-[50px] h-[1px] transform -translate-y-1/2 bottom-[305px] left-[1638px] origin-left rotate-[30deg] box-graph box-graph--30" />
          <div className="bg-primary/80 absolute w-[300px] h-[1px] transform -translate-y-1/2 bottom-[280px] left-[1680px] origin-left -rotate-[30deg] box-graph box-graph-30" />
          <div className="bg-primary/80 absolute w-[270px] h-[1px] transform -translate-y-1/2 bottom-[430px] left-[1940px] origin-left rotate-[30deg] box-graph box-graph--30" />
        </div>

        <div
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 0%)",
            maskSize: "200% 100%",
          }}
          ref={graph3}
          className="absolute-full bottom-[10%] left-0 z-10"
        >
          <ValueChanged className="bottom-[100px] left-8" value={18.42} />
          <ValueChanged
            className="bottom-[150px] left-[150px]"
            value={-10.25}
          />
          <ValueChanged className="bottom-[115px] left-[230px]" value={7.01} />
          <ValueChanged
            className="bottom-[175px] left-[280px]"
            value={-20.75}
          />
          <ValueChanged className="bottom-[48px] left-[420px]" value={37.11} />
          <ValueChanged className="bottom-[290px] left-[770px]" value={-8.09} />
          <ValueChanged className="bottom-[200px] left-[850px]" value={12.92} />
          <ValueChanged
            className="bottom-[335px] left-[1020px]"
            value={-26.54}
          />
          <ValueChanged className="bottom-[150px] left-[1270px]" value={9.14} />
          <ValueChanged
            className="bottom-[285px] left-[1445px]"
            value={-4.74}
          />
          <ValueChanged
            className="bottom-[195px] left-[1530px]"
            value={64.74}
          />
        </div>

        <ChartLines innerRef={charts} />
      </div>
    </div>
  );
}

export function ChartLines({
  innerRef: charts,
}: {
  innerRef: RefObject<HTMLDivElement[]>;
}) {
  return (
    <div className="absolute z-50 left-0 bottom-0 flex items-end">
      {Array.from({ length: 126 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el && !charts.current?.includes(el)) {
              charts.current?.push(el);
            }
          }}
          className="w-7 bg-gradient-to-b from-primary via-neutral-900 to-neutral-950"
          style={{
            height: 0,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

function ValueChanged({
  value,
  className,
  ...props
}: { value: number } & HTMLProps<HTMLDivElement>) {
  const styleClasses = useMemo(() => {
    const classes = "text-sm font-bold flex-center gap-1";

    if (value > 0) {
      return `${classes} text-green-600/40`;
    } else if (value < 0) {
      return `${classes} text-red-600/60`;
    }

    return classes;
  }, [value]);

  const styleIcon = useMemo(() => {
    if (value > 0) {
      return <BiSolidUpArrow className="text-lg" />;
    } else if (value < 0) {
      return <BiSolidUpArrow className="text-lg rotate-180" />;
    }

    return null;
  }, [value]);

  return (
    <div className={`${styleClasses} absolute ${className}`} {...props}>
      {styleIcon}
      {Math.abs(value)}
    </div>
  );
}
