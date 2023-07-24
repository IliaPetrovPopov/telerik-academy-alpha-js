import PropTypes from "prop-types";
function Header(props) {
  if (props.children) {
    return (
      <div>
        <h1>Welcome!</h1>
        {props.children}
      </div>
    );
  } else {
    return <h1>Welcome!</h1>;
  }
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
