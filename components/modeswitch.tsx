"use client";

const ModeSwitch = () => {
    return (
        <div id="mode-switch" onClick={() => document.body.classList.toggle("light")}>
            <div></div>
        </div>
    );
};

export default ModeSwitch;
