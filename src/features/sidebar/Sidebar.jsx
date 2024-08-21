import { Box } from "@chakra-ui/react"

import Elements from "./components/Elements"

function Sidebar() {
    return (
        <Box
            position="fixed"
            left="0"
            top="0"
            bottom="0"
            width="256px"
            borderRightWidth="1px"
            borderColor="gray.700"
            zIndex="10"
            bgColor="gray.900"
            overflowY="auto"
            sx={{
                "&::-webkit-scrollbar": {
                    width: "6px",
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
            }}
        >
            <Elements />
        </Box>
    )
}

export default Sidebar
