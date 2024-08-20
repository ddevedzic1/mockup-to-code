import PropTypes from 'prop-types';

function EnhancedElement({ id, children }) {
    console.log(id)
    return (
        <div>
            {children}
        </div>
    )
}

EnhancedElement.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default EnhancedElement
