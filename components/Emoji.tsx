"use client";

import { useState } from "react";
import { emojies } from "@data.ts";

const Emoji = ({ initialEmoji }: { initialEmoji: string }) => {
    const [emoji, setEmoji] = useState(initialEmoji);

    return (
        <span
            title={emoji}
            onClick={() => {
                setEmoji(emojies[Math.round(Math.random() * (emojies.length - 1))]);
            }}
        >
            {emoji}
        </span>
    );
};

export default Emoji;
