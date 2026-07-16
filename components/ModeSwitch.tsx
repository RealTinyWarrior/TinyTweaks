"use client";

import style from "@/styles/header.module.css";

const ModeSwitch = () => {
    function changeTheme() {
        document.documentElement.classList.toggle("dark");

        if (document.documentElement.classList.contains("dark")) localStorage.setItem("theme", "dark");
        else localStorage.setItem("theme", "light");
    }

    return (
        <div role="button" id={style.mode_switch} onClick={changeTheme} aria-label="Toggle theme">
            <div></div>
        </div>
    );
};

export default ModeSwitch;
