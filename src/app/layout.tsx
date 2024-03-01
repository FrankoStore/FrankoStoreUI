import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import { Footer, Header } from "@/components/shared";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "LNU Store",
    description: "Store maintained by LNU",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "flex flex-col min-h-screen")}>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer overrideContainerStyle="mt-[112px]" />
            </body>
        </html>
    );
}
