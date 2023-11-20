import LinkFonts from "@components/LinkFonts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home - TinyTweaks",
    creator: "TinyWarrior",
    description: "The official website of TinyWarrior. Check out the projects made by Tiny in TinyTweaks!",
    applicationName: "TinyTweaks",
    colorScheme: "dark",
};

const RootLayout = ({ children }: { children: React.ReactElement }) => {
    return (
        <html lang="en">
            <LinkFonts />
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
