import { pointerOfNav, emojies } from "@data.ts";
import banner from "@image/banner.png";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Emoji = dynamic(() => import("@components/Emoji"), { ssr: false });
type Props = { place: "home" | "blogs" | "apps" };

const Navbar = ({ place }: Props) => {
    return (
        <>
            <div id="nav-style">
                <Image priority src={banner} alt="Website Banner" id="nav-logo" />

                <div id="nav-cont">
                    <h1 id="nav-title">
                        TinyTweaks <Emoji />
                    </h1>

                    <nav id="nav-navigation">
                        {["home", "blogs", "apps"].map((elm) => (
                            <Link
                                key={elm}
                                href={`/${elm === "home" ? "/" : elm}`}
                                style={elm === place ? pointerOfNav : {}}
                            >
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
