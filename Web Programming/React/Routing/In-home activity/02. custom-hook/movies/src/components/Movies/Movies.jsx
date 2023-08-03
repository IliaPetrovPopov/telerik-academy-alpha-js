import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Loader from "../Loader/Loader";
import withPrettyButtons from "../../hoc/withPrettyButtons";
import { BASE_URL, API_KEY } from "../../constants/constants";
import { useHttp } from "../../hooks/useHttp.js";
import "./Movies.css";

const Movies = () => {
  const navigate = useNavigate();

  const [movieRecommendationIndex, setMovieRecommendationIndex] =
    useState(null);

  const { data, setLocalData, loading, error } = useHttp(
    `${BASE_URL}?apiKey=${API_KEY}&s=amazing`,
    {
      Search: [],
    }
  );
  const movies = data.Search;

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

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
    setLocalData(updatedMovies);
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
        <MovieDetails
          {...movies[movieRecommendationIndex]}
          goToDetails={() =>
            navigate(`/movies/${movies[movieRecommendationIndex].imdbID}`)
          }
        />
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
    return <h1 style={{ color: "Red" }}>{error}</h1>;
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
