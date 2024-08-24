import { create } from "zustand";

export type LoadingStore = {
  loading: boolean;
  transition: boolean;
  setLoading: (loading: boolean) => void;
  setTransition: (transition: boolean) => void;
};

export const useLoadingStore = create<LoadingStore>((set) => ({
  loading: true,
  setLoading: (loading) => {
    set({ loading });
  },
  transition: false,
  setTransition: (transition) => {
    set({ transition });
  },
}));
