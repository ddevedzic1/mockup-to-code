import { HStack, Button } from "@chakra-ui/react"
import { FaUndo, FaRedo } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

import { undoRedo } from "../../../treeModel/slices/treeModelSlice";
import { hasPast, hasFuture } from "../../../treeModel/slices/treeModelSlice"

function UndoRedo() {
    const dispatch = useDispatch();
    const past = useSelector(hasPast)
    const future = useSelector(hasFuture)

    function handleClick(type) {
        dispatch(undoRedo(type));
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && (e.key === 'z' || e.key === "Z")) {
                dispatch(undoRedo("undo"));
                return;
            }
            if (e.ctrlKey && (e.key === 'y' || e.key === "Y")) {
                dispatch(undoRedo("redo"));
                return;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [dispatch])

    return (
        <HStack width="max-content" p="0" m="0" spacing="0">
            <Button aria-label='undo' isDisabled={past} onClick={() => handleClick("undo")}><FaUndo /></Button>
            <Button aria-label='redo' isDisabled={future} onClick={() => handleClick("redo")}><FaRedo /></Button>
        </HStack>
    )
}


export default UndoRedo
