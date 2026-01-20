import Navbar from "@components/Navbar";
import StickyBar from "@components/Stickybar";
import styles from "@styles/header.module.css";

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
