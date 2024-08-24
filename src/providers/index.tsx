"use client";

import React from "react";
import FontProvider from "./font";
import "../app/globals.css";
import AnimatedCursor from "react-animated-cursor";
import NavbarProvider from "./navbar";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <FontProvider>
        {children}

        <NavbarProvider />

        <AnimatedCursor
          innerSize={4}
          outerSize={24}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "var(--color-primary)",
          }}
          outerStyle={{
            border: "1px solid var(--color-primary)",
          }}
          trailingSpeed={15}
          showSystemCursor
        />
      </FontProvider>
    </html>
  );
}
