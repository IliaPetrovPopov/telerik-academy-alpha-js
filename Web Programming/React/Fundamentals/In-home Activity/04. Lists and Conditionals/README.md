<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## React Movies Project - 05. Lists & Conditionals

### 1. Lists
Now it is time to stop copy-paste-ing MoviesDetails component and use list to render all the movies.

1. Replace the hard-coded **MovieDetails** with a mapping of the movies array
   
    ```js
      {movies.map((movie) => (
        <MovieDetails key={movie.imdbID} {...movie} />
      ))}
    ```

2. Pay attention that we use movie's `ID` for list item's **key**. Remember that:
   1. Key is a unique property that helps React identify which items have changed, are added, or are removed. 
   2. The key should always be a unique value amongst its siblings in a given array. 
   3. The best keys are the ids from your data set.


### 2. Conditionals

In React it is often the case that we want to render different parts of the UI or even different components depending on our current state. In our movies project we want to have conditional views depending on correctness of the recommendation movie. 

1. Let's add another field to our movie list - whether we want to watch it. The `isInWatchList` field is boolean. For now, let's say we only want to watch the first movie.

2. Now let's show on the page that we have some of the movies in the watch list. We'll use some [fancy icons](https://fontawesome.com/docs/web/use-with/react/)
   1. Install `fotawesome` npm package and its dependencies

    ```bash
    npm i @fortawesome/fontawesome-svg-core

    # Free icons styles - you can install only one of these
    npm i @fortawesome/free-solid-svg-icons
    npm i @fortawesome/free-regular-svg-icons

    npm i @fortawesome/react-fontawesome@latest
    ```

   2. Now let's [add the icon]https://fontawesome.com/docs/web/use-with/react/add-icons#add-individual-icons-explicitly, in case we have the movie in our watch list

    ```javascript
      import PropTypes from 'prop-types';
      import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
      import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

      const MovieDetails = ({imdbID, poster, title, year, isInWatchList, type}) => {
        return (
          <div id={imdbID}>
            <img src={poster} alt="poster" />
            <div>
              {title}
              {isInWatchList && <FontAwesomeIcon style={{margin: "10px", color: "green"}} icon={faClipboardCheck} />}
            </div>
            <div>
              Year: {year} | Type: {type}
            </div>
            
          </div>
        );
      };
    ```

   3. What about all other movies? Let's add button that will help us add them to the watch list.
   
   ```html
        {isInWatchList ? (
          <FontAwesomeIcon
            style={{ color: "green", marginLeft: "10px" }}
            icon={faClipboardCheck}
          />
        ) : (
          <button className="add-to-watchlist">
            <FontAwesomeIcon
              className="add-to-watchlist-icon"
              icon={faAdd}
            />
          </button>
    ```

    4. We have some basic styling added in the `Movies.css`.

    ```css
    .watchlist{
      margin: 10px;
      color: rgb(17, 203, 17)
    }

    .add-to-watchlist-icon{
      color: gold
    }

    .add-to-watchlist{
      margin: 10%;
    }
    ```

### 3. Event Handlers

 1. In order to pass information from child to parent, pass a callback from the parent as props to the child. The child now has full control on when and how to call the callback
 2. We'll start by passing `addToWatchlist` event handler from **Movies** component to **MovieDetails**. As we still do not know how to change component's state we'll use an `alert` to share our intention of updating the movies. Remember that props are immutable, so we'll have special way of updating them in the next topic.
    1. Define the function in the parent component **Movies**

    ```javascript
      const addToWatchList = (id) => {
      alert(`Movie with id ${id} will soon be added to watch list!`);
      };

      return (
        <div>
          {movies.map((movie) => {
            const movieDetailsProps = {
              addToWatchList,
              ...movie,
            };
            return <MovieDetails key={movie.imdbID} {...movieDetailsProps} />;
          })}
        </div>
      );
    ```

    2. Use it in the child **MovieDetails** component. Do not forget to **pass**, no to **call** the function

    ```html
      <button onClick={() => addToWatchList(imdbID)} className="add-to-watchlist">
          <FontAwesomeIcon
            className="add-to-watchlist-icon"
            icon={faAdd}
          />
      </button>
    ```