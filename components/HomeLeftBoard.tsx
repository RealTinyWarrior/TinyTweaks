"use client";

import React, { useState } from "react";
import style from "@styles/header.module.css";
import DiscordStatus from "./DiscordStatus";
import Image from "next/image";
import cloud_banner from "@images/cloud_banner.webp";
import base_logo from "@images/tw_base.png";

type StatusData = {
    activities: { name: string; details: string }[];
    discord_status: string;
};

const HomeLeftBoard = () => {
    const boxRef = React.useRef<HTMLDivElement>(null);
    const [boxState, setBoxState] = useState(0);
    const [status, setStatus] = useState("");
    const [statusText, setStatusText] = useState("");
    const [details, setDetails] = useState("");

    React.useEffect(() => {
        async function getData() {
            setBoxState(boxRef.current ? boxRef.current.clientHeight : 0);

            window.addEventListener("resize", () => {
                setBoxState(boxRef.current ? boxRef.current.clientHeight : 0);
            });

            const jsonData = await fetch("https://api.lanyard.rest/v1/users/906968333646168084");
            const { data }: { data: StatusData } = await jsonData.json();
            let statusIndex = 0;

            if (data.activities.length > 0) if (data.activities[0].name == "Custom Status") statusIndex = 1;

            setStatus(
                data.activities.length > statusIndex
                    ? data.activities[statusIndex].name == "Visual Studio Code"
                        ? "code"
                        : "game"
                    : data.discord_status
            );

            setStatusText(
                data.activities.length > statusIndex
                    ? data.activities[statusIndex].name
                    : data.discord_status[0].toUpperCase() +
                          data.discord_status.slice(1, data.discord_status.length)
            );

            setDetails(data.activities.length > statusIndex ? data.activities[0].details : "");
        }

        getData();
    }, []);

    return (
        <div id={style.tcb_leftbox} ref={boxRef} style={{ width: boxState }}>
            <Image
                style={{ userSelect: "none" }}
                className={style.image_fill}
                src={cloud_banner}
                alt="Clouds"
                unoptimized
            />

            <Image
                style={{ userSelect: "none" }}
                className={style.image_fill}
                alt="TinyWarrior Logo"
                src={base_logo}
            />

            <p
                id={style.tcb_statustext}
                style={{
                    fontSize:
                        status == "code" || status == "game"
                            ? "clamp(1px, 15px, 2vw)"
                            : "clamp(1px, 20px, 3vw)",

                    bottom: status == "code" || status == "game" ? "-2.2%" : "-5.5%",
                }}
            >
                {status == "code" ? "Coding in" : status != "game" ? "" : "Playing"}
                <br className="select-none" />
                {statusText == "Dnd" ? "Do Not Disturb" : statusText == "BlueStacks 5" ? details : statusText}
            </p>

            <div id={style.tcb_status}>
                <DiscordStatus status={status} />
            </div>
        </div>
    );
};

export default HomeLeftBoard;
