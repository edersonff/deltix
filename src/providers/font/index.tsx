"use client";

import { IBM_Plex_Serif, Inter, Play, Source_Code_Pro } from "next/font/google";
import React from "react";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const play = Play({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-play",
});

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-source_code_pro",
});

export default function FontProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${inter.className} ${inter.variable} ${play.variable} ${sourceCodePro.variable}`}
    >
      {children}
    </body>
  );
}
