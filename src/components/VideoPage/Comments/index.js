import React from 'react';
import Skeleton from 'react-loading-skeleton';
import PostComment from './PostComment';

const toggleCommentCssClass = (index) => {
	return index % 2 === 0 ? 'left' : 'right';
}

const Comments = ({ comments, videoId }) => {
	return (
		<>
			<div className="comments">
				<div className="comments-line"></div>
				{comments.map((comment, index) =>
					<p key={comments.id} className={`comments-text__${toggleCommentCssClass(index)}`}>{comment.text || <Skeleton count={3} />}</p>
				)}
				<PostComment videoId={videoId} />
			</div>
		</>
	);
}

export default Comments;
