import HomeLeftBoard from "@components/HomeLeftBoard";
import StickyBar from "@components/Stickybar";
import Navbar from "@components/Navbar";
import head from "@styles/header.module.css";
import HomeInput from "@components/HomeInput";
import PageNav from "@components/PageNav";
import DisplayContainer from "@components/DisplayContainer";

const Home = () => {
    return (
        <>
            <Navbar place="home" />
            <StickyBar place="home" />

            <div id={head.display_show}>
                <DisplayContainer />

                <div id={head.home_content_box}>
                    <div id={head.tcb_hold}>
                        <div id={head.top_cont_board}>
                            <HomeLeftBoard />

                            <div id={head.tcb_contentbox}>
                                <main role="main" id={head.home_details}>
                                    <p id={head.hd_smalltext}>TinyTweaks</p>
                                    <p id={head.hd_title}>HI, I'M TAHMID!</p>

                                    <p id={head.home_desc}>
                                        Welcome to TinyTweaks! I'm Tahmid, often referred to as TinyWarrior, a
                                        passionate software developer.
                                    </p>
                                </main>

                                <HomeInput ui={"large"} />
                            </div>
                        </div>

                        <HomeInput ui={"small"} />
                    </div>

                    <PageNav />
                </div>
            </div>
        </>
    );
};

export default Home;
