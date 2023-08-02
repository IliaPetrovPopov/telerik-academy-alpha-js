import { useState, useEffect } from "react";
import MovieDetails from "./MovieDetails";
import Loader from "../Loader/Loader";
import withPrettyButtons from "../../hoc/withPrettyButtons";
import { BASE_URL, API_KEY } from "../../constants/constants";
import "./Movies.css";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [movieRecommendationIndex, setMovieRecommendationIndex] =
    useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const search = "amazing";
  const navigate = useNavigate();
  
  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}?apikey=${API_KEY}&s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'True') {
          setMovies(data.Search);
        } else if (data.Response === 'False') {
          setError(data.Error);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const addToWatchList = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.imdbID === id) {
        return {
          ...movie,
          isInWatchList: true,
        };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  const recommendMovie = () => {
    const validMovieIndex = Math.floor(Math.random() * movies.length);
    setMovieRecommendationIndex(validMovieIndex);
  };

  const clearRecommendations = () => {
    setMovieRecommendationIndex(null);
  };

  const moviesToShow =
    movieRecommendationIndex !== null ? (
      <div className="recommendation">
        <div>Our recommendation:</div>
        <MovieDetails {...movies[movieRecommendationIndex]} />
      </div>
    ) : (
      movies.map((movie) => {
        const movieDetailsProps = {
          addToWatchList,
          goToDetails: () => navigate(`/movies/${movie.imdbID}`),
          ...movie,
        };
        return <MovieDetails key={movie.imdbID} {...movieDetailsProps} />;
      })
    );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1 style={{ color: 'Red' }}>{error}</h1>;
  }

  return (
    <div>
      <div>
        <button onClick={recommendMovie}>Recommend a movie</button>
        <button onClick={clearRecommendations}>Clear recommendations</button>
      </div>

      <br />

      {moviesToShow}
    </div>
  );
};

export default withPrettyButtons(Movies);
