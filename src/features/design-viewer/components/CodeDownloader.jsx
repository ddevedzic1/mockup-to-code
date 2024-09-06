import { Button } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import { getTree } from "../../../treeModel/slices/treeModelSlice"
import { generateHtml } from "../../../treeModel/codeGenerators/generateHtml"
import { generateCss } from "../../../treeModel/codeGenerators/generateCss"
import { generateJavaScript } from "../../../treeModel/codeGenerators/generateJavaScript"

function CodeDownloader() {
    const tree = useSelector(getTree);
    const generatedHtml = generateHtml(tree);
    const generatedCss = generateCss(tree);
    const generatedJavaScript = generateJavaScript(tree);

    const handleDownload = () => {
        const zip = new JSZip();
        zip.file("index.html", generatedHtml);
        zip.file("styles.css", generatedCss);
        zip.file("script.js", generatedJavaScript);
        zip.generateAsync({ type: "blob" }).then((content) => {
            saveAs(content, "website-code.zip");
        });
    };

    return (
        <Button bgColor="gray.800" onClick={handleDownload}>Download Code</Button>
    )
}

export default CodeDownloader
