<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## React Movies Project - 04. State

### 1. State

The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

We will use state to provide our users with movie recommendation functionality.

1. Add **movieRecommendationIndex** state, using **useState** hook. In the state we'll keep currently recommended movie's index. Let's have the first movie (index 0) as default recommendation. We will update its value in the state object using **setMovieRecommendationIndex** function.

    ```js
    const [movieRecommendationIndex, setMovieRecommendationIndex] = useState(0);
    ```

2. Create a section for showing a recommended movie's title

    ```js
    <div>Our recommendation: {movies[movieRecommendationIndex].title}</div>
    ```

3. Add a button that will show a different recommendation
4. Attach an event to randomly update the movieRecommendationIndex (don't think in-depth about events for now)

    ```js
    <button onClick={handleButtonClick}>Find me another!</button>
    ```

5. The `return` section in the component should look like:

    ```js
    return (
        <div>
          <div>
            <div>Our recommendation: {movies[movieRecommendationIndex].title}</div>
            <button onClick={handleButtonClick}>Find me another!</button>
          </div>

          <br />

          <MovieDetails {...movies[0]} />
          <MovieDetails {...movies[1]} />
          <MovieDetails {...movies[2]} />
        </div>
      );
    };
    ```

6. Add a handler that will update the **movieRecommendationIndex** state to a random valid index
   
    ```js
      // event handler
      const handleButtonClick = () => {
        const validMovieIndex = Math.floor(Math.random() * movies.length);
        setMovieRecommendationIndex(validMovieIndex);
      };
    ```

7. Open `Components` tab from Developer Tools in Chrome and see how app's re-rendered every time the state is updated:

    !['state'](./imgs/state.gif)

### 2. State & Conditionals

If we get index for recommendation that is valid, we'll render details for this movie, otherwise the whole list will appear.

1. Change default recommendation and start the **movieRecommendationIndex** with initial value of **null**.

      ```js
      const [movieRecommendationIndex, setMovieRecommendationIndex] = useState(null);
      ```

2. Create a **moviesToShow** variable - if the **movieRecommendationIndex** is valid then show a detailed view of the recommendation else, show all of the movies:

    ```js
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
              ...movie,
            };
            return <MovieDetails key={movie.imdbID} {...movieDetailsProps} />;
          })
        );
    ```

3. Let's have another button - **clearRecommendations** button that will reset the recommendations. This way we'll have two buttons:

    ```html
    <button onClick={recommendMovie}>Recommend a movie</button>
    ```

    ```html
    <button onClick={clearRecommendations}>Clear recommendations</button>
    ```

4. Add `event handlers` for both of them:

    ```js
    const recommendMovie = () => {
      const validMovieIndex = Math.floor(Math.random() * movies.length);
      setMovieRecommendationIndex(validMovieIndex);
    };
    ```

    ```js
    const clearRecommendations = () => {
      setMovieRecommendationIndex(null);
    };
    ```

5. Now, using JSX interpolation and `moviesToShow` variable render conditionally the movies.

6. If you have done the job right, your Movies component should look like this:

    ```js
    import { useState } from "react";
    import MovieDetails from "./MovieDetails.jsx";
    import "./Movies.css";

    const Movies = () => {
      const [movieRecommendationIndex, setMovieRecommendationIndex] =
        useState(null);

      const movies = [
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
          imdbID: "tt5712554",
          title: "The Grand Tour",
          year: "2016–",
          type: "series",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYjkyOWIyZGYtYzU3ZS00NWM2LThjZGEtMDZjZjg2MTI2NzBhXkEyXkFqcGdeQXVyNjI4OTg2Njg@._V1_SX300.jpg",
        },
        {
          imdbID: "tt2039345",
          title: "Grand Piano",
          year: "2013",
          type: "movie",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMjEyNzkwMDMxM15BMl5BanBnXkFtZTgwOTM0MzE4MDE@._V1_SX300.jpg",
        },
      ];

      const addToWatchList = (id) => {
        alert(`Movie with id ${id} will soon be added to watch list!`);
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
              ...movie,
            };
            return <MovieDetails key={movie.imdbID} {...movieDetailsProps} />;
          })
        );

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

    export default Movies;
    ```

### 1. State & Events

In order to pass information from child to parent, pass a callback from the parent as props to the child. The child now has full control on when and how to call the callback 

We already implemented passing the state (movies data to MovieDetails component) and lifting it up by calling `addToWatchList` event handler:

1. We have a `addToWatchList` callback as props in the **MovieDetails** component. 
   
2. We added "add to watch list" function for each movie and attached to its container a click event - the `addToWatchList` callback:

    ```js
        <button onClick={() => addToWatchList(imdbID)}
          className="add-to-watchlist">
            <FontAwesomeIcon
              className="add-to-watchlist-icon"
              icon={faAdd}
            />
        </button>
    ```


Now let's finish it by adding the **state**!


3. Refactor the movies array in **Movies** component to be stateful by adding the array to the state (use **useState**):

    ```js
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
      poster:
        "https://m.media-amazon.com/images/M/MV5BYjkyOWIyZGYtYzU3ZS00NWM2LThjZGEtMDZjZjg2MTI2NzBhXkEyXkFqcGdeQXVyNjI4OTg2Njg@._V1_SX300.jpg",
    },
    {
      imdbID: "tt2039345",
      title: "Grand Piano",
      year: "2013",
      type: "movie",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjEyNzkwMDMxM15BMl5BanBnXkFtZTgwOTM0MzE4MDE@._V1_SX300.jpg",
    },
    ]);
    ```

4. In the **Movies** component implement the logic for adding movie with a specific id to the watch list. Update movies in the state using `setMovies` function.

    ```js
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
    ```

5. Event handlers are simple **closures**. This way we are sure that the correct parameters are passed.

6.  Run the application.
    
7.  There is a "real-time" resizing of the array - this is because **setMovies** function updates movies in the state. Every update of the state causes re-rendering of the component that depends on the changed data. 

!['events'](./imgs/events.gif)


