import { gql } from 'apollo-boost';

const GET_VIDEOS = gql`
	{
		videos{
			id
			title
			duration
		}
	}`;

export default GET_VIDEOS;
