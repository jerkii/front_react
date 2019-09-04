import React from 'react';
import ListVideo from './ListVideo';
import Tabs from '../Footer/Tabs';

class Homepage extends React.PureComponent {
	render() {
		return (
			<React.Fragment>
				<Tabs/>
				<ListVideo/>
			</React.Fragment>
		)
	}
}

export default Homepage;
