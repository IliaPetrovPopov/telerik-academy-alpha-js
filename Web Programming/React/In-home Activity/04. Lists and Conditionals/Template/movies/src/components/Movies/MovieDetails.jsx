import PropTypes from 'prop-types';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAdd, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

const MovieDetails = ({poster, type, addToWatchList, title, year, imdbID, isInWatchList}) => {
  return (
    <div id={imdbID}>
      <img src={poster} alt="poster" />
      <div>{title}
      {isInWatchList ? (
      <FontAwesomeIcon style={{margin: "10px", color: "green"}}
      icon={faClipboardCheck} />
      ) : ( <button onClick={() => addToWatchList(imdbID)} className="add-to-watchlist">
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
  type: PropTypes.string
};

export default MovieDetails;
