import { gql } from 'apollo-boost';

const GET_CATEGORIES = gql`
	{
		categories{
			edges{
				node{
					id
					name
				}
			}
		}
	}`;

export default GET_CATEGORIES;
