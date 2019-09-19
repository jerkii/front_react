import { gql } from 'apollo-boost';

const POST_COMMENT = gql`
	mutation createComment($videoId: Int!, $text:String!){
		createComment(text:$text videoId:$videoId){
            comment{
                text
                videoId
            }
        }
	}`;

export default POST_COMMENT;
