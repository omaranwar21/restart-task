"use client";

import React from "react";
import { Settings, LayoutDashboard, Package } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/dashboard/products", icon: Package },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full md:relative absolute bottom-0 z-50 md:w-56 bg-white backdrop:blur-sm shadow-lg md:h-full h-fit">
      <div className="md:block hidden p-6 h-fit">
        <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
      </div>

      <nav className="flex md:flex-col justify-between px-4 w-fit md:w-full mx-auto md:py-0 py-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex md:flex-row flex-col items-center px-3 py-2 text-sm font-medium md:rounded-md transition-colors",
                isActive
                  ? "bg-primary md:bg-transparent md:!bg-gradient-to-r md:!from-primary md:!via-[#bdc3c7] md:!to-transparent text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <item.icon className="md:mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
