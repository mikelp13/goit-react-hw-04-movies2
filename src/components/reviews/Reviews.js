import React, { useEffect, useState } from "react";
import moviesAPI from "../../api/moviesAPI";
import Loader from "../loader/Loader";
import Notification from "../notification/Notification";
import ReviewsList from "./ReviewsStyle";

const Reviews = ({ match }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = match.params;

  useEffect(() => {
    setLoading(true);
    moviesAPI
      .getMovieReviews(movieId)
      .then(({ data }) => {
        setReviews([...data.results]);
      })
      .catch((error) => setError({ error }))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {error && <Notification message={error.message} />}
      {loading && <Loader />}
      {reviews.length > 0 && (
        <ReviewsList>
          {reviews.map((review) => (
            <li key={review.id} className="reviewsListItem">
              <h3 className="reviewsTitle">Author: {review.author}</h3>
              <p className="reviewsDescr">{review.content}</p>
            </li>
          ))}
        </ReviewsList>
      )}
      {!reviews.length && !loading && <p> Sorry, reviews not found</p>}
    </>
  );
};

export default Reviews;
