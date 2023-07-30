import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faAdd } from "@fortawesome/free-solid-svg-icons";

import "./MovieDetails.css";

const MovieDetails = ({ imdbID, poster, title, year, isInWatchList, addToWatchList, type }) => {
  return (
    <div id={imdbID}>
      <img className="poster" src={poster} alt="poster" />
      <div>
        {title}
        {isInWatchList ? (
          <FontAwesomeIcon
            style={{ color: "green", marginLeft: "10px" }}
            icon={faClipboardCheck}
          />
        ) : (
          <button onClick={() => addToWatchList(imdbID)}
          className="add-to-watchlist">
            <FontAwesomeIcon
              className="add-to-watchlist-icon"
              icon={faAdd}
            />
          </button>
        )}
      </div>
      <div>
        Year: {year} | Type: {type}
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  imdbID: PropTypes.string,
  poster: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  isInWatchList: PropTypes.bool,
  type: PropTypes.string,
};

export default MovieDetails;
