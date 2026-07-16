import style from "@/styles/pagenav.module.css";
import PageNavButton from "@/components/PageNavButton";
import { FaUser } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const PageNav = () => {
    return (
        <div id={style.container}>
            <PageNavButton id="about" name="About" icon={<FaUser />} />
            <PageNavButton id="skills" name="Blank" icon={<FaArrowUpRightDots />} />
            <PageNavButton id="contacts" name="Blank" icon={<FaDiscord />} />
        </div>
    );
};

export default PageNav;
