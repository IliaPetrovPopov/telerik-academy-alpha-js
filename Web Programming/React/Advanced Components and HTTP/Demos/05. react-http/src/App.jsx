import { useState, useEffect } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader/Loader";
import Posts from "./components/Posts";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // enable the loader until all async operations are over
    setLoading(true);

    // make the HTTP GET request to the remote API
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const showError = () => {
    if (error) {
      return (
        <h4 className="error">
          <i>An error has occurred: </i>
          {error}
        </h4>
      );
    }
  };

  const showLoader = () => {
    if (loading) {
      return <Loader />;
    }
  };

  const handleDeletePost = (id) => {
    // enable the loader until all async operations are over
    setLoading(true);

    // make the HTTP DELETE request to the remote API
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
      mode: "cors", // Allows cross-origin requests. Read more https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    })
      .then((response) => response.json())
      .then(() => {
        const index = posts.findIndex((post) => post.id === id);
        const updatedPosts = posts.slice(); // copy the array of posts
        updatedPosts.splice(index, 1);

        setPosts(updatedPosts);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <Header />
      {showLoader()}
      {showError()}
      {posts.length ? (
        <Posts posts={posts} deletePost={handleDeletePost} />
      ) : (
        <div>No posts to show ...</div>
      )}
    </div>
  );
}

export default App;
