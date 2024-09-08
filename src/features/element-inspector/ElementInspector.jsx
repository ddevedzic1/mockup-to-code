import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

import StyleInspector from "./components/StyleInspector"
import OtherSettings from "./components/OtherSettings"
import { getActiveElement } from "../../treeModel/slices/treeModelSlice"
import { isNotAllowedCategory } from "./utils/helpers"
import { ATTRIBUTES_OPTIONS } from "./utils/constants"

function ElementInspector() {
    const activeElement = useSelector(getActiveElement);
    const { internalTag } = activeElement;
    const hasOtherSettings = !isNotAllowedCategory(ATTRIBUTES_OPTIONS, internalTag);

    const [activeTab, setActiveTab] = useState(0)
    const handleActiveTab = (index) => setActiveTab(index);
    useEffect(() => {
        if (!hasOtherSettings)
            handleActiveTab(0);
    }, [hasOtherSettings])

    return (
        <Box
            position="fixed"
            right="0"
            top="0"
            bottom="0"
            width="256px"
            borderLeftWidth="1px"
            borderColor="gray.700"
            zIndex="10"
            bgColor="gray.900"
            pb="10"
        >
            <Tabs
                variant="unstyled"
                height="100%"
                index={activeTab}
                onChange={handleActiveTab}
            >
                <TabList>
                    <Tab>Style</Tab>
                    <Tab isDisabled={!hasOtherSettings}>Other</Tab>
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
                        <StyleInspector activeElement={activeElement} />
                    </TabPanel>
                    <TabPanel>
                        <OtherSettings activeElement={activeElement} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default ElementInspector
