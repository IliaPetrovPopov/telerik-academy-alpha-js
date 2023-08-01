import PropTypes from 'prop-types';

const AppError = ({ message }) => {
    return (
        <h2 style={{color: 'red'}}>{message}</h2>
    );
};

AppError.PropTypes = {
    message: PropTypes.string.isRequired
};

export default AppError