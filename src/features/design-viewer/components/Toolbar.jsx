import { HStack, Spacer } from "@chakra-ui/react"

import DeleteElement from "./DeleteElement"
import UndoRedo from "./UndoRedo"
import CodePreview from "./CodePreview"

function Toolbar() {
    return (
        <HStack borderBottom="1px" borderColor="gray.700" gap="4" px="4" >
            <DeleteElement />
            <UndoRedo />
            <Spacer />
            <CodePreview />
        </HStack>
    )
}

export default Toolbar