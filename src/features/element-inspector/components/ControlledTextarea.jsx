import { Textarea } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { useState, useEffect, useRef } from "react"

function ControlledTextarea({ defaultValue, ...props }) {
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
        <Textarea ref={ref} value={value} onChange={handleChange} onKeyDown={handleKeyDown} {...props} />
    )
}

ControlledTextarea.propTypes = {
    defaultValue: PropTypes.any,
}

export default ControlledTextarea
