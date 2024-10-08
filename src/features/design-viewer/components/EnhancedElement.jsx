import PropTypes from 'prop-types';
import { useSelector } from "react-redux"
import { useState, useEffect, useRef } from "react"

import { findElementById, getActiveElementId, getHoveredElementId } from '../../../treeModel/slices/treeModelSlice';
import useDraggable from '../../../hooks/useDraggable';
import useDroppable from '../../../hooks/useDroppable';
import { generateWrapperStyle } from '../../../utils/helpers';

function EnhancedElement({ id, onClick, onMouseEnter, onMouseLeave, children }) {
    const element = useSelector(findElementById(id));
    const { attributes: elementAttributes = {} } = element;
    const { style: elementStyle = {} } = elementAttributes;

    const activeElementId = useSelector(getActiveElementId);
    const isActive = id === activeElementId;

    const hoveredElementId = useSelector(getHoveredElementId);
    const isHovered = id === hoveredElementId;

    const ref = useRef(null);

    const [dnd, setDnd] = useState({ type: 'idle' });
    useDraggable({ id, ref, type: "element", setState: setDnd })
    useDroppable({ id, ref, type: "element", setState: setDnd });

    const [boxStyle, setBoxStyle] = useState({});

    const wrapperStyle = generateWrapperStyle(elementStyle, { position: "relative" });

    useEffect(() => {
        const childElement = ref.current?.firstChild;
        if (!childElement) return;
        const computedStyle = window?.getComputedStyle(childElement);

        if (!computedStyle) return;

        const { marginTop, marginLeft, marginRight, marginBottom } = computedStyle;

        const borders = {
            "top": "borderTop",
            "bottom": "borderBottom",
            "left": "borderLeft",
            "right": "borderRight",
        }

        const borderStyle = { borderLeft: "0", borderRight: "0", borderTop: "0", borderBottom: "0" };

        if (isActive || isHovered) {
            Object.values(borders).forEach(border => borderStyle[border] = '3px solid #0388fc')
        }

        if (dnd.closestEdge) {
            borderStyle[borders[dnd.closestEdge]] = "3px solid #34eb5e";
        }

        setBoxStyle({
            position: 'absolute',
            pointerEvents: 'none',
            top: marginTop,
            left: marginLeft,
            right: marginRight,
            bottom: marginBottom,
            ...borderStyle,
        });
    }, [isActive, isHovered, dnd, elementStyle])

    const handleClick = (e) => {
        e.stopPropagation();
        onClick?.(id);
    }

    const handleMouseEnter = () => onMouseEnter(id)


    return (
        <div
            ref={ref}
            style={wrapperStyle}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
            <div style={boxStyle} />
        </div>
    )
}

EnhancedElement.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    children: PropTypes.node
}

export default EnhancedElement
