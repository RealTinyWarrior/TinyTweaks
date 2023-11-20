import { pointerOfNav, emojies } from "@data.ts";
import banner from "@image/banner.png";
import Image from "next/image";
import Link from "next/link";
import Emoji from "./Emoji.tsx";

type Props = { place: "home" | "blogs" | "apps" };

const Navbar = ({ place }: Props) => {
    return (
        <>
            <div id="nav-style">
                <Image priority src={banner} alt="Website Banner" id="nav-logo" />

                <div id="nav-cont">
                    <h1 id="nav-title">
                        TinyTweaks <Emoji initialEmoji={emojies[Math.round(Math.random() * (emojies.length - 1))]} />
                    </h1>

                    <nav id="nav-navigation">
                        {["home", "blogs", "apps"].map((elm) => (
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
