import TreeAsReact from "./TreeAsReact"
import useDroppableMonitor from "../hooks/useDroppableMonitor";

function DesignCanvas() {
    useDroppableMonitor();
    return (
        <div style={{ top: "0", left: "50%", position: "absolute", transform: "translate(-50%)", width: "460px", height: "900px", backgroundColor: "white" }}>
            <div style={{ all: "initial" }}>
                {<TreeAsReact />}
            </div>
        </div>
    )
}

export default DesignCanvas
