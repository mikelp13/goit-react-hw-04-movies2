import React, { useState, useEffect } from "react";
import Searchbar from "../../components/searchbar/Searchbar";
import getQueryParams from "../../utils/parseQueryString";
import moviesAPI from "../../api/moviesAPI";
import MoviesList from "../../components/moviesList/MoviesList";
import Notification from "../../components/notification/Notification";
import Loader from "../../components/loader/Loader";

const MoviesPage = ({ history, location }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { query } = getQueryParams(location.search);
    setQuery(query);

    if (query) {
      setLoading(true);
      moviesAPI
        .searchMovies(query)
        .then((movies) => {
          setMovies([...movies.data.results]);
        })
        .catch((error) => setError({ error }))
        .finally(() => setLoading(false));
    }
  }, [location.search]);

  const handleChangeQuery = (query) => {
    query &&
      history.push({
        path: location.pathname,
        search: `query=${query}`,
      });
  };

  return (
    <>
      <Searchbar onSubmit={handleChangeQuery} />
      {error && <Notification message={error.message} />}
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} query={query} />}
      {!movies.length && !loading && query && <p>Sorry, movies not found</p>}
    </>
  );
};

export default MoviesPage;
