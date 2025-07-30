"use client";

import type React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen bg-gray-50">
      <Sidebar />
      <div className="relative h-screen flex-1 overflow-auto flex flex-col bg-transparent">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
