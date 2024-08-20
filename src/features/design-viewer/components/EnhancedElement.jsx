import PropTypes from 'prop-types';
import { useSelector } from "react-redux"
import { useState, useEffect, useRef } from "react"

import { getActiveElementId } from '../../../treeModel/slices/treeModelSlice';

function EnhancedElement({ id, tree, onClick, children }) {

    const activeElementId = useSelector(getActiveElementId);
    const isActive = id === activeElementId;
    const ref = useRef();
    let childElement = ref.current?.firstChild;

    const [boxStyle, setBoxStyle] = useState({});

    const wrapperStyle = {
        margin: "0",
        padding: "0",
        width: "max-content",
        height: "max-content",
        position: "relative",
        display: 'inline-block',
    };

    useEffect(() => {
        childElement = ref.current?.firstChild;
    }, [])

    useEffect(() => {
        if (!childElement) return;
        const computedStyle = window?.getComputedStyle(childElement);

        if (!computedStyle) return;

        const { marginTop, marginLeft, marginRight, marginBottom } = computedStyle;

        setBoxStyle({
            position: 'absolute',
            pointerEvents: 'none',
            top: marginTop,
            left: marginLeft,
            right: marginRight,
            bottom: marginBottom,
            outline: isActive ? '3px solid #0388fc' : "",
        });
    }, [isActive, tree])

    const handleClick = (e) => {
        e.stopPropagation();
        onClick?.();
    }

    return (
        <div ref={ref} style={wrapperStyle} onClick={handleClick}>
            {children}
            <div style={boxStyle} />
        </div>
    )
}

EnhancedElement.propTypes = {
    id: PropTypes.string.isRequired,
    tree: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.node
}

export default EnhancedElement
