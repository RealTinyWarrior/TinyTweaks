import { FaCircle } from "react-icons/fa";
import { PiMoonStarsDuotone } from "react-icons/pi";
import { SiVisualstudiocode } from "react-icons/si";
import { PiGameControllerDuotone } from "react-icons/pi";
import { FaMinusCircle } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

const DiscordStatus = ({ status }: { status: string }) => {
    return (
        <>
            {status == "online" ? (
                <FaCircle color="#23a55a" />
            ) : status == "idle" ? (
                <PiMoonStarsDuotone color="yellow" style={{ fontSize: "clamp(1px, 23px, 4.2vw)" }} />
            ) : status == "code" ? (
                <SiVisualstudiocode color="#007ACC" style={{ fontSize: "clamp(1px, 20px, 4vw)" }} />
            ) : status == "game" ? (
                <PiGameControllerDuotone color="#007ACC" style={{ fontSize: "clamp(1px, 23px, 4.2vw)" }} />
            ) : status == "dnd" ? (
                <FaMinusCircle color="#f23f43" style={{ fontSize: "clamp(1px, 18px, 4vw)" }} />
            ) : status == "offline" ? (
                <FaCircleDot color="#80848e" style={{ fontSize: "clamp(1px, 17px, 4vw)" }} />
            ) : (
                ""
            )}
        </>
    );
};

export default DiscordStatus;
