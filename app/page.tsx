import HomeLeftBoard from "@components/HomeLeftBoard";
import StickyBar from "@components/Stickybar";
import Navbar from "@components/Navbar";
import HomeInput from "@components/HomeInput";
import "@styles/header.css";
import dynamic from "next/dynamic";

const DisplayShow = dynamic(() => import("@components/DisplayShow"), { ssr: false });

const Home = () => {
    return (
        <>
            <Navbar place="home" />
            <StickyBar place="home" />

            <div id="display-show">
                <div id="home-center-text">
                    <div id="w-text-c">
                        <p>
                            &nbsp;
                            <DisplayShow />
                            <span>_</span>
                        </p>
                    </div>
                </div>

                <div id="home-content-box">
                    <div id="tcb-hold">
                        <div id="top-cont-board">
                            <HomeLeftBoard />

                            <div id="tcb-contentbox">
                                <div id="home-details">
                                    <p id="hd-smalltext">TinyTweaks</p>
                                    <p id="hd-title">HI, I'M TINY!</p>

                                    <p id="home-desc">
                                        Welcome to my website TinyTweaks! I'm TinyWarrior, a person who heavily enjoys
                                        programming. I made this website to share my projects online!
                                    </p>
                                </div>

                                <HomeInput ui={"large"} />
                            </div>
                        </div>

                        <HomeInput ui={"small"} />
                    </div>

                    <div id="home-recent"></div>
                </div>
            </div>
        </>
    );
};

export default Home;
