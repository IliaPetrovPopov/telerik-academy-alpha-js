import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./FactItem.css";

function FactItem({ number, story, description, isLiked, likeFactHandler }) {
  
  return (
    <>
      <div className="circle">{number}</div>
      {isLiked ? (
        <FontAwesomeIcon className="liked" icon={faHeart} />
      ) : (
        <button onClick={() => likeFactHandler(number)} className="like-btn">
          Like
        </button>
      )}
      <h3 className="fact-title">{story}</h3>
      <p className="fact">{description}</p>
      <br />
    </>
  );
}

FactItem.propTypes = {
  number: PropTypes.number,
  description: PropTypes.string,
  story: PropTypes.string,
};

export default FactItem;
<FontAwesomeIcon className="liked" icon={faHeart} />;
