import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faAdd } from "@fortawesome/free-solid-svg-icons";

import "./MovieDetails.css";

const MovieDetails = ({
  imdbID,
  Poster,
  Title,
  Year,
  Type,
  isInWatchList,
  addToWatchList,
  goToDetails,
}) => {
  return (
    <div id={imdbID} className="movie-details">
      <img
        className="poster"
        onClick={goToDetails ? goToDetails : () => null}
        src={Poster}
        alt="poster"
      />
      <h2>{Title}</h2>
      {isInWatchList ? (
        <FontAwesomeIcon
          style={{ color: "green", marginLeft: "10px" }}
          icon={faClipboardCheck}
        />
      ) : (
        addToWatchList && (
          <button
            onClick={() => addToWatchList(imdbID)}
            className="add-to-watchlist"
          >
            <FontAwesomeIcon className="add-to-watchlist-icon" icon={faAdd} />
          </button>
        )
      )}
      <div>
        Year: {Year} | Type: {Type}
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
