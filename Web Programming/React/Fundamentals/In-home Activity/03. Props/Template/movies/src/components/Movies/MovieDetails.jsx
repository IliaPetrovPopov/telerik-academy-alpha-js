const MovieDetails = () => {
  const movie = {
    imdbID: 'tt2278388',
    title: 'The Grand Budapest Hotel',
    year: '2014',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg'
  };

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

export default MovieDetails;
