import { gql } from 'apollo-boost';

const GET_VIDEO = gql`
	query Video($videoId: Int!){
		video(id: $videoId){
            id
            title
            link
            duration
            comments{
                id
                text
            }
        }
	}`;

export default GET_VIDEO;
