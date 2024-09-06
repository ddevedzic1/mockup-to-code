import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { useSelector } from "react-redux"

import CodeBlock from "../../../components/CodeBlock"
import { generateHtml } from "../../../treeModel/codeGenerators/generateHtml"
import { generateCss } from "../../../treeModel/codeGenerators/generateCss"
import { generateJavaScript } from "../../../treeModel/codeGenerators/generateJavaScript"
import { getTree } from "../../../treeModel/slices/treeModelSlice"

function CodeViewer() {
    const tree = useSelector(getTree);
    const generatedHtml = generateHtml(tree);
    const generatedCss = generateCss(tree);
    const generatedJavaScript = generateJavaScript(tree);
    return (
        <Tabs variant="unstyled">
            <TabList>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
                <Tab>JavaScript</Tab>
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
