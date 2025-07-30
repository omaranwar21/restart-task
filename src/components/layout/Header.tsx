"use client";
import React from "react";
import { Bell, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hocs/AuthProvider";
import CustomTooltipProvider from "../common/CustomTooltipProvider";

export default function Header() {
  const { logout, user } = useAuth();

  return (
    <div className="!bg-transparent relative mx-auto z-10 w-full md:w-2/3 rounded-b-3xl">
      <div className="flex justify-between absolute top-0 items-center px-6 py-4 backdrop-blur rounded-b-3xl w-full bg-transparent shadow-md">
        <div className="bg-transparent">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {user?.username}
              </p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-transparent">
          <CustomTooltipProvider
            trigger={
              <Button
                size="icon"
                variant="ghost"
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell className="!w-6 !h-6" />
              </Button>
            }
            content="Notifications"
          />

          <CustomTooltipProvider
            trigger={
              <Button
                size="icon"
                variant="ghost"
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <User className="!w-6 !h-6" />
              </Button>
            }
            content="Profile"
          />

          <CustomTooltipProvider
            trigger={
              <Button
                size="icon"
                variant="ghost"
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => logout()}
              >
                <LogOut className="!w-6 !h-6" />
              </Button>
            }
            content="Logout"
          />
        </div>
      </div>
    </div>
  );
}
