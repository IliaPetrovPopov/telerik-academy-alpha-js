/*
1. withStyling is a function that takes a Component as an argument
2. It returns a function that takes props
3. This function returns a div with the BaseComponent passed in with the props spread into it
 */

const withStyling = (BaseComponent) => (props) => {
  return (
    <div style={{ color: "red" }}>
      <BaseComponent {...props} />
    </div>
  );
};

export default withStyling;
