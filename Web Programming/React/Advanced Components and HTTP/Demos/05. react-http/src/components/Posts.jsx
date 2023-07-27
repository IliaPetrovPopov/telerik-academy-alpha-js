const Posts = ({ posts, deletePost }) => {
  const transformedPosts = posts.map((post) => {
    return (
      <li key={post.id} className="card">
        {post.body}
        <button onClick={() => deletePost(post.id)}>-</button>
      </li>
    );
  });

  return (
    <main>
      <div>Check out all of our amazing posts!</div>
      <ul>{transformedPosts}</ul>
    </main>
  );
};

export default Posts;
