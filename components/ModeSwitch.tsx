"use client";
import style from "@styles/header.module.css";

const ModeSwitch = () => {
    return (
        <div id={style.mode_switch} onClick={() => document.body.classList.toggle("light")}>
            <div></div>
        </div>
    );
};

export default ModeSwitch;
