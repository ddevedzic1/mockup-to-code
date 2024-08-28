import { Flex } from "@chakra-ui/react";

import Sidebar from "../features/sidebar/Sidebar"
import DesignViewer from "../features/design-viewer/DesignViewer";
import ElementInspector from "../features/element-inspector/ElementInspector";

function Editor() {
    return <Flex>
        <Sidebar />
        <DesignViewer />
        <ElementInspector />
    </Flex >
}

export default Editor;