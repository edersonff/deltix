import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { transition } from "@/theme/animation";

export default function Laptop() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 relative flex-center perspective-[4800px]">
      <AnimatePresence>
        <div
          key={currentImage}
          className="absolute top-0 left-[12%] z-20 transform -rotate-y-45 -rotate-x-[7deg] drop-shadow-[10px_10px_15px_rgba(0,0,0,0.75)] overflow-hidden"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: {
                ...transition,
                delay: 0.75,
                duration: 1,
              },
            }}
            transition={{
              ...transition,
              delay: 1.5,
              duration: 1.5,
            }}
          >
            <Image
              src={"/images/prints/0" + (currentImage + 1) + ".png"}
              alt="Laptop"
              width={600}
              height={400}
              priority
              className="unselectable undraggable rounded-lg"
            />
          </motion.div>
        </div>
      </AnimatePresence>

      <Image
        src="/images/mockup/laptop.png"
        alt="Laptop"
        width={700}
        height={700}
        priority
        className="unselectable undraggable relative z-10"
      />
      <div className="absolute w-[1px] h-[1px] shadow-[0px_0px_700px_150px_#07D6F2] small:shadow-[0px_0px_500px_100px_#07D6F2] mix-blend-color-dodge" />
    </div>
  );
}
