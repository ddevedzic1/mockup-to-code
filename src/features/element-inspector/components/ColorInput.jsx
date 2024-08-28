import { Flex, Input } from "@chakra-ui/react"
import PropTypes from 'prop-types'
import { useState, useEffect, useRef } from "react"

function ColorInput({ defaultValue, ...props }) {

    const colorInputRef = useRef(null);
    const textInputRef = useRef(null);

    const [color, setColor] = useState(defaultValue)

    useEffect(() => setColor(defaultValue), [defaultValue])

    const handleChange = (e) => setColor(e.target.value)

    const handleKeyDown = (ref, e) => {
        if (e.key === 'Enter') {
            ref.current.blur();
        }
    };

    return (
        <Flex width="100%" alignItems="center">
            <Input ref={colorInputRef} type="color" value={color} onChange={handleChange} onKeyDown={(e) => handleKeyDown(colorInputRef, e)} flex="0 0 30px" p="0"
                {...props} />
            <Input ref={textInputRef} value={color} onChange={handleChange} onKeyDown={(e) => handleKeyDown(textInputRef, e)} flex="1"
                {...props} />
        </Flex>
    )
}

ColorInput.propTypes = {
    defaultValue: PropTypes.any
}

export default ColorInput
