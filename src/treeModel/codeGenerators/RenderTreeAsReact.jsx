import PropTypes from 'prop-types';
import { createElement } from "react"

function RenderTreeAsReact({ tree, WrapperComponent, handleClick, handleMouseEnter, handleMouseLeave }) {
    if (typeof tree === "string") return tree;

    const { id, tag, children = [], attributes = {} } = tree;
    const attributesWithoutDisabled = {
        ...attributes,
    }
    if (attributes?.["disabled"]) delete attributesWithoutDisabled["disabled"];

    const renderChild = (child, i) => <RenderTreeAsReact
        key={i}
        tree={child}
        WrapperComponent={WrapperComponent}
        handleClick={handleClick}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
    />

    const childrenElements = children.map(renderChild);

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
    WrapperComponent: PropTypes.elementType.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleMouseEnter: PropTypes.func.isRequired,
    handleMouseLeave: PropTypes.func.isRequired
}

export default RenderTreeAsReact;
