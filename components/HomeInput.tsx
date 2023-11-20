"use client";

import { command } from "@data";
import { useState } from "react";
import { SiGnubash } from "react-icons/si";
import { TbCubeSend } from "react-icons/tb";

const HomeInput = ({ ui }: { ui: "small" | "large" }) => {
    const [value, setValue] = useState("");

    const getRandomCmd = () => setInitialCmd(command[Math.round(Math.random() * (command.length - 1))]);
    const [initialCmd, setInitialCmd] = useState(command[Math.round(Math.random() * (command.length - 1))]);

    return (
        <div id={`home-in${ui === "small" ? "1" : "2"}`}>
            <div>
                <input onChange={(e) => setValue(e.target.value)} value={value} title="" type="text" required />

                <span suppressHydrationWarning>&nbsp;&nbsp;Type {initialCmd}&nbsp;&nbsp;</span>
                <SiGnubash id="bash-icon-logo" />

                <section
                    id="send-input"
                    title="Send input"
                    onClick={() => inputEffect(value, getRandomCmd, (val) => setValue(val))}
                >
                    <TbCubeSend id="send-input-icon" />
                </section>
            </div>
        </div>
    );
};

function inputEffect(value: string, getRandomCmd: () => void, setValue: (val: string) => void) {
    if (value.length <= 0) return;

    if (value.startsWith("refresh")) location.reload();
    else if (value.startsWith("highlight")) {
        const DIV = document.querySelectorAll("div");

        DIV.forEach((div) => {
            div.style.border = `1px solid ${value.split(" ")[1] || "lime"}`;
        });

        getRandomCmd();
    } else if (value.startsWith("dehighlight")) {
        const DIV = document.querySelectorAll("div");

        DIV.forEach((div) => {
            div.style.border = `0`;
        });

        getRandomCmd();
    } else if (value.startsWith("barrelroll")) {
        const element = document.querySelector("body");

        element?.classList.add("barrelClass");

        setTimeout(() => {
            element?.classList.remove("barrelClass");
        }, 2100);

        getRandomCmd();
    } else getRandomCmd();

    setValue("");
}

export default HomeInput;
