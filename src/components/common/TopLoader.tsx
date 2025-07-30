"use client";

import React from "react";
import NextTopLoader from "nextjs-toploader";

export default function TopLoader() {
  return (
    <NextTopLoader
      color="#2c3e50" // Primary gray color
      initialPosition={0.08}
      crawlSpeed={200}
      height={6}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #bdc3c7,0 0 5px #bdc3c7"
      zIndex={1700}
      showAtBottom={false}
    />
  );
}
