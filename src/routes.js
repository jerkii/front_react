<<<<<<< HEAD
import React from 'react';
import Homepage from './components/Homepage';

const Routes = {
	'*': () => <Homepage />
};

export default Routes;
=======
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Homepage from './components/Homepage';
import Videos from './components/Homepage/ListVideo/video';

export default function Routes () {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Homepage}/>
				<Route path="/video" component={Videos}/>
			</div>
		</Router>
	)
}
>>>>>>> 482a91c... external route file and define home as root /
