import React from "react";
import MoviesListItem from "./moviesListItem/MoviesListItem";
import List from "./MoviesListStyled";
import PropTypes from "prop-types";

const MoviesList = ({movies, query}) => (
  <List>
    {movies.map((movie) => (
      <MoviesListItem key={movie.id} movie={movie} query={query} />
    ))}
  </List>
);

export default MoviesList;


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string
};