import React from "react";
import { useGlitch } from "react-powerglitch";

export default function GlitchBtn({
  children,
  containerClass,
}: {
  children: React.ReactNode;
  containerClass?: string;
}) {
  const { ref } = useGlitch({
    playMode: "click",
    createContainers: false,
  });

  return (
    <div className={containerClass} ref={ref}>
      {React.cloneElement(children as React.ReactElement)}
    </div>
  );
}
