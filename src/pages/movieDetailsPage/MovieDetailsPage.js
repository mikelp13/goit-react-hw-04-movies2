import React, { useState, useEffect, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import moviesAPI from "../../api/moviesAPI";
import movieDetailsRoutes from "../../routes/movieDetailsRoutes";
import MovieInfo from "../../components/movieInfo/MovieInfo";
import Loader from "../../components/loader/Loader";
import MovieAdditionalInfo from "../../components/movieAdditionalInfo/MovieAdditionalInfo";
import Notification from "../../components/notification/Notification";

const MovieDetailsPage = ({ match, location, history }) => {
  const [movie, setMovie] = useState(null);
  const [params, setParams] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setParams({ ...location.state }); //from, query
  }, []);

  useEffect(() => {
    setLoading(true);
    moviesAPI
      .getMovieDetails(match.params.movieId)
      .then((movie) => {
        setMovie({ ...movie.data });
      })
      .catch((error) => setError({ error }))
      .finally(() => setLoading(false));
  }, [match.params.movieId, location.state]);

  const handleGoBack = () => {
    const { from, query } = params;
    query
      ? history.push({ pathname: from, search: `query=${query}` })
      : history.push("/");
  };

  return (
    <div>
      {loading && <Loader />}
      <button type="button" onClick={handleGoBack}>
        &#10094; Go back
      </button>
      {error && <Notification message={error.message} />}
      {movie && (
        <>
          <MovieInfo movie={movie} />
          <MovieAdditionalInfo match={match} />
          <Suspense fallback={<Loader />}>
            <Switch>
              {movieDetailsRoutes.map(({ path, component }) => (
                <Route
                  path={`${match.path}${path}`}
                  component={component}
                  key={path}
                />
              ))}
            </Switch>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
