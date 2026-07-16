import Link from "@/node_modules/next/link";
import style from "@/styles/pagenav.module.css";

const PageNavButton = ({ icon, name, id }: { icon: React.ReactElement; name: string; id: string }) => {
    return (
        <Link href={`#${id}`} title={name} className={style.box}>
            {icon}
        </Link>
    );
};

export default PageNavButton;
