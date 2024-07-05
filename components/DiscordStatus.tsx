"use client";

import React from "react";
import style from "@styles/header.module.css";
import { FaCircle } from "react-icons/fa";
import { PiMoonStarsDuotone } from "react-icons/pi";
import { SiVisualstudiocode } from "react-icons/si";
import { PiGameControllerDuotone } from "react-icons/pi";
import { FaMinusCircle } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

const DiscordStatus = ({ status }: { status: string }) => {
    return (
        <div id={style.tcb_status}>
            {status == "online" ? (
                <FaCircle color="#23a55a" />
            ) : status == "idle" ? (
                <PiMoonStarsDuotone color="yellow" fontSize={23} />
            ) : status == "code" ? (
                <SiVisualstudiocode color="#007ACC" fontSize={20} />
            ) : status == "game" ? (
                <PiGameControllerDuotone color="#007ACC" fontSize={23} />
            ) : status == "dnd" ? (
                <FaMinusCircle color="#f23f43" fontSize={18} />
            ) : status == "offline" ? (
                <FaCircleDot color="#80848e" fontSize={17} />
            ) : (
                ""
            )}
        </div>
    );
};

export default DiscordStatus;
