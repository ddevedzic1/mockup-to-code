import PropTypes from 'prop-types';

import LayerItem from './LayerItem';


function LayersStructure({ tree, activeElementId, hoveredElementId, handleClick, handleMouseEnter, handleMouseLeave }) {

    const { children = [] } = tree;

    const renderChild = (child, i) => {
        if (typeof child === "string") return;
        return <LayersStructure
            key={i}
            tree={child}
            activeElementId={activeElementId}
            hoveredElementId={hoveredElementId}
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
        />
    }
    let childrenElements = children.map(renderChild);
    childrenElements = childrenElements.filter(element => element !== undefined);

    return <LayerItem
        tree={tree}
        childrenElements={childrenElements}
        activeElementId={activeElementId}
        hoveredElementId={hoveredElementId}
        handleClick={handleClick}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
    />
}

LayersStructure.propTypes = {
    tree: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    activeElementId: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    hoveredElementId: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    handleClick: PropTypes.func.isRequired,
    handleMouseEnter: PropTypes.func.isRequired,
    handleMouseLeave: PropTypes.func.isRequired
}

export default LayersStructure
