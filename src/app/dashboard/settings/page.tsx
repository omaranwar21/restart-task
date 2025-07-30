"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { withAuth } from "@/hocs/AuthProvider";
import { SettingsIcon } from "lucide-react";

function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your application settings</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <SettingsIcon className="h-5 w-5 text-gray-600" />
            <CardTitle>Settings Page</CardTitle>
          </div>
          <CardDescription>
            This page is intentionally left empty as per requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <SettingsIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Settings Coming Soon
            </h3>
            <p className="text-gray-600">
              This page will contain application settings and configuration
              options.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default withAuth(SettingsPage);
