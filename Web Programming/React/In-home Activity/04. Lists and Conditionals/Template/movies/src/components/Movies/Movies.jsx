import MovieDetails from './MovieDetails.jsx';

const Movies = () => {
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

  return (
    <div>
      <MovieDetails {...movies[0]} />
      <MovieDetails {...movies[1]} />
      <MovieDetails {...movies[2]} />
    </div>
  );
};

export default Movies;
