import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faAdd } from "@fortawesome/free-solid-svg-icons";

import "./MovieDetails.css";

const MovieDetails = ({ id, Poster, Title, Year, isInWatchList, addToWatchList, Type, goToDetails}) => {
  return (
    <div id={id}>
      <img className="poster" src={Poster} alt="poster" 
        onClick={goToDetails ? goToDetails : () => null}/>
      <div>
        {Title}
        {addToWatchList && (
          <button onClick={() => addToWatchList(id)}
          className="add-to-watchlist">
            <FontAwesomeIcon
              className="add-to-watchlist-icon"
              icon={faAdd}
            />
          </button>
        )}
      </div>
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
