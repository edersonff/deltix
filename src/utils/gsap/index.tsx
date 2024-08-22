import { useLocomotiveStore } from "@/store/locomotive";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";

type Scroller = (onScroll?: () => void) => void;

export function useScrollerProxy(): [Scroller | undefined, any] {
  const locomotive = useLocomotiveStore((state) => state.locomotive);

  const scrollContainer = locomotive?.el as HTMLElement;

  if (!scrollContainer || !locomotive) {
    return [undefined, locomotive];
  }

  const scroller = (onScroll?: () => void) => {
    if (!scroller) {
      return;
    }

    ScrollTrigger.scrollerProxy(scrollContainer, {
      scrollTop(value) {
        if (onScroll) {
          onScroll();
        }

        const val = arguments.length
          ? locomotive?.scrollTo(value || 0, {
              duration: 0,
              disableLerp: true,
            })
          : locomotive?.scroll.instance.scroll.y;

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
  };

  if (!scroller) {
    return [undefined, locomotive];
  }

  return [scroller, locomotive];
}
