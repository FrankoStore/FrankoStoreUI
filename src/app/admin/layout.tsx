import { Fira_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

import ProtectedRoute from "@/components/providers/ProtectedRoute";
import { ToasterProvider } from "@/components/providers/toast-provider";

import "./globals.css";

const font = Fira_Sans({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProtectedRoute>
            <div className={cn(font.className, "flex-1")}>
                <ToasterProvider />
                {children}
            </div>
        </ProtectedRoute>
    );
}
