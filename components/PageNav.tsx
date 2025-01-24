import React from "react";
import style from "@styles/pagenav.module.css";
import PageNavButton from "@components/PageNavButton";
import { FaUser } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

const PageNav = () => {
    return (
        <div id={style.container}>
            <PageNavButton name="About" icon={<FaUser />} />
            <PageNavButton name="Blank" icon={<FaQuestionCircle />} />
            <PageNavButton name="Blank" icon={<FaQuestionCircle />} />
            <PageNavButton name="Blank" icon={<FaQuestionCircle />} />
        </div>
    );
};

export default PageNav;
