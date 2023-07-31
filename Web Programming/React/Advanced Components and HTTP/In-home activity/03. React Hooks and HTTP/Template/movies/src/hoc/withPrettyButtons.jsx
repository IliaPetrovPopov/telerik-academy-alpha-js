import "./styles/button.css";

const withPrettyButtons = (BaseComponent) => (props) => {
  return (
    <div className="myButton">
      <BaseComponent {...props} />
    </div>
  );
};

export default withPrettyButtons;
