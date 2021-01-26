import { Link, useLocation } from "react-router-dom";

const MoviesListItem = ({ movie, query }) => {
  const location = useLocation();
  return (
    <li className="movieListItem">
      <Link className="movieListLink"
        to={{
          pathname: `movies/${movie.id}`,
          state: { from: location.pathname, query },
        }}
      
      >
        <img className="movieListImage"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://dummyimage.com/200x300/b3b3b3/fafafa.jpg&text=photo"
          }
          alt={movie.original_title}
        />
        <p className="movieListTitle">{movie.original_title}</p>
      </Link>
    </li>
  );
};

export default MoviesListItem;
