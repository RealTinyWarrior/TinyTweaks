import head from "@styles/header.module.css";
import DisplayShow from "./DisplayShow";

const DisplayContainer = () => {
    return (
        <div id={head.home_center_text}>
            <div id={head.w_text_c}>
                <p>
                    <span className="select-none">&nbsp;</span>
                    <DisplayShow />
                    <span>_</span>
                </p>
            </div>
        </div>
    );
};
export default DisplayContainer;
