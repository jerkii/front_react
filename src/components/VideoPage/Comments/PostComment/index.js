import React, { useState } from 'react';
import POST_COMMENT from './query';
import { useMutation } from '@apollo/react-hooks';

const PostComment = (props) => {
	const [text, setText] = useState('');
	const videoId = props.videoId
	const [postComment] = useMutation(POST_COMMENT);

	const handleSubmit = (e) => {
		e.preventDefault();
		postComment({ variables: { videoId: videoId, text: text } })
		props.updateComments(videoId, text)
	}

	return (
	<>
			<form className='form' onSubmit={(e) => handleSubmit(e)}>
				<input type="text" onChange={(e) => setText(e.target.value)}/>
				<button type="submit">Send</button>
			</form>
		</>
	);
}

export default PostComment;
