import React from "react";

export default function RandomShapes() {
  return (
    <>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary opacity-5 rounded-full blur-2xl"></div>
      </div>
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary opacity-20 rotate-45 rounded-lg animate-bounce"></div>
      <div className="absolute bottom-32 left-10 w-16 h-16 bg-primary opacity-15 rotate-12 rounded-lg animate-pulse"></div>
      <div className="absolute top-1/3 left-20 w-12 h-12 bg-white opacity-10 rotate-45 rounded-lg animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-20 w-14 h-14 bg-primary opacity-20 rounded-full animate-bounce delay-500"></div>
    </>
  );
}
