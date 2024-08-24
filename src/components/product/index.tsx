import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GlitchBtn from "../button";
import { Product as ProductType } from "@/theme/products";
import { FiExternalLink } from "react-icons/fi";

export default function Product({
  name,
  description,
  background,
  logo,
  href,
}: ProductType) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex-center h-screen w-screen relative">
      <Image
        src={"/images/products/" + background}
        alt={name}
        layout="fill"
        className="absolute transition-opacity duration-300 object-cover opacity-0 small:opacity-10"
        style={{
          opacity: isHovered ? 0.1 : undefined,
        }}
      />
      <div className="content w-full flex-center py-[12vh]">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="stroke-glass w-full h-full flex-center max-w-main-11 flex-col py-[10%] bg-black/20 backdrop-blur-lg px-4"
        >
          <Image
            src={"/images/products/" + logo}
            alt={name}
            width={120}
            height={120}
            className="rounded-full mb-8"
          />
          <h2
            className="text-5xl small:text-3xl font-extralight mb-8"
            dangerouslySetInnerHTML={{ __html: name }}
          />
          <p className="max-w-main-7 text-sm small:text-[10px] mb-20 text-center leading-[250%]">
            {description}
          </p>

          <GlitchBtn>
            <Link
              href={href}
              role="button"
              className="flex-3 flex-center gap-2 overflow-hidden max-w-main-3 bg-primary/70 text-white/70 font-bold text-sm small:text-xs text-center px-5 py-2.5 relative group rounded-full"
            >
              Read more
              <FiExternalLink className="text-xl" />
            </Link>
          </GlitchBtn>
        </div>
      </div>
    </div>
  );
}
