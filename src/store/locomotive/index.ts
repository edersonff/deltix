import LocomotiveScroll from "locomotive-scroll";
import { create } from "zustand";

export type LocomotiveScrollType = LocomotiveScroll & {
  scroll: {
    instance: {
      scroll: {
        x: number;
        y: number;
      };
    };
  };
  el: HTMLElement;
};

export type LocomotiveStore = {
  locomotive: LocomotiveScrollType | null;
  setLocomotive: (locomotive: any) => void;
};

export const useLocomotiveStore = create<LocomotiveStore>((set) => ({
  locomotive: null,
  setLocomotive: (locomotive) => {
    set({ locomotive });
  },
}));
