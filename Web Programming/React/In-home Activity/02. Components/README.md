<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## React Movie Project - 02. Components

You have setup your project. Now let's add some components.

### 1. Components

*"Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI), which makes them the perfect place to start your React journey!"*

#### Header Component

This component will be responsible for rendering page's title.

1. We'll hold all our components in a `src\components` folder.
2. React components are regular JavaScript functions, but their names **must start with a capital letter or they won’t work!**
3. Add a simple **Header** component. Create `src\components\Header\Header.jsx` file.
4. Write component's code to render the title:
   
   ```javascript
    const Header = () => {
      return <h1>Watch Here..</h1>;
    };

    export default Header;
   ```
5. Add it the the **App** component's view:

    ```javascript
      import Header from './components/Header/Header.jsx';

      const App = () => {
        return (
          <div>
            <Header />
          </div>
        );
      };

      export default App;
    ```

*Note:* There is no difference how you'd define the components - as a arrow functions or function declarations, as long as you keep in mind the differences between two. The default Vite template is coming with function, the author of the task is used to working with arrow functions, so we'll keep it consistent and re-write the App component as an arrow function as well.

#### MovieDetails Component

1. Add a sample **MovieDetails** component. Create `src\Components\Movies\MovieDetails.jsx` file.
2. Show the data from a **movie object**

    ```js
    // the data will be eventually retrieved from here: https://www.omdbapi.com/
    const movie = {
      imdbID: 'tt2278388',
      title: 'The Grand Budapest Hotel',
      year: '2014',
      type: 'movie',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg'
    };
    ```

3. Write component's code to render the movie:

    ```js
    return (
        <div id={movie.imdbID}>
          <img src={movie.poster} />
          <div>{movie.title}</div>
          <div>
            Year: {movie.year} | Type: {movie.type}
          </div>
        </div>
      );
    };
    ```

#### Movies Component

1. Add **Movies** component. Create `src\components\Movies\Movies.jsx` file. 
2. In **Movies** component add multiple instances of **MovieDetails** component
   
   ```js
    import MovieDetails from './MovieDetails';

    const Movies = () => {
      return (
        <div>
          <MovieDetails />
          <MovieDetails />
          <MovieDetails />
        </div>
      );
    };

    export default Movies;
   ```

3. Add **Movies** to the **App** component's view:

    ```js
    import Header from './components/Header/Header';
    import Movies from './components/Movies/Movies';

    const App = () => {
      return (
        <div>
          <Header />
          <hr />
          <Movies />
        </div>
      );
    };

    export default App;
    ```

Now run the project and see how close it is to IMDB already :)