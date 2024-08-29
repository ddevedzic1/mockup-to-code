import { Box } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import PropTypes from 'prop-types';

import LabeledInput from "./LabeledInput"
import { ATTRIBUTES_OPTIONS } from "../utils/constants"
import { changeElementContent, changeElementAttribute } from "../../../treeModel/slices/treeModelSlice"
import { isNotAllowedCategory } from "../utils/helpers"

function OtherSettings({ activeElement }) {
    const dispatch = useDispatch();
    const { internalTag, attributes, children } = activeElement;

    const getValue = (key) => {
        if (key === "content") return children?.[0] ?? "";
        if ((key === "checked" || key === "disabled") && !attributes?.[key]) return false;
        return attributes?.[key] ?? ""
    }

    const handleBlur = (e) => {
        let { id, value, checked } = e.target;
        if (id === "content" && (!value && value !== "")) return;
        if (id === "content") {
            dispatch(changeElementContent({ content: value }));
            return;
        }
        if (id === "checked" || id === "disabled") value = checked;
        dispatch(changeElementAttribute({ attributeKey: id, attributeValue: value }));
    }

    return <Box p="4">
        {
            !isNotAllowedCategory(ATTRIBUTES_OPTIONS, internalTag) ?
                ATTRIBUTES_OPTIONS.options.map(option => !isNotAllowedCategory(option, internalTag) ?
                    <LabeledInput
                        key={option.reactTag}
                        label={option.label}
                        type={option.inputType}
                        id={option.reactTag}
                        value={getValue(option.reactTag)}
                        onBlur={handleBlur}
                    />
                    : null) : null
        }
    </Box>
}

OtherSettings.propTypes = {
    activeElement: PropTypes.object.isRequired,
}

export default OtherSettings