import React from 'react';
import GET_VIDEO from './query';
import { useQuery } from '@apollo/react-hooks';
import Comments from './Comments'
import Skeleton from 'react-loading-skeleton';

const VideoPage = ({ id }) => {
	const videoId = id.id
	const { loading, error, data } = useQuery(GET_VIDEO, {
		variables: { videoId }
	});

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<>
			<div className="player">

			</div>
			<h1 className="videoTitle">{ data.video.title || <Skeleton count={2}/>}</h1>;
			<div className="separator"></div>
			<Comments comments={data.video.comments}/>
		</>
	);
}

export default VideoPage;