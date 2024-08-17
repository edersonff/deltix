import Navbar from "@/components/navbar";
import { useNavbarStore } from "@/store/navbar";
import { AnimatePresence } from "framer-motion";
import React from "react";

export default function NavbarProvider() {
  const navbar = useNavbarStore((state) => state.navbar);
  return <AnimatePresence>{navbar && <Navbar />}</AnimatePresence>;
}
