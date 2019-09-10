import React from 'react';
import Homepage from './components/Homepage';
import VideoPage from './components/VideoPage';

const Routes = {
	'/home*': () => <Homepage />,
	'/video/:id': (id) => <VideoPage id={id} />
};

export default Routes;
