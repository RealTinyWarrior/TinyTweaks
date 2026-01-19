import LinkFonts from "@components/LinkFonts";
import { Metadata, Viewport } from "next";
import "@styles/app.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Home - TinyTweaks",
    creator: "TinyWarrior",
    description: "The official website of TinyWarrior. Check out the projects made by Tiny in TinyTweaks!",
    applicationName: "TinyTweaks",
};

export const viewport: Viewport = {
    colorScheme: "light dark",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <LinkFonts />
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
