import { HStack } from "@chakra-ui/react"

import UndoRedo from "./UndoRedo"

function Toolbar() {
    return (
        <HStack borderBottom="1px" borderColor="gray.700" ><UndoRedo /></HStack>
    )
}

export default Toolbar