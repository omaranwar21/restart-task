"use client";

import type React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-[100svh] bg-gray-50">
      <Sidebar />
      <div className="relative flex-1 flex flex-col bg-transparent">
        <Header />
        <main className="p-6 mb-20 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
