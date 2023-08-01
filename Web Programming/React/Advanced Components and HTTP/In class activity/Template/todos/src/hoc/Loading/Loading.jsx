import PropTypes from 'prop-types'

const Loading = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

Loading.proptypes = {
    children: PropTypes.element.isRequired
};

export default Loading;