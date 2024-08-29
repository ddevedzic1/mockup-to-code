import { Box } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux"

import LayersStructure from "./LayersStructure";
import { getTree, getActiveElementId, getHoveredElementId, setActiveElementId, setHoveredElementId } from "../../../treeModel/slices/treeModelSlice"

function Layers() {
    const dispatch = useDispatch();
    const tree = useSelector(getTree);
    const activeElementId = useSelector(getActiveElementId)
    const hoveredElementId = useSelector(getHoveredElementId)

    const handleClick = (id) => dispatch(setActiveElementId(id))
    const handleMouseEnter = (id) => dispatch(setHoveredElementId(id));
    const handleMouseLeave = () => dispatch(setHoveredElementId(null));

    return (
        <Box p="4">
            <LayersStructure
                tree={tree}
                activeElementId={activeElementId}
                hoveredElementId={hoveredElementId}
                handleClick={handleClick}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
            />
        </Box>
    )
}

export default Layers
