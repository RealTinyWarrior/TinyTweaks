import HomeLeftBoard from "@components/HomeLeftBoard";
import StickyBar from "@components/Stickybar";
import Navbar from "@components/Navbar";
import HomeInput from "@components/HomeInput";
import dynamic from "next/dynamic";
import style from "@styles/header.module.css";

const DisplayShow = dynamic(() => import("@components/DisplayShow"), { ssr: false });

const Home = () => {
    return (
        <>
            <Navbar place="home" />
            <StickyBar place="home" />

            <div id={style.display_show}>
                <div id={style.home_center_text}>
                    <div id={style.w_text_c}>
                        <p>
                            &nbsp;
                            <DisplayShow />
                            <span>_</span>
                        </p>
                    </div>
                </div>

                <div id={style.home_content_box}>
                    <div id={style.tcb_hold}>
                        <div id={style.top_cont_board}>
                            <HomeLeftBoard />

                            <div id={style.tcb_contentbox}>
                                <div id={style.home_details}>
                                    <p id={style.hd_smalltext}>TinyTweaks</p>
                                    <p id={style.hd_title}>HI, I'M TINY!</p>

                                    <p id={style.home_desc}>
                                        Welcome to TinyTweaks! I'm TinyWarrior, a person who heavily enjoys
                                        programming. I made this website to share my projects online!
                                    </p>
                                </div>

                                <HomeInput ui={"large"} />
                            </div>
                        </div>

                        <HomeInput ui={"small"} />
                    </div>

                    <div id={style.home_recent}></div>
                </div>
            </div>
        </>
    );
};

export default Home;
