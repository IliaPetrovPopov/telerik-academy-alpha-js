<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## React Movies Project - Routing

### 1. Routing

1. Install **react-router-dom** package https://www.npmjs.com/package/react-router-dom

   ```bash
     npm i react-router-dom
   ```

2. Create a **Home component**. It should be something simple:

   ```js
   const Home = () => {
     return <h1>Hello!</h1>;
   };

   export default Home;
   ```

3. In your root component **App.jsx** wrap the **Layout** with the **<BrowserRouter>** so the pages can use routing hooks.

4. Add a **<Routes>** and inside the routes for **Home** and **Movies** components as **children** to the **Layout**:

   ```html
   <BrowserRouter>
     <Layout>
       <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/movies" element={<Movies />} />
       </Routes>
     </Layout>
   </BrowserRouter>
   ```

5. Test the Route urls inside the browser
6. Do you have your console open? What happens when you land on the http://127.0.0.1:5173/ (root path)?
7. Declare the **index** of the application, the "/" route:

   ```html
   <Route index element="{<Home" />} />
   ```

8. Add an **IndividualMovie** container component.

   1. Use the API endpoint to get one:

      ```
        https://www.omdbapi.com/?apiKey=1591af6&i=tt2319580
      ```

   2. Get the movie ID from route params:

      ```js
      const params = useParams();
      const imdbID = params.id;
      ```

   3. Do not forget to add the loader and to handle possible errors

   If you have done your job right yor component should look something like this:

   ```js
    import { useEffect, useState } from 'react';
    import { useParams } from 'react-router-dom';

    import Loader from '../Loader/Loader';
    import { BASE_URL, API_KEY } from '../../constants/constants';
    import MovieDetails from './MovieDetails';

    const IndividualMovie = () => {
      const [movieInfo, setMovieInfo] = useState(null);

      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const params = useParams();

      const imdbID = params.id;

      useEffect(() => {
        setLoading(true);

        fetch(`${CONSTANTS.baseUrl}?apiKey=${CONSTANTS.apiKey}&i=${imdbID}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.Response === "True") {
              setMovieInfo(data);
            } else if (data.Response === "False") {
              setError(data.Error);
            }
          })
          .finally(() => setLoading(false));
      }, [imdbID]);

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
            </>
          )}
        </div>
      );
   };

   export default IndividualMovie;
   ```

9. Attach it to the routing as a subresource to movies - remember that query parameters are added using **:**.

   ```html
   <Route path="/movies/:id" element={<IndividualMovie />} />
   ```

   Test it out - here's an example movieId - **tt7335184**. The url should be:

   ```
     http://localhost:3000/movies/tt7335184
   ```

10. Let's change a bit **MovieDetails component**

   1. Show `Add to watch list` button only if the **addToWatchList** callback is passed:

      ```html
        addToWatchList && (
            <button
              onClick={() => addToWatchList(imdbID)}
              className="add-to-watchlist"
            >
              <FontAwesomeIcon className="add-to-watchlist-icon" icon={faAdd} />
            </button>
          )
      ```

   2. Enhance **MovieDetails** component with a redirect to the **IndividualMovie** page on click by

      1. In **Movies component** pass a redirection callback from the parent using the navigation function from the `useNavigate()` hook.

      ```js
      const Movies = () => {
        const navigate = useNavigate();
        // ...
      };
      ```

      then add another prop to the **MovieDetails** component (in both cases, we are using it)

      ```html
        goToDetails={() => navigate(`/movies/${movies[movieRecommendationIndex].imdbID}`)}

        ...
        
        movies.map((movie) => {
        const movieDetailsProps = {
          addToWatchList,
          goToDetails: () => navigate(`/movies/${movie.imdbID}`),
          ...movie,
        };
        return <MovieDetails key={movie.imdbID} {...movieDetailsProps} />;
      })
      ```

      2. Add an **onClick** event on every movie's image in **MovieDetails** to go to individual movie, using **goToDetails** prop.
      ```html
        <img
            className="poster"
            onClick={goToDetails ? goToDetails : () => null}
            src={Poster}
            alt="poster"
          />
      ```

11. Let's enrich our movie - add an **AdditionalMovieInfo** component

    ```js
    const AdditionalMovieInfo = ({ Actors, Awards, Plot }) => {

      return (
        <div>
          <h3>Additional Info</h3>
          <div>{Plot}</div>

          <hr />

          <div>Actors: {Actors}</div>
          <div>Awards: {Awards}</div>
        </div>
      );
    };

    export default AdditionalMovieInfo;
    ```

12. Show the **MovieDetails** and the **AdditionalMovieInfo** inside the **IndividualMovie** container:

    ```html
    return (
    <div>
      {movieInfo && (
      <>
        <MovieDetails {...movieInfo} />
        <AdditionalMovieInfo {...movieInfo} />
      </>
      )}
    </div>
    );
    ```

13. Now we'll need some menu so we can browse the pages without manually entering their URLs. Let's create a **Navigation** component

    1. Add **Link**-s for **Home** and **Movie** pages

    ```js
    import { Link } from "react-router-dom";
    import "./Navigation.css";

    const Navigation = () => {
      return (
        <nav className="Navigation">
          <Link to="/home">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      );
    };

    export default Navigation;
    ```

14. Add it as a child of the **Layout** component

    ```html
      const Layout = props => {
        return (
          <>
            <Header />
            <Navigation />
            <hr />
            <main>{props.children}</main>
            <hr />
            <Footer />
          </>
        );
      };
    ```

15. Create a **NotFound** page, again make it simple:

    ```js
    const NotFound = () => {
      return <h1>404</h1>;
    };

    export default NotFound;
    ```

    1. Show it whenever the current url in the browser is not registered as a route. Remember that we do that by using the regex **\***

    ```html
    <Route path="*" element={<NotFound />} />
    ```

16. Play with css and add styling to the application
17. **Optional:** Add **Back** button in the **IndividualMovie** component. Remember that:

    1. You can use **navigate(-1)** to return to the previous page
    2. Make sure you make full use of `react-router-dom` hooks
