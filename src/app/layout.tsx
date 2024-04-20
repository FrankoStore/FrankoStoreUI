import type { Metadata } from "next";

import { cn } from "@/lib/utils";

import { ApolloClientProvider } from "@/components/providers/ApolloClientProvider";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
        <html lang="ua">
            <ApolloClientProvider>
                <body className={cn("flex flex-col min-h-screen")}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        {children}
                    </ThemeProvider>
                </body>
            </ApolloClientProvider>
        </html>
    );
}
