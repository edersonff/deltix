import { CategoriesType } from "@/theme/categories";
import React, { useRef } from "react";
import LottieReact from "../lottie";
import { LottieRefCurrentProps } from "lottie-react";
import Link from "next/link";

export default function Category({
  color,
  icon,
  label,
  ...props
}: CategoriesType & React.HTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<LottieRefCurrentProps>(null);
  return (
    <Link
      href={"#" + label.replace(" ", "-").toLowerCase()}
      className={"flex items-center gap-2.5 text-xs px-4 py-2.5 group " + color}
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => ref.current?.stop()}
      {...props}
    >
      <div className="w-8">
        <LottieReact autoplay={false} animation={icon} lottieRef={ref} />
      </div>
      <span className="font-source-code-pro uppercase font-extrabold group-hover:text-white transition-all">
        {label}
      </span>
    </Link>
  );
}
