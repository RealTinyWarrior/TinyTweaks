import HomeLeftBoard from "@components/HomeLeftBoard";
import StickyBar from "@components/Stickybar";
import Navbar from "@components/Navbar";
import dynamic from "next/dynamic";
import head from "@styles/home.module.css";
import HomeRecent from "@components/HomeRecent";
import HomeInput from "@components/HomeInput";

const DisplayShow = dynamic(() => import("@components/DisplayShow"), { ssr: false });

const Home = () => {
    return (
        <>
            <Navbar place="home" />
            <StickyBar place="home" />

            <div id={head.display_show}>
                <div id={head.home_center_text}>
                    <div id={head.w_text_c}>
                        <p>
                            <span className="select-none">&nbsp;</span>
                            <DisplayShow />
                            <span>_</span>
                        </p>
                    </div>
                </div>

                <div id={head.home_content_box}>
                    <div id={head.tcb_hold}>
                        <div id={head.top_cont_board}>
                            <HomeLeftBoard />

                            <div id={head.tcb_contentbox}>
                                <div id={head.home_details}>
                                    <p id={head.hd_smalltext}>TinyTweaks</p>
                                    <p id={head.hd_title}>HI, I'M TINY!</p>

                                    <p id={head.home_desc}>
                                        Welcome to TinyTweaks! I'm TinyWarrior, a person who heavily enjoys
                                        programming. I made this website to share my projects online!
                                    </p>
                                </div>

                                <HomeInput ui={"large"} />
                            </div>
                        </div>

                        <HomeInput ui={"small"} />
                    </div>

                    <HomeRecent />
                </div>
            </div>
        </>
    );
};

export default Home;
