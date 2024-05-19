import { CgFileDocument } from "react-icons/cg";
import { HiCode } from "react-icons/hi";
import { TbAppsOff } from "react-icons/tb";
import ModeSwitch from "./ModeSwitch.tsx";
import lightdark from "@image/lightdark.svg";
import Image from "next/image";
import React from "react";
import style from "@styles/header.module.css";

type Props = { place: "home" | "blogs" | "apps" };

let Icon = ({ place }: { place: string }) =>
    place === "home" ? (
        <HiCode color="white" id={style.home_icon} />
    ) : place === "blogs" ? (
        <CgFileDocument color="white" id={style.home_icon} />
    ) : (
        <TbAppsOff color="white" id={style.home_icon} />
    );

const StickyBar = ({ place }: Props) => {
    return (
        <div id={style.sticky_bar}>
            <div id={style.text_place}>
                &nbsp;
                <Icon place={place} />
                <p> &nbsp;{place[0].toUpperCase() + place.slice(1)}</p>
            </div>

            <div id={style.mode_shifter_cont}>
                <ModeSwitch />

                <Image
                    priority
                    alt="sun logo"
                    draggable="false"
                    id={style.mode_shift_image}
                    src={lightdark}
                />
            </div>
        </div>
    );
};

export default StickyBar;
