import { lazy } from "react";

const movieDetailsRoutes = [
  {
    path: "/cast",
    name: "Cast",
    exact: false,
    component: lazy(() =>
      import("../components/cast/Cast" /* webpackChunkName: "Cast"*/)
    ),
  },
  {
    path: "/reviews",
    name: "Reviews",
    exact: false,
    component: lazy(() =>
      import("../components/reviews/Reviews" /* webpackChunkName: "Reviews"*/)
    ),
  },
];

export default movieDetailsRoutes;