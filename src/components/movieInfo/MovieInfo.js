import React from "react";
import { MovieContainer } from "./MovieInfoStyled";
import PropTypes from "prop-types";

const MovieInfo = ({ movie }) => (
  <MovieContainer>
    <img className="moviePoster"
      src={
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "https://dummyimage.com/200x300/b3b3b3/fafafa.jpg&text=photo"
      }
      alt={movie.original_title} width="300"
    />
    <div className="movieInfoContainer">
     
        <h2 className="movieTitle">{movie.original_title}</h2>
        <p className="movieRelease">release date: {movie.release_date}</p>
  
      <p className="movieRate">
        <span className="movieRateItem">IMDb</span>&#160;
        {`${movie.vote_average}/${movie.vote_count}`}
      </p>
      <h3 className="movieInfoTitle">Overview</h3>
      <p className="movieInfo">{movie.overview}</p>
      <h3 className="movieInfoTitle">Genres</h3>
      <p className="movieInfo" >{movie.genres.map((genre) => genre.name).join(" ")}</p>
    </div>
  </MovieContainer>
);

export default MovieInfo;

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};