import React, {useState} from 'react';
import POST_COMMENT from './query';
import { useMutation } from '@apollo/react-hooks';


const PostComment = (id) => {

    const [text, setText] = useState('');
    const videoId = id.videoId
    const [ postComment, { data } ] = useMutation(POST_COMMENT);

    const handleSubmit = (e) => {
        e.preventDefault();
        postComment({ variables: { videoId:videoId, text:text }})
    }
    
	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" onChange={(e) => setText(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
		</>
	);
}

export default PostComment;
