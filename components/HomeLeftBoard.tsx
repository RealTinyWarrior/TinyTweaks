"use client";

import React, { useState } from "react";
import style from "@styles/header.module.css";

const HomeLeftBoard = () => {
    const boxRef = React.useRef<HTMLDivElement>(null);
    const [boxState, setBoxState] = useState(0);

    React.useEffect(() => {
        setBoxState(boxRef.current ? boxRef.current.clientHeight : 0);

        window.onresize = () => {
            setBoxState(boxRef.current ? boxRef.current.clientHeight : 0);
        };
    }, []);

    return <div id={style.tcb_leftbox} ref={boxRef} style={{ width: boxState }}></div>;
};

export default HomeLeftBoard;
