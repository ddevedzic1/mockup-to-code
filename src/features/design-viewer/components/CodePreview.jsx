import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import { BiCodeAlt } from "react-icons/bi";

import CodeViewer from './CodeViewer';

function CodePreview() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}><BiCodeAlt size="18px" title="View and download code" /></Button>

            <Modal isOpen={isOpen} onClose={onClose} size="4xl" scrollBehavior="inside">
                <ModalOverlay />
                <ModalContent bgColor="gray.900" color="textColor.light">
                    <ModalHeader fontSize="md">Export Code</ModalHeader>
                    <ModalCloseButton size="sm" />
                    <ModalBody sx={{
                        "&::-webkit-scrollbar": {
                            width: "8px",
                        },
                        "&::-webkit-scrollbar-track": {
                            background: "transparent",
                            borderRadius: "10px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: "gray.700",
                            borderRadius: "10px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                            background: "gray.600",
                        },
                        scrollbarWidth: "thin",
                        scrollbarColor: "gray.700 transparent",
                    }}>
                        <CodeViewer />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CodePreview
