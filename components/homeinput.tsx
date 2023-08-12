const HomeInput = ({ ui }: { ui: "small" | "large" }) => {
    return (
        <div id={`home-in${ui === "small" ? "2" : "1"}`}>
            <input type="text" />
        </div>
    );
};

export default HomeInput;
