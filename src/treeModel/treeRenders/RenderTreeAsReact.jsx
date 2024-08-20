import { createElement } from "react"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

import { setActiveElementId } from "../slices/treeModelSlice";


function RenderTreeAsReact({ tree, WrapperComponent }) {
    const dispatch = useDispatch();

    if (typeof tree === "string") return tree;

    const { tag, children, attributes = {} } = tree;

    const handleClick = () => {
        dispatch(setActiveElementId(tree.id));
    }

    const childrenElements = children ? children.map((child, i) => { return <RenderTreeAsReact key={i} tree={child} WrapperComponent={WrapperComponent} /> }) : [];

    return (
        <WrapperComponent
            id={tree.id}
            tree={tree}
            onClick={handleClick}
        >
            {createElement(tag, { id: tree.id, ...attributes }, ...childrenElements)}
        </WrapperComponent>
    );
}

RenderTreeAsReact.propTypes = {
    tree: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    WrapperComponent: PropTypes.elementType.isRequired
}

export default RenderTreeAsReact;
