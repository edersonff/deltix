import { useMouse } from "@uidotdev/usehooks";
import React from "react";

export default function ButtonOverlay() {
  const [{ x, y, elementX, elementY }, ref] = useMouse<HTMLDivElement>();

  return (
    <>
      <div className="absolute-full z-50" ref={ref} />
      {elementX > 0 && elementY > 0 && (
        <div
          className="absolute w-0 h-0 top-0 left-0 aspect-square bg-white rounded-full pointer-events-none group-hover:w-[700px] group-hover:h-[700px] transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            top: Number(elementX) + "px",
            left: Number(elementY) + "px",
          }}
        />
      )}
    </>
  );
}
