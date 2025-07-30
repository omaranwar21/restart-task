import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/hocs/auth-context";
import { Toaster } from "sonner";
import { QueryProvider } from "@/components/providers/query-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TopLoader from "@/components/common/TopLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <QueryProvider>
          <TopLoader />
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryProvider>
      </body>
    </html>
  );
}
