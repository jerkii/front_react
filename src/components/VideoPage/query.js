import { gql } from 'apollo-boost';

const GET_VIDEO = gql`
	query Video($videoId: Int!){
		video(id: $videoId){
            id
            title
            link
            duration
        }
	}`;

export default GET_VIDEO;
