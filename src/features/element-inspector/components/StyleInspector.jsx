import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import PropTypes from 'prop-types';

import LabeledInput from "./LabeledInput"
import { STYLE_OPTIONS } from "../utils/constants"
import { changeElementAttribute } from "../../../treeModel/slices/treeModelSlice"
import { isNotAllowedCategory } from "../utils/helpers"

function StyleInspector({ activeElement }) {
    const dispatch = useDispatch();
    const attributeKey = "style";
    const { internalTag, attributes } = activeElement;
    const { style } = attributes;

    const getStyleValue = (key) => style?.[key] ?? ""

    const handleBlur = (e) => {
        const { id, value } = e.target;
        const attributeValue = {
            ...style,
            [id]: value
        }
        if (value === "") {
            delete attributeValue[id];
        }
        dispatch(changeElementAttribute({ attributeKey, attributeValue }));
    }

    const handleOptions = (options) => {
        if (!options) return [];
        if (options[0].value === "") return options;
        options.unshift({ value: "", label: "" });
        return options;
    }

    return <Accordion defaultIndex={[0]} allowMultiple>
        {STYLE_OPTIONS.map(category => !isNotAllowedCategory(category, internalTag) ?
            <AccordionItem key={category.value} borderBottomWidth="1" borderColor="gray.700">
                <AccordionButton fontSize="sm">
                    <Box as='span' flex='1' textAlign='left' fontSize="sm">{category.title}</Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                    {
                        category.options.map(option => !isNotAllowedCategory(option, internalTag) ?
                            <LabeledInput
                                key={option.reactTag}
                                label={option.label}
                                type={option.inputType}
                                id={option.reactTag}
                                value={getStyleValue(option.reactTag)}
                                onBlur={handleBlur}
                                options={handleOptions(option.options)}
                            />
                            : null)
                    }
                </AccordionPanel>
            </AccordionItem> : null
        )}
    </Accordion>
}

StyleInspector.propTypes = {
    activeElement: PropTypes.object.isRequired,
}

export default StyleInspector