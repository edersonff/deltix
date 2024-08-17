import { create } from "zustand";

export type ProjectStore = {
  project: number;
  setProject: (project: number) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  project: -1,
  setProject: (project) => {
    set({ project });
  },
}));
