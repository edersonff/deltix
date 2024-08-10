import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { transition } from "@/theme/animation";
export default function Marker({
  children,
  className,
  bg = "bg-primary",
  delay = 0,
  ...props
}: HTMLAttributes<HTMLSpanElement> & {
  delay?: number;
  bg?: string;
}) {
  return (
    <span {...props} className="relative inline-block px-2 py-0.5 mx-1">
      <motion.span
        initial={{
          width: 0,
        }}
        whileInView={{
          width: "100%",
        }}
        transition={{
          ...transition,
          duration: 2,
          delay,
        }}
        viewport={{
          once: true,
        }}
        className={
          className +
          " absolute flex justify-start items-center top-0 left-0 h-full overflow-hidden text-nowrap font-semibold " +
          bg
        }
      >
        <span className="px-2 py-0.5">{children}</span>
      </motion.span>
      {children}
    </span>
  );
}
