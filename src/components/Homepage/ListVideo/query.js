import { gql } from 'apollo-boost';

const GET_VIDEOS = gql`
	{
		videos{
			edges{
				node{
					id
					title
					link
					duration
				}
			}
		}
	}`;

export default GET_VIDEOS;
