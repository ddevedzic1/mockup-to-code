import { useSelector } from "react-redux"

import TreeAsReact from "../../../treeModel/codeGenerators/TreeAsReact"
import EnhancedElement from "./EnhancedElement";
import useDroppableMonitor from "../hooks/useDroppableMonitor";
import { getTree } from "../../../treeModel/slices/treeModelSlice";

function DesignCanvas() {
    const tree = useSelector(getTree);
    useDroppableMonitor();
    return (
        <div style={{ top: "0", left: "50%", position: "absolute", transform: "translate(-50%)", width: "460px", height: "900px", backgroundColor: "white" }}>
            <div style={{ all: "initial" }}>
                {<TreeAsReact tree={tree} WrapperComponent={EnhancedElement} />}
            </div>
        </div>
    )
}

export default DesignCanvas
