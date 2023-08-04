import Navbar from "@components/Navbar.tsx";
import DisplayShow from "@components/DisplayShow";
import StickyBar from "@components/StickyBar";
import HomeLeftBoard from "@components/HomeLeftBoard";
import { textArray } from "@data";

let selectedText = textArray[Math.round(Math.random() * (textArray.length - 1))];

const Home = () => {
    return (
        <>
            <Navbar place="home" />

            <div id="display-show">
                <StickyBar place="home" />
                <DisplayShow text={selectedText} />

                <div id="home-content-box">
                    <div id="tcb-hold">
                        <div id="top-cont-board">
                            <HomeLeftBoard />

                            <div id="tcb-contentbox">
                                <div id="home-in2">
                                    <input type="text" />
                                </div>
                            </div>
                        </div>

                        <div id="home-in1">
                            <input type="text" />
                        </div>
                    </div>

                    <div id="home-recent"></div>
                </div>
            </div>
        </>
    );
};

export default Home;
export { selectedText };
