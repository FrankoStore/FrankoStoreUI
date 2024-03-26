import type { Metadata } from "next";

import { cn } from "@/lib/utils";

import { ApolloClientProvider } from "@/components/providers/ApolloClientProvider";

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
            <ApolloClientProvider>
                <body className={cn("flex flex-col min-h-screen")}>
                    {children}
                </body>
            </ApolloClientProvider>
        </html>
    );
}
