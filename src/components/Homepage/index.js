import React from 'react';
import { useRoutes } from 'hookrouter';
import Tabs from '../Footer/Tabs';
import Search from '../Header/Search';
import Routes from './routes';

const Homepage = () => {
	const routeResult = useRoutes(Routes);

	return (
		<>
			<Search/>
				{routeResult}
			<Tabs/>
		</>
	)
}

export default Homepage;
