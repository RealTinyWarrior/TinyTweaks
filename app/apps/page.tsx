import Navbar from "@components/Navbar";
import StickyBar from "@components/Stickybar";
import styles from "@styles/header.module.css";

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
