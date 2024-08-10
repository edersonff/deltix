"use client";

import React from "react";
import { LottieComponentProps } from "lottie-react";
import { lotties } from "./lotties";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LottieReact({
  children,
  animation,
  ...props
}: Partial<LottieComponentProps> & {
  animation: keyof typeof lotties;
}) {
  //

  return (
    <Lottie {...props} animationData={lotties[animation]}>
      {children}
    </Lottie>
  );
}
