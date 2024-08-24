"use client";

import LocomotiveProvider from "@/providers/locomotive";
import React from "react";
import Loading from "../loading";
import Footer from "@/components/footer";
import GraphSection from "@/sections/graph";
import CommitsSections from "@/sections/commits";

export default function Removed() {
  return (
    <LocomotiveProvider>
      <Loading isComponent />

      <main>
        <section
          data-scroll-section
          className="min-h-screen relative flex-center text-4xl"
        >
          <CommitsSections />
        </section>

        <section data-scroll-section>
          <Footer />
        </section>
      </main>
    </LocomotiveProvider>
  );
}
