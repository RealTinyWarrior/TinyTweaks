import HomeLeftBoard from "@components/HomeLeftBoard";
import StickyBar from "@components/Stickybar";
import DisplayShow from "@components/DisplayShow";
import Navbar from "@components/Navbar";
import HomeInput from "@components/HomeInput";
import { textArray } from "@data.ts";

let selectedText = textArray[Math.round(Math.random() * (textArray.length - 1))];

const Home = () => {
    return (
        <>
            <Navbar place="home" />
            <StickyBar place="home" />

            <div id="display-show">
                <DisplayShow text={selectedText} />

                <div id="home-content-box">
                    <div id="tcb-hold">
                        <div id="top-cont-board">
                            <HomeLeftBoard />

                            <div id="tcb-contentbox">
                                <div id="home-details"></div>

                                <HomeInput ui={"small"} />
                            </div>
                        </div>

                        <HomeInput ui={"large"} />
                    </div>

                    <div id="home-recent"></div>
                </div>
            </div>

            <div style={{ height: "800px" }}></div>
        </>
    );
};

export default Home;
