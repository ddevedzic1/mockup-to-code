import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, SimpleGrid } from "@chakra-ui/react"

import Element from "./Element";
import { ELEMENTS } from "../utils/constants"

function Elements() {
    const getAllIndexes = (length) => Array.from({ length }, (_, i) => i);

    return <Accordion defaultIndex={getAllIndexes(ELEMENTS.length)} allowMultiple>
        {ELEMENTS.map(category => <AccordionItem key={category.value} borderBottomWidth="1" borderColor="gray.700">
            <AccordionButton fontSize="sm">
                <Box as='span' flex='1' textAlign='left' fontSize="sm">{category.title}</Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
                <SimpleGrid columns="3">
                    {category.elements.map(element => <Element key={element.value} value={element.value} title={element.title} elementIcon={{ icon: element.icon }} />)}
                </SimpleGrid>
            </AccordionPanel>
        </AccordionItem>)}
    </Accordion>
}

export default Elements
