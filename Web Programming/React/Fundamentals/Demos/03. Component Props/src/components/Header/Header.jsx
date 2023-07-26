import PropTypes from "prop-types";
function Header(props) {
  return (
    <div>
      <h1>Welcome!</h1>
      {props.children}
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
