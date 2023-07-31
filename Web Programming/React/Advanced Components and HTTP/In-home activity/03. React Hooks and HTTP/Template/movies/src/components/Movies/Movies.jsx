import { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";
import withPrettyButtons from "../../hoc/withPrettyButtons";
import "./Movies.css";
import CONSTANTS from "../constants/constants.jsx";
import Loader from "../Loader/Loader.jsx";

const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [onClickSearch, setOnClickSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`${CONSTANTS.baseUrl}?apikey=${CONSTANTS.apiKey}&s=${onClickSearch}`)
    .then(response => response.json())
    .then(data => {

        if(data.Response === 'True') { 
          setMovies(data.Search);
        } else if(data.Response === 'False'){
          setError(data.Error);
        }
    })
    .catch(e => setError(`Error appeared: ${e.message}`))
    .finally(() => setLoading(false));
  }, [onClickSearch]);
  
  if(loading) {
    return <Loader />
  }

  if(error) {
    return <h1 style={{color: 'red'}}>{error}</h1>
  }

  const gettingSearchValue = (e) => {
      setSearch(e.target.value);
  };

  const settingSearchValue = () => {
    setOnClickSearch(search);
  }

  const moviesToShow = movies.map((movie) => {
        const movieDetailsProps = {...movie};
        return <MovieDetails key={movie.imdbID} {...movieDetailsProps} />;
      })

  return (
    <div>
      <div>
        <form>
          <input type="text" onChange={gettingSearchValue}/>
          <input type="button" onClick={settingSearchValue}/>
        </form>
      </div>

      <br />
      {moviesToShow}
    </div>
  );
};

export default withPrettyButtons(Movies);
