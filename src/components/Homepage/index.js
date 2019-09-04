import React from 'react';
import ListVideo from './ListVideo';
import Tabs from '../Footer/Tabs';
import Search from '../Header/Search'

class Homepage extends React.PureComponent {
	render() {
		return (
			<React.Fragment>
				<Search/>
				<Tabs/>
				<ListVideo/>
			</React.Fragment>
		)
	}
}

export default Homepage;
