import React, { useEffect, useState } from "react";
import moviesAPI from "../../api/moviesAPI";
import Loader from "../loader/Loader";
import Notification from "../notification/Notification";
import CastList from "./castList/CastList";

const Cast = ({ match }) => {
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = match.params;

  useEffect(() => {
    setLoading(true);
    moviesAPI
      .getMovieCredits(movieId)
      .then(({ data }) => {
        setCredits([...data.cast]);
      })
      .catch((error) => setError({ error }))
      .finally(() =>setLoading(false));
  }, [movieId]);

  return (
    <>
      {error && <Notification message={error.message} />}
      {loading && <Loader />}
      {credits.length > 0 && <CastList credits={credits} />}
      {!credits.length && !loading && <p>Sorry, movie cast not found</p>}
    </>
  );
};
export default Cast;
