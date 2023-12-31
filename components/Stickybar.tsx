import { CgFileDocument } from "react-icons/cg";
import { HiCode } from "react-icons/hi";
import { TbAppsOff } from "react-icons/tb";
import ModeSwitch from "./ModeSwitch.tsx";
import lightdark from "@image/lightdark.svg";
import Image from "next/image";
import React from "react";

type Props = { place: "home" | "blogs" | "apps" };

let Icon = ({ place }: { place: string }) =>
    place === "home" ? (
        <HiCode color="white" id="home-icon" />
    ) : place === "blogs" ? (
        <CgFileDocument color="white" id="home-icon" />
    ) : (
        <TbAppsOff color="white" id="home-icon" />
    );

const StickyBar = ({ place }: Props) => {
    return (
        <div id="sticky-bar">
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
