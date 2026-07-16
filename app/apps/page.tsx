import Navbar from "@/components/Navbar";
import StickyBar from "@/components/Stickybar";
import styles from "@/styles/header.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Apps - TinyTweaks",
    creator: "TinyWarrior",
    description: "The projects of TinyWarrior. Check out the projects and apps made by Tiny in TinyTweaks!",
    applicationName: "TinyTweaks",
};

const AppsPage = () => {
    return (
        <>
            <Navbar place="apps" />
            <StickyBar place="apps" />

            <p id={styles.under_dev}>Route '/apps' is under development</p>
        </>
    );
};
export default AppsPage;
