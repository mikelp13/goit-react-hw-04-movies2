import React, { useState, useEffect } from "react";
import moviesAPI from "../../api/moviesAPI";
import MoviesList from "../../components/moviesList/MoviesList";
import Notification from "../../components/notification/Notification";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    moviesAPI
      .trendingMovies()
      .then((movies) => {
        setMovies([...movies.data.results]);
      })
      .catch((error) => setError({error}))
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {error && <Notification message={error.message} />}
      {movies.length > 0 && <MoviesList movies={movies}/>}
    </>
  );
};
export default Home;
