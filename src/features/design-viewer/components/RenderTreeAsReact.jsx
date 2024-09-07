import PropTypes from 'prop-types';
import { createElement } from "react"

import { reduceAttributes } from "../utils/helpers"

function RenderTreeAsReact({ tree, WrapperComponent, handleClick, handleMouseEnter, handleMouseLeave }) {
    const { id, tag, children = [], attributes = {} } = tree;
    const reducedAttributes = reduceAttributes(attributes);

    const renderChild = (child, i) => <RenderTreeAsReact
        key={i}
        tree={child}
        WrapperComponent={WrapperComponent}
        handleClick={handleClick}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
    />;

    const childrenElements = children.map(renderChild);

    if (typeof tree === "string") return tree;

    return (
        <WrapperComponent
            id={id}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {createElement(tag, { id, ...reducedAttributes }, ...childrenElements)}
        </WrapperComponent>
    );
}

RenderTreeAsReact.propTypes = {
    tree: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    WrapperComponent: PropTypes.elementType.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleMouseEnter: PropTypes.func.isRequired,
    handleMouseLeave: PropTypes.func.isRequired
}

export default RenderTreeAsReact;
