import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, useToast, Spacer } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { useState } from 'react';

import CodeBlock from "../../../components/CodeBlock"
import { getTree } from "../../../treeModel/slices/treeModelSlice"
import { generateHtml } from "../codeGenerators/generateHtml"
import { generateCss } from "../codeGenerators/generateCss"
import { generateJavaScript } from "../codeGenerators/generateJavaScript"

function CodeViewer() {
    const tree = useSelector(getTree);
    const generatedHtml = generateHtml(tree);
    const generatedCss = generateCss(tree);
    const generatedJavaScript = generateJavaScript(tree);

    const toast = useToast();
    const [activeTab, setActiveTab] = useState(0);
    const [activeTabContent, setActiveTabContent] = useState(generatedHtml);

    const handleTabChange = (index) => {
        setActiveTab(index);
        if (index === 0) setActiveTabContent(generatedHtml);
        if (index === 1) setActiveTabContent(generatedCss);
        if (index === 2) setActiveTabContent(generatedJavaScript)
    };

    return (
        <Tabs variant="unstyled" index={activeTab} onChange={handleTabChange}>
            <TabList>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
                <Tab>JavaScript</Tab>
                <Spacer />
                <Button
                    bgColor="gray.800"
                    onClick={() => {
                        navigator.clipboard.writeText(activeTabContent);
                        toast({
                            title: "Copied",
                            position: "bottom-right",
                            status: "info",
                            duration: 1000,
                            isClosable: true,
                        });
                    }}
                >
                    Copy
                </Button>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <CodeBlock code={generatedHtml} language="html" />
                </TabPanel>
                <TabPanel>
                    <CodeBlock code={generatedCss} language="css" />
                </TabPanel>
                <TabPanel>
                    <CodeBlock code={generatedJavaScript} language="javascript" />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default CodeViewer
