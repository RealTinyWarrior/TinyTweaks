import { CSSProperties } from "react";

export const pointerOfNav: CSSProperties = {
    background: "linear-gradient(orange, red)",
    boxShadow: "0.5px 1px 4px 1.5px black",
};

type LangType = {
    url: string;
    text: string;
    go: string;
}[];

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
