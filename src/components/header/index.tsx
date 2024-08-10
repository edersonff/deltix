import { pages } from "@/theme/navigation";
import { social } from "@/theme/social";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "../nav";

export default function Header({ style }: { style?: string }) {
  return (
    <header className="w-full py-10">
      <div className="content flex items-center justify-between">
        <Link href="/">
          <Image
            src={`/deltix/logo-${style || "blue"}.svg`}
            alt="Deltix Logo"
            width={150}
            height={30}
            priority
          />
        </Link>

        <nav className="flex items-center">
          {pages.map((page, index) => (
            <Nav key={index} {...page} isFlat={style === "white"} />
          ))}
        </nav>

        <div className="flex items-center">
          {social.map(({ href, icon, flatIcon, label, size }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              className="p-2.5 hover:opacity-75"
            >
              <Image
                src={
                  style
                    ? `/images/social/${flatIcon}`
                    : `/images/social/${icon}`
                }
                alt={label}
                width={size}
                height={size}
                priority
              />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
