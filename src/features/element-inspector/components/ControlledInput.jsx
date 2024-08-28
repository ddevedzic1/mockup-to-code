import { Input } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { useState, useEffect, useRef } from "react"

function ControlledInput({ defaultValue, ...props }) {
    const ref = useRef(null);
    const [value, setValue] = useState(defaultValue);

    useEffect(() => setValue(defaultValue), [defaultValue])

    const handleChange = (e) => setValue(e.target.value)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            ref.current.blur();
        }
    };

    return (
        <Input ref={ref} value={value} onChange={handleChange} onKeyDown={handleKeyDown} {...props} />
    )
}

ControlledInput.propTypes = {
    defaultValue: PropTypes.any,
}

export default ControlledInput
