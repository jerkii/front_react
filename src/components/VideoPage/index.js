import React from 'react';
import GET_VIDEO from './query';
import { useQuery } from '@apollo/react-hooks';

const VideoPage = ({ id }) => {
	const videoId = id.id
	const { loading, error, data } = useQuery(GET_VIDEO, {
		variables: { videoId }
	});

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<React.Fragment>
			<p>{data.video.title}</p>;
		</React.Fragment>
	);
}

export default VideoPage;
