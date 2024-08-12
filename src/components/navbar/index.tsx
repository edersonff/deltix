import React from "react";
import { motion } from "framer-motion";
import { transition } from "@/theme/animation";
import { pages } from "@/theme/navigation";
import Link from "next/link";
import { FaX } from "react-icons/fa6";
import { useNavbarStore } from "@/store/navbar";

export default function Navbar() {
  const setNavbar = useNavbarStore((state) => state.setNavbar);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{
        ...transition,
      }}
      variants={{
        hidden: {
          height: 0,
        },
        visible: {
          height: "100%",
          top: 0,
        },
        exit: {
          height: 0,
          bottom: 0,
          transition: {
            ...transition,
            delay: 0.75,
          },
        },
      }}
      className="fixed h-full top-0 left-0 w-full z-50 bg-white shadow-md overflow-hidden"
    >
      <div className="p-4 text-center text-black h-full">
        <div
          className="absolute top-0 right-0 p-4 cursor-pointer"
          onClick={() => setNavbar(false)}
        >
          <FaX size={24} />
        </div>
        <h2 className="text-xl font-bold mb-8">Navigation</h2>
        {pages.map((page, index) => (
          <Link
            href={page.href}
            key={index}
            className="p-4 hover:text-primary hover:underline text-3xl transition-all"
            onClick={() => setNavbar(false)}
          >
            <div className="overflow-hidden">
              <motion.div
                initial={{
                  y: "100%",
                }}
                animate={{
                  y: 0,
                }}
                exit={{
                  y: "100%",
                  transition: {
                    ...transition,
                    delay: index * 0.15,
                  },
                }}
                transition={{
                  ...transition,
                  delay: 0.25 + index * 0.15,
                }}
                className="text-center"
              >
                <>{page.label}</>
              </motion.div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
