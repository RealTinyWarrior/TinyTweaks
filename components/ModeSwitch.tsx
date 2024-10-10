"use client";
import style from "@styles/header.module.css";
import { useEffect } from "react";

const ModeSwitch = () => {
    function changeTheme() {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) localStorage.setItem("theme", "dark");
        else localStorage.setItem("theme", "light");
    }

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");
    }, []);

    return (
        <div id={style.mode_switch} onClick={changeTheme}>
            <div></div>
        </div>
    );
};

export default ModeSwitch;
