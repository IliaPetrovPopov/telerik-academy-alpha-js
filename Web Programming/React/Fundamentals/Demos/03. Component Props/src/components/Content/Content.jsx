import PropTypes from "prop-types";
import "./Content.css";

function Content({ number, story, description }) {
  return (
    <>
      <div className="circle">{number}</div>
      <h3 className="fact-title">{story}</h3>
      <p className="fact">{description}</p>
      <br />
    </>
  );
}

Content.propTypes = {
  number: PropTypes.number,
  description: PropTypes.string,
  story: PropTypes.string,
};

export default Content;
