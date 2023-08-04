import { pointerOfNav as pointer, emojies } from "@data.ts";
import banner from "@image/banner.png";
import Image from "next/image";
import Link from "next/link";
import Emoji from "./Emoji.tsx";

const Navbar = ({ place }: { place: string }) => {
    return (
        <>
            <div id="nav-style">
                <Image src={banner} alt="Website Banner" id="nav-logo" />

                <div id="nav-cont">
                    <b id="nav-title">
                        TinyTweaks <Emoji initialEmoji={emojies[Math.round(Math.random() * (emojies.length - 1))]} />
                    </b>

                    <nav id="nav-navigation">
                        {["home", "docs", "apps"].map((elm) => (
                            <Link key={elm} href={`/${elm === "home" ? "/" : elm}`} style={elm === place ? pointer : {}}>
                                <span>{elm.toUpperCase()}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
