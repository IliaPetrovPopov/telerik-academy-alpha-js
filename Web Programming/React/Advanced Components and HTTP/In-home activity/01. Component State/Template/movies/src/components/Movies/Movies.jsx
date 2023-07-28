import { useState } from "react";
import MovieDetails from "./MovieDetails.jsx";

const Movies = () => {
  const [movieRecommendationIndex, setmovieRecommendationIndex] = useState(null);
  
  const [movies, setMovies] = useState([
    {
      imdbID: "tt2278388",
      title: "The Grand Budapest Hotel",
      year: "2014",
      type: "movie",
      isInWatchList: true,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
    },
    {
      imdbID: "tt0910970",
      title: "WALL·E",
      year: "2008",
      type: "movie",
      isInWatchList: false,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_FMjpg_UY2048_.jpg",
    },
    {
      imdbID: "tt7286456",
      title: "Joker",
      year: "2019",
      type: "movie",
      isInWatchList: false,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UY4096_.jpg",
    },
    {
      imdbID: "tt5712554",
      title: "The Grand Tour",
      year: "2016–",
      type: "series",
      isInWatchList: false,
      poster:
        "https://m.media-amazon.com/images/M/MV5BYjkyOWIyZGYtYzU3ZS00NWM2LThjZGEtMDZjZjg2MTI2NzBhXkEyXkFqcGdeQXVyNjI4OTg2Njg@._V1_SX300.jpg",
    },
    {
      imdbID: "tt2039345",
      title: "Grand Piano",
      year: "2013",
      type: "movie",
      isInWatchList: false,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjEyNzkwMDMxM15BMl5BanBnXkFtZTgwOTM0MzE4MDE@._V1_SX300.jpg",
    },
  ]);

  const addToWatchList = (id) => {
    const updatedMovies = movies.map(movie => {
      if(movie.imdbID === id) {
        return {
          ...movie,
          isInWatchList: true,
        }
      }

      return movie;
    })

    setMovies(updatedMovies);
  };

  const recommendMovie = () => {
    const validIndex = Math.floor(Math.random() * movies.length);

    setmovieRecommendationIndex(validIndex);
  }

  const clearRecommendations = () => {
    setmovieRecommendationIndex(null);
  }

  const moviesToShow = movieRecommendationIndex !== null ? (
      <MovieDetails {...movies[movieRecommendationIndex]}/>
    ) : (
      movies.map(movie => {
        const movieProps = {...movie, addToWatchList};
        return <MovieDetails key={movie.imdbID} {...movieProps} />
      })
    )

  return (
    <div>
      <button onClick={recommendMovie}>Recommend a movie</button>
      <button onClick={clearRecommendations}>Clear recommendations</button>
      
      <br />
      <br />

      {moviesToShow}
    </div>
  );
};


export default Movies;
