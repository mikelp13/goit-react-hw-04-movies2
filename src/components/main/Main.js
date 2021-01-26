import React, { Suspense } from "react";
import { Switch, Route} from "react-router-dom";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";
import mainRoutes from "../../routes/mainRoutes";
import Loader from "../loader/Loader"

const Main = () => (
  <main>
    <Suspense fallback={<Loader />}>
      <Switch>
        {mainRoutes.map(({ path, exact, component }) => (
          <Route path={path} exact={exact} key={path} component={component} />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </main>
);

export default Main;

/* <Route path="/" exact component={Home} />
<Route path="/movies" exact component={MoviesPage} />
<Route path="/movies/:movieId" component={MovieDetailsPage} /> */

