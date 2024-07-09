"use client";

import style from "@styles/header.module.css";
import React, { useState } from "react";
import { recent } from "@data";
import "@styles/slider.css";

const HomeRecent = () => {
    const recentRef = React.useRef<HTMLDivElement>(null);
    const [recentState, setrecentState] = useState(0);
    const [checked, setChecked] = useState(0);

    React.useEffect(() => {
        setrecentState(recentRef.current ? recentRef.current.clientHeight : 0);

        window.addEventListener("resize", () => {
            setrecentState(recentRef.current ? recentRef.current.clientHeight : 0);
        });
    }, []);

    return (
        <div id={style.home_recent}>
            {recent.map((elm, i) => (
                <input
                    checked={checked == i ? true : false}
                    onChange={() => setChecked(i)}
                    key={`recent_${i}`}
                    id={`recent_${i}`}
                    type="radio"
                />
            ))}

            <div id="home_slides">
                <div id="home_slides_overflow">
                    <div className="slides_inner">
                        {recent.map((elm) => (
                            <div className="recent_slide" key={elm.name}>
                                <div className={style.recent_icon_cont}>
                                    <div
                                        id={style.recent_icon}
                                        ref={recentRef}
                                        style={{ width: recentState, minWidth: recentState }}
                                    ></div>

                                    <div className={style.recent_data}>
                                        <p className={style.recent_data_name}>{elm.name}</p>
                                        <p className={style.recent_data_date}>{elm.date}</p>
                                    </div>
                                </div>

                                <div className={style.recent_description}>
                                    <p>{elm.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="recent_bullets">
                {recent.map((elm, i) => (
                    <label htmlFor={`recent_${i}`} key={`label_${i}`}></label>
                ))}
            </div>
        </div>
    );
};

export default HomeRecent;
