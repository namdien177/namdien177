import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Home = lazy(() => import('../components/pages/Home/Home'));
const Projects = lazy(() => import('../components/pages/projects/Projects'));

const MainRouter = () => (
	<Router>
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/projects" component={Projects}/>
			</Switch>
		</Suspense>
	</Router>
)
export default MainRouter;
