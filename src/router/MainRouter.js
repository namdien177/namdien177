import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../components/pages/Home/Home"));
const CVPage = lazy(() => import("../components/pages/CV-page/CV-page"));

const MainRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/namdien177/" component={Home} />
        <Route path="/namdien177/cv-page" component={CVPage} />
      </Switch>
    </Suspense>
  </Router>
);
export default MainRouter;
