import PropTypes from 'prop-types';
import { Box, Button, HStack } from "@chakra-ui/react"
import { useState } from "react"
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";


function LayerItem({ tree, childrenElements, activeElementId, hoveredElementId, handleClick, handleMouseEnter, handleMouseLeave }) {
    const [isOpen, setIsOpen] = useState(false)

    const { id, internalTitle } = tree;
    const isActive = id === activeElementId;
    const isHovered = id === hoveredElementId;

    const handleOpen = (e) => {
        e?.stopPropagation();
        setIsOpen(isOpen => !isOpen);
    }

    const hasChildren = childrenElements.length > 0;

    return (
        <>
            <HStack m="0" p="0" gap="0"
                onClick={() => handleClick(id)}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
                bgColor={isActive ? "gray.800" : "transparent"}
                borderWidth={isHovered ? "1px" : "0"}
                borderColor="gray.700"
                borderRadius="md"
                _hover={{ borderWidth: "1px" }}
            >
                <Button
                    onClick={handleOpen}
                    width="24px" m="0" p="0"
                    _hover={{ bgColor: "transparent" }}
                    _focus={{ bgColor: "transparent" }}
                >
                    {hasChildren ? !isOpen ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown /> : null}
                </Button>
                <Button
                    _hover={{ bgColor: "transparent" }}
                    width="100%" textAlign="center" justifyContent="left"
                >
                    {internalTitle}
                </Button>
            </HStack>
            {isOpen && <Box ml="10px">{childrenElements}</Box>}
        </>)
}

LayerItem.propTypes = {
    tree: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    childrenElements: PropTypes.array.isRequired,
    activeElementId: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    hoveredElementId: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    handleClick: PropTypes.func.isRequired,
    handleMouseEnter: PropTypes.func.isRequired,
    handleMouseLeave: PropTypes.func.isRequired
}

export default LayerItem
