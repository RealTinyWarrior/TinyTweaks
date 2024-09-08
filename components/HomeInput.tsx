"use client";

import { useState } from "react";
import { SiGnubash } from "react-icons/si";
import { TbCubeSend } from "react-icons/tb";
import { command, locations, customCommands } from "@data";
import style from "@styles/home.module.css";
import dynamic from "next/dynamic";

const TextComponent = dynamic(() => import("@components/HomeInputText.tsx"), { ssr: false });

const HomeInput = ({ ui }: { ui: "small" | "large" }) => {
    const [value, setValue] = useState("");

    const getRandomCmd = () =>
        setInitialCmd("'" + command[Math.round(Math.random() * (command.length - 1))] + "'");
    const [initialCmd, setInitialCmd] = useState(
        "'" + command[Math.round(Math.random() * (command.length - 1))] + "'"
    );

    return (
        <div id={style[`home_in${ui === "small" ? "1" : "2"}`]}>
            <div>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    title=""
                    type="text"
                    required
                />

                <span>
                    &nbsp;&nbsp;Type <TextComponent text={initialCmd} />
                    &nbsp;&nbsp;
                </span>

                <SiGnubash id={style.bash_icon_logo} />
                <section
                    id={style.send_input}
                    title="Send input"
                    onClick={() => inputEffect(value, getRandomCmd, (val) => setValue(val))}
                >
                    <TbCubeSend id={style.send_input_icon} />
                </section>
            </div>
        </div>
    );
};

function inputEffect(value: string, getRandomCmd: () => void, setValue: (val: string) => void) {
    value = value.trim().toLowerCase();
    if (value.length <= 0) return;

    if (customCommands.includes(value)) {
        if (value == "barrelroll") {
            const element = document.querySelector("body");

            element?.classList.add("barrelroll");

            setTimeout(() => {
                element?.classList.remove("barrelroll");
            }, 2100);

            getRandomCmd();
        }
    } else if (command.includes(value)) window.location.href = locations[command.indexOf(value)]?.toString();
    else getRandomCmd();
    setValue("");
}

export default HomeInput;
