import { useDispatch, useSelector } from "react-redux";

import RenderTreeAsReact from "./RenderTreeAsReact"
import EnhancedElement from "./EnhancedElement";
import { setActiveElementId, setHoveredElementId } from "../../../treeModel/slices/treeModelSlice";
import { getTree } from "../../../treeModel/slices/treeModelSlice";


function TreeAsReact() {
    const dispatch = useDispatch();
    const tree = useSelector(getTree);
    const handleClick = (id) => dispatch(setActiveElementId(id));
    const handleMouseEnter = (id) => dispatch(setHoveredElementId(id));
    const handleMouseLeave = (e) => {
        if (e.relatedTarget?.id) {
            dispatch(setHoveredElementId(e.relatedTarget.id))
            return;
        }
        dispatch(setHoveredElementId(null));
    }

    return (
        <RenderTreeAsReact
            tree={tree}
            WrapperComponent={EnhancedElement}
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
        />
    );
}

export default TreeAsReact;
