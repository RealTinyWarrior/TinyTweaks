import style from "@styles/pagenav.module.css";

const PageNavButton = ({ icon, name }: { icon: React.ReactElement; name: string }) => {
    return (
        <div title={name} className={style.box}>
            {icon}
        </div>
    );
};

export default PageNavButton;
