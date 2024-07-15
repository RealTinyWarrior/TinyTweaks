"use client";

import style from "@styles/header.module.css";
import React, { useState } from "react";
import { recent } from "@data";
import "@styles/slider.css";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";

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

    function nextSlide(direction: string) {
        if (direction == "left") {
            if (checked <= 0) setChecked(recent.length - 1);
            else setChecked((prev) => prev - 1);
        } else {
            if (checked >= recent.length - 1) setChecked(0);
            else setChecked((prev) => prev + 1);
        }
    }

    return (
        <div id={style.home_recent} style={{ border: `3px solid ${recent[checked].border}` }}>
            {recent.map((elm, i) => (
                <input
                    checked={checked == i ? true : false}
                    onChange={() => setChecked(i)}
                    key={`recent_${i}`}
                    id={`recent_${i}`}
                    type="radio"
                />
            ))}

            <div id="home_controls">
                <div
                    className="control_button_home"
                    onClick={() => nextSlide("left")}
                    style={{ backgroundColor: recent[checked].buttonColor }}
                >
                    <FaChevronLeft />
                </div>

                <div
                    className="control_button_home"
                    onClick={() => nextSlide("right")}
                    style={{ backgroundColor: recent[checked].buttonColor }}
                >
                    <FaChevronRight />
                </div>
            </div>

            <div id="home_slides">
                <div id="home_slides_overflow">
                    <div className="slides_inner">
                        {recent.map((elm) => (
                            <div className="recent_slide" key={elm.name}>
                                <div className={style.background_image_recent}>
                                    <Image className={style.fit_image} src={elm.background} alt={elm.name} />
                                </div>

                                <div className={style.recent_link}>
                                    <div className={style.recent_icon_cont}>
                                        <Link style={{ height: "100%" }} href={elm.link}>
                                            <div
                                                style={{
                                                    width: recentState,
                                                    minWidth: recentState,
                                                    border: `3px solid ${elm.iconBorder}`,
                                                }}
                                                className={style.recent_icon}
                                                ref={recentRef}
                                            >
                                                <Image
                                                    className={style.recent_icon_cont_img}
                                                    src={elm.icon}
                                                    alt={elm.name}
                                                />
                                            </div>
                                        </Link>

                                        <div className={style.recent_data}>
                                            <p className={style.recent_data_name}>{elm.name}</p>
                                            <p className={style.recent_data_date}>{elm.date}</p>
                                        </div>
                                    </div>

                                    <div className={style.recent_description}>
                                        <p>{elm.description}</p>
                                    </div>
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
