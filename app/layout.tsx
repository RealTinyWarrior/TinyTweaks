import { Metadata } from "next";
import "@public/globals.css";

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
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet" />

                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Teko:wght@500&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&display=swap"
                    rel="stylesheet"
                />
            </head>

            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
