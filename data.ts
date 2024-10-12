import { CSSProperties } from "react";
import { StaticImageData } from "next/image";
import visicord_icon from '@images/recent/visicord_icon.svg'
import visicord_back from '@images/recent/visicord_background.jpg'

type Recent = {
    name: string;
    date: string;
    icon: StaticImageData;
    link: string;
    description: string;
    background: StaticImageData;
    border: string;
    iconBorder: string;
    buttonColor: string;
}[]

export const pointerOfNav: CSSProperties = {
    background: "linear-gradient(orange, red)",
    boxShadow: "0 0 clamp(0.1px, 5px, 1vw) clamp(0.1px, 2px, 0.4vw) black",
};


export const command: string[] = ["barrelroll", "visicord"];
export const customCommands: string[] = ['barrelroll'];
export const locations: string[] = ["none", 'https://visicord.vercel.app/'];

export const textArray: string[] = [
    "Hiiiiii!",
    "Greetings ;)",
    "Developed By TinyWarrior :)",
    "Hello there!",
    "What's up?",
    "Hi friend!",
    "Welcome here! :)",
    "Welcome to my website!",
    "Do people even read these?",
    "Aha! A human! Hello :)",
    "Nice to meet you :)",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "Thanks for visiting :)",
    "Glad to see you here!",
    "Hey there!",
    "Check out my projects!",
    "Smashing my keyboard!"
];

export const emojies: string[] = [
    ":)",
    ":D",
    ";)",
    "(•‿•)",
    "B)",
    ":>",
    ";D",
    ":o",
    "(⌐■_■)",
    "(◕⋏◕)",
    "ʕ•́ᴥ•̀ʔ",
    "ツ",
    "◉_◉",
    "( •◡•)/",
    "(╥﹏╥)",
    "(•‿•)",
    "(ᗒᗣᗕ)՞",
    "( ͡° ͜ʖ ͡° )",
    "┌( ಠ‿ಠ )┘",
    "(・ω・)",
    "( ノ ^o^)ノ",
    "¯|_( ͡° ͜ʖ ͡°)_|¯",
    "(=ↀωↀ=)",
    "ʕ ● ᴥ ●ʔ",
    "ʕっ•ᴥ•ʔっ",
    "( ͡• ͜ʖ ͡• )",
    "¯|_(ツ)_|¯",
    "-_-",
    ":B",
    ":/",
    ":(",
    ":')",
    ":'(",
    "T_T",
    ";-;",
    ":3",
    ">:)"
];

export const recent: Recent = [
    {
        name: "Visicord",
        date: "Nov 5, 2023",
        icon: visicord_icon,
        border: "#292929",
        iconBorder: "#949494",
        buttonColor: "rgba(41,41,41,0.7)",
        background: visicord_back,
        link: "https://visicord.vercel.app",
        description: "Try out some Discord APIs without having to write a single line of code or having to join a server!",
    }
]