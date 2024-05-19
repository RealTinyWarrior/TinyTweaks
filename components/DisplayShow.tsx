"use client";

import { useState, useEffect } from "react";
import { textArray } from "@data";

let isClearing = true;

const DisplayShow = () => {
    let text = textArray[Math.round(Math.random() * (textArray.length - 1))];
    const [sayText, setSayText] = useState(text);

    useEffect(() => {
        function repeatView() {
            if (isClearing) {
                let removeInv = setInterval(() => {
                    if (!isClearing) return;
                    let sayTextN = "0";

                    setSayText((prev) =>
                        (function () {
                            sayTextN = prev;
                            return prev;
                        })()
                    );

                    if (sayTextN !== "") setSayText((prev) => prev.slice(0, prev.length - 1));
                    else {
                        text = textArray[Math.round(Math.random() * (textArray.length - 1))];
                        clearInterval(removeInv);
                        isClearing = false;

                        setTimeout(repeatView, 1000);
                    }
                }, 120);
            } else {
                let writeInv = setInterval(() => {
                    if (isClearing) return;
                    let sayTextN = "0";

                    setSayText((prev) =>
                        (function () {
                            sayTextN = prev;
                            return prev;
                        })()
                    );

                    if (sayTextN !== text) setSayText((prev) => text.slice(0, prev.length + 1));
                    else {
                        text = textArray[Math.round(Math.random() * (textArray.length - 1))];
                        clearInterval(writeInv);
                        isClearing = true;

                        setTimeout(repeatView, 500);
                    }
                }, 150);
            }
        }

        setTimeout(() => {
            repeatView();
        }, 2000);
    }, []);

    return <>{sayText}</>;
};

export default DisplayShow;
