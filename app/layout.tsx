import LinkFonts from "@components/LinkFonts";
import { Metadata, Viewport } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
    title: "Home - TinyTweaks",
    creator: "TinyWarrior",
    description: "The official website of TinyWarrior. Check out the projects made by Tiny in TinyTweaks!",
    applicationName: "TinyTweaks",
};

export const viewport: Viewport = {
    themeColor: "black",
    colorScheme: "dark",
};

const RootLayout = ({ children }: { children: React.ReactElement }) => {
    return (
        <html lang="en" className="dark">
            <LinkFonts />
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
