import { lazy } from "react";

const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() =>
      import("../pages/home/Home" /* webpackChunkName: "HomePage"*/)
    ),
  },
  {
    path: "/movies",
    name: "Movies",
    exact: true,
    component: lazy(() =>
      import("../pages/moviesPage/MoviesPage" /* webpackChunkName: "MoviesPage"*/)
    ),
  },
  {
    path: "/movies/:movieId",
    name:  "movieDetails",
    exact: false,
    component: lazy(() =>
      import("../pages/movieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage"*/)
    ),
  },
 
];

export default mainRoutes;