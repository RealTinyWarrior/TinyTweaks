"use client";

import style from "@styles/header.module.css";
import React, { useState } from "react";

const HomeRecent = () => {
    const recentRef = React.useRef<HTMLDivElement>(null);
    const [recentState, setrecentState] = useState(0);

    React.useEffect(() => {
        setrecentState(recentRef.current ? recentRef.current.clientHeight : 0);

        window.addEventListener("resize", () => {
            setrecentState(recentRef.current ? recentRef.current.clientHeight : 0);
        });
    }, []);

    return (
        <div id={style.home_recent}>
            <div id={style.recent_icon_cont}>
                <div id={style.recent_icon} ref={recentRef} style={{ width: recentState }}></div>
                <p id={style.recent_title}></p>
            </div>
        </div>
    );
};

export default HomeRecent;
