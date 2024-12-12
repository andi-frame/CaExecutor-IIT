import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Web Ca-Executor IIT",
  description: "Web Calon Executor IIT 2024",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="min-w-full">
        <TRPCReactProvider>
          {children} <Toaster closeButton richColors position="top-center" />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
