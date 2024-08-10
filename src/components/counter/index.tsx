import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { IconType } from "react-icons";

export default function Counter({
  number,
  icon,
  title,
  more,
  bg,
}: {
  number: number;
  icon: IconType;
  title: string;
  more?: boolean;
  bg?: boolean;
}) {
  const observer = useRef<HTMLDivElement>(null);

  const isOnView = useInView(observer);

  return (
    <div
      className={
        "flex-1 h-full group relative overflow-hidden transition-all border border-transparent hover:border-primary " +
        (bg ? "bg-white/5" : "")
      }
      ref={observer}
    >
      <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-70 transition-all transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src="/images/illustrations/circle.svg"
          alt="Figura circulo gratiente"
          width={500}
          height={500}
          className="unselectable undraggable scale-150"
        />
      </div>

      <div className="flex flex-col gap-6 items-center justify-center h-full px-4 py-10">
        <div className="text-6xl text-primary">{React.createElement(icon)}</div>
        <p className="text-3xl font-bold" key={String(isOnView)}>
          {more && <>+</>}
          <CountUp end={number} duration={3} />
        </p>
        <h2 className="font-light text-center text-base">{title}</h2>
      </div>
    </div>
  );
}
