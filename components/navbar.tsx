import { pointerOfNav, emojies } from "@data.ts";
import banner from "@image/banner.png";
import Image from "next/image";
import Link from "next/link";
import Emoji from "./emoji.tsx";

type Props = { place: "home" | "docs" | "apps" };

const Navbar = ({ place }: Props) => {
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
                            <Link key={elm} href={`/${elm === "home" ? "/" : elm}`} style={elm === place ? pointerOfNav : {}}>
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
