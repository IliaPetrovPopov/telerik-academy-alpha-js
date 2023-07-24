import PropTypes from 'prop-types';

const MovieDetails = ({imdbID, poster, title, year, type}) => {
  return (
    <div id={imdbID}>
      <img src={poster} alt="poster" />
      <div>{title}</div>
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
