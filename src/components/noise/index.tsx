import Image from "next/image";
import React, { useRef } from "react";

export default function Noise({
  children,
  className,
  image = "static",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  image?: string;
}) {
  return (
    <div {...props} className={`relative z-0 ${className}`}>
      <div
        className="absolute-full z-0 pointer-events-none"
        style={{
          backgroundImage: `url("/images/noise/${image}.png")`,
        }}
      ></div>
      {children}
    </div>
  );
}
