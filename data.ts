import { CSSProperties } from "react";
import { StaticImageData } from "next/image";
import visicord_icon from '@image/recent/visicord_icon.svg'
import visicord_back from '@image/recent/visicord_background.jpg'
import calc_tinytweaks from '@image/recent/calc_tinytweaks.svg'
import calc_background from '@image/recent/calc_background.webp'

export const pointerOfNav: CSSProperties = {
    background: "linear-gradient(orange, red)",
    boxShadow: "0.5px 1px 4px 1.5px black",
};

type LangType = {
    url: string;
    text: string;
    go: string;
}[];

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
    lazyloading: string;
}[]

export const command: string[] = ["barrelroll", "visicord"];
export const customCommands: string[] = ['barrelroll'];
export const locations: string[] = ["none", 'https://visicord.vercel.app/'];

export const langLinks: LangType = [
    {
        url: "https://cdn3.emoji.gg/emojis/2057-javascript-logo.png",
        text: "JavaScript",
        go: "https://www.javascript.com",
    },
    {
        url: "https://cdn3.emoji.gg/emojis/9873-python-logo.png",
        text: "Python",
        go: "https://www.python.org",
    },
    {
        url: "https://cdn3.emoji.gg/emojis/3203-reactjs.png",
        text: "React",
        go: "https://www.react.com",
    },
    {
        url: "https://cdn3.emoji.gg/emojis/7106-csharp.png",
        text: "CSharp",
        go: "https://dotnet.microsoft.com/en-us/languages/csharp",
    },
];

export const textArray: string[] = [
    "Howdy Folks!",
    "Hiiiiii!",
    "Greetings ;)",
    "Made By TinyWarrior :)",
    "Hello There!",
    "What's up?",
    "Hi Friend!",
    "Welcome Here!:)",
    "Welcome to my website!",
    "o_O",
    "Do people even read these?",
    "Aha! A Human! Hello :)",
    "Look, I'm glowing!",
    "Nice to meet you :)",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "Thanks for visiting :)",
    "Glad to see you here!",
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
];

export const recent: Recent = [
    {
        name: "Visicord",
        date: "Nov 5, 2023",
        icon: visicord_icon,
        border: "#292929",
        iconBorder: "#949494",
        buttonColor: "rgba(41,41,41,0.7)",
        lazyloading: "black",
        background: visicord_back,
        link: "https://visicord.vercel.app",
        description: "Try out some Discord APIs without having to write a single line of code or having to join a server!",
    },

    {
        name: "Calculator",
        date: "August 27, 2022",
        icon: calc_tinytweaks,
        border: "#8c52ff",
        iconBorder: "white",
        background: calc_background,
        lazyloading: "#051a2e",
        buttonColor: "rgba(119, 51, 255,0.7)",
        link: "https://calc-tinytweaks.vercel.app/",
        description: "One of my first React projects ever, a simple Calculator, doesn't have that many functionalities but it does the job."
    },
]