import type { Metadata } from "next";
import { useTheme } from "next-themes";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Footer, Header } from "@/components/shared";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider attribute="id" defaultTheme="light">
            <div className={cn(inter.className)}>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer overrideContainerStyle="mt-[112px]" />
                <Toaster />
            </div>
        </ThemeProvider>
    );
}
