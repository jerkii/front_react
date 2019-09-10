import React from 'react';
import { A } from 'hookrouter';

const Tabs = () => {
	return (
		<div className="tab">
			<A href="/home/">List</A>
			<A href="/home/categories"> categories</A>
		</div>
	)
}

export default Tabs;
