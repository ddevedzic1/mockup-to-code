import { Box, FormLabel, Select, Checkbox, Flex } from "@chakra-ui/react";
import PropTypes from 'prop-types';

import ControlledInput from "./ControlledInput";
import ColorInput from "./ColorInput";

function LabeledInput({
    label,
    type,
    id,
    value,
    onBlur,
    options = [],
    ...props
}) {

    let inputComponent;
    switch (type) {
        case 'select':
            inputComponent = (
                <Select
                    id={id}
                    name={id}
                    value={value}
                    onChange={onBlur}
                    sx={{
                        '> option': {
                            background: 'gray.900',
                        },
                    }}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.title}
                        </option>
                    ))}
                </Select>
            );
            break;
        case 'color':
            inputComponent = (
                <ColorInput
                    id={id}
                    defaultValue={value}
                    onBlur={onBlur}
                    {...props}
                />
            );
            break;
        case 'checkbox':
            inputComponent = (
                <Checkbox
                    id={id}
                    defaultValue={value}
                    onBlur={onBlur}
                    {...props}
                    verticalAlign="unset"
                    size="sm"
                />
            );
            break;
        default:
            inputComponent = (
                <ControlledInput
                    id={id}
                    type={type}
                    defaultValue={value}
                    onBlur={onBlur}
                    {...props}
                />
            );
            break;
    }

    return (
        <Flex width="100%" alignItems="center" my="2">
            <FormLabel
                htmlFor={id}
                fontSize="xs"
                fontWeight="normal"
                color="textColor.medium"
                flex="0 0 60px"
                mb="0"
            >
                {label}
            </FormLabel>
            <Box flex="1">
                {inputComponent}
            </Box>
        </Flex>
    );
}

LabeledInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.any,
    onBlur: PropTypes.func.isRequired,
    options: PropTypes.array,
}

export default LabeledInput;
