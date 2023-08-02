import { useEffect, useState } from 'react';
 import { useNavigate, useParams } from 'react-router-dom';

 import Loader from '../Loader/Loader';
 import { BASE_URL, API_KEY } from '../../constants/constants';
 import MovieDetails from './MovieDetails';
import AdditionalMovieInfo from './AdditionalMovieInfo';

 const IndividualMovie = () => {
   const [movieInfo, setMovieInfo] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const { id } = useParams();

   useEffect(() => {
     setLoading(true);

     fetch(`${BASE_URL}?apiKey=${API_KEY}&i=${id}`)
       .then((response) => response.json())
       .then((data) => {
         if (data.Response === "True") {
           setMovieInfo(data);
         } else if (data.Response === "False") {
           setError(data.Error);
         }
       })
       .finally(() => setLoading(false));
   }, [id]);

   if (loading) {
     return <Loader />;
   }
   if (error) {
     return <h1>{error}</h1>;
   }

   return (
     <div>
       {movieInfo && (
         <>
           <MovieDetails {...movieInfo} />
           <br />
           <br />
           <AdditionalMovieInfo {...movieInfo}/>
         </>
       )}
     </div>
   );
};

export default IndividualMovie;