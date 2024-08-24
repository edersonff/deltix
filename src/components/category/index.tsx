import { CategoriesType } from "@/theme/categories";
import React, { useRef } from "react";
import LottieReact from "../lottie";
import { LottieRefCurrentProps } from "lottie-react";
import Link from "next/link";

export default function Category({
  color,
  icon,
  label,
  colorHex,
  ...props
}: CategoriesType & React.HTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<LottieRefCurrentProps>(null);
  return (
    <Link
      href={"#" + label.replace(" ", "-").toLowerCase()}
      className={
        "flex items-center relative gap-2.5 text-xs px-4 py-2.5 group " + color
      }
      onMouseEnter={() => {
        ref.current?.play();
      }}
      {...props}
    >
      <div
        className="absolute left-0 top-0 w-[25px] h-[15px] transition-all duration-300 group-hover:border-l-2 group-hover:border-t-2"
        style={{
          borderColor: colorHex,
        }}
      />
      <div
        className="absolute right-0 top-0 w-[25px] h-[15px] transition-all duration-300 group-hover:border-r-2 group-hover:border-t-2"
        style={{
          borderColor: colorHex,
        }}
      />
      <div
        className="absolute left-0 bottom-0 w-[25px] h-[15px] transition-all duration-300 group-hover:border-l-2 group-hover:border-b-2"
        style={{
          borderColor: colorHex,
        }}
      />
      <div
        className="absolute right-0 bottom-0 w-[25px] h-[15px] transition-all duration-300 group-hover:border-r-2 group-hover:border-b-2"
        style={{
          borderColor: colorHex,
        }}
      />

      <div className="w-8">
        <LottieReact
          loop={false}
          autoplay={false}
          animation={icon}
          lottieRef={ref}
          onComplete={() => ref.current?.stop()}
        />
      </div>
      <span className="font-source-code-pro uppercase font-extrabold group-hover:text-white transition-all">
        {label}
      </span>
    </Link>
  );
}
