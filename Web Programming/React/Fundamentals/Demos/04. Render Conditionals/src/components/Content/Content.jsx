import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Content.css";

function Content({ number, story, description, isLiked }) {
  return (
    <>
      <div className="circle">{number}</div>
      {isLiked ? (
        <FontAwesomeIcon className="liked" icon={faHeart} />
      ) : (
        <button className="like-btn">
          <FontAwesomeIcon className="liked" icon={faHeart} />
        </button>
      )}
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
