import React from "react";
import { useGlitch } from "react-powerglitch";

export default function GlitchBtn({ children }: { children: React.ReactNode }) {
  const { ref } = useGlitch({
    playMode: "click",
  });

  return React.cloneElement(children as React.ReactElement, {
    ref,
  });
}
