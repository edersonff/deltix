import { pages } from "@/theme/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useGlitch } from "react-powerglitch";
export default function Nav({
  href,
  label,
  isFlat,
}: {
  href: string;
  label: string;
  isFlat?: boolean;
}) {
  const style = isFlat
    ? ""
    : "bg-gradient-to-b from-white to-neutral-500 hover:to-primary text-clip";

  const glitch = useGlitch({
    playMode: "hover",
  });

  return (
    <Link
      href={href}
      ref={glitch.ref}
      className={`text-white hover:text-[#3ac7ff] font-play font-bold hover:font-vt323 uppercase text-sm text-center px-5 py-3 relative group ${style}`}
    >
      <div className="unselectable undraggable absolute top-1/2 -translate-y-1/2 left-0 scale-y-0 translate-x-2 group-hover:x-[-scale-y-100,translate-x-0,delay-0] delay-100 transition-transform duration-300 ease-in-out">
        <Image
          src="/images/icons/selector.svg"
          alt="Arrow"
          width={10}
          height={10}
          priority
          className=""
        />
      </div>
      {label}
    </Link>
  );
}
