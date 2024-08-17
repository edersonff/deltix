import { create } from "zustand";

export type NavbarStore = {
  navbar: boolean;
  setNavbar: (navbar: boolean) => void;
};

export const useNavbarStore = create<NavbarStore>((set) => ({
  navbar: false,
  setNavbar: (navbar) => {
    set({ navbar });
  },
}));
