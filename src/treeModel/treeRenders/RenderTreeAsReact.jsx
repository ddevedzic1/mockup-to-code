import { createElement } from "react"
import PropTypes from 'prop-types';

function RenderTreeAsReact({ tree, WrapperComponent }) {
    if (typeof tree === "string") return tree;

    const { tag, children, attributes = {} } = tree;

    const childrenElements = children ? children.map((child, i) => { return <RenderTreeAsReact key={i} tree={child} WrapperComponent={WrapperComponent} /> }) : [];

    return (
        <WrapperComponent
            id={tree.id}
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
