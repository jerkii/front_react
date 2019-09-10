import React from 'react';
import GET_CATEGORIES from './query';
import { useQuery } from '@apollo/react-hooks';

function Categories({ onCategorySelected }) {
	const { loading, error, data } = useQuery(GET_CATEGORIES);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<>
			{data.categories.map(category => (
				<div key={category.id}>
					<p>{category.name}</p>
				</div>
			))};
		</>
	);
}
export default Categories;
