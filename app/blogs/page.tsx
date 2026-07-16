import Navbar from "@/components/Navbar";
import StickyBar from "@/components/Stickybar";
import styles from "@/styles/header.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs - TinyTweaks",
    creator: "TinyWarrior",
    description: "The blogs of TinyWarrior. Check out the blogs written by Tiny in TinyTweaks!",
    applicationName: "TinyTweaks",
};

const BlogsPage = () => {
    return (
        <>
            <Navbar place="blogs" />
            <StickyBar place="blogs" />

            <p id={styles.under_dev}>Route '/blogs' is under development</p>
        </>
    );
};

export default BlogsPage;
