import LinkFonts from "@/components/LinkFonts";
import { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import Script from "next/script";
import "@/styles/app.css";

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
        <html suppressHydrationWarning lang="en">
            <LinkFonts />
            <body>
                <Script id="theme-script" strategy="beforeInteractive">
                    {`
                        try {
                            if (localStorage.getItem('theme') === 'dark') {
                                document.documentElement.classList.add("dark");
                            }
                        } catch {}
                    `}
                </Script>

                {children}
            </body>
        </html>
    );
};

export default RootLayout;
