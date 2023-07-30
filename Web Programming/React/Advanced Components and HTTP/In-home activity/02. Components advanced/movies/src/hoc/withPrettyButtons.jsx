import "./styles/button.css";

const withPrettyButtons = (BaseComponent) => (props) => {
  return (
    <div className="myButton">
      <BaseComponent />
    </div>
  );
};

export default withPrettyButtons;
