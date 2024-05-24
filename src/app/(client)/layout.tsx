"use client";

import { useTheme } from "next-themes";
import { Inter } from "next/font/google";
import { useLayoutEffect } from "react";

import { cn } from "@/lib/utils";

import { Footer, Header } from "@/components/shared";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { setTheme } = useTheme();

    useLayoutEffect(() => {
        setTheme("light");
    }, []);

    return (
        <div className={cn(inter.variable, "min-h-screen flex flex-col font-inter")}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer overrideContainerStyle="mt-[112px]" />
            <Toaster />
        </div>
    );
}
