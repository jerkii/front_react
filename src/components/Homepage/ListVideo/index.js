import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ListVideo extends React.PureComponent {
	render() {
		return (
			<Router>
				<a><Link to="/video">Videos</Link></a>
			</Router>
		)
	}
}

export default ListVideo;
