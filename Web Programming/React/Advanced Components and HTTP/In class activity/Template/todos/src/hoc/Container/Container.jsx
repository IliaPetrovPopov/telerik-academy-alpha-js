import PropTypes from 'prop-types'

const Container = ({ children }) => {
    return (
        <div>
        {children}
        </div>
    )
}

Container.PropTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};