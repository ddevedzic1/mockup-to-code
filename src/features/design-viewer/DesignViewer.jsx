import { Box, Flex } from "@chakra-ui/react"

import Toolbar from "./components/Toolbar"
import DesignCanvas from "./components/DesignCanvas"

function DesignViewer() {
    return (
        <Box flex="1" marginLeft="256px" marginRight="256px">
            <Flex direction="column" height="100vh">
                <Toolbar />
                <Box flex="1" position="relative">
                    <DesignCanvas />
                </Box>
            </Flex>
        </Box>
    )
}

export default DesignViewer
