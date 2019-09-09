import React from 'react';
import './static/styles/default.scss';
import { useRoutes } from 'hookrouter';
import Routes from './routes'

function App() {
	const routeResult = useRoutes(Routes)

	return (
		<div className="App">
			{routeResult}
		</div>
	);
}

export default App;
