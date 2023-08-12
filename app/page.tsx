import HomeLeftBoard from "@components/homeleftboard.tsx";
import StickyBar from "@components/stickybar.tsx";
import DisplayShow from "@components/displayshow.tsx";
import Navbar from "@components/navbar.tsx";
import HomeInput from "@components/homeinput";
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
