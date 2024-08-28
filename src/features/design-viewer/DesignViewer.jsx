import { Box } from "@chakra-ui/react"

import Toolbar from "./components/Toolbar"
import DesignCanvas from "./components/DesignCanvas"

function DesignViewer() {
    return (
        <Box flex="1" marginLeft="256px" marginRight="256px">
            <Toolbar />
            <div style={{ position: "relative" }}>
                <DesignCanvas />
            </div>
        </Box>
    )
}

export default DesignViewer
