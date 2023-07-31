import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faAdd } from "@fortawesome/free-solid-svg-icons";

import "./MovieDetails.css";

const MovieDetails = ({imdbID, Poster, Year, Title, Type}) => {
  return (
    <div id={imdbID}>
      <img className="poster" src={Poster} alt="poster" />
      <div>
        {Title}
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
