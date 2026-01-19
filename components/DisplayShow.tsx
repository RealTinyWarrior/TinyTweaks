"use client";

import { useState, useEffect, useRef } from "react";
import { textArray } from "@data";

type WritingStep = "write" | "write pause" | "delete" | "delete pause";

const DisplayShow = () => {
    const text = useRef("");
    const writingStep = useRef<WritingStep>("delete pause");
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [renderedText, setRenderedText] = useState("");

    const assignRandomText = () => (text.current = textArray[Math.floor(Math.random() * textArray.length)]);

    useEffect(() => {
        assignRandomText();
        setRenderedText(text.current);

        function tick() {
            if (writingStep.current == "write") timeoutRef.current = setTimeout(tick, 150);
            else if (writingStep.current == "write pause") timeoutRef.current = setTimeout(tick, 1200);
            else if (writingStep.current == "delete") timeoutRef.current = setTimeout(tick, 75);
            else if (writingStep.current == "delete pause") timeoutRef.current = setTimeout(tick, 500);

            if (writingStep.current == "write")
                setRenderedText((prev) => {
                    if (prev === text.current) {
                        writingStep.current = "write pause";
                        return prev;
                    }

                    return text.current.slice(0, prev.length + 1);
                });
            else if (writingStep.current == "write pause") writingStep.current = "delete";
            else if (writingStep.current == "delete")
                setRenderedText((prev) => {
                    if (prev === "") {
                        writingStep.current = "delete pause";
                        assignRandomText();
                        return prev;
                    }

                    return text.current.slice(0, prev.length - 1);
                });
            else if (writingStep.current == "delete pause") writingStep.current = "write";
        }

        setTimeout(tick, 250);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return <>{renderedText}</>;
};

export default DisplayShow;
