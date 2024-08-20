import { useSelector } from "react-redux"

import RenderTreeAsReact from "../../../treeModel/treeRenders/RenderTreeAsReact"
import EnhancedElement from "./EnhancedElement";
import { getTree } from "../../../treeModel/slices/treeModelSlice";

function DesignCanvas() {
    const tree = useSelector(getTree);
    return (
        <div style={{ top: "0", left: "50%", position: "absolute", transform: "translate(-50%)", width: "460px", height: "900px", backgroundColor: "white" }}>
            <div style={{ all: "initial" }}>
                {<RenderTreeAsReact tree={tree} WrapperComponent={EnhancedElement} />}
            </div>
        </div>
    )
}

export default DesignCanvas
