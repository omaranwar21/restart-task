"use client";

import type React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-[100svh] md:h-screen bg-gray-50">
      <Sidebar />
      <div className="relative flex-1 flex flex-col bg-transparent">
        <Header />
        <main className="px-6 pt-20 pb-20 md:pb-5 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
