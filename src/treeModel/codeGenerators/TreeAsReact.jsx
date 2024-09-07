import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

import RenderTreeAsReact from "./RenderTreeAsReact"
import { setActiveElementId, setHoveredElementId } from "../slices/treeModelSlice";


function TreeAsReact({ tree, WrapperComponent }) {
    const dispatch = useDispatch();
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
            WrapperComponent={WrapperComponent}
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
        />
    );
}

TreeAsReact.propTypes = {
    tree: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    WrapperComponent: PropTypes.elementType.isRequired
}

export default TreeAsReact;
