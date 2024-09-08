import { Box, Flex } from "@chakra-ui/react";

import Toolbar from "../features/toolbar/Toolbar"
import Sidebar from "../features/sidebar/Sidebar"
import DesignViewer from "../features/design-viewer/DesignViewer";
import ElementInspector from "../features/element-inspector/ElementInspector";

function Editor() {
    return (
        <Flex>
            <Sidebar />
            <Box flex="1" marginLeft="256px" marginRight="256px">
                <Flex direction="column" height="100vh">
                    <Toolbar />
                    <Box flex="1" position="relative">
                        <DesignViewer />
                    </Box>
                </Flex>
            </Box>
            <ElementInspector />
        </Flex >
    );
}

export default Editor;