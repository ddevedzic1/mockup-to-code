import { HStack, Spacer } from "@chakra-ui/react"

import DeleteElement from "./components/DeleteElement"
import UndoRedo from "./components/UndoRedo"
import CodePreview from "../code-preview/CodePreview"

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