import { Flex } from "@chakra-ui/react";

import Sidebar from "../features/sidebar/Sidebar"
import DesignViewer from "../features/design-viewer/DesignViewer";

function Editor() {
    return <Flex>
        <Sidebar />
        <DesignViewer />
    </Flex >
}

export default Editor;