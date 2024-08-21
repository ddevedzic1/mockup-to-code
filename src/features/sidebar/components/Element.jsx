import { Box, Button, VStack } from "@chakra-ui/react"
import PropTypes from 'prop-types';
import { useRef, useEffect } from "react"
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

function Element({ title, elementIcon, defaultData }) {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref?.current;
        if (!element) return;
        return draggable({
            element: element,
            getInitialData: () => ({ id: title, type: "element", newElementDefaultData: defaultData }),
        });
    }, [title, defaultData]);

    return (
        <Button ref={ref} size="max-content" p="4" m="0" bgColor="gray.900">
            <VStack spacing="2">
                <Box>{<elementIcon.icon size="32px" />}</Box>
                <Box color="textColor.medium" fontSize="xs" fontWeight="normal">{title}</Box>
            </VStack>
        </Button>
    )
}

Element.propTypes = {
    title: PropTypes.string.isRequired,
    elementIcon: PropTypes.object.isRequired,
    defaultData: PropTypes.object.isRequired,
}

export default Element
