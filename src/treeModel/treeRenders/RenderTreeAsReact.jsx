import { createElement } from "react"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

import { setActiveElementId, setHoveredElementId } from "../slices/treeModelSlice";


function RenderTreeAsReact({ tree, WrapperComponent }) {
    const dispatch = useDispatch();

    if (typeof tree === "string") return tree;

    const { id, tag, children, attributes = {} } = tree;
    const attributesWithoutDisabled = {
        ...attributes,
    }
    if (attributes?.["disabled"]) delete attributesWithoutDisabled["disabled"];

    const handleClick = () => {
        dispatch(setActiveElementId(id));
    }

    const handleMouseEnter = () => {
        dispatch(setHoveredElementId(id));
    }

    const handleMouseLeave = (e) => {
        if (e.relatedTarget?.id) {
            dispatch(setHoveredElementId(e.relatedTarget.id))
            return;
        }
        dispatch(setHoveredElementId(null));
    }

    const renderChild = (child, i) => <RenderTreeAsReact key={i} tree={child} WrapperComponent={WrapperComponent} />

    const childrenElements = children ? children.map(renderChild) : [];

    return (
        <WrapperComponent
            id={id}
            tree={tree}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {createElement(tag, { id, ...attributesWithoutDisabled }, ...childrenElements)}
        </WrapperComponent>
    );
}

RenderTreeAsReact.propTypes = {
    tree: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    WrapperComponent: PropTypes.elementType.isRequired
}

export default RenderTreeAsReact;
