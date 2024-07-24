import style from "@styles/databox.module.css";
import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div id={style.master}>
            <div id={style.main}>
                <div id={style.container}>{children}</div>
            </div>
        </div>
    );
};

export default Container;
