import React from 'react';
import './static/styles/default.scss';
import { useRoutes, useRedirect } from 'hookrouter';
import Routes from './routes'

function App() {
	const routeResult = useRoutes(Routes)
	useRedirect('/', '/home');

	return (
		<div className="App">
			{routeResult}
		</div>
	);
}

export default App;
