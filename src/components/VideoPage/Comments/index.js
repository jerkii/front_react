import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import PostComment from './PostComment';

const toggleCommentCssClass = (index) => {
	return index % 2 === 0 ? 'left' : 'right';
}

const Comments = ({ comments, videoId }) => {
	const [comment, setComment] = useState({ id: 0, text: '' })

	const updateComments = (videoId, text) => {
		setComment({ id: videoId, text: text })
		comments.push(comment)
	}

	return (
		<>
			<div className="comments">
				<div className="comments-line"></div>
				{comments.map((comment, index) =>
					<p key={comments.id} className={`comments-text__${toggleCommentCssClass(index)}`}>{comment.text || <Skeleton count={3} />}</p>
				)}
				<PostComment videoId={videoId} updateComments={updateComments}/>
			</div>
		</>
	);
}

export default Comments;
