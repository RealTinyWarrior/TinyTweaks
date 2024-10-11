import style from "@styles/header.module.css";
import { pointerOfNav } from "@data";
import banner from "@images/nav_banner.png";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Emoji = dynamic(() => import("@components/Emoji"), { ssr: false });
type Props = { place: "home" | "blogs" | "apps" };

const Navbar = ({ place }: Props) => {
    return (
        <>
            <div id={style.nav_style}>
                <Link href="/" id={style.nav_logo_cont}>
                    <Image priority src={banner} alt="Website Banner" id={style.nav_logo} />
                </Link>

                <div id={style.nav_cont}>
                    <h1 id={style.nav_title}>
                        TinyTweaks <Emoji />
                    </h1>

                    <nav role="navigation" id={style.nav_navigation}>
                        {["home", "blogs", "apps"].map((elm) => (
                            <Link
                                key={elm}
                                className="select-none"
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
