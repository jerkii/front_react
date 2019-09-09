import React from 'react';
import CategoryVideo from './CategoryVideo';
import ListVideo from './ListVideo';

const Routes = {
	'/': () => <ListVideo/>,
	'/categories': () => <CategoryVideo/>
};

export default Routes;
