import { Box } from "@chakra-ui/react"
import { Resizable } from 're-resizable';

import TreeAsReact from "./TreeAsReact"
import useDroppableMonitor from "../hooks/useDroppableMonitor";

function DesignCanvas() {
    useDroppableMonitor();
    const style = { margin: "0", padding: "0", top: "0", left: "50%", position: "absolute", transform: "translate(-50%)", height: "100%", backgroundColor: "white" }
    return (
        <Resizable
            defaultSize={{
                width: "90%",
                height: "100%"
            }}
            style={style}
            maxWidth="100%"
            maxHeight="100%"
        >
            <Box style={{ all: "initial" }}>
                {<TreeAsReact />}
            </Box>
        </Resizable>
    )
}

export default DesignCanvas
