import { createElement } from "react"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

import { setActiveElementId } from "../slices/treeModelSlice";


function RenderTreeAsReact({ tree, WrapperComponent }) {
    const dispatch = useDispatch();

    if (typeof tree === "string") return tree;

    const { id, tag, children, attributes = {} } = tree;

    const handleClick = () => {
        dispatch(setActiveElementId(id));
    }

    const renderChild = (child, i) => <RenderTreeAsReact key={i} tree={child} WrapperComponent={WrapperComponent} />

    const childrenElements = children ? children.map(renderChild) : [];

    return (
        <WrapperComponent
            id={id}
            tree={tree}
            onClick={handleClick}
        >
            {createElement(tag, { id, ...attributes }, ...childrenElements)}
        </WrapperComponent>
    );
}

RenderTreeAsReact.propTypes = {
    tree: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    WrapperComponent: PropTypes.elementType.isRequired
}

export default RenderTreeAsReact;
