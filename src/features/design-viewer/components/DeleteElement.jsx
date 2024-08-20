import { Button } from "@chakra-ui/react"
import { FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

import { deleteElement } from "../../../treeModel/slices/treeModelSlice";
import { getActiveElementId } from "../../../treeModel/slices/treeModelSlice"

function DeleteElement() {
    const dispatch = useDispatch();
    const isDisabled = useSelector(getActiveElementId) === "rootElement"

    function handleClick() {
        dispatch(deleteElement());
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Delete') {
                dispatch(deleteElement());
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [dispatch])

    return (
        <Button aria-label='Delete' isDisabled={isDisabled} onClick={handleClick}><FaTrash /></Button>
    )
}

export default DeleteElement
