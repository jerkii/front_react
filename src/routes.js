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
