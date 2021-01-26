import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "26b71eee369aa44be782fd693eb2348d";

const trendingMovies = () => {
  return axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
};

const searchMovies = (query) => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
};

const getMovieDetails = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
};

const getMovieCredits = (id) => {
  return axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
};

const getMovieReviews = (id) => {
  return axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};

 const moviesApi = {
  trendingMovies,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
export default moviesApi