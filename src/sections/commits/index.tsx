import Image from "next/image";
import React from "react";

export default function CommitsSections() {
  return (
    <>
      <Image
        src="/images/frames/dots.svg"
        alt="Dots Frame"
        layout="fill"
        priority
        className="unselectable undraggable"
      />

      <div className="absolute top-[5%] left-0 w-full flex gap-[10%]">
        {/* Months 3 letters */}
        {[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ].map((month) => (
          <p
            key={month}
            className="vertical text-2xl font-bold text-clip bg-gradient-to-b from-neutral-500 to-neutral-800"
          >
            {month}
          </p>
        ))}
      </div>

      <div className="absolute flex gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-500 to-green-800" />
        <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-300 to-green-600" />
        <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-neutral-500 to-neutral-800" />
        <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-500 to-green-800" />
        <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-300 to-green-600" />
      </div>
    </>
  );
}
