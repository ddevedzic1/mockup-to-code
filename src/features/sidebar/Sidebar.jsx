import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { FiPlus, FiLayers } from "react-icons/fi";

import Elements from "./components/Elements"
import Layers from "./components/Layers"

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
        >
            <Tabs
                variant="unstyled"
                height="100%"
            >
                <TabList>
                    <Tab p="2"><FiPlus size="18px" title="Add Elements" /></Tab>
                    <Tab p="2"><FiLayers size="18px" title="Layers" /></Tab>
                </TabList>
                <TabPanels height="100%" overflowY="auto"
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
                    }}>
                    <TabPanel>
                        <Elements />
                    </TabPanel>
                    <TabPanel>
                        <Layers />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Sidebar
