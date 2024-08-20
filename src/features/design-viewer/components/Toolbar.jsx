import { HStack } from "@chakra-ui/react"

import DeleteElement from "./DeleteElement"
import UndoRedo from "./UndoRedo"

function Toolbar() {
    return (
        <HStack borderBottom="1px" borderColor="gray.700" gap="4" >
            <DeleteElement />
            <UndoRedo />
        </HStack>
    )
}

export default Toolbar