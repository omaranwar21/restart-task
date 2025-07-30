"use client";

import React from "react";
import NextTopLoader from "nextjs-toploader";

export default function TopLoader() {
  return (
    <NextTopLoader
      color="#2657eb" // Primary blue color
      initialPosition={0.08}
      crawlSpeed={200}
      height={6}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2657eb,0 0 5px #2657eb"
      zIndex={1600}
      showAtBottom={false}
    />
  );
}
