import React from 'react';
import GET_VIDEOS from './query';
import { useQuery } from '@apollo/react-hooks';

function Videos({ onVideoSelected }) {
	const { loading, error, data } = useQuery(GET_VIDEOS);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<div>
			{data.videos.edges.map(video => (
				<div key={video.node.id}>
					<div className="video">
						<p className="video-title">{video.node.title}</p>
						<span className="video-duration">{video.node.duration}</span>
					</div>
					<div className="separator"></div>
				</div>
			))};
		</div>
	);
}
export default Videos;
