import { FaHome } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { TbAppsOff } from "react-icons/tb";
import ModeSwitch from "./modeswitch.tsx";
import lightdark from "@image/lightdark.svg";
import Image from "next/image";
import React from "react";

let Icon = ({ place }: { place: string }) =>
    place === "home" ? (
        <FaHome color="white" id="home-icon" />
    ) : place === "docs" ? (
        <CgFileDocument color="white" id="home-icon" />
    ) : (
        <TbAppsOff color="white" id="home-icon" />
    );

const StickyBar = ({ place }: { place: string }) => {
    return (
        <div id="show-stick">
            <div id="text-place">
                &nbsp;
                <Icon place={place} />
                <p> &nbsp;{place[0].toUpperCase() + place.slice(1)}</p>
            </div>

            <div id="mode-shifter-cont">
                <ModeSwitch />

                <Image priority alt="sun logo" draggable="false" id="mode-shift-image" src={lightdark} />
            </div>
        </div>
    );
};

export default StickyBar;
