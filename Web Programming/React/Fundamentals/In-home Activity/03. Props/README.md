<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## React Movies Project - 03. Props

It is a bit strange to show the same movie, right. This is because it's been hardcoded. How can we pass some arguments to `MovieDetails` component and make it reusable?

We can use the **component props** – an input parameter that the parent component passes to the child component.

### 1. Props

1. Add the **movies** array in the **Movies** component

    ```js
    // the data will be eventually retrieved from here: https://www.omdbapi.com/
    const movies = [
      {
        imdbID: 'tt2278388',
        title: 'The Grand Budapest Hotel',
        year: '2014',
        type: 'movie',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg'
      },
      {
        imdbID: 'tt5712554',
        title: 'The Grand Tour',
        year: '2016–',
        type: 'series',
        poster:
          'https://m.media-amazon.com/images/M/MV5BYjkyOWIyZGYtYzU3ZS00NWM2LThjZGEtMDZjZjg2MTI2NzBhXkEyXkFqcGdeQXVyNjI4OTg2Njg@._V1_SX300.jpg'
      },
      {
        imdbID: 'tt2039345',
        title: 'Grand Piano',
        year: '2013',
        type: 'movie',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMjEyNzkwMDMxM15BMl5BanBnXkFtZTgwOTM0MzE4MDE@._V1_SX300.jpg'
      }
    ];
    ```

2. Pass each of the movies to the **MovieDetails** as props
   
    ```js
    return (
      <div>
        <MovieDetails {...movies[0]} />
        <MovieDetails {...movies[1]} />
        <MovieDetails {...movies[2]} />
      </div>
    );
    ```

3. Delete the hard-coded movie inside the **MovieDetails**
4. Replace the interpolated data in the JSX so it comes from props instead

    ```js
    const MovieDetails = props => {
    return (
        <div id={props.imdbID}>
          <img src={props.poster} alt="poster" />
          <div>{props.title}</div>
          <div>
            Year: {props.year} | Type: {props.type}
          </div>
        </div>
      );
    };
    ```

5. Install **prop-types** 
  
    ```bash
    npm install prop-types
    ```

6. Setup typings to the props of **MovieDetails**

    ```js
      MovieDetails.propTypes = {
        imdbID: PropTypes.string,
        poster: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        type: PropTypes.string
      };
    ```
7. If you've done everything right, your MovieDetails component should look like that:

    ```js
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

    ```

8. Time to run the application and see all the movies!