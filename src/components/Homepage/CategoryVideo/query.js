import { gql } from 'apollo-boost';

const GET_CATEGORIES = gql`
	{
		categories{
			id
			name
		}
	}`;

export default GET_CATEGORIES;
