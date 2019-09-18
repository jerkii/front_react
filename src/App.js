import React from 'react';
import './static/styles/default.scss';
import { useRoutes, useRedirect } from 'hookrouter';
import Routes from './routes'
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
	const routeResult = useRoutes(Routes)
	useRedirect('/', '/home');

	return (
		<div className="App">
			<SkeletonTheme color="#c9c9c9" highlightColor="#F1EFF1">
				{routeResult}
			</SkeletonTheme>
		</div>
	);
}

export default App;
