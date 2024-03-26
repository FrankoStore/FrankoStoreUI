import { Fira_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

import { ModalProvider } from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToasterProvider } from "@/components/providers/toast-provider";

import "./globals.css";

const font = Fira_Sans({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={cn(font.className, "flex-1")}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <ToasterProvider />
                <ModalProvider />
                {children}
            </ThemeProvider>
        </div>
    );
}
