import React from 'react';
import { A } from 'hookrouter';

const Tabs = () => {
	return (
		<div className="tab">
			<A href="/">List</A>
			<A href="/categories"> categories</A>
		</div>
	)
}

export default Tabs;
