import { useParams } from "react-router-dom";

import Loader from "../Loader/Loader";
import MovieDetails from "./MovieDetails";
import AdditionalMovieInfo from "./AdditionalMovieInfo";

import { BASE_URL, API_KEY } from "../../constants/constants";
import { useHttp } from "../../hooks/useHttp.js";

const IndividualMovie = () => {
  const params = useParams();
  const imdbID = params.id;

  const { data, loading, error } = useHttp(
    `${BASE_URL}?apiKey=${API_KEY}&i=${imdbID}`
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {data && (
        <>
          <MovieDetails {...data} />
          <AdditionalMovieInfo {...data} />
        </>
      )}
    </div>
  );
};

export default IndividualMovie;
